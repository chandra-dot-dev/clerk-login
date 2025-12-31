import React from "react";
import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const App = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">CLERK LOGIN</div>
        <div >
          <SignedOut>
            <SignInButton className="auth-btn"/>
          </SignedOut>
          <SignedIn>
            <UserButton className="auth-btn" />
          </SignedIn>
        </div>
      </header>
      <div className="clerk-section">
        <h1 className="clerk-text">Login & Signup using CLERK</h1>
      </div>
    </div>
  );
};

export default App;
