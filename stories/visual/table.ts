import { TemplateResult, html } from "lit-html";

const data: number[] = Array.from(new Array(20));
 
export const table = (): TemplateResult => html`
<div id="wrapper">
  <h3>Table example</h3>
  <p>Simple standard-behavior table. Default visualization add zebra striping to the rows and 
    scroll-sticky header for improved reading of the data.</p>

  <table>
    <thead>
      <tr>
        <th>
          Table head th
        </th>
        <th>
          Table head td
        </th>
        <th>
          Table head td
        </th>
      </tr>
    </thead>
    <tbody>
      ${ data.map((e: number): TemplateResult => html`
        <tr>
          <td>
            Table body th
          </td>
          <td>
            Table body td
          </td>
          <td>
            Table body td
          </td>
        </tr>
      `) }
    </tbody>
  </table>
</div>
`;