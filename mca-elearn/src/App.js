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
      <Route index element={<UserDashboard />} />
      <Route path="/Notes" element={<Notes />} />
      <Route>
        <Route path="Sem1"></Route>
        <Route path="Sem2"></Route>
        <Route path="Sem3"></Route>
        <Route path="Sem4"></Route>
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
