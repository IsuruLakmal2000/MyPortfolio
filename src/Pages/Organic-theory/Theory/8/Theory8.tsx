import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary

const Theory8: React.FC = () => {
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
        <b>8. ආම්ලික හයිඩ්‍රජන් අඩංගු ඇල්කයින</b>
      </h1>
      <p>
        <br />
      </p>
      <p>
        යම් ඇල්කයිනයකදි ත්‍රිත්ව බන්ධනය සහිත කාබන්ට H පවතීනම් එම H ආම්ලික
        හයිඩ්‍රජන් ලෙස හදුන්වයි
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        රතු පාටින් තීන්නෙ අන්න ඒක හදුන්වන්නෙ ආම්ලික හයිඩ්‍රජන් කියලයි.. දැක්ක
        ගමන් පේනවනෙ ත්‍රිත්ව බන්දන කාබන්ට සෙට් වෙලා තීන්නෙ H.
      </p>
      <p className="specialPoints">
        මෙම ආම්ලික හයිඩ්‍රජන් ඇති ඇල්කයින වලට සෝඩියම් (Na) සෝඩැමයිඩ් (NaNH₂)
        වැනි ප්‍රභේද යෙදු විට හයිඩ්‍රජන් හට H⁺ ලෙස ඉවත්ව යාමෙ හැකියාවක් පවතී...
      </p>
      <br />
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        මෙහිදි ඵලය දෙස බැලු විට අයන ලෙස වෙන්වී ඇති බව පේනවා ඇති.. එහෙම උනේ කෝමද
        කියලා පොඩ්ඩක් සරලව පැහැදිලි කලොත්,, හිතන්නකො ආම්ලික H අඩංගු කාබන්ගෙ
        ත්‍රිත්ව බන්දන පවතින නිසා එතන ඉලෙක්ට්‍රෝන ගනත්වය වැඩියි. දැන් Na හෝ
        NaNH₂ දැම්මාම‍ අර ආම්ලික හයිඩ්‍රජන් ගැලවෙලා යනවා. එතකොට එතන කාබන් රින
        ආරොපනයක් වෙනවා. මොකද කාබන් වටා ඉලෙක්ට්‍රෝන පහක් තිබෙන නිසා. එතකොට රින
        ආරොපන ගාවට ආකර්ශනය වෙන්නෙ දන ඒවා වගේ අපි Na⁺ එක අපි කාබන් රින එක ගාවින්
        ලියනවා... ඔන්න ඕකයි සරලවම කිව්වොත් වෙන්නෙ...
      </p>
      <p className="specialPoints">
        එලෙස ආම්ලික හයිඩ්‍රජන් අඩංගු ඇල්කයින වලට Na යෙදු විට H₂ පිටවන අතර NaNH₂
        යෙදු විට NH₃ පිටවෙයි.. බහුවරන වලට අහන පොයින්ට් එකක් ..
      </p>

      <p className="blue">
        ඊලහට ගොඩක් වැදගත් කොටස් ටිකක් එන්නෙ.. කොහොමද අපි පරිවර්තනයෙ කාබන් පරමානු
        වැඩි කරගන්නෙ හා ඒ සම්බන්ද ක්‍රම අපි කතා කරනවා... ඊට කලින් පරිවර්තන
        ප්‍රශ්න කරලා ඔක්කොම ප්‍රැක්ටිස් එකෙ ඉන්න.... දැන් තමයි ආතල්ම ටික..!
      </p>

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory8;
