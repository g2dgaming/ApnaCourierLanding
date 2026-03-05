import { AuthProvider } from "./auth.tsx";
import { ConvexProvider } from "./convex.tsx";
import { QueryClientProvider } from "./query-client.tsx";
import { ThemeProvider } from "./theme.tsx";
import { Toaster } from "../ui/sonner.tsx";
import { TooltipProvider } from "../ui/tooltip.tsx";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd.tsx";

export function DefaultProviders({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <AuthProvider>
        <ConvexProvider>
          <QueryClientProvider>
            <TooltipProvider>
              <ThemeProvider>
                <Toaster />
                {/* Global structured data on every page */}
                <OrganizationJsonLd />
                <WebSiteJsonLd />
                {children}
              </ThemeProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </ConvexProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}
