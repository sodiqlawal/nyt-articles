import Layout from "components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Details from "pages/Details";

const AppRoute = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/*" element={<Details />}>
            <Route path=":id" element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </Layout>
  );
};

export default AppRoute;
