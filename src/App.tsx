import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./routes/Routes"

const App = () => {
  return (
      <RouterProvider router={createBrowserRouter(routes)} />
  )
}

export default App