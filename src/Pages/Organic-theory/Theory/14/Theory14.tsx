import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary

const Theory14: React.FC = () => {
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
        <b>14. OH කාණ්ඩයක් හැලජන කාණ්ඩයක් බවට පත් කිරීම</b>
      </h1>
      <p>
        <br />
      </p>
      <p>
        මාතෘකා ටිකක් අමුතුයි .. ටියුශන් වල එහෙම මෙහෙම මාතෘකා නැතුවත් ඇති.. මෙහෙම
        හදන්නේ ඔයාලට තේරුම්ගන්න පුලුවන් වෙන්න
      </p>
      <p className="specialPoints">
        PCl₃ , PCl₅ , PBr₃ , PBr₅ වැනි පොස්පරස් සමග හැලජන සාදන සංයෝගක්
        ඇල්කොහොලයකට හෝ කාබොක්සලික් කාණ්ඩයකට යෙදුවහොත් එහි ඇති OH කාණ්ඩය ඉවත් වී
        ඒ වෙනුවට හැලජන පරමානුව ආදේශ වෙයි.
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p className="highlight">
        <b>
          දැක්ක ගමන් තේරෙනවනෙ මොකක්ද වෙලා තියෙන්නෙ කියලා.. පාඩම් කරන්න කිසි
          දෙයක් නැ මතක තියාගන්න අමාරුත් නැ හැබැයි පරිවර්තනේක මේ වගේ කැල්ලක් අහු
          වෙනවමයි.. ඉස්සරහටත් මේ වගේම තියරි ටිකක් තියෙන්නෙ පට්ට ලේසියි...
        </b>
      </p>
      <br />

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory14;
