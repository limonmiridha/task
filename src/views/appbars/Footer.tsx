import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section */}
        <p className="text-sm text-gray-600">
          All rights reserved © 2024 | Drukland.de
        </p>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2 md:mt-0">
          <Link href="/terms" className="text-sm text-gray-600 hover:underline">
            Terms of Use
          </Link>
          <Link
            href="/sitemap"
            className="text-sm text-gray-600 hover:underline"
          >
            Sitemap
          </Link>
          <Link
            href="/company-info"
            className="text-sm text-gray-600 hover:underline"
          >
            Company Information
          </Link>
          <Link
            href="/cookie-settings"
            className="text-sm text-gray-600 hover:underline"
          >
            Cookie Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
