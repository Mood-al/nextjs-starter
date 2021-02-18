import Footer from "../compos/layout/Footer";
import NavBar from "../compos/layout/NavBar";
import "../styles/globals.css";
import "../styles/bootstrap.min.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
