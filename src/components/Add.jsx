import React, { useState } from "react";
import "./add.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../ProviderData";

const Add = () => {
  const { setPickadd,pickadd} = useData();

  const finishnav = useNavigate();

  const plannav = useNavigate();

  // Pick one data
  const PlanData = [
    {
      name: "Online services",
      plan: "+$1/mo",
      feature: "Access to multiplayer games",
      plannumber: 1,
    },
    {
      name: "Larger storage",
      plan: "+$2/mo",
      feature: "Extra 1TB of cloud save",
      plannumber: 2,
    },
    {
      name: "Customizable profile",
      plan: "+$2/mo",
      feature: "Custom theme on your profile",
      plannumber: 2,
    },
  ];

  //
  const [iscli,setIscli] = useState(false);
  const cli = (item) => {
    setPickadd(item);
    setPickadd([...pickadd,item])
    setIscli(true);
  };

  return (
    <div className="add-wrapper">
      <div className="add-header">
        <h3>Pick add-ons</h3>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <div className="add-content">
        {PlanData.map((item) => (
          <div className="add-boxes">
            <input id="checkbox" type="checkbox"  onClick={()=>cli(item)} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.feature}</p>
            </div>
            <span>{item.plan}</span>
          </div>
        ))}
      </div>
      <div className="add-footer">
        <button
          onClick={() => {
            plannav("/plan");
          }}
        >
          Go Back
        </button>
        <button
          onClick={() => {
            if(iscli){
              finishnav("/summary");
            }
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Add;
