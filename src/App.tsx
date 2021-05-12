import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  StaticWebAuthLogins,
  UserInfoContextProvider,
  useUserInfo,
} from "@aaronpowell/react-static-web-apps-auth";

const AuthStuff = () => {
  const userInfo = useUserInfo();

  if (userInfo.identityProvider) {
    return <p>Welcome {userInfo.userDetails}</p>;
  }

  return (
    <>
      <StaticWebAuthLogins
        azureAD={false}
        github={false}
        twitter={false}
        customProviders={[{ id: "auth0", name: "Auth0" }]}
      />
    </>
  );
};

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/get-message?name=Static Web Apps")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);
  return (
    <UserInfoContextProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {message && <p>{message}</p>}
          <AuthStuff />
        </header>
      </div>
    </UserInfoContextProvider>
  );
}

export default App;
