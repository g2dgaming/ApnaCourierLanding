import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

/**
 * Shared layout for all public-facing pages.
 * Edit Navbar or Footer once here and it updates everywhere.
 */
export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
