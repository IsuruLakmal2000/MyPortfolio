import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary
import image3 from "./3.png"; // Adjust path as necessary

const Theory17: React.FC = () => {
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
        <b>17. ග්‍රිනාඩ් ප්‍රතිකාරකය. Part I</b>
      </h1>
      <p>
        <br />
      </p>
      <p>වැදගත්ම කොටසක්..පට්ට ලේසියි.!</p>
      <h2>ග්‍රිනාඩ් ප්‍රතිකාරකයක් සාදන ආකාරය</h2>
      <p className="specialPoints">
        මෙහිදි සාමානයෙන් සිදු කෙරෙනුයේ හැලජන අඩංගු කාබනික සංයෝගයකට කාබනික
        මාද්‍යක් තුල දිය කරන ලද(ඊතර) Mg යෙදීමයි.
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <h2>අවබෝධයට -</h2>
      <p>
        පහත කාබනික සංයෝග යොදාගනිමින් Cl අඩංගු ග්‍රිනාඩ් ප්‍රතිකාරක සාදාගන්නා
        අයුරු පියවර වශයෙන් දක්වන්න..
      </p>
      <p>1.</p>
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>2.</p>
      <img
        src={image3}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />

      <p className="highlight">
        <b>
          ග්‍රිනාඩ් ප්‍රතිකාරක යම් යම් අවස්තාවලදි මේ විද්‍යට හදාගන්න බැරි අවස්තා
          තියෙනවා... විභාගෙට වැදගත් කොටසක් ඒක.. ඒ කියන්නෙ ග්‍රිනාඩ්
          ප්‍රතිකාරකයක් හැලජන අඩංගූ කාබනික සංයෝගයක් තිබූ පමණින්ම සෑදිය නොහැක. ඒ
          සදහා යම් යම් අවශ්‍යතා සපුරාලිය යුතුයි.. ඒ ගැන වෙනම ඊලග කොටසෙ පැහැදිලි
          කරලා ඇති..
        </b>
      </p>

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory17;
