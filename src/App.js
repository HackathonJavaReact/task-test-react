import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Account from "./components/Account";
import Home from "./components/Home";

import { removeToken } from "./service/token";
import { isAuthenticated } from "./service/authentication";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    isAuthenticated().then((response) => setIsAuth(response.data));
  });

  if (!isAuth) {
    return <Account setIsLoggedIn={setIsLoggedIn} setIsAuth={setIsAuth} />;
  }

  return (
    <div className="container-fluid pt-2">
      <button className="btn btn-primary mr-2" onClick={handleLogout} disabled>
        Log Out
      </button>
      <Home isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
