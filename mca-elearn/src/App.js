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
import Subjects from "./Notes/Subjects";

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<UserDashboard />} />
      <Route path="/Notes" element={<Notes />} />
      <Route path="/Subjects/:semester" element={<Subjects />} />
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
