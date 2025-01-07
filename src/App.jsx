import "./App.scss";
import React from "react";
import logo from "./assets/logo.png";
import kid from "./assets/kid.png";
import rabbit from "./assets/rabbit.webp";
import qrcode from "./assets/qrcode.png";
import pecat from "./assets/pecat.png";

function App() {
  return (
    <>
      <button className="btn">Download PDF</button>
      <div className="card">
        <header className="card__header">
          <img className="card__img" src={rabbit} alt="" />
          <div className="card__head">
            <h1 className="card__title">Certificate</h1>
            <h3 className="card__subtitle">of Graduation</h3>
          </div>
          <img className="card__img" src={qrcode} alt="" />
        </header>
        <div className="card__banner">This Award is Presented to</div>
        <div className="card__name">
          <h1 className="card__subtitle">Munzira Nuriddinova</h1>
          <hr className="card__hr" />
        </div>
        <p className="card__subdesc">
          In Recognition of Successfully Completing the Phonics Cue 2 Program
        </p>
        <p className="card__desc">
          For your hard work, enthusiasm, and remarkable growth throughout this
          program. Your curiosity, creativity, and joyful spirit have made this
          period truly special. Congratulations on your outstanding
          achievements!
        </p>
        <footer className="card__footer">
          <img src={kid} alt="" className="card__img" />
          <div className="card__foot">
            <i className="card__author">Ms.Iroda</i>
            <hr />
            <p className="card__date">Mentor</p>
          </div>
          <div className="card__logo">
            <img src={logo} alt="" className="card__img" />
            <p className="card__subtitle">ilmhub o'quv markazi</p>
          </div>
          <div className="card__foot">
            <h4 className="card__author">Davron A.</h4>
            <hr />
            <p className="card__date">Director</p>
          </div>
          <img src={pecat} alt="" className="card__img" />
        </footer>
      </div>
    </>
  );
}

export default App;
