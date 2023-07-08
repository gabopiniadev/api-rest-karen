import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/NavBar"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import PokeTable  from "./pages/ViewAll";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PokeTable />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;