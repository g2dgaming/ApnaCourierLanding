import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import PublicLayout from "./pages/landing/_components/PublicLayout.tsx";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/about/page.tsx";
import PricingPage from "./pages/pricing/page.tsx";
import ServicesPage from "./pages/services/page.tsx";
import ContactPage from "./pages/contact/page.tsx";
import TrackPage from "./pages/track/page.tsx";
import AgentsPage from "./pages/agents/page.tsx";
import BlogPage from "./pages/blog/page.tsx";
import BlogPostPage from "./pages/blog/post/page.tsx";
import AdminBlogPage from "./pages/admin/blog/page.tsx";
import NewBlogPostPage from "./pages/admin/blog/new/page.tsx";
import EditBlogPostPage from "./pages/admin/blog/edit/page.tsx";
import CourierAggregatorIndia from "./pages/seo/courier-aggregator-india/page.tsx";
import EcommerceShippingSolutions from "./pages/seo/ecommerce-shipping-solutions/page.tsx";
import BulkShippingPlatform from "./pages/seo/bulk-shipping-platform/page.tsx";
import CodManagementSystem from "./pages/seo/cod-management-system/page.tsx";
import DelhiveryIntegration from "./pages/seo/delhivery-integration/page.tsx";
import LogisticsForSmeIndia from "./pages/seo/logistics-for-sme-india/page.tsx";
import EcommerceCourierServices from "./pages/seo/ecommerce-courier-services/page.tsx";
import ShopifyShippingIndia from "./pages/seo/shopify-shipping-india/page.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          {/* Auth callback - outside layout */}
          <Route path="/auth/callback" element={<AuthCallback />} />

          {/* Admin routes */}
          <Route path="/admin/blog" element={<AdminBlogPage />} />
          <Route path="/admin/blog/new" element={<NewBlogPostPage />} />
          <Route path="/admin/blog/:id/edit" element={<EditBlogPostPage />} />

          {/* All public pages share Navbar + Footer via layout */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/track" element={<TrackPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* SEO landing pages */}
            <Route path="/courier-aggregator-india" element={<CourierAggregatorIndia />} />
            <Route path="/ecommerce-shipping-solutions" element={<EcommerceShippingSolutions />} />
            <Route path="/bulk-shipping-platform" element={<BulkShippingPlatform />} />
            <Route path="/cod-management-system" element={<CodManagementSystem />} />
            <Route path="/delhivery-integration" element={<DelhiveryIntegration />} />
            <Route path="/logistics-for-sme-india" element={<LogisticsForSmeIndia />} />
            <Route path="/ecommerce-courier-services" element={<EcommerceCourierServices />} />
            <Route path="/shopify-shipping-india" element={<ShopifyShippingIndia />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
