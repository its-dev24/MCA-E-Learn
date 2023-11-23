import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import UserDashboard from "./user_dashboard/UserDashboard";

import RootLayout from "./RootLayout/RootLayout";
import Subjects from "./Notes/Subjects";
import Semester from "./Notes/Semester";
import Module from "./Notes/Modules";

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<UserDashboard />} />
      <Route path="/Semester" element={<Semester />} />
      <Route path="/Subjects/:semester" element={<Subjects />} />
      <Route path="/Modules" element={<Module />} />
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
