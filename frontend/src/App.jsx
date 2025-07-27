import { useEffect, useState } from "react";
import "./App.css";
import {
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit,
} from "react-router";
export async function appLoader({ request }) {
  const session = localStorage.getItem("user_session");
  console.log(session);
  if (session == null) {
    return redirect("login");
  }
  return JSON.parse(session);
}
export async function appAction({ request }) {
  const session = localStorage.getItem("user_session");
  if (session == null) {
    return redirect("login");
  }
}
function App() {
  const { username } = useLoaderData();
  const [optionsActive, setOptionsActive] = useState(false);
  const navigate = useNavigate();
  const submit = useSubmit()
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/feed");
    }
  }, []);
  const activeTab = location.pathname
  const switchTab = (e) => {
    const tabName = e.target.dataset.tabname;
    navigate(tabName);
  };
  const logout = () => {
    localStorage.removeItem("user_session");
    submit("/feed");
  };
  return (
    <div
      className="wrapper app"
      onClick={() => setOptionsActive((prev) => false)}
    >
      <header className="app-header">
        <div className="brand">
          <img src="./public/logo.png" />
          <h1>
            KittyKards <span>Kollect</span>
          </h1>
        </div>
        <nav className="nav">
          <span>{username}</span>
          <img src="./src/assets/avatar.png" alt="" />
          <i className="fa fa-regular fa-bell-o" aria-hidden="true"></i>
          <i
            className="fa fa-solid fa-bars options"
            onClick={(e) => {
              e.stopPropagation();
              setOptionsActive((prev) => true);
            }}
          >
            <div className={optionsActive ? "options-active" : ""}>
              <span>Profile</span>
              <span>Friends</span>
              <span onClick={logout}>Logout</span>
            </div>
          </i>
        </nav>
      </header>
      <div className="content">
        <nav className="tabs">
          <div
            className={activeTab === "/feed" ? "active" : ""}
            data-tabname="feed"
            onClick={switchTab}
          >
            📷Feed
          </div>
          <div
            className={activeTab === "/collection" ? "active" : ""}
            data-tabname="collection"
            onClick={switchTab}
          >
            🐾Collection
          </div>
          <div
            className={activeTab === "/store" ? "active" : ""}
            data-tabname="store"
            onClick={switchTab}
          >
            🐱Pet Store
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
