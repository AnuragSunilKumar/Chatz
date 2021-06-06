import React from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

const CurrentRoomContext = createContext();

export const CurrentRoomProvider = ({ children, data }) => {
  return (
    <CurrentRoomProvider.Provider value={data}>
      {children}
    </CurrentRoomProvider.Provider>
  );
};

export const useCurrentRoom = selector =>
  useContextSelector(CurrentRoomContext, selector);
