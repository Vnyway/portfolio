import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header, Background } from "./components";
import { Home, Projects } from "./pages";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const App = () => {
  return (
    <>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
