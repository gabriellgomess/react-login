import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MyContextProvider, { MyContext } from './contexts/MyContext';
import Home from './components/Home';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';

function WithAuthentication({ children }) {
  const { rootState } = useContext(MyContext);
  const { isAuth } = rootState;
  return isAuth ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <MyContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<WithAuthentication><Main /></WithAuthentication>} />
        <Route path="/dashboard" element={<WithAuthentication><Dashboard /></WithAuthentication>} />
      </Routes>
    </MyContextProvider>
  );
}

export default App;
