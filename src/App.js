import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Account from "./components/Account";
import Home from "./components/Home";

import { removeToken } from "./service/token";
import { forgotPassword } from "./service/task";
import { isAuthenticated } from "./service/authentication";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [retrieve, setRetrieve] = useState();
  const [isAuth, setIsAuth] = useState(false);

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  const handleRetrievePassword = () => {
    forgotPassword().then((response) => {
      const { username, password } = response;
      setRetrieve({
        username,
        password,
      });
    });
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
      <button className="btn btn-warning" onClick={handleRetrievePassword}>
        TODO : MyTasks
      </button>
      {retrieve && (
        <p>
          <b>username : </b>
          {retrieve.username}
          <b>, password : </b>
          {retrieve.password}
        </p>
      )}
      <Home isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
