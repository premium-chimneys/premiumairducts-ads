import Script from 'next/script'
import TrackingCapture from '@/components/TrackingCapture'
import './globals.css'

export const metadata = {
  title: 'Premium Air Ducts',
  description: 'Professional air duct services',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  icons: {
    apple: '/webclip.png',
  },
  verification: {
    google: '51dAetmHAT8n_2vVe6YqPxlTYLoEQjlZnVbzPB1ECSk',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KDH5PM9S');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <Script
          id="gtag-loader"
          src="https://www.googletagmanager.com/gtag/js?id=G-4VN1ZE8BNW"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4VN1ZE8BNW');`,
          }}
        />
        {/* End Google tag */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
        <Script
          id="calendly-widget"
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Script
          id="elfsight-platform"
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />
<Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "sa99g7wtlu");`}
        </Script>

        <Script id="wc-init" strategy="afterInteractive">
          {`var $wc_load=function(a){return JSON.parse(JSON.stringify(a))},$wc_leads=$wc_leads||{doc:{url:$wc_load(document.URL),ref:$wc_load(document.referrer),search:$wc_load(location.search),hash:$wc_load(location.hash)}};`}
        </Script>
        <Script
          id="wc-loader"
          src="https://s.ksrndkehqnwntyxlhgto.com/140244.js"
          strategy="afterInteractive"
        />

        <Script id="chatling-config" strategy="afterInteractive">
          {`window.chtlConfig = { chatbotId: "7441393689", customAttributes: { page_url: window.location.href } };`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDH5PM9S"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <TrackingCapture />
        {children}

        <Script
          id="chatling-embed-script"
          src="https://chatling.ai/js/embed.js"
          strategy="afterInteractive"
          data-id="7441393689"
        />
      </body>
    </html>
  )
}
