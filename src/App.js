import "./App.css";
import { NavLink, Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import User from "./components/User";
import Error404 from "./components/Error404";


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink
              activeStyle={{ backgroundColor: "black", color: "white" }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ backgroundColor: "black", color: "white" }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ backgroundColor: "black", color: "white" }}
              to="/users"
            >
              <span>Users</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="users/user/:id" element={<User />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
