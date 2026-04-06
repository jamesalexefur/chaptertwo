
  # Website for ChapterTwo Service

  This is a code bundle for Website for ChapterTwo Service. The original project is available at https://www.figma.com/design/XgEWzaFuA2VTQG3x0irNbR/Website-for-ChapterTwo-Service.

  ## Running the code

  Run `npm i` to install the dependencies.

  The project includes a ready-to-use `.env` file with the current Zoho form URL and core field mappings.

  Run `npm run dev` to start the frontend and the local Zoho proxy together.

  The site will be available at `http://localhost:5173/`.

  Optional Zoho environment variables:

  - `ZOHO_FORM_ACTION_URL`
  - `ZOHO_FIELD_NAME`
  - `ZOHO_FIELD_FIRST_NAME`
  - `ZOHO_FIELD_LAST_NAME`
  - `ZOHO_FIELD_EMAIL`
  - `ZOHO_FIELD_PHONE`
  - `ZOHO_FIELD_PHONE_COUNTRY_CODE`
  - `ZOHO_FIELD_PHONE_COUNTRY_ISO_CODE`
  - `ZOHO_FIELD_ONBOARDING_SUMMARY`
  - `ZOHO_FIELD_ONBOARDING_Q1`
  - `ZOHO_FIELD_ONBOARDING_Q2`
  - `ZOHO_FIELD_ONBOARDING_Q3`
  - `ZOHO_FIELD_ONBOARDING_Q4`

  If your Zoho form has extra fields for the onboarding quiz, put their Zoho field names into the onboarding variables above and the proxy will send them automatically.
  
