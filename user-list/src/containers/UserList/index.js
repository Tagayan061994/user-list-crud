import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DataTable } from "../../components/Table";
import { fetchUserData } from "../../redux/globals";

const UserList = ({ fetchUserData }) => {
  useEffect(() => {
    if ("isAccountFetched") {
      fetchUserData();
    }
  }, []);

  return (
    <div>
      <h1>UserList</h1>
      <DataTable />
    </div>
  );
};

const mapStateToProps = (state: TStore) => ({
  //   isAccountFetched: getIsAccountFetched(state),
  //   isStorageFetched: getIsStorageDataFetched(state),
  //   isSubscriptionFetched: getIsSubscriptionsFetched(state),
});

export default connect(mapStateToProps, {
  fetchUserData,
})(UserList);
