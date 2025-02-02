import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary

const Theory20: React.FC = () => {
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
        <b>
          20. හැලජන අඩංගු කාබනික සංයෝග සමග ග්‍රිනාඩ් ප්‍රතිකාරකය දක්වන
          ප්‍රතික්‍රියා
        </b>
      </h1>
      <p>
        <br />
      </p>
      <p>පහත ප්‍රතික්‍රියාව දෙස හොදින් බලන්න</p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        මෙහිදීද සිදුවන්නෙ රින ගතියක් සහිත කාබන් සමග හැලජන අඩංගූ කාබනික සංයෝගයෙ
        ධන ගතියක් සහිත කාබන් හා සම්බන්ධවීමයි.. එවිට Cl ඉවත්වී MgCl₂ සෑදේ..
      </p>
      <br />

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory20;
