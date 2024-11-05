import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { ArticlePage, CreateArticlePage, DetailArticlePage, HomePage, LoginPage } from "./pages";
import { SideBar } from "./components/sidebar";
import PrivateRoute from "./components/privateRoute";

function App() {
  const location = useLocation();
  const excludePathsWithoutSidebar = [/^\/login$/i];
  const isSidebarExcluded = excludePathsWithoutSidebar.some((pattern) =>
    pattern.test(location.pathname)
  );

  return (
    <>
      {isSidebarExcluded ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      ) : (
        <SideBar>
          <Routes>
            <Route path="/" element={<PrivateRoute Component={HomePage} />} />
            <Route path="/dashboard" element={<PrivateRoute Component={HomePage} />} />
            <Route path="/berita" element={<PrivateRoute Component={ArticlePage} /> } />
            <Route path="/berita/:id" element={<PrivateRoute Component={DetailArticlePage} /> } />
            <Route path="/tambah-berita" element={ <PrivateRoute Component={CreateArticlePage} /> } />
          </Routes>
        </SideBar>
      )}
    </>
  );
}

export default App;
