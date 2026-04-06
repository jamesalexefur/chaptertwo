export const ONBOARDING_STORAGE_KEY = 'chaptertwo-onboarding';

export type OnboardingAnswer = {
  question: string;
  answer: string;
};

export type OnboardingPayload = {
  answers: OnboardingAnswer[];
};

export function saveOnboardingPayload(payload: OnboardingPayload) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(payload));
}

export function loadOnboardingPayload(): OnboardingPayload | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const rawPayload = window.localStorage.getItem(ONBOARDING_STORAGE_KEY);
  if (!rawPayload) {
    return null;
  }

  try {
    return JSON.parse(rawPayload) as OnboardingPayload;
  } catch {
    return null;
  }
}

export function clearOnboardingPayload() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(ONBOARDING_STORAGE_KEY);
}

export function formatOnboardingSummary(payload: OnboardingPayload | null) {
  if (!payload?.answers.length) {
    return '';
  }

  return payload.answers
    .map(({ question, answer }) => `${question}: ${answer}`)
    .join('\n');
}
