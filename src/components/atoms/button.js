import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Button = ({ type, children, ...rest }) => {
  function getColor() {
    if (type === "primary") {
      return ["#487eb0", "#40739e", "white"];
    }

    if (type === "danger") {
      return ["#e84118", "#c23616", "white"];
    }

    return ["#f5f6fa", "#dcdde1", "#353b48"];
  }

  const StyledButton = styled(NavLink)`
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    line-height: 1.2;
    height: 2rem;
    min-width: 2rem;
    font-size: 0.875rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-color: ${getColor()[0]};
    color: ${getColor()[2]};
    margin-right: 1rem;
    border-radius: 0.25rem;
    transition: all 250ms ease 0s;
    outline: none;
    text-decoration: none;

    &:hover {
      background-color: ${getColor()[1]};
    }
  `;

  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.defaultProps = {
  type: "default" // primary, danger, default
};

export default Button;
