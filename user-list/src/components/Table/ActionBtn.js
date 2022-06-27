import React from "react";
import { connect } from "react-redux";
import { LinkButton } from "../LinkButton";
import { fetchUserDataById } from "../../redux/globals";

const FetchProfileActionBtn = ({ fetchUserDataById, userId }) => {
  return (
    <LinkButton
      text={"profile"}
      linkUrl={"/userProfile"}
      action={() => fetchUserDataById(userId)}
    />
  );
};

export default connect(null, {
  fetchUserDataById,
})(FetchProfileActionBtn);
