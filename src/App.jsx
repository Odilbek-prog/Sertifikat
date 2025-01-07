import "./App.scss";
import React from "react";
import logo1 from "./assets/ilmhub.png";
import logo2 from "./assets/itpark.png";
import logo3 from "./assets/qrcode.png";

function App() {
  return (
    <>
      <button className="btn">Download PDF</button>
      <div
        className="card"
        id="card"
        style={{
          borderRadius: 4,
          margin: 0,
          padding: "2em",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 8px",
        }}
      >
        <div className="hdr">
          <img src={logo1} alt="Logo 1" id="logo1" />
          <img src={logo2} alt="Logo 2" id="logo2" />
          <img src={logo3} alt="" />
        </div>
        <p className="sub">MALAKA OSHIRGANLIK HAQIDA</p>
        <p className="ttl">SERTIFIKAT</p>
        <p className="nm" id="certificate-name">
          Moxira Alixanova
        </p>
        <p className="desc" id="certificate-description">
          Davlat va xo'jalik boshqaruvi, mahalliy davlat hokimiyati organlari,
          tashkilotlar va idoralarning xodimlari uchun" jami{" "}
          <strong id="learning-hours">24</strong> soatlik malaka oshirish
          kursini muvaffaqiyatli yakunladi
        </p>
        <p className="sub" id="certificate-dates">
          2024-11-11 ~ 2024-11-25
        </p>
        <div className="ft">
          <div className="ft-l">
            <img
              src="https://ilmhubuz.github.io/static/images/ilmhub-digital-stamp.png"
              alt="Digital Stamp"
              className="ov-img"
              id="digital-stamp"
            />
            <img
              src="https://ilmhubuz.github.io/static/images/davron-signature.png"
              alt="Signature"
              className="ov-img"
              id="signature"
            />
          </div>
          <div className="ft-r">
            <span className="nm" id="certificate-id">
              0f49c
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
