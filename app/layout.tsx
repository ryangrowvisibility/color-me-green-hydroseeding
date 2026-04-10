import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Color Me Green Hydroseeding | 27 Years in Fresno & Central Valley",
  description:
    "Professional hydroseeding, erosion control, and slope stabilization by Brett Reinke — 27 years of expertise. CA Contractor License #1033250 & #975046. BBB A+. Serving Fresno and the Central Valley.",
  openGraph: {
    title: "Color Me Green Hydroseeding | Central Valley's Hydroseeding Expert",
    description:
      "27 years of hydroseeding and erosion control expertise. CA Licensed #1033250. Serving Fresno and the Central Valley. Call (559) 217-4703.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Color Me Green Hydroseeding",
              alternateName: "CMG Hydroseeding, Inc.",
              description: "Professional hydroseeding, erosion control, slope stabilization, and drill seeding services. 27 years in the Central Valley.",
              telephone: "(559) 217-4703",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6500 W Rialto Ave",
                addressLocality: "Fresno",
                addressRegion: "CA",
                postalCode: "93723",
                addressCountry: "US",
              },
              url: "https://color-me-green-hydroseeding.vercel.app",
              sameAs: ["https://www.yelp.com/biz/color-me-green-hydroseeding-fresno-2"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "2",
                bestRating: "5",
              },
              areaServed: { "@type": "State", name: "California" },
              foundingDate: "1998",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
