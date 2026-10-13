import "@/lib/i18n";
import { Toaster } from "sonner";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/Home";

export default function App() {
  return (
    <ErrorBoundary>
      <Toaster position="top-center" richColors />
      <Home />
    </ErrorBoundary>
  );
}
