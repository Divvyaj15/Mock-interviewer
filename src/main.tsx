
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.tsx';
import './index.css';

const PUBLISHABLE_KEY = "pk_test_dG9nZXRoZXItcGFudGhlci03NS5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const root = createRoot(document.getElementById("root")!);

root.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>
);
