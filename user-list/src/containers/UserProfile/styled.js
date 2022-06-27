import styled from "styled-components";

export const UserProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
`;

export const UserProfileFirstSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AvatarWrapper = styled.div`
  width: 150px;
  height: 150px;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserProfileSecondSection = styled.div``;
export const UserInfoList = styled.ul``;

export const UserListItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  & > span {
    font-size: 18px;
    font-weight: 600;
  }
`;
