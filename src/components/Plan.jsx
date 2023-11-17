import React, { useState } from "react";
import "./plan.css";
import arcadeimg from "../assets/images/icon-arcade.svg";
import advancedimg from "../assets/images/icon-advanced.svg";
import proimg from "../assets/images/icon-pro.svg";
import { useNavigate } from "react-router-dom";
import { useData } from "../ProviderData";

const Plan = () => {
  const {setSelectedplanmonth } = useData();
  // Monhtly plan data

  const MonthlyPlanData = [
    {
      img: arcadeimg,
      name: "Arcade",
      plan: "$9/mo",
      plannumber: 9
    },
    {
      img: advancedimg,
      name: "Advanced",
      plan: "$12/mo",
      plannumber: 12
    },
    {
      img: proimg,
      name: "Pro",
      plan: "$15/mo",
      plannumber: 15
    },
  ];
  // toogle function
  const [tooglecheck, setTooglecheck] = useState(false);
  const demo = document.getElementById("demo");
  const Toogle = () => {
    setTooglecheck(!tooglecheck);
    if (tooglecheck) {
      demo.innerText = "toogle true";
    } else {
      demo.innerText = "toogle false";
    }
  };
  const boxClicked = (item) => {
    setSelectedplanmonth(item);
  };
  //
  const addnav = useNavigate();
  const homenav = useNavigate();

  return (
    <div className="plan-wrapper">
      <div className="plan-header">
        <h3>Select your plan</h3>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="plan-content">
        <div className="content-boxes">
          {MonthlyPlanData.map((item) => (
            <div onClick={()=>{boxClicked(item)}}>
              <img src={item.img} alt="arcade" />
              <h4>{item.name}</h4>
              <h6>{item.plan}</h6>
            </div>
          ))}
        </div>
        {/* toogle */}
        <div className="plan-toogle">
          <h3>Monthly</h3>
          <div className="toogle">
            <input
              class="switch"
              type="checkbox"
              checked={tooglecheck}
              onClick={(item)=> {
                Toogle(item)
              }}
            />
          </div>
          <h4>Yearly</h4>
        </div>
      </div>
      <div className="plan-footer">
        <button
          onClick={() => {
            homenav("/");
          }}
        >
          Go Back
        </button>
        <button
          onClick={() => {
            addnav("/add");
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Plan;
