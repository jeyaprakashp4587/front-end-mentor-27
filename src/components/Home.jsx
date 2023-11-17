import React from "react";
import "./home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useData } from "../ProviderData";

const Home = () => {
  const Plannav = useNavigate();

  // form validation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [numberMessage, setNumberMessage] = useState("");

  const formvalid = () => {
    if (name.trim().length === 0) {
      setNameMessage("This Field is required");
    }
    if (email.trim().length === 0) {
      setEmailMessage("This Field is required");
    }
    if (number.trim().length === 0) {
      setNumberMessage("This Field is required");
    }
    if (name && email && number) {
      Plannav("/plan");
    }
  };

  return (
    <div className="home">
      <div className="header-message">
        <h2>Personal info</h2>
        <p>Please Provide your name,email address,and phone number.</p>
      </div>
      <div className="input-fields">
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g Stephen king"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p
            id="valid_message"
            style={{
              fontSize: "0.7rem",
              position: "absolute",
              top: "5%",
              right: "0",
              color: "hsl(354, 84%, 57%)",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            {nameMessage}
          </p>
        </label>

        <label htmlFor="email">
          Email Adress
          <input
            type="email"
            name="email"
            id="emil"
            placeholder="e.g. stephhenking.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p
            id="valid_message"
            style={{
              fontSize: "0.7rem",
              position: "absolute",
              top: "5%",
              right: "0",
              color: "hsl(354, 84%, 57%)",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            {emailMessage}
          </p>
        </label>

        <label htmlFor="number">
          Phone Number
          <input
            type="text"
            name="number"
            id="number"
            placeholder="e.g. +9025167302"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <p
            id="valid_message"
            style={{
              fontSize: "0.7rem",
              position: "absolute",
              top: "5%",
              right: "0",
              color: "hsl(354, 84%, 57%)",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            {numberMessage}
          </p>
        </label>
      </div>
      <div className="button">
        <button
          onClick={() => {
            formvalid();
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Home;
