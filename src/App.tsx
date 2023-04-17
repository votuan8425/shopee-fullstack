import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactPage from "./pages/contact";
import Login from "./pages/login";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import { Layout } from 'antd';
import Register from "./pages/regiester";

const LayoutApp = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutApp />,
      errorElement: <div>404 Not Found</div>,
      children: [
        { index: true, element: <Home /> },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
