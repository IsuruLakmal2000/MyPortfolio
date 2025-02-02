import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary
import image3 from "./3.png"; // Adjust path as necessary
import image4 from "./4.png"; // Adjust path as necessary
import image5 from "./5.png"; // Adjust path as necessary
import image6 from "./6.png"; // Adjust path as necessary
import image7 from "./7.png"; // Adjust path as necessary

const Theory11: React.FC = () => {
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
        <b>11. විවිධ කාබනික සංයෝග ප්‍රභේද හදුනා ගනිමු.</b>
      </h1>
      <p>
        <br />
      </p>
      <p>මුලින්ම බලමු ඇල්කීනයක් කියන්නෙ මොකක්ද කියලා</p>
      <p>
        මේ ඇප් එක ඔර්ගනික් පිලිබද කිසිම මූලික දැනීමක්වත් අවශ්‍ය නැතිව උවත් ඉගෙන
        ගන්න පුලුවන් විදියට තමයි අපි හදන්නෙ.. ඒකනිසා මේ වගෙ පොඩි දේවල් උනත් අපි
        මේකෙදි කියලා දෙනවා... ඔයා ඔර්ගනික් ගැන සාමන්‍ය දැනුමක් තියෙනම් මේක
        වැදගත් වෙන එකක් නැ සමහර විට.
      </p>
      <br />
      <p>
        හරි කාබනික රසායනයෙදි සිල්බස් එකේදි වගේම පරිවර්තන කරද්දි විවිද කාබනික
        සංයෝග අහු වෙනවා.. උදාහරන විදියට කලින් කියපු කාබක්සලික් අම්ල, ඇල්ඩිහයිඩ,
        කීටෝන ,ඇල්කොහොල වගේ ඒවා.. ඉතින් මේ කාබනික සංයෝග සමහර විට ඔයාට එකපාරටම
        අදුරගන්න බැරි වේවි.. අන්න ඒක නිසා තමා මේහෙම කොටසක් අපි දැම්මෙ මේකට...
      </p>
      <p className="blue">අපි බලමු උදාහරන කිහිපයක් ,</p>
      <br />
      <h2>1. කාබොක්සලික් අම්ලය</h2>
      <p className="highlight">අදුරගන්නෙ කොහොමද -</p>
      <p className="specialPoints">
        සැම විටම රූපයෙ දැක්වෙන පරිදි කාබන් දාමයේ කෙලවරක දිවිත්ව බන්දන O හා OH
        කාන්ඩයක් දැකගත හැකියි.
      </p>
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <h2>2. ඇල්ඩිහයිඩ</h2>
      <p className="highlight">හදුනාගන්න හැටි -</p>
      <p className="specialPoints">
        සෑම විටම කාබන් දාමයෙ කෙලවරක දිවිත්ව බන්දන O පමණක් ඇත්නම් ඇල්ඩිහයිඩ
        කාන්ඩයක් ලෙස එය හදුන්වයි
      </p>
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p className="blue">කුඩාම ඇල්ඩිහයිඩය - ෆෝමැල්ඩිහයිඩ්</p>
      <img
        src={image3}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <h2>3. කීටෝන</h2>
      <p className="highlight">හදුනාගන්න හැටි -</p>
      <p className="specialPoints">
        කාබන්දාමයෙ කෙලවරක නොමැතිව කාබන්ට දිවිත්ව බන්දන O පමණක් ඇත්නම් එය කීටෝන
        කාන්ඩයකි.
      </p>
      <img
        src={image4}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <h2>4. ප්‍රාතමික ඇල්කොහොලය</h2>
      <p className="highlight">හදුනාගන්න හැටි -</p>
      <p className="specialPoints">
        කාබන් දාමයෙ කෙලවරක් OH කාන්ඩයක් පමණක් අඩංගුනම් එය ඇල්කොහොල කාන්ඩයකි.
      </p>
      <img
        src={image5}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <h2>5. ද්විතීක ඇල්කොහොලය</h2>
      <p className="highlight">හදුනාගන්න හැටි -</p>
      <p className="specialPoints">
        OH කාන්ඩය අඩංගූ කාබන්ට දෙපසකින් පාමනක් කාබන් සම්බන්ද වී ඇත්නම් එය
        දිවිතීක ඇල්කොහොලයකි.
      </p>
      <img
        src={image6}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <h2>6. තෘතීක ඇල්කොහොලය</h2>
      <p className="highlight">හදුනාගන්න හැටි -</p>
      <p className="specialPoints">
        OH කාන්ඩය අඩංගූ කාබන්ට දෙපසකින් පාමනක් කාබන් සම්බන්ද වී ඇත්නම් එය තෘතීක
        ඇල්කොහොලයකි.
      </p>
      <img
        src={image7}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory11;
