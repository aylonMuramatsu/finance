import styled from "styled-components";
import AppConfig from "../../system/app.config";
export const Header = styled.header`
  grid-area: header;
  background-color: ${AppConfig.theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const HeaderSearch = styled.div`
  width: 100%;
`;

export const HeaderAvatar = styled.div`
  box-sizing: border-box;
  padding: 15px;
  margin: 2px;
  width: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderSearchInput = styled.input``;

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  background-image: url("${(props) => props.src}");
  background-size: contain;
  border: 2px solid ${AppConfig.theme.secondaryColor};
  border-radius: 100%;
  margin-left: 15px;
`;
