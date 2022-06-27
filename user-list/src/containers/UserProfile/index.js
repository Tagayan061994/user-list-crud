import React from "react";
import { connect } from "react-redux";
import * as Styled from "./styled";
import { selectUserProfileData } from "../../redux/globals/selectors";

const UserProfile = ({ userProfileData }) => {
  const {
    id,
    type,
    name,
    location,
    repos_url,
    created_at,
    avatar_url,
    site_admin,
    subscriptions_url,
  } = userProfileData;

  return (
    <Styled.UserProfileContainer>
      <Styled.UserProfileFirstSection>
        <Styled.AvatarWrapper>
          <img src={avatar_url} />
        </Styled.AvatarWrapper>
        <Styled.UserInfoWrapper>
          <Styled.UserInfoList>
            <Styled.UserListItem>
              <span>Name</span> : {name}
            </Styled.UserListItem>
            <Styled.UserListItem>
              <span>Id</span> : {id}
            </Styled.UserListItem>
            <Styled.UserListItem>
              <span>User Type</span>: {type}
            </Styled.UserListItem>
            <Styled.UserListItem>
              <span>Site Admin</span>: {site_admin}
            </Styled.UserListItem>
            <Styled.UserListItem>
              <span>User location</span>: {location}
            </Styled.UserListItem>
          </Styled.UserInfoList>
        </Styled.UserInfoWrapper>
      </Styled.UserProfileFirstSection>
      <Styled.UserProfileFirstSection>
        <h1>user profile subscriptions and repos urls</h1>
        <span>Created at {created_at}</span>
        <a href={repos_url} target="_blank">
          Repos url
        </a>
        <a href={subscriptions_url} target="_blank">
          Subscriptions Url
        </a>
      </Styled.UserProfileFirstSection>
    </Styled.UserProfileContainer>
  );
};

const mapStateToProps = (state) => ({
  userProfileData: selectUserProfileData(state),
});

export default connect(mapStateToProps, {})(UserProfile);
