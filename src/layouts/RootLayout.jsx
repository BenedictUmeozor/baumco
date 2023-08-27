import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <main className="main-element">
      <div>
        <Header />
      </div>
      <section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default RootLayout;
