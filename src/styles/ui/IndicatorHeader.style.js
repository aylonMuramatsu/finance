import styled from "styled-components";
import appConfig from "../../system/app.config";

export const IndicatorHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-basis: 100%;
  flex-wrap: wrap;
`;

export const IndicatorTitle = styled.h3`
  margin: 3px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  flex-basis: 100%;
  padding: 5px 0px;
  font-size: 1.2em;
  color: ${appConfig.theme.secondaryColor};
`;
