import React from "react";
import * as UI from "../styles/ui/Card.style";
import CardSingle from "./CardSingle";

export default function Card({ type = "normal", children, ...rest }) {
  switch (type) {
    case "single":
      return <CardSingle {...rest} />;
    case "normal":
      return <UI.Card>{children}</UI.Card>;
    default:
      return <UI.Card>{children}</UI.Card>;
  }
  return;
}
