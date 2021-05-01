import { useState } from "react";
import { register, login, isUserLoggedIn } from "../service/authentication";

import Form from "./Form";

function Account({ setIsLoggedIn }) {
  const [signinState, setSigninState] = useState({
    signinUsername: "",
    signinPassword: "",
  });

  const [loginState, setLoginState] = useState({
    loginUsername: "",
    loginPassword: "",
  });

  const handleChangeSignin = (e) => {
    const { id, value } = e.target;
    setSigninState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleChangeLogin = (e) => {
    const { id, value } = e.target;
    setLoginState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitSignin = (e) => {
    e.preventDefault();
    const { signinUsername, signinPassword } = signinState;
    register(signinUsername, signinPassword)
      .then((token) => {
        alert(`Success, your token is: ${token}`);
        setIsLoggedIn(isUserLoggedIn());
      })
      .catch((error) => {
        alert(`Sorry, there was an error`);
      });
    console.log(e);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const { loginUsername, loginPassword } = loginState;
    login(loginUsername, loginPassword)
      .then((token) => {
        alert(`Success, your token is: ${token}`);
        setIsLoggedIn(isUserLoggedIn());
      })
      .catch((error) => {
        alert(`Sorry, there was an error`);
      });
    console.log(e);
  };

  const signSpec = {
    header: "Sign In",
    userId: Object.keys(signinState)[0],
    state: signinState,
    passId: Object.keys(signinState)[1],
    btnValue: "Créer un compte",
  };

  const logSpec = {
    header: "Log In",
    userId: Object.keys(loginState)[0],
    state: loginState,
    passId: Object.keys(loginState)[1],
    btnValue: "Se connecter",
  };

  return (
    <div className="container">
      <div className="row">
        <Form
          spec={signSpec}
          handleChange={handleChangeSignin}
          handleSubmit={handleSubmitSignin}
        />
        <Form
          spec={logSpec}
          handleChange={handleChangeLogin}
          handleSubmit={handleSubmitLogin}
        />
      </div>
    </div>
  );
}
export default Account;
