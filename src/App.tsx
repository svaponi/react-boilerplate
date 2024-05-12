import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppStateProvider } from "./state/AppStateProvider.tsx";
import Home from "./routes/Home.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <AppStateProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppStateProvider>
    </BrowserRouter>
  );
}
