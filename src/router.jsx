import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Construction = lazy(() => import("./pages/Construction"));
const RootLayout = lazy(() => import("./layouts/RootLayout"));

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
      <Route path="*" element={<Construction />} />
    </Route>
  )
);

export default router;
