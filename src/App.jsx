import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header, Background, Footer, CopiedToast } from "./components";
import { Home, Projects } from "./pages";
import { useCopy } from "./context/CopyContext";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  const { copied } = useCopy();
  return (
    <>
      <Background />
      <CopiedToast
        show={copied}
        message={copied === 1 ? "Email copied!" : "Mobile phone copied!"}
      />
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
