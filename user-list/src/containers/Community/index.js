import React from "react";
import * as Styled from "./styled";
import { connect } from "react-redux";
import { DataTable } from "../../components/Table";
import { getSelectedUserFromUserList } from "../../redux/globals/selectors";

const Community = ({ selectedUsers }) => {
  return (
    <Styled.CommunityContainer>
      <Styled.CommunityTitle>
        Community from Selected Users
      </Styled.CommunityTitle>
      <DataTable userData={selectedUsers} isCheckboxSelection={false} />
    </Styled.CommunityContainer>
  );
};

const mapStateToProps = (state: TStore) => ({
  selectedUsers: getSelectedUserFromUserList(state),
});

export default connect(mapStateToProps, {})(Community);
