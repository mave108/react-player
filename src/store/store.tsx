import React, { FC } from 'react';
import { initialState, InitialStateTypes } from './initials-state';
import { playerReducer } from './reducers';

const Store = React.createContext<{ state: InitialStateTypes; dispatch: React.Dispatch<any> }>({
  state: initialState,
  dispatch: () => null,
});
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(playerReducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
