import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary

const Theory7: React.FC = () => {
  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        backgroundColor: "white",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        color: "black",
      }}
    >
      <h1
        style={{
          color: "#333",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bolder",
        }}
      >
        <b>7. තනුක H₂SO₄ සමග ඇල්කයින දක්වන ප්‍රතික්‍රියා..</b>
      </h1>
      <p>
        <br />
      </p>
      <p>මෙහිදි තනුක H₂SO₄ සමග Hg₂⁺ උත්ප්‍රෙරකය යොදයි.</p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <p>
        මෙම ප්‍රතික්‍රියාවෙ අවසාන
        <b> පලය දෙස බැලු විට H₂O පරමානුවක් සම්බන්ද වී ඇති බව පෙනෙ.</b> මෙකෙදිත්
        ත්‍රිත්ව බන්දනෙ ඇති කාබන් දෙකෙහි
        <b> H වැඩි පැත්තට H දෙකක් සම්බන්ද වෙලා තීනවා.</b>. දැක්කන කලින් ඒවා
        වගේමයි.. කලිනුත් මේ සමාන ඒව අහු උනානෙ...
      </p>
      <br />
      <p className="specialPoints">
        *මෙහිදි Hg²⁺ අඩංගු සයෝගයක් උවත් කමක් නැ .කෝමහරි Hg²⁺ අයන අඩංගු වෙන්නයි
        ඕනෙ..
      </p>
      <p>උදාහරන ලෙස HgSO₄ වගේ..!</p>
      <p className="blue">
        ටිකක් මතක තියාඅගන්න ඕන වැදගත් ප්‍රතික්‍රියාවක්.... බෙන්සීන් සම්බන්ද
        පරිවර්තන මේව්ට වඩා හරිම ලේසියි.. මේ ටික තමයි ටිකක් මතක තියාගන්න ඕන
        පරිවර්තන තීන්නෙ. ඒක නිසා නිතර නිතර ප්‍රතික්‍රියා බලන්න...
      </p>

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory7;
