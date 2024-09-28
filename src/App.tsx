import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import HomePage from "./HomeScreen";
import SleepHistory from "./SleepHistory";
import TodaysSleep from "./TodaysSleep";
import PersonalizedTips from "./PersonalizedTips";
import { GlobalStyle, HeaderContainer, NavBar, NavButton } from './styles';

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_dG9wcy1qYXZlbGluLTg3LmNsZXJrLmFjY291bnRzLmRldiQ">
      <GlobalStyle />
      <Router>
        <SignedOut>
          {/* Redirect to Clerk's built-in SignIn component */}
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/sign-in" replace />} /> {/* Redirect all other routes to sign-in if signed out */}
          </Routes>
        </SignedOut>

        <SignedIn>
          <HeaderContainer>
            <UserButton />
            <NavBar>
              <NavButton to="/home" end>Home</NavButton>
              <NavButton to="/sleep-history">Sleep History</NavButton>
              <NavButton to="/todays-sleep">Today's Sleep</NavButton>
              <NavButton to="/personalized-tips">Personalized Tips</NavButton>
            </NavBar>
          </HeaderContainer>

          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/sleep-history" element={<SleepHistory />} />
            <Route path="/todays-sleep" element={<TodaysSleep />} />
            <Route path="/personalized-tips" element={<PersonalizedTips />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </SignedIn>
      </Router>
    </ClerkProvider>
  );
}
