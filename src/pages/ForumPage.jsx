import { Fragment } from "react";
import { HomeIcon } from "../assets/icons";
import Category from "../components/Category";
import Helmet from "react-helmet";

const ForumPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Bauco | Forum</title>
      </Helmet>
      <section>
        <div className="container grid md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg uppercase font-bold tracking-wider text-gray-600 order-2">
                Forums
              </h2>
              <HomeIcon className="w-5 text-emerald-500 order-1" />
            </div>

            <div>
              <Category category="General" />
              <Category category="Embedded" />
              <Category category="Power" />
              <Category category="Analog" />
              <Category category="IOT" />
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default ForumPage;
