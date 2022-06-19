// @flow
import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ApiErrorPopup from "components/api-error-popup";
import Community from "./containers/Community/index";
import UserProfile from "./containers/UserProfile/index.js";
import UserList from "./containers/UserList/index.js";
import MainHeader from "./containers/Header/index";
import * as Styled from "./styled";

const App = () => {
  return (
    <Styled.AppContainer>
      <MainHeader />
      {/* <ApiErrorPopup /> */}
      <Routes>
        <Route path="/userList" element={<UserList />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Styled.AppContainer>
  );
};

export default App;
