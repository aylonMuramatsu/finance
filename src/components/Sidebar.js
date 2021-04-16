import React from "react";
import * as UI from "../styles/ui/Sidebar.style";
import { FiMenu } from "react-icons/fi";
import Menu from "./Menu";
import { useGlobal } from "../context/global";
export default function Sidebar({ minimal }) {
  const { ToggleMinimalist, config } = useGlobal();

  return (
    <UI.Sidebar minimal={config.minimalist}>
      <UI.Header>
        <UI.HeaderMenuBar>
          <FiMenu onClick={() => ToggleMinimalist()} />
        </UI.HeaderMenuBar>
        {/* <UI.HeaderLogo src="http://insightcreativewebs.com.br/gallery_gen/40d7cf6cde5d8f84ad60d11528a0971d_112x80.png" /> */}
        <UI.HeaderTitle>Insight Creative Webs</UI.HeaderTitle>
      </UI.Header>
      <Menu />
    </UI.Sidebar>
  );
}
