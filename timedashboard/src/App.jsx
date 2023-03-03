import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Work from "./images/icon-work.svg";
import Play from "./images/icon-play.svg";
import Study from "./images/icon-study.svg";
import Exercise from "./images/icon-exercise.svg";
import Social from "./images/icon-social.svg";
import Selfcare from "./images/icon-self-care.svg";

function App() {
  const [dataapi, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (dataJson) {
        setData(dataJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const dailydata = dataapi.map((type) => ({
    time: type.timeframes.daily,
    title: type.title,
  }));
  const weeklydata = dataapi.map((type) => ({
    time: type.timeframes.weekly,
    title: type.title,
  }));
  const monthlydata = dataapi.map((type) => ({
    time: type.timeframes.monthly,
    title: type.title,
  }));

  // const getLoop = () => {
  //   const daily = dailydata.json();
  //   setLoop(daily);
  // };
  // useEffect(() => {
  //   getLoop();
  // }, []);

  // console.log(daily);

  const [active, setActive] = useState("Daily");

  const elements = document.querySelectorAll(".bottomelements *");

  const handleClick = (e) => {
    elements.forEach((element) => {
      element.classList.remove("active");
    });
    setActive(e.target.outerText);
    e.target.classList.add("active");
  };

  return (
    <div className="container">
      <div className="personInfo">
        <div className="top">
          <div className="elements">
            <img src="src\images\image-jeremy.png" alt="" />
            <div className="userName">
              <span>Report for</span>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottomelements">
            <p className="active" onClick={handleClick}>
              Daily
            </p>
            <p onClick={handleClick}>Weekly</p>
            <p onClick={handleClick}>Monthly</p>
          </div>
        </div>
      </div>
      <div className="planner">
        {active === "Daily"
          ? dailydata.map((datain) => {
              return (
                <div
                  className="background"
                  style={
                    datain.title === "Work"
                      ? { backgroundColor: "var(--Lightred1)" }
                      : datain.title === "Play"
                      ? { backgroundColor: "var(--Softblue)" }
                      : datain.title === "Study"
                      ? { backgroundColor: "var(--Lightred)" }
                      : datain.title === "Exercise"
                      ? { backgroundColor: "var(--Limegreen)" }
                      : datain.title === "Social"
                      ? { backgroundColor: "var(--Violet)" }
                      : datain.title === "Self Care"
                      ? { backgroundColor: "var(--Softorange)" }
                      : {}
                  }
                >
                  <img
                    src={
                      datain.title === "Work"
                        ? Work
                        : datain.title === "Play"
                        ? Play
                        : datain.title === "Study"
                        ? Study
                        : datain.title === "Exercise"
                        ? Exercise
                        : datain.title === "Social"
                        ? Social
                        : datain.title === "Self Care"
                        ? Selfcare
                        : {}
                    }
                    alt=""
                  />
                  <div className="Info">
                    <div className="InfoContainer">
                      <h3>
                        {datain.title}{" "}
                        <svg
                          width="21"
                          height="5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                            fill="#BBC0FF"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </h3>

                      <h2>
                        {datain.time.current}hrs
                        <p>Last week -{datain.time.previous}hrs</p>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })
          : active === "Weekly"
          ? weeklydata.map((datain) => {
              return (
                <div
                  className="background"
                  style={
                    datain.title === "Work"
                      ? { backgroundColor: "var(--Lightred1)" }
                      : datain.title === "Play"
                      ? { backgroundColor: "var(--Softblue)" }
                      : datain.title === "Study"
                      ? { backgroundColor: "var(--Lightred)" }
                      : datain.title === "Exercise"
                      ? { backgroundColor: "var(--Limegreen)" }
                      : datain.title === "Social"
                      ? { backgroundColor: "var(--Violet)" }
                      : datain.title === "Self Care"
                      ? { backgroundColor: "var(--Softorange)" }
                      : {}
                  }
                >
                  <img
                    src={
                      datain.title === "Work"
                        ? Work
                        : datain.title === "Play"
                        ? Play
                        : datain.title === "Study"
                        ? Study
                        : datain.title === "Exercise"
                        ? Exercise
                        : datain.title === "Social"
                        ? Social
                        : datain.title === "Self Care"
                        ? Selfcare
                        : {}
                    }
                    alt=""
                  />
                  <div className="Info">
                    <div className="InfoContainer">
                      <h3>
                        {datain.title}{" "}
                        <svg
                          width="21"
                          height="5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                            fill="#BBC0FF"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </h3>

                      <h2>
                        {datain.time.current}hrs{" "}
                        <p>Last week -{datain.time.previous}hrs</p>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })
          : active === "Monthly"
          ? monthlydata.map((datain) => {
              return (
                <div
                  className="background"
                  style={
                    datain.title === "Work"
                      ? { backgroundColor: "var(--Lightred1)" }
                      : datain.title === "Play"
                      ? { backgroundColor: "var(--Softblue)" }
                      : datain.title === "Study"
                      ? { backgroundColor: "var(--Lightred)" }
                      : datain.title === "Exercise"
                      ? { backgroundColor: "var(--Limegreen)" }
                      : datain.title === "Social"
                      ? { backgroundColor: "var(--Violet)" }
                      : datain.title === "Self Care"
                      ? { backgroundColor: "var(--Softorange)" }
                      : {}
                  }
                >
                  <img
                    src={
                      datain.title === "Work"
                        ? Work
                        : datain.title === "Play"
                        ? Play
                        : datain.title === "Study"
                        ? Study
                        : datain.title === "Exercise"
                        ? Exercise
                        : datain.title === "Social"
                        ? Social
                        : datain.title === "Self Care"
                        ? Selfcare
                        : {}
                    }
                    alt=""
                  />
                  <div className="Info">
                    <div className="InfoContainer">
                      <h3>
                        {datain.title}{" "}
                        <svg
                          width="21"
                          height="5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                            fill="#BBC0FF"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </h3>

                      <h2>
                        {datain.time.current}hrs{" "}
                        <p>Last week -{datain.time.previous}hrs</p>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })
          : {}}
        ;
      </div>
    </div>
  );
}

export default App;
