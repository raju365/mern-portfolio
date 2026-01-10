import Home from "./pages/Home";
import Cursor from "./components/Cursor";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";

const App = () => {
  return (
    <Layout>
      <Cursor />
      <PageTransition>
        <Home />
      </PageTransition>
    </Layout>
  );
};

export default App;
