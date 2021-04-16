import React from "react";
import * as UI from "../styles/ui/Header.style";
import { RiNotification2Line } from "react-icons/ri";
import appConfig from "../system/app.config";
export default function Header() {
  return (
    <UI.Header>
      <UI.HeaderSearch>
        <UI.HeaderSearchInput placeholder="Procurar" />
      </UI.HeaderSearch>
      <UI.HeaderAvatar>
        <RiNotification2Line size={24} color={appConfig.theme.secondaryColor} />
        <UI.Avatar src="https://static.wikia.nocookie.net/disney/images/2/25/Profile_-_22.png" />
      </UI.HeaderAvatar>
    </UI.Header>
  );
}
