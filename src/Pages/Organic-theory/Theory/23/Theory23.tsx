import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary

const Theory23: React.FC = () => {
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
        <b>23. ඇල්ඩෝල් සංගණනය </b>
      </h1>
      <p>
        <br />
      </p>
      <p>
        ඇල්ඩිහයිඩයකට හෝ කීටොනයක කාබොනයිල් කාබන්ට යාබදව ඇති කාබන් ඇල්ෆා කාබන් ලෙස
        හදුන්වන අතර එම ඇල්ෆා කාබන්ට හයිඩ්‍රජන් (H) පවතීනම් එම හයිඩ්‍රජන් ඇල්ෆා
        හයිඩ්‍රජන්(H) ලෙස හදුන්වයි.
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p className="blue">
        නිල් පැහැයෙන් දක්වා ඇති සියලු කාබන් ඇල්ෆා හයිඩ්‍රජන් ලෙස හදුන්වයි.
      </p>
      <p className="highlight">
        ** NaOH, KOH වැනි භෂ්ම යෙදීමේදි මෙම ඇල්ෆා හයිඩ්‍රජන් (H) හට H⁺ වශයෙන්
        ඉවත්ව යාමෙ යම් හැකියාවක් පවතී...
      </p>
      <h2>ඇල්ඩෝල් සංගනනය වෙන හැටි</h2>
      <p>
        උදාහරනයක් ලෙස- CH₃-CHO යන ඇල්ඩිහයිඩය සැලකූ විට, එයට ජලීය NaOH යෙදූවිට
        සාම්පලයේ ඇති ස්මාහර ඇල්ඩිහයිඩ අණු වලට පමණක් ඇල්ෆා H පරමානුවක් බැගින්
        ඉවත් වී කාබන් මත රින ආරෝපනයක් ඇති කරයි.. පහත රූපය බලන්න
      </p>
      <br />
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        ඉහතදී NaOH වල OH⁻ අයනය මගින් ඉවත් කරන ලද H⁺ ලබාගෙන ජලය සාදන අතර රින
        කාබන්කරා Na⁺ ඇදී එයි...
      </p>
      <p>
        ඉන්පසුව සාම්පලයේ ඇති කිසිදු විපර්‍යාසයකට ලක් නෝවූ ඇල්ඩිහයිඩ අණුවල
        දිවිත්ව බන්ධන ඔක්සිජන් අඩංගු කාබන් ධන ගතියක් පෙන්වන බැවින් ඒවා ඉහතදී
        සැදූනු රින ගතියක් හා සම්බන්ද කාබන් හා සම්බන්ධ වෙයී...
      </p>
      <p>
        <b>
          ඒ අනුව ඇල්ඩෝල් සංගණනයේදි යම් සංයෝගයක කාබන් සංඛ්‍යාව දෙගුනයක් දක්වා
          වැඩි වෙයි... ඒනිසා මේය ඇල්ඩිහයිඩ කීටෝනවල සංගනනය ලෙසද හදුන්වයි..
        </b>
      </p>
      <p className="highlight">
        <b>
          TRICKS- යම් කිසි පරිවර්තනයක කාබන් සංඛ්‍යාව දෙගුනයක් වී ඇත්නම් එම
          පරිවර්තන ක්‍රියාවලීයේදි ඇල්ඩෝල් සංගනනයක් සිදු වී ඇති බව සැක කල හැකිය.
        </b>
      </p>
      <br />
      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory23;
