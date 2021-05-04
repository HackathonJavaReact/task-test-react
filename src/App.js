import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Account from "./components/Account";
import Home from "./components/Home";

import { removeToken } from "./service/token";
import { isAuthenticated } from "./service/authentication";
import { loggingOut } from "./service/logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    loggingOut();
    isAuthenticated().then((response) => setIsAuth(response.data));
  };

  useEffect(() => {
    isAuthenticated().then((response) => setIsAuth(response.data));
  });

  if (!isAuth) {
    return <Account setIsLoggedIn={setIsLoggedIn} setIsAuth={setIsAuth} />;
  }

  return (
    <div className="container-fluid pt-2">
      <button className="btn btn-primary mr-2" onClick={handleLogout}>
        Log Out
      </button>
      <Home isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
