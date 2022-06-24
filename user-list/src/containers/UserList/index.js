import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DataTable } from "../../components/Table";
import { fetchUserData } from "../../redux/globals";
import { selectUserData } from "../../redux/globals/selectors";

const UserList = ({ fetchUserData, userData }) => {
  useEffect(() => {
    if ("isAccountFetched") {
      fetchUserData();
    }
  }, []);

  return (
    <div>
      <h1>UserList</h1>
      <DataTable userData={userData} />
    </div>
  );
};

const mapStateToProps = (state: TStore) => ({
  userData: selectUserData(state),
});

export default connect(mapStateToProps, {
  fetchUserData,
})(UserList);
