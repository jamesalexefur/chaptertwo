import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { ContactPage } from "./pages/ContactPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "onboarding", Component: OnboardingPage },
      { path: "contact", Component: ContactPage },
      { path: "confirmation", Component: ConfirmationPage },
    ],
  },
]);
