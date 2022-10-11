//USERS CONTEXT GLOBALLY AVIALABLE
import { useAuth0 } from "@auth0/auth0-react";

import { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [adventures, setAdventures] = useState([]);
  const [load, setLoad] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      fetch(`/api/get-users/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCurrentUser(data.data);
        });
    }
  }, [user]);
  console.log(currentUser);
  return (
    <CurrentUserContext.Provider
      value={{ currentUser, adventures, setAdventures, load, setLoad }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
