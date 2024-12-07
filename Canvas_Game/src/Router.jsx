import React, { createContext, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./LoginPage";
import AuthPage from "./auth";

import AssignmentsPage from "./AssignmentsPage"

import {
  Dashboard,
  // Team,
  // Invoices,
  // Contacts,
  // Form,
  // Bar,
  // Line,
  // Pie,
  // FAQ,
  // Geography,
  // Calendar,
  // Stream,
} from "./scenes";
import UserProfile from "./scenes/userProfile";
// import { user } from './data/mockProfileData';
import ConnectCanvas from './ConnectCanvas';
import GamePage from './GamePage'

import Store from './Store'

import HelpPage from "./scenes/help";

// Create AuthContext
const AuthContext = createContext();

// Custom hook for easy access to Context
export const useAuth = () => useContext(AuthContext);

const AppRouter = () => {
  const [isSignedIn, setIsSignIn] = useState(false); // data base, local browser storage.
  const [userEmail, setUserEmail] = useState(null);

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignIn, userEmail, setUserEmail  }}>
    <Router>
      <Routes>
      <Route path="/" element={isSignedIn? <App email={userEmail}/> : <AuthPage/>}>
        {/* <Route path="/" element={<App />}> */}
          <Route path="/" element={<Dashboard email={userEmail}/>} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/userProfile" element={<UserProfile email={userEmail} />} />
          <Route path="/game" element={<GamePage/>}/>
          <Route path="/store" element={<Store/>}/>
        
          <Route path="/help" element={<HelpPage />} />

          <Route path="/ConnectCanvas" element={<ConnectCanvas/>}/>

          <Route path="/AssignmentsPage" element={<AssignmentsPage></AssignmentsPage>}/>
        </Route>
      </Routes>
    </Router>
    </AuthContext.Provider>
  );
};

export default AppRouter;
