import React, { useEffect } from "react";
import "./main.css";
import Home from "../components/Home";
import Plan from "./Plan";
import { Route, Routes } from "react-router-dom";
import Add from "./Add";
import Summary from "./Summary";
import Sucess from "./Sucess";
import { useLocation } from "react-router-dom";
import { useData } from "../ProviderData";

const Main = () => {
  const currentlocation = useLocation();
  const { currentview, setCurrentview, } = useData();

  useEffect(() => {
    setCurrentview(currentlocation.pathname);
  }, [currentlocation, setCurrentview]);

  return (
    <div className="main-wrapper">
      <div className="left-wrapper">
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div
            style={{
              border: "1px solid hsl(231, 11%, 63%)",
              color: currentview === "/" ? "black" : "hsl(231, 11%, 63%)",
              backgroundColor:
                currentview === "/" ? "hsl(228, 100%, 84%)" : "transparent",
              padding: "0.7rem 1rem",
              borderRadius: "50%",
            }}
            id="step1"
          >
            1
          </div>
          <div>
            <h4 style={{ color: "hsl(231, 11%, 63%)", fontSize: "0.8rem" }}>
              STEP1
            </h4>
            <h5 style={{ color: "white", letterSpacing: "1px" }}>YOUR INFO</h5>
          </div>
        </div>
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div
            style={{
              border: "1px solid hsl(231, 11%, 63%)",
              color: currentview === "/plan" ? "black" : "hsl(231, 11%, 63%)",
              backgroundColor:
                currentview === "/plan" ? "hsl(228, 100%, 84%)" : "transparent",
              padding: "0.7rem 1rem",
              borderRadius: "50%",
            }}
            id="step2"
          >
            2
          </div>
          <div>
            <h4 style={{ color: "hsl(231, 11%, 63%)", fontSize: "0.8rem" }}>
              STEP2
            </h4>
            <h5 style={{ color: "white", letterSpacing: "1px" }}>
              SELECT PLAN
            </h5>
          </div>
        </div>
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div
            style={{
              border: "1px solid hsl(231, 11%, 63%)",
              color: currentview === "/add" ? "black" : "hsl(231, 11%, 63%)",
              backgroundColor:
                currentview === "/add" ? "hsl(228, 100%, 84%)" : "transparent",
              padding: "0.7rem 1rem",
              borderRadius: "50%",
            }}
            id="step3"
          >
            3
          </div>
          <div>
            <h4 style={{ color: "hsl(231, 11%, 63%)", fontSize: "0.8rem" }}>
              STEP3
            </h4>
            <h5 style={{ color: "white", letterSpacing: "1px" }}>ADD-ONS</h5>
          </div>
        </div>
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <div
            id="step4"
            style={{
              border: "1px solid hsl(231, 11%, 63%)",
              color: currentview === "/summary" ? "black" : "hsl(231, 11%, 63%)",
              backgroundColor:
                currentview === "/summary" ? "hsl(228, 100%, 84%)" : "transparent",
              padding: "0.7rem 1rem",
              borderRadius: "50%",
            }}
          >
            4
          </div>
          <div>
            <h4 style={{ color: "hsl(231, 11%, 63%)", fontSize: "0.8rem" }}>
              STEP4
            </h4>
            <h5 style={{ color: "white", letterSpacing: "1px" }}>SUMMARY</h5>
          </div>
        </div>
      </div>
      <div className="right-wrapper">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/plan" element={<Plan />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/summary" element={<Summary />}></Route>
          <Route path="/sucess" element={<Sucess />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
