import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import UserDashboard from "./user_dashboard/UserDashboard";
import Notes from "./Notes/Notes";
import RootLayout from "./RootLayout/RootLayout";

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<UserDashboard />} />
      <Route path="/Notes" element={<Notes />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
