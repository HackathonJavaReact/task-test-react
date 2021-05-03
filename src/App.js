import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Account from "./components/Account";
import Home from "./components/Home";

import { removeToken } from "./service/token";
import { forgotPassword } from "./service/task";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [retrieve, setRetrieve] = useState();

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

  if (!isLoggedIn) {
    return <Account setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={handleLogout}>
        Log Out
      </button>
      <button className="btn btn-warning" onClick={handleRetrievePassword}>
        Récupère password
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
