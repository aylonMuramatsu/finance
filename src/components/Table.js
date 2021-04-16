import React from "react";
import * as UI from "../styles/ui/Table.style";
export default function Table({ columns = [], rows = [] }) {
  return (
    <UI.Table>
      <thead>
        <tr>
          {columns.map((i) => (
            <th key={i.key}>{i.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((i, index) => (
          <tr>
            {columns.map((b) => (
              <td key={`${b.key}_${index}`}>{i[b.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </UI.Table>
  );
}
