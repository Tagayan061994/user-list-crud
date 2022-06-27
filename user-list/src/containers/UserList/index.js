import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as Styled from "styled-components";
import { DataTable } from "../../components/Table";
import { selectUserData } from "../../redux/globals/selectors";
import { fetchUserData, setSelectedUserIds } from "../../redux/globals";

const UserList = ({ fetchUserData, userData, setSelectedUserIds }) => {
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Styled.UserListContainer>
      <Styled.UserListTitle>UserList</Styled.UserListTitle>
      <DataTable userData={userData} selectedItemsAction={setSelectedUserIds} />
    </Styled.UserListContainer>
  );
};

const mapStateToProps = (state: TStore) => ({
  userData: selectUserData(state),
});

export default connect(mapStateToProps, {
  fetchUserData,
  setSelectedUserIds,
})(UserList);
