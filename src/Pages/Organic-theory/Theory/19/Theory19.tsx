import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary
import image3 from "./3.png"; // Adjust path as necessary

const Theory19: React.FC = () => {
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
        <b>19. ග්‍රිනාඩ් ප්‍රතිකාරකය හා සම්බන්ද ප්‍රතික්‍රියා </b>
      </h1>
      <p>
        <br />
      </p>
      <p className="blue">
        ග්‍රිනාඩ් ප්‍රතිකාරකය සමග යම් කාබනික සංයෝගයක් ප්‍රතික්‍රියාවෙදී
        ග්‍රිනාඩ් ප්‍රතිකාරකය හා සම්බන්ද කොටස (+) හා (-) ලෙස අයන සාදමින් කොටස්
        දෙකකට වෙන්වෙයි... පහත රූපෙ බැලුවාම හොදට තෙරේවි
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        <b>
          දකුනුපස කාබනික කොටස (-) ආරොපිත නිසා එයට සම්බන්ධ වනුයෙ (+) ආරෝපනයක්
          සහිත කොටසකි.
        </b>
      </p>
      <p>පහත ග්‍රිනාඩ් සම්බන්ධ ප්‍රතික්‍රියාවන් දෙස හොදට බලන්න.</p>
      <br />
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        1. පලවෙනි ප්‍රතික්‍රියාවේදි ග්‍රිනාඩ් ප්‍රතිකාරකයට HCl දැම්මාම HCl වල
        හයිඩ්‍රජන් ගැලවී H⁺ වී ග්‍රිනාඩ් කොටසෙ (-) ආරෝපිත කාබන් හා සම්බන්ද වන
        අතර Cl- කොටස (MgCl)⁺ සමග සම්බන්ද වී MgCl₂ සැදේ..
      </p>
      <br />
      <img
        src={image3}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        2. මෙහිදි දාන්නෙ D₂O. සමහරූ මේක දන්නෙ නැතුව ඇති.. මේ D කියන්නෙ
        ඩියුටීරියම් කියන එක. ඩියුටීරියම් කියන්නෙත් හයිඩ්‍රජන් වලම සමස්තානිකයක්..
        ඉතින් ඒ අකුර වැඩිය ගනන් ගන්න එපා.. H අකුරක් කියලම හිතන්නකො.. එහෙම
        හිතුවොත් මේකත් H₂O එහෙම නැත්තම් ජලය වගේමනේ.. ඉතින් මේකෙදි H⁺ හා OH⁻ නේ
        තීන්නෙ.. කලින් වගේම ග්‍රිනාදි රින කාබන්ට ධන හයිඩ්‍රජන් බැදෙනවා... OH⁻
        කොටස (MgCl)⁺ සමග බැදෙනවා.
      </p>
      <p className="specialPoints">
        ඇයි ග්‍රිනාඩ් හදද්දි වියලි මාධ්‍යක් ගන්නෙ (ඇයි වියලි ඊතර ගන්නෙ)
      </p>
      <p>
        <b>
          ග්‍රිනාඩ් ප්‍රතිකාරකය ජලය සමග ප්‍රතික්‍රියා කලොත් ඉහත D₂O වගේම
          ක්‍රියාවලියක් සිදුවෙනවා.. ඉතින් එතකොට අපිට එතනින් එහා දෙයක් කරගන්න
          වෙන්නෙ නැනෙ.. ඉතින් අපි ඒ ප්‍රතික්‍රියාව වලක්වා ගන්න මාද්‍ය වියලි ඊතර
          ගන්නවා.. ඊතර ද්‍රවයක් උනාට ජලය අඩංගු වෙන්නෙ නැනෙ..!
        </b>
      </p>
      <p className="highlight">
        තවද H+ ලබාදිය හැකි කාන්ඩ සමග (කාබොක්සලික් කාන්ඩ, ඇල්කොහොල, වගේ)
        ග්‍රිනාඩ් ඉහත පරිදි ප්‍රතික්‍රියා වන නිසා එවැනි කාන්ඩ අඩංගු සංයෝග
        ග්‍රිනාඩ් සැදීම සදහා යොදා නොගනී
      </p>

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory19;
