import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Adjust path as necessary
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary
import image3 from "./3.png"; // Adjust path as necessary

const Theory3: React.FC = () => {
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
          color: "#03346E",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bolder",
        }}
      >
        <b>3. ඇල්කීනයක් හදන හැටි .</b>
      </h1>
      <p>
        <br />
      </p>
      <p>මුලින්ම බලමු ඇල්කීනයක් කියන්නෙ මොකක්ද කියලා</p>
      <p>
        අපි කලින් ඇල්කේන බැලුවනෙ.ඒවගෙ කාබන් අතර තනි බන්දන තමයි තිබුනෙ. නමුත්
        මෙහිදි තියෙන්නෙ කාබන් පරමානු අතර දිවිතව බන්දනයක්.. සමාන්‍යඑන් ඇල්කීනෙක
        පොදු සූත්‍රය මෙහෙම තීන්නෙ.
      </p>

      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />

      <p>
        <ul>
          <li>
            <b>
              එ කියන්නෙ කාබන් පරමානු වගෙ දෙගුනයක් හයිඩ්‍රජන් පරමානු තීනම් අන්න
              ඒව ඇල්කීන කියලා හදුන්වනවා.
            </b>
          </li>
        </ul>
      </p>

      <p>
        හරි දැන් බලමු ඇල්කේනයක් අපි හදාගන්නෙ කෝමද කියලා. කොටින්ම කිව්වොත් අපි
        කාබන් පරමානු දෙකක් අතරට ද්විත්ව බන්ධනයක් හදාගන්නෙ කොහොමද කියලා තමයි
        මෙකෙදි බලන්නෙ.
      </p>

      <h2 style={{ color: "#03346E", backgroundColor: "#ff9900" }}>ක්‍රමය 1</h2>
      <br />
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p style={{ color: "#3c8500", fontWeight: "bold" }}>
        <b>
          මෙහිදි මද්‍යසාරිය KOH යොදා ගනී.. සාන්ද්‍ර KOH පුලුවන් . එත් වඩා හොද
          මදයසාරිය KOH .. ඒක නිසා මදයසාරිය KOH කියලම මතක තියා ගන්න.
        </b>
      </p>

      <p>
        මෙහිදි Br අඩංගු කාබන් ට යාබදව කාබන් පරමානු දෙකෙන් H අඩු ප්‍රමානයක් ඇති
        කාබන් වලින් H ඉවත් වීම සිදුවෙයි. එවිට් ප්‍රතික්‍රියාවෙන් පසු{" "}
        <b>HBr අනුවක් එවත් වි ඇති බව පැහැදිලිය.</b>
      </p>
      <br />

      <h2 style={{ color: "#03346E", backgroundColor: "#ff9900" }}>ක්‍රමය 2</h2>
      <br />
      <img
        src={image3}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        මෙහිදි{" "}
        <b>
          ඇල්කොහොල අනුවකින් H2O අනුවක් ඉවත් වීම සිදුවෙ. මෙහිදිද H අඩු පැත්තෙන් H
          ඉවත් වීම සිදුවෙයි....
        </b>
      </p>
      <p style={{ color: "#03346E", fontWeight: "bold" }}>
        මෙ ප්‍රතික්‍රියා ටිකත් ඉතාම වැදගත් ප්‍රතික්‍රියා ටිකක්.. මතක තියාගන්න
        බොහොම ලේසියි. අනු දෙකක් ඉවත් වෙලා එ දෙක අතර බන්දනයක් හටගන්නවා. ඕක තමයි
        හරය....
      </p>

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory3;
