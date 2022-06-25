import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./styled";

export const LinkButton = ({ linkUrl, text, action }) => {
  return (
    <Button onclick={action}>
      <Link to={linkUrl}>{text}</Link>
    </Button>
  );
};
