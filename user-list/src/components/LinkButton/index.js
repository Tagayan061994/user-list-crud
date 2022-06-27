import React from "react";
import { Button } from "./styled";
import { NavLink } from "react-router-dom";

export const LinkButton = ({ linkUrl, text, action, color }) => {
  return (
    <Button color={color}>
      <NavLink to={linkUrl} onClick={action}>
        {text}
      </NavLink>
    </Button>
  );
};
