import React, { Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import AppContextProvider from "./Context/AppContext";
import ViewLoading from "./Components/Views/ViewLoading";
import Navigation from "./Components/Navigation";
import ErrorBoundary from "./Components/ErrorBoundary";
import ScrollToTop from "./utils/ScrollToTop";
import theme from "./theme/theme";
import ViewColorContextProvider from "./Context/ViewColorContext";

const ViewLandingPage = lazy(() =>
  import("./Components/Views/ViewLandingPage")
);

const ViewCase = lazy(() => import("./Components/Views/ViewCase"));

const ViewCases = lazy(() => import("./Components/Views/ViewCases"));

const ViewAboutMe = lazy(() => import("./Components/Views/ViewAboutMe"));

const ViewContact = lazy(() => import("./Components/Views/ViewContact"));

const ViewTest = lazy(() => import("./Components/Views/ViewTest"));

const ViewPageNotFound = lazy(() =>
  import("./Components/Views/ViewPageNotFound")
);

// TODO: (later) animatePrecense not having an effect AFAIK
function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <AppContextProvider>
          <ViewColorContextProvider>
            <Navigation />
            <Suspense fallback={<ViewLoading />}>
              <ScrollToTop />
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={ViewLandingPage} />
                  <Route exact path="/cases" component={ViewCases} />
                  <Route exact path="/cases/:id" component={ViewCase} />
                  <Route exact path="/about" component={ViewAboutMe} />
                  <Route exact path="/contact" component={ViewContact} />
                  <Route exact path="/test" component={ViewTest} />
                  <Route exact path="/loading" component={ViewLoading} />
                  <Route exact path="*" component={ViewPageNotFound} />
                </Switch>
              </AnimatePresence>
            </Suspense>
          </ViewColorContextProvider>
        </AppContextProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
