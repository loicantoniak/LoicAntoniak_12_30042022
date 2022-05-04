import React from "react";
import Navigation from "./pages/Navigation";
import LoadingProvider from "./lib/context/loadingContext"

function App() {
  return (
    <LoadingProvider>
      <Navigation />
    </LoadingProvider>
  );
}

export default App;
