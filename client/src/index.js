import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import CurrentUserProvider from "./CurrentUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT}
      redirectUri={window.location.origin}
    >
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
