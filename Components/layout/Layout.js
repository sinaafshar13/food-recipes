import Header from "../modules/Header";
import Footer from "../modules/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}

export default Layout;