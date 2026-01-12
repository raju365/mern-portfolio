import Home from "./pages/Home";
import Cursor from "./components/Cursor";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { AnimatePresence } from "motion/react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <Layout key="app">
          <Cursor />
          <PageTransition>
            <Home />
          </PageTransition>
        </Layout>
      )}
    </AnimatePresence>
  );
};

export default App;
