import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/index";

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
