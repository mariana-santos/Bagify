import React, { createContext, useState } from 'react';

export const UserContext = createContext();

import { USER_MOCK } from '../mock';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(USER_MOCK);

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};
