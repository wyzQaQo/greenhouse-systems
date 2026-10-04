import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { buildOrganizationSchema, buildWebSiteSchema, renderJSONLD, buildFAQSchema } from "@/lib/seo-schema";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERDANT AUTOMATION | Commercial Greenhouse Shading & Drive Systems Manufacturer",
  description:
    "Industrial-grade greenhouse blackout screen motors, rack & pinion drives, roll-up sidewall motors, and climate controllers. CE & UL certified. 500+ commercial greenhouse projects. Changzhou-based manufacturer.",
  keywords: [
    "greenhouse shading system manufacturer",
    "automated greenhouse gear motor",
    "light deprivation greenhouse kits",
    "greenhouse roll up motor wholesale",
    "24V DC internal blackout screen motor for commercial greenhouse",
    "commercial greenhouse drive systems",
    "greenhouse ventilation motor supplier",
    "greenhouse gear motor wholesale price",
  ],
  openGraph: {
    title: "VERDANT AUTOMATION | Commercial Greenhouse Shading & Drive Systems",
    description:
      "Precision-engineered gear motors, blackout screen systems, and climate control automation for next-generation commercial greenhouses. CE & UL certified.",
    type: "website",
    siteName: "VERDANT AUTOMATION",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.verdant-automation.com",
  },
};

const orgSchema = buildOrganizationSchema({
  name: "VERDANT AUTOMATION",
  url: "https://www.verdant-automation.com",
  description:
    "Manufacturer of commercial greenhouse shading systems, blackout screen motors, gear motors, and climate automation solutions. Based in Changzhou — the global greenhouse components manufacturing hub.",
  telephone: "+86-519-8888-0000",
  email: "inquiry@verdant-automation.com",
  address: {
    streetAddress: "No. 168, Taihu East Road",
    addressLocality: "Changzhou",
    addressRegion: "Jiangsu",
    postalCode: "213000",
    addressCountry: "CN",
  },
});

const websiteSchema = buildWebSiteSchema(
  "https://www.verdant-automation.com",
  "VERDANT AUTOMATION",
  "https://www.verdant-automation.com/search?q={search_term_string}"
);

const generalFAQSchema = buildFAQSchema([
  {
    question: "What type of motor do I need for a commercial greenhouse blackout screen?",
    answer: "For commercial greenhouse blackout (light deprivation) systems, we recommend our 24V DC internal tubular motors with 60NM torque. These motors feature IP65 waterproof rating, anti-condensation heating elements, and MODBUS RS485 communication for integration with climate controllers. For larger installations (over 50 meters), our 3-phase 200NM rack & pinion gear motors provide the necessary power with continuous S1 duty rating.",
  },
  {
    question: "How do I calculate the torque requirement for my greenhouse shading motor?",
    answer: "Torque requirement depends on screen width, weight per square meter, and the drive mechanism. As a general guideline: blackout screens (200-300g/m2) in a 50m greenhouse typically require 50-80NM for roll-up systems and 150-200NM for rack & pinion drives. Our engineering team performs detailed calculations based on your specific greenhouse dimensions — contact us with your project specifications for a free consultation.",
  },
  {
    question: "Are your greenhouse motors certified for North American and European markets?",
    answer: "Yes. All VERDANT motors carry CE certification for the European market and UL listing for North America. Our products comply with RoHS directives and are tested by TUV Rheinland. We provide full documentation packages including Declaration of Conformity, test reports, and material certifications with every shipment.",
  },
  {
    question: "What is the typical lead time for greenhouse shading systems?",
    answer: "Standard motors and screen systems ship within 15-25 days. Custom torque/speed configurations require 48-hour engineering review. Large project orders for commercial greenhouse facilities ship FCL from Shanghai/Ningbo with average 25-day door-to-door to US West Coast. We offer DDP terms for full container loads.",
  },
  {
    question: "Can VERDANT motors integrate with my existing greenhouse climate controller?",
    answer: "Yes. Our motors support MODBUS RS485 protocol, 0-10V analog control, and dry contact relay inputs — compatible with major climate controllers including Priva, Hoogendoorn, Ridder, and Argus. For custom integrations, our engineering team can provide protocol documentation and wiring diagrams.",
  },
]);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJSONLD(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJSONLD(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJSONLD(generalFAQSchema) }} />
      </head>
      <body className="bg-[#0A1A0F] text-[#E8F5E9] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
