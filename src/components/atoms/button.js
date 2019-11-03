import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Button = ({ type, children, history, actionHandler, to, ...rest }) => {
  function getColor() {
    if (type === "primary") {
      return ["#487eb0", "#40739e", "white"];
    }

    if (type === "danger") {
      return ["#e84118", "#c23616", "white"];
    }

    return ["#f5f6fa", "#dcdde1", "#353b48"];
  }

  const StyledButton = styled.a`
    font-weight: 600;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    line-height: 1.2;
    height: 1.5rem;
    min-width: 1.75rem;
    font-size: 0.85rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-color: ${getColor()[0]};
    color: ${getColor()[2]};
    margin-left: 0.3rem;
    border-radius: 0.25rem;
    transition: all 250ms ease 0s;
    text-decoration: none;

    &:hover {
      background-color: ${getColor()[1]};
    }
  `;

  if (to) {
    return (
      <StyledButton onClick={() => history.push(to)} {...rest}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={actionHandler} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "default", // primary, danger, default
  actionHandler: () => console.log("Action Handler")
};

export default withRouter(Button);
