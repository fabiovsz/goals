import "../src/styles/globals.css";
import { ChallengeProvider } from "../src/contexts/ChallengeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  );
}

export default MyApp;
