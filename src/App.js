import { useState } from "react";
import "./App.css";
import ContactPage from "./components/contact-page";
import Header from "./components/header";
import LoginPage from "./components/login-page";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? (
        <ContactPage />
      ) : (
        <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
