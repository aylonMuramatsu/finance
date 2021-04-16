import styled from "styled-components";
import appConfig from "../../system/app.config";

export const Table = styled.table`
  table-layout: auto;
  width: 100%;
  & thead {
    border-bottom: 2px solid rgba(0, 0, 0, 0.25);

    & th {
      color: ${appConfig.theme.primaryColor};
      padding: 5px 5px;
      box-sizing: border-box;
      text-align: left;
      font-weight: 600;
      font-size: 1.1.em;
    }
  }
  & tbody {
    & tr td {
      color: ${appConfig.theme.secondaryColor};
      font-size: 1.1em;
      padding: 10px 5px;
      text-align: left;
    }
  }
`;
