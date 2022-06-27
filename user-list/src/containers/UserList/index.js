import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DataTable } from "../../components/Table";
import { selectUserData } from "../../redux/globals/selectors";
import { fetchUserData, setSelectedUserIds } from "../../redux/globals";

const UserList = ({ fetchUserData, userData, setSelectedUserIds }) => {
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>UserList</h1>
      <DataTable userData={userData} selectedItemsAction={setSelectedUserIds} />
    </div>
  );
};

const mapStateToProps = (state: TStore) => ({
  userData: selectUserData(state),
});

export default connect(mapStateToProps, {
  fetchUserData,
  setSelectedUserIds,
})(UserList);
