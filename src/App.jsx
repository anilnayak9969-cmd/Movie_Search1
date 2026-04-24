import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import MovieInfo from "./components/MovieInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movie/:id", element: <MovieInfo /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;