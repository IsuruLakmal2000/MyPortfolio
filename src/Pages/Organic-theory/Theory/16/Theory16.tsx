import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary

const Theory16: React.FC = () => {
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
        <b>16. සයනයිඩ (නයිට්‍රයිල) දක්වන ප්‍රතික්‍රියා.</b>
      </h1>
      <p>
        <br />
      </p>
      <p className="specialPoints">
        යම් කාබනීක සංයෝගයක -CN කාණ්ඩයක් අඩංගුව පවතීනම් එවැනි කාණ්ඩ සයනයිඩ එහෙම
        නැත්නම් නයිට්‍රයිල කියලත් හදුන්වනවා,
      </p>
      <p>
        මේන්න මේ කාන්ඩ සමග දක්වන ප්‍රතික්‍රියා දෙකක් අලුත් සිලබස් එකේ
        තියෙනවා..හො.ම.ත.ග.යු.
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        කලින් LiAlH₄ යොදා ගත්තෙ කාබනික සංයෝග ඔක්සිහරනයට කියලා මතක ඇති. ඉතින් ඉහත
        පලවෙනි ප්‍රතික්‍රියාවෙත් තියෙන්නෙ ඔක්සිහරනයක් තමයී.. මේකනම් ඉතින් ටිකක්
        අමාරුයි මතක තියාගන්න..
        <b>
          මෙහෙම මතක තියාගන්නකො, නයිට්‍රයිලයකට එහෙමත් නැත්තම් සයනයිඩ අඩංගු කොටසකට
          LiAlH₄ දැම්මොත් සයනයිඩෙ කොටසට H කොටස් හතරක් එකතු වෙනවා.. දෙකක් කාබන්ට
          දෙකක් නයිට්‍රජන්ට.. මේ විදිය නිකන් මතක තියාගන්නවටත් වඩා ඔයාට අමාරුනම්
          රූපෙ බලන්න මතක තියාගන්න ලේසි විදියක් ඔයා හදගන්න....
        </b>
      </p>
      <p className="specialPoints">
        දෙවෙනි ප්‍රතික්‍රියාවනම් සයනයිඩෙකට ජලීය අම්ලයක්,, ඒ කියන්නෙ උදාහරනයක්
        විදියට ජලීය HCl , ජලීය H₂SO₄ වගේ... ඒකනම් කෙලින්ම මතක තියාගන්න ලේසී..
        දාන්නෙ ජලීය අම්ලයක් , එතකොට ඵලයත් කාබොක්සලික් අම්ලයක් එන්නෙ.. අන්න ඒක
        එහෙම මතක තියාගන්න ලේසියි..
      </p>
      <p>
        පොඩි තියරි කොටසක් තමයී මහ ලොකුවට විස්තර කරාට .... ප්‍රතික්‍රියා දෙක
        විතරක් දාලා තෙරුනෙ නැති උනොත් කියලා හිතන් මේ ටිකත් කෙටුවා ..!. සල්ලි
        අරම් නිකන් ප්‍රතික්‍රියා දෙක විතරක් දාන්න බෑනේ.!!
      </p>
      <br />
      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory16;
