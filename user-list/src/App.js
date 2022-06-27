// @flow
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from "./containers/Community/index";
import UserProfile from "./containers/UserProfile/index.js";
import UserList from "./containers/UserList/index.js";
import MainHeader from "./containers/Header/index";
import * as Styled from "./styled";

const App = () => {
  return (
    <Styled.AppContainer>
      <MainHeader />
      <Routes>
        <Route exact path="userList" element={<UserList />} />
        <Route exact path="userProfile" element={<UserProfile />} />
        <Route exact path="community" element={<Community />} />
      </Routes>
    </Styled.AppContainer>
  );
};

export default App;
