import React from "react";
import * as UI from "../styles/ui/Card.style";

export default function CardSingle({
  value,
  title,
  maxWidth = null,
  money = false,
}) {
  return (
    <UI.Card single maxWidth={maxWidth}>
      <UI.CardSingleTitle>{title}</UI.CardSingleTitle>
      <UI.CardSingleValue>
        {money
          ? new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(value)
          : value}
      </UI.CardSingleValue>
    </UI.Card>
  );
}
