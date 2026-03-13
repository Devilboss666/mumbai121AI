import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Mumbai121 | Free Jobs for Freshers & PwBD in Mumbai Startups',
  description: 'Connect fresh graduates and PwBD with Small companies and Startups in Mumbai.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* PWA */}
        <link rel="manifest" href="/mumbai121AI/manifest.json" />
        <meta name="theme-color" content="#4CAF50" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mumbai121" />
        <link rel="apple-touch-icon" href="/mumbai121AI/images/icon-192.png" />
      </head>
      <body style={{ fontFamily: "'Roboto', 'Poppins', sans-serif" }}>

        {children}

        {/* Sienna Accessibility Plugin */}
        <Script
          src="https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js"
          strategy="afterInteractive"
        />

        {/* Service Worker */}
        <Script
          id="service-worker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/mumbai121AI/service-worker.js')
                    .then(reg => {
                      console.log('SW registered:', reg.scope)
                      reg.update()
                    })
                    .catch(err => console.log('SW failed:', err))
                })
              }
            `,
          }}
        />

        {/* Botpress Chatbot */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2026/02/09/12/20260209122847-D7RILG8S.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  )
}