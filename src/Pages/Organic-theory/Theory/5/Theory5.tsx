import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary

const Theory5: React.FC = () => {
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
        <b>5. ඇල්කයින හැදින්වීම හා ඇල්කයින හදන හැටි..!</b>
      </h1>
      <p>
        <br />
      </p>
      <p>ඇල්කයින කියන්නෙ..?</p>
      <p>
        කාබන් හා හයිඩ්‍රජන් පමණක් අඩංගු සංයෝගයක් කාබන් පරමානු දෙකක් අතර ත්‍රිත්ව
        බන්දනයක් පවතීනම් අන්න ඒවා ඇල්කයින කියලා හදුන්වනවා...
      </p>
      <p className="specialPoints">පොදු සූත්‍රය - CₙH₂ₙ₋₂</p>
      <br />
      <p>
        හරි දැන් බලමු ඇල්කයින හදන හැටි. ඒ කියන්නෙ කාබන් අතර ත්‍රිත්ව බන්දනයක්
        ගන්න හැටි බලමු.
      </p>
      <br />
      <h2 className="highlight">ක්‍රමය 1</h2>
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <p>
        මෙහිදීද මදයසාරීය KOH යොදාගනු ලබන අතර HBr අනු දෙකක් ඉවත් වීම සිදුවෙයි..
      </p>
      <p>
        <b>-- තෙරුනෙ නැති අයට --</b>
        <p className="specialPoints">
          ඔයා මුලින්ම බලන්න Br පරමානු දෙක සෙට් උන කාබන් පරමානු දෙක දිහා. හරි
          දැන් ඕකට මද්‍යසාරිය KOH දැම්මාම එක Br පරමානුවක් එක්ක අනෙක් කාබන්ගෙ H
          එකක් ගැලවෙනවා, එහෙම ගැලවෙලා එ කාබන් දෙක අතර ද්විත්ව බන්දනයක් හැදෙනවා,
          ඊටපස්සෙ අනෙක් Br එක්ක අර වගෙම H එකක් ගැලවෙනවා.. එතකොට ආයෙත් තවත්
          බන්දනයක් හැදෙනවා.. ඔන්න දැන් එතකොට කාබන් දෙක අතරෙ ත්‍රිත්ව බන්දනයක්
          හැදිලා තීනවා.... මෙහෙම විස්තර කලෙ ඔයාලට තෙරුම් කරලා දෙන්නයි..
          විබාගවල්දි මේහෙම විස්තර කරන්න යන්නනම් එපා....!
        </p>
      </p>
      <br />
      <h2 className="highlight">ක්‍රමය 2</h2>
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <p>මෙහිදි ජල අනු දෙකක් ඉවත්වීම සිදුවෙයි...</p>
      <p>
        මේකත් ඉහත සිද්දිය වගේමයි.. එ විදියට මේකත් හිතන්න ...! con.H₂SO₄ කියන්නෙ
        සාන්ද්‍ර H₂SO₄ කි‍යන එකම තමයි..
      </p>

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory5;
