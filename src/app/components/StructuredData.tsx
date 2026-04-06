import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'localBusiness';
}

export function StructuredData({ type }: StructuredDataProps) {
  useEffect(() => {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';

    let structuredData: any = {};

    if (type === 'organization') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ChapterTwo',
        description: 'Companion matching service for seniors aged 60-85. Connect with caring companions by phone.',
        url: 'https://chaptertwo.com',
        logo: 'https://chaptertwo.com/logo.png',
        foundingDate: '2023',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4800 Montgomery Lane, Suite 400',
          addressLocality: 'Bethesda',
          addressRegion: 'MD',
          postalCode: '20814',
          addressCountry: 'US',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '878882492',
          contactType: 'Customer Service',
          areaServed: 'US',
          availableLanguage: 'English',
        },
        sameAs: [],
      };
    } else if (type === 'service') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Senior Companion Service',
        provider: {
          '@type': 'Organization',
          name: 'ChapterTwo',
          telephone: '878882492',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        audience: {
          '@type': 'PeopleAudience',
          suggestedMinAge: 60,
          suggestedMaxAge: 85,
        },
        description:
          'Phone-based companion matching service for seniors. Connect with caring companions who understand your chapter of life. 100% free, private, and safe.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      };
    }

    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type]);

  return null;
}
