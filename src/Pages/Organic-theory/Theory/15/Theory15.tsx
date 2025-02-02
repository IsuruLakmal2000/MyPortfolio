import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary

const Theory15: React.FC = () => {
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
        <b>15. හැලජන අඩංගු කාබනික සංයෝග දක්වන ආදේශ ප්‍රතික්‍රියා</b>
      </h1>
      <p>
        <br />
      </p>
      <p className="specialPoints">
        මෙහිදි කාබනික සංයෝගයෙ ඇති හැලජන පරමානුුව ඉවත් වී ඒ වෙනුවට වෙනත් කාන්ඩයක්
        ආදේශ වීම සිදුවෙ.
      </p>
      <p>හොදින් බලන්න..</p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p className="specialPoints">
        පැහැදිලි කරලා දෙන්න තරම් දෙයක් ඇත්තෙම නැ... හැලජන පරමානුව ඉවත් වෙලා ආදෙශ
        වීමක්නෙ තීන්නෙ.. මතක තබා ගත යුතුම වැදගත් කරුනු මේවා... හරිම ලේසියි ....
      </p>
      <p>
        <b>පොඩ්ඩක් හරි මතක තියාගන්න ඕන NaNH₂ හා, සාන්ද්‍ර NH₃ දෙක තමයි..</b>
      </p>
      <p className="highlight">
        <b>
          වැදගත් - ඉහත දෙවෙනි ප්‍රතික්‍රියාවේදි කාබන් පරමානු එකකීන් වැඩි වීමක්
          සිදු වෙලා කියලා පෙනෙනවානෙ.. යම් කිසි පරිවර්තනේක කාබන් සංක්‍යාව කොහෙන්
          හරි එකකින් වැඩි වීමක් සිදු වෙලා තියෙනම් එහෙම වෙන්න පුලුවන් එක් විදියක්
          තමයි KCN සමග ඉහත පරිවර්තනය...
        </b>
      </p>
      <br />

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory15;
