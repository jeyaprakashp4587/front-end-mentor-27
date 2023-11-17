import "./summary.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../ProviderData";

const Summary = () => {
  const Thanknav = useNavigate();
  const summarynav = useNavigate();

  const { selectedplanMonth, pickadd } = useData();

  // add

  const monthplan = selectedplanMonth.plannumber;

  const pickplan = Array.isArray(pickadd)
    ? pickadd.map((i) => i.plannumber)
    : ["3"];

  console.log(pickadd);

  let total = monthplan;

  for (let i = 0; i < pickplan.length; i++) {
    total += pickplan[i];
  }

  return (
    <div className="summary-wrapper">
      <div className="summary-header">
        <h3>Finishing up</h3>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div className="summary-content">
        <div
          style={{
            height: "max-content",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <div className="summary-boxes">
            <div>
              <h4 style={{ color: "hsl(213, 96%, 18%)", fontWeight: 600 }}>
                {selectedplanMonth.name}
              </h4>
              <p>Change</p>
            </div>
            <span>{selectedplanMonth.plan}</span>
          </div>
          {pickadd.map((item) => (
            <div className="summary-boxes">
              <div>
                <h4>{item.name}</h4>
              </div>
              <span>{item.plan}</span>
            </div>
          ))}
        </div>
        <div className="summary-total-box">
          <div>
            <h4>Total (per month)</h4>
          </div>
          <span>${total}/mo</span>
        </div>
      </div>
      <div className="summary-footer">
        <button
          onClick={() => {
            summarynav("/add");
          }}
        >
          Go Back
        </button>
        <button
          onClick={() => {
            Thanknav("/sucess");
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
