import React from "react";
import Back from "../../Common/back/Back";
import "./Machine.css"; // CSS for styling

const Machine = () => {
  return (
    <div className="machine-page">
      <Back title="Manufacturing" />
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Machine Type</th>
              <th>Make</th>
              <th>Qty</th>
              <th>Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VMC 4 Axis</td>
              <td>AMS / X-TRON / BFW</td>
              <td>14</td>
              <td>
                Table Size 1000 X 450 X 880 mm<br />
                Table Size 1200 X 550 X 880 mm<br />
                Table Size 700 X 450 X 710 mm
              </td>
            </tr>
            <tr>
              <td>CNC</td>
              <td>AMS</td>
              <td>2</td>
              <td>
                Swing Diameter &amp; Bed 420 mm<br />
                Length 250 mm
              </td>
            </tr>
            <tr>
              <td>M1TR</td>
              <td>AGRO</td>
              <td>1</td>
              <td>Bed Length 1200 X 300 mm</td>
            </tr>
            <tr>
              <td>Lathe</td>
              <td>HP</td>
              <td>1</td>
              <td>Double Belt, 5.5 Feet</td>
            </tr>
            <tr>
              <td>Band Saw Machine</td>
              <td>Di</td>
              <td>1</td>
              <td>
                Cutting Range – 175 mm Max<br />
                Cutting Dia – 170 mm Max<br />
                Flatness Range – 0.2 Min
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Machine;
