import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Construction = lazy(() => import("./pages/Construction"));
const RootLayout = lazy(() => import("./layouts/RootLayout"));
const IndexPage = lazy(() => import("./pages/IndexPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<Loader />}>
          <RootLayout />
        </Suspense>
      }
    >
      <Route index element={<IndexPage />} />
      <Route path="*" element={<Construction />} />
    </Route>
  )
);

export default router;
