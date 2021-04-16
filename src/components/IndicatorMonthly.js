import React from "react";
import * as UI from "../styles/ui/IndicatorMonthly.style";
import Card from "./Card";
import Table from "./Table";
import expenses from "../fakedb/expenses.json";

const tableExpensesConfig = [
  {
    key: "id",
    title: "#",
  },
  {
    key: "name",
    title: "Nome",
  },
  {
    key: "value",
    title: "Valor (R$)",
  },
];

export default function IndicatorMonthly() {
  return (
    <UI.IndicatorMonthly>
      <Card>
        <Table
          columns={tableExpensesConfig}
          rows={expenses.map((i) => ({
            ...i,
            value: new Intl.NumberFormat("pt-BR", {
              style: "decimal",
              minimumFractionDigits: 2,
            }).format(i.value),
          }))}
        />
      </Card>
      <Card>
        <Table
          columns={tableExpensesConfig}
          rows={expenses.map((i) => ({
            ...i,
            value: new Intl.NumberFormat("pt-BR", {
              style: "decimal",
              minimumFractionDigits: 2,
            }).format(i.value),
          }))}
        />
      </Card>
    </UI.IndicatorMonthly>
  );
}
