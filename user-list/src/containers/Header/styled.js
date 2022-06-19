import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 60px;
  background-color: rgb(98, 25, 238);
  width: 100%;
  display: flex;
  padding: 10px 30px;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #eaeaea;
  & > * {
    width: 500px;
  }
`;

export const HeaderNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-link {
    padding: 10px;
    &.isActive {
      position: relative;
      &:after {
        content: "";
        height: 3px;
        width: 100px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: white;
      }
    }
  }
`;

export const LogoImg = styled.img`
  display: flex;
  height: 100%;
`;

export const UserDropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
`;

export const UserName = styled.p`
  margin: 0 3px;
`;
