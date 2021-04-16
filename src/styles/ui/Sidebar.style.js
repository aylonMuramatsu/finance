import styled from "styled-components";
import appConfig from "../../system/app.config.js";
import AppConfig from "../../system/app.config.js";
export const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: ${AppConfig.theme.primaryColor};
  box-sizing: border-box;
  box-shadow: 0px 0px 8px -0.2px rgb(0, 0, 0, 0.25);
  z-index: 1;

  ${({ minimal = false }) =>
    minimal
      ? `
    & header h3 {
      display:none;
    }
    
    & ul li {
      padding: 0;
      padding-top:5px;
      padding-bottom:5px;
      margin-left:5px;
      margin-bottom:10px;
      box-sizing: border-box;
      & svg {
        font-size:2em;
      }
      &:hover{
        padding-left:5px;
        min-width:150px;
        margin-left:0;
        background-color: ${appConfig.theme.grey2};
        border-radius:20px;
        box-shadow: 0px 0px 10px rgba(0,0,0,.5);
      }
      &:hover span{
        display:block;
      }
    }
    & ul li span {
      display:none;
      position:absolute;
      left:40px;

    }
  
  `
      : ``}
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* box-shadow: 0px 0px 8px -0.2px rgb(0, 0, 0, 0.25); */
  height: 50px;
`;

export const HeaderTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 0.9em;
  font-weight: bold;
  color: #fff;
`;
export const HeaderLogo = styled.img`
  max-height: 45px;
`;

export const HeaderMenuBar = styled.div`
  width: 35px;
  height: 35px;
  padding: 5px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5px;
  box-sizing: border-box;
  transition: color 0.3s;

  &:hover {
    transition: color 0.3s;
    border: 2px solid ${appConfig.theme.secondaryColor};
    border-radius: 100%;
    & svg {
      color: ${appConfig.theme.secondaryColor};
    }
  }
  & svg {
    color: #fff;
    font-size: 1.4rem;
    text-align: center;
  }
`;
