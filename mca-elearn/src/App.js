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
import Contributions from "./Notes/Contributions";
import Notes from "./Notes/Notes";
import AdminLayout from "./Admin/AdminLayout/AdminLayout";
import AdminLogin from "./Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import AdminNotes from "./Admin/AdminNotes/AdminNotes";
import AdminNotification from "./Admin/AdminNotification/AdminNotification";

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="/Semester" element={<Semester />} />
        <Route path="/Subjects/:semester" element={<Subjects />} />
        <Route path="/Modules/:semester/:subjectCode" element={<Module />} />
        <Route
          path="/Notes/:semester/:subjectCode/:module"
          element={<Notes />}
        />
        <Route path="/Contributions" element={<Contributions />} />
      </Route>
      <Route path="/adminhome" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="/adminhome/adminNotes" element={<AdminNotes />} />
        <Route
          path="/adminhome/adminNotification"
          element={<AdminNotification />}
        />
      </Route>
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
