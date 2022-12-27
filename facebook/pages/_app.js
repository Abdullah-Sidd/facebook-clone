// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   return (
//     <Provider session={pageProps.session}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// export default MyApp;


import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}