import React, { createContext, useMemo, useState } from 'react';

export const CurrentUserContext = createContext();

function CurrentUserProvider({ children }) {
  const [user, setUser] = useState({});

  const userValue = useMemo(
    () => ({
      user,
      setUser
    }),
    [user]
  );

  return <CurrentUserContext.Provider value={userValue}>{children}</CurrentUserContext.Provider>;
}

export default CurrentUserProvider;
