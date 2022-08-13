import React, { FC } from 'react';
import { initialState } from './initials-state';

const Store = React.createContext(initialState);
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Store.Provider>{children}</Store.Provider>;
};
