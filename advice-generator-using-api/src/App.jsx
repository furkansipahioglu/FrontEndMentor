import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Axios from "axios";
import "./App.css";

function App() {
  const [advice, SetAdvice] = useState();
  const [adviceBefore, SetBAdvice] = useState("");
  const [adviceId, SetId] = useState();

  const getAdvice = () => {
    Axios.get("	https://api.adviceslip.com/advice").then((response) => {
      SetAdvice(response.data.slip.advice);
      SetId(response.data.slip.id);
    });
  };

  getAdvice();
  const adviceControl = () => {
    getAdvice();
    while (advice == adviceBefore) {
      getAdvice();
      SetBAdvice(advice);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h3 className="adviceId">Advice # {adviceId}</h3>
        <p>" {advice} "</p>
        <div className="line">
          <svg
            className="mobileSvg"
            style={{ marginBottom: "10px" }}
            width="295"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
          <svg
            className="desktopSvg"
            width="444"
            height="16"
            style={{ marginBottom: "30px" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>

        <button className="dice" onClick={adviceControl}>
          {" "}
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
