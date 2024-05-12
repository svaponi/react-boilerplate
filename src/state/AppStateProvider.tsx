import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { AppState } from "./AppState.tsx";

const apiUrl = import.meta.env.VITE_API_URL;

export const AppStateProvider = ({ children }: PropsWithChildren) => {
  const [appState, setAppState] = useState<AppState>();

  useEffect(() => {
    setAppState({ apiUrl });
  }, []);

  return (
    <AppStateContext.Provider value={appState}>
      {children}
    </AppStateContext.Provider>
  );
};

const AppStateContext = createContext<AppState | undefined>(undefined);

export function useAppState(): AppState {
  const ctx = useContext(AppStateContext);
  if (ctx === undefined) throw Error("Invalid use of useAppState()");
  return ctx;
}
