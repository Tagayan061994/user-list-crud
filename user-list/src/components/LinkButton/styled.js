import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ color }) => (color ? color : "#6219ee")}; /* Green */
  border: none;
  color: white;
  padding: 6px 22px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  text-align: center;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #6439ee;
    color: white;
  }
  & > a {
    text-decoration: none;
    border: none;
    color: white;
  }
`;
