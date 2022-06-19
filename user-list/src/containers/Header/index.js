import React from "react";
import * as Styled from "./styled.js";
// import { Icon } from "@mui/material";
import { NavLink } from "react-router-dom";
// import LoginIcon from "@mui/icons-material/Login";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MainHeader = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderNavigationWrapper>
        <NavLink
          activeclassname="isActive"
          className="header-link"
          to="/userList"
        >
          UserList
        </NavLink>
        <NavLink
          activeclassname="isActive"
          className="header-link"
          to="/userProfile"
        >
          UserProfile
        </NavLink>
        <NavLink
          activeclassname="isActive"
          className="header-link"
          to="/community"
        >
          Community
        </NavLink>
      </Styled.HeaderNavigationWrapper>
      {/* <Styled.UserDropdownWrapper>
        <Icon>
          <AccountCircleIcon />
        </Icon>
        <Styled.UserName size="small" color="white" weight="500">
          user@renderforest.com
        </Styled.UserName>
        <a style={{ marginLeft: 20 }} href="/">
          <Icon>
            <LoginIcon />
          </Icon>
        </a>
      </Styled.UserDropdownWrapper> */}
    </Styled.HeaderContainer>
  );
};

export default MainHeader;
