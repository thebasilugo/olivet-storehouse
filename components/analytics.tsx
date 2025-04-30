// "use client"

// import { usePathname, useSearchParams } from "next/navigation"
// import Script from "next/script"
// import { useEffect } from "react"

// export default function Analytics() {
//   const pathname = usePathname()
//   const searchParams = useSearchParams()

//   useEffect(() => {
//     if (pathname && window.gtag) {
//       // Track page views
//       window.gtag("config", "G-MEASUREMENT_ID", {
//         page_path: pathname,
//       })

//       // You can add custom events here
//       window.gtag("event", "page_view", {
//         page_title: document.title,
//         page_location: window.location.href,
//         page_path: pathname,
//       })
//     }
//   }, [pathname, searchParams])

//   return (
//     <>
//       {/* Google Analytics */}
//       <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID`} />
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-MEASUREMENT_ID', {
//               page_path: window.location.pathname,
//             });
//           `,
//         }}
//       />
//     </>
//   )
// }
