import styled from "styled-components";
import appConfig from "../../system/app.config";

export const Menu = styled.ul`
  margin-top: 30px;
`;

export const MenuItem = styled.li`
  box-sizing: border-box;
  padding: 10px 25px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  transition: all 0.5s;
  align-items: center;
  display: flex;
  & svg {
    font-size: 1.4rem;
  }
  &:hover {
    transition: all 0.5s;

    cursor: pointer;
    background-color: ${appConfig.theme.grey2};
    border-radius: 20px 0 0 20px;
    margin-left: 2rem;

    /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25); */
    color: ${appConfig.theme.secondaryColor};
  }
`;
