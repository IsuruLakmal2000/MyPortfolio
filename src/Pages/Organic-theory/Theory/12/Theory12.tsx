import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary
import image3 from "./3.png"; // Adjust path as necessary
import image4 from "./4.png"; // Adjust path as necessary
import image5 from "./5.png"; // Adjust path as necessary

const Theory12: React.FC = () => {
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
        <b>12. කාබනික සංයෝග ඔක්සිකරනය කිරීම.</b>
      </h1>
      <p>
        <br />
      </p>
      <p>
        මෙහිදි අදාල කාබනික සංයෝගයෙ ඇති C පරමානුවක ඔක්සිකරන අංකය වැඩි වීම
        සිදුවෙයි.
      </p>
      <p className="specialPoints">
        මේ සදහා ඔක්සිකාරක වශයෙන් H⁺/KMnO₄ හෝ H⁺/K₂Cr₂O₇ වැනි ප්‍රභේදයන් පිටතින්
        යෙදිය යුතුය..
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <img
        src={image3}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p className="blue">
        එතරම් ප්‍රභල නොවන ඔක්සිකාරකයක් යොදා ප්‍රාථමික ඇල්කොහොලයක් ඔක්සිකරනය
        කලහොත් එහිදි ඵලය වශයෙන් කාබොක්සලික් ඵලයක් නොලැබෙන අතර ඵලය වශයෙන්
        ඇල්ඩිහයිඩයක් ලැබෙ .
      </p>
      <p>
        <b>
          ** PCC - පිරිඩීනියම් ක්ලෝරෝක්‍රෝමෙට් යනු දුබල ඔක්සීකාරකයකි.. එනම් එය
          ප්‍රාතමික ඇල්කොහොල ඇල්ඩිහයිඩ බවට පත් ඔක්සිකරනය කරයි.
        </b>
      </p>
      <br />
      <img
        src={image4}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        <b>
          ** දිවිතීක ඇල්කොහොලයකදි නම් H⁺/KMnO₄ හෝ H⁺/K₂Cr₂O₇ වැනි ප්‍රභල
          ඔක්සිකාරක හා PCC වැනි දුබල ඔක්සිකාරක යෙදුවද ඵලය වශයෙන් කීටොනයක් ලැබේ.
        </b>
      </p>
      <p>
        ඉහත සෑම ඔක්සිකරනයකදීම කාබන් සංක්‍යාවෙ වෙනසක් සිදු නොවන අතර වෙනසකට
        ලක්වන්නෙ ඔක්සිජන් අඩංගු කාබන් පරමානුව පමනි..
      </p>
      <br />
      <p className="highlight">MCQ POINTS</p>
      <p>
        ඉහත ඒවාට අමතරව OH- මාධ්‍ය තුල K₂Cr₂O₇ හෝ KMnO₄ යෙදීම් මගින් ඇල්කීන
        ඇල්කයින ආදියද ඔක්සිකරනයට ලක් කල හැක..
      </p>
      <br />
      <img
        src={image5}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory12;
