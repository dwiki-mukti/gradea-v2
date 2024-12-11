'use client'

import { useContext } from 'react';

import { createContext, Dispatch, SetStateAction } from 'react';

interface SidebarContextProps {
    UserAuthed: typeUserAuthed;
    setUserAuthed: Dispatch<SetStateAction<typeUserAuthed>>;
    StatusCode: number;
    setStatusCode: Dispatch<SetStateAction<number>>;
}
export const GlobalContext = createContext<SidebarContextProps>({} as SidebarContextProps);

export function useGlobalContext() {
    return useContext(GlobalContext);
}