import React, { useMemo } from "react";
import * as Styled from "./styled.js";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSelectedUserFromUserList } from "../../redux/globals/selectors";

const MainHeader = ({ selectedUsers }) => {
  const isSelectedUser = useMemo(() => selectedUsers.length > 0, [
    selectedUsers.length,
  ]);

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderNavigationWrapper>
        <Styled.MenuItem
          activeclassname="isActive"
          className="header-link"
          to="/userList"
        >
          UserList
        </Styled.MenuItem>
        {isSelectedUser && (
          <Styled.MenuItem
            activeclassname="isActive"
            className="header-link"
            to="/community"
          >
            Community
          </Styled.MenuItem>
        )}
      </Styled.HeaderNavigationWrapper>
    </Styled.HeaderContainer>
  );
};

const mapStateToProps = (state: TStore) => ({
  selectedUsers: getSelectedUserFromUserList(state),
});

export default connect(mapStateToProps, {})(MainHeader);
