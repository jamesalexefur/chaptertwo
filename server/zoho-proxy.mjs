import http from 'node:http';

const PORT = Number(process.env.ZOHO_PROXY_PORT || 8787);
const ZOHO_RECORDS_URL =
  process.env.ZOHO_FORM_ACTION_URL ||
  'https://forms.zohopublic.com/jamesmarieasset1/form/Chaptertwo/formperma/UMYBs-oiUW1lyT1oggYLK_XBZbooAuwcfCTQhWNnOtY/records';

const FIELD_MAP = {
  name: process.env.ZOHO_FIELD_NAME || 'Name',
  firstName: process.env.ZOHO_FIELD_FIRST_NAME || 'Name_First',
  lastName: process.env.ZOHO_FIELD_LAST_NAME || 'Name_Last',
  email: process.env.ZOHO_FIELD_EMAIL || 'Email',
  phone: process.env.ZOHO_FIELD_PHONE || 'PhoneNumber',
  phoneCountryCode: process.env.ZOHO_FIELD_PHONE_COUNTRY_CODE || 'PhoneNumber_country_code',
  phoneCountryIsoCode: process.env.ZOHO_FIELD_PHONE_COUNTRY_ISO_CODE || 'PhoneNumber_country_iso_code',
  onboardingSummary: process.env.ZOHO_FIELD_ONBOARDING_SUMMARY || '',
  onboardingQuestion1: process.env.ZOHO_FIELD_ONBOARDING_Q1 || '',
  onboardingQuestion2: process.env.ZOHO_FIELD_ONBOARDING_Q2 || '',
  onboardingQuestion3: process.env.ZOHO_FIELD_ONBOARDING_Q3 || '',
  onboardingQuestion4: process.env.ZOHO_FIELD_ONBOARDING_Q4 || '',
};

function normalizePhoneNumber(input) {
  const trimmed = String(input || '').trim();
  const hasLeadingPlus = trimmed.startsWith('+');
  const digitsOnly = trimmed.replace(/\D/g, '');

  if (!digitsOnly) {
    return '';
  }

  return hasLeadingPlus ? `+${digitsOnly}` : digitsOnly;
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  });
  response.end(JSON.stringify(payload));
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk.toString();
    });

    request.on('end', () => {
      resolve(body);
    });

    request.on('error', reject);
  });
}

const server = http.createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    sendJson(response, 204, {});
    return;
  }

  if (request.method !== 'POST' || request.url !== '/api/zoho/submit') {
    sendJson(response, 404, { error: 'Not found' });
    return;
  }

  try {
    const rawBody = await readRequestBody(request);
    const payload = JSON.parse(rawBody);
    const { firstName, lastName, email, phone, onboardingAnswers, onboardingSummary } = payload;
    const normalizedPhone = normalizePhoneNumber(phone);

    if (!firstName || !lastName || !email || !normalizedPhone) {
      sendJson(response, 400, { error: 'Missing required fields' });
      return;
    }

    const zohoPayload = {
      [FIELD_MAP.name]: {
        [FIELD_MAP.firstName]: firstName,
        [FIELD_MAP.lastName]: lastName,
      },
      [FIELD_MAP.email]: email,
      [FIELD_MAP.phone]: normalizedPhone,
      [FIELD_MAP.phoneCountryCode]: '',
      [FIELD_MAP.phoneCountryIsoCode]: '',
    };

    if (FIELD_MAP.onboardingSummary && onboardingSummary) {
      zohoPayload[FIELD_MAP.onboardingSummary] = onboardingSummary;
    }

    const answerFieldMap = [
      FIELD_MAP.onboardingQuestion1,
      FIELD_MAP.onboardingQuestion2,
      FIELD_MAP.onboardingQuestion3,
      FIELD_MAP.onboardingQuestion4,
    ];

    if (Array.isArray(onboardingAnswers)) {
      onboardingAnswers.forEach((entry, index) => {
        const fieldName = answerFieldMap[index];
        if (!fieldName || !entry?.answer) {
          return;
        }

        zohoPayload[fieldName] = entry.answer;
      });
    }

    const zohoResponse = await fetch(ZOHO_RECORDS_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/zoho.forms-v1+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zohoPayload),
    });

    const responseText = await zohoResponse.text();

    if (!zohoResponse.ok) {
      sendJson(response, 502, {
        error: 'Zoho submission failed',
        status: zohoResponse.status,
        details: responseText,
      });
      return;
    }

    sendJson(response, 200, { ok: true, details: responseText });
  } catch (error) {
    console.error('Zoho proxy error:', error);
    sendJson(response, 500, { error: 'Unable to submit form' });
  }
});

server.listen(PORT, () => {
  console.log(`Zoho proxy listening on http://localhost:${PORT}`);
});
