export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://shotsbyvidz.com/#business",
        "name": "ShotsByVidz",
        "image": "https://shotsbyvidz.com/images/logo.png", // Replace with actual logo URL if available
        "url": "https://shotsbyvidz.com",
        "telephone": "", // Add if available
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Birmingham",
          "addressCountry": "UK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 52.4862,
          "longitude": -1.8904
        },
        "priceRange": "££",
        "description": "Professional FPV drone pilot and commercial photographer specializing in wedding videos and live events.",
        "sameAs": [
          "https://instagram.com/shotsbyvidz", // Replace with actual social links
          "https://facebook.com/shotsbyvidz"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://shotsbyvidz.com/#person",
        "name": "Shaun",
        "jobTitle": "Photographer & Drone Pilot",
        "url": "https://shotsbyvidz.com/about",
        "sameAs": ["https://shotsbyvidz.com"]
      },
      {
        "@type": "Service",
        "serviceType": "Wedding Videography",
        "provider": {
          "@id": "https://shotsbyvidz.com/#business"
        },
        "areaServed": {
          "@type": "City",
          "name": "Birmingham"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
