import React from "react";
import * as UI from "../styles/ui/Menu.style";
import menuConfig from "../system/menu.config";
export default function Menu() {
  return (
    <UI.Menu>
      {menuConfig.map((i) => (
        <UI.MenuItem key={i.key}>
          {i.icon} &nbsp;&nbsp;
          <span>{i.title}</span>
        </UI.MenuItem>
      ))}
    </UI.Menu>
  );
}
