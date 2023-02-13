import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import CursorContextProvider from "./Context/CursorContext";
import ViewLoading from "./Components/Views/ViewLoading";
import Nav from "./Components/Nav";
import ErrorBoundary from "./Components/ErrorBoundary";
import theme from "./theme/theme";
import ViewColorContextProvider from "./Context/ViewColorContext";
import SplashAnimationFinishedContextProvider from "./Context/SplashAnimationFinishedContext";
import NavBgColorContextProvider from "./Context/NavBgColorContext";
import MenuExpandedContextProvider from "./Context/MenuExpandedContext";

const ViewLandingPage = lazy(() =>
  import("./Components/Views/ViewLandingPage")
);

const ViewCase = lazy(() => import("./Components/Views/ViewCase"));

const ViewCases = lazy(() => import("./Components/Views/ViewCases"));

const ViewLeadership = lazy(() => import("./Components/Views/ViewLeadership"));

const ViewAboutMe = lazy(() => import("./Components/Views/ViewAboutMe"));

const ViewContact = lazy(() => import("./Components/Views/ViewContact"));

const ViewTest = lazy(() => import("./Components/Views/ViewTest"));

const ViewPageNotFound = lazy(() =>
  import("./Components/Views/ViewPageNotFound")
);

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <SplashAnimationFinishedContextProvider>
          <CursorContextProvider>
            <ViewColorContextProvider>
              <NavBgColorContextProvider>
                <MenuExpandedContextProvider>
                  <Nav />
                  <Suspense fallback={<ViewLoading />}>
                    <AnimatePresence mode="wait">
                      <Routes location={location} key={location.pathname}>
                        <Route exact path="/" element={<ViewLandingPage />} />
                        <Route path="/cases" element={<ViewCases />} />
                        <Route path="/cases/:id" element={<ViewCase />} />
                        <Route
                          path="/leadership"
                          element={<ViewLeadership />}
                        />
                        <Route path="/about" element={<ViewAboutMe />} />
                        <Route path="/contact" element={<ViewContact />} />
                        <Route path="/test" element={<ViewTest />} />
                        <Route path="/loading" element={<ViewLoading />} />
                        <Route path="*" element={<ViewPageNotFound />} />
                      </Routes>
                    </AnimatePresence>
                  </Suspense>
                </MenuExpandedContextProvider>
              </NavBgColorContextProvider>
            </ViewColorContextProvider>
          </CursorContextProvider>
        </SplashAnimationFinishedContextProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
