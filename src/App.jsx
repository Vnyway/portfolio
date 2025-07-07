import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header, Background, Footer, CopiedToast } from "./components";
import { Home, ProjectsPage, About } from "./pages";
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
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
