import React from "react";
import * as UI from "../styles/ui/IndicatorHeader.style";
import Card from "./Card";
export default function IndicatorHeader() {
  return (
    <div>
      <UI.IndicatorTitle>Últimos 30 dias</UI.IndicatorTitle>
      <UI.IndicatorHeader>
        <Card
          type="single"
          value={258003023}
          title="Receita"
          maxWidth={200}
          money
        />
        <Card
          type="single"
          value={20000}
          title="Despesa"
          maxWidth={200}
          money
        />
        <Card type="single" value={10} title="Novas Receitas" maxWidth={200} />
        <Card type="single" value={5} title="Novas Despesas" maxWidth={200} />
      </UI.IndicatorHeader>
    </div>
  );
}
