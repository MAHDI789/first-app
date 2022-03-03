import "../styles/globals.css";
import { AppPovider } from "../context/ContextApi";
function MyApp({ Component, pageProps }) {
  return (
    <AppPovider>
      <Component {...pageProps} />;
    </AppPovider>
  );
}

export default MyApp;
