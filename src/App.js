import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Account from "./components/Account";
import Home from "./components/Home";

import { removeToken } from "./service/token";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Account setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={handleLogout}>
        Log Out
      </button>
      <Home isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
