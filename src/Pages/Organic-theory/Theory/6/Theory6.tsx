import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary

const Theory6: React.FC = () => {
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
        <b>6. ඈල්කයින දක්වන ප්‍රතික්‍රියා</b>
      </h1>
      <p>
        <br />
      </p>
      <p>ඇල්කීන වගෙ තමයි ටිකක්...</p>
      <p className="specialPoints">
        Br₂, H₂, HBr , යන ප්‍රභේද සමග ඇල්කයින ඇල්කීන මෙන් ප්‍රතික්‍රියා වෙයි
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <p>
        <b className="blue">
          <p className="highlight">***වැදගත්</p>- සුදුසු නිශේදකයක් යොදාගෙන
          ප්‍රත්ක්‍රියාව අඩාල කිරිමටද මෙහිදි හැකියාව ඇත. එ කියන්නෙ ත්‍රිත්ව
          බන්දනෙන් එක බන්දනයක් පමණක් ඉවත් වෙලා අවසානයෙ කාබන් අතර දිවිත්ව බන්දනය
          ලැබෙන විට ප්‍රත්ක්‍රියාව නැවැත්වීමටත් පුලුවන්. ඒකට යොදගන්න ප්‍රතිකාරක
          උදාහරනෙකින් බලමු...
        </b>
      </p>
      <br />
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <p>
        ඉහත හයිඩ්‍රජන් සමග ලින්ඩ්ලර් විශ ලෙස ලිවීමද ප්‍රමානවත්.. ලින්ඩ්ලර් විශ
        යටතේ BaSO₄, Pd පවතී..
      </p>
      <p>
        හරි ඔන්න ඇල්කේන, ඇල්කීන, ඇල්කයින ප්‍රත්ක්‍රියාවන් ඉවරයි.. දැන් පොඩියට
        අපිට පරිවර්තන පටන් ගන්න පුලුවන්.. එහෙනම් දැනට කරපු ටික හොදට බලන්න. මහ
        ගොඩක් නැනෙ. අනික මේවා තමයි පරිවර්තනේක අනිවාර්‍යෙන්ම අහුවෙන ඒවා. මේ ටික
        හොදටම ප්‍රැක්ටිස් වෙන්න ඕන. ඒකට මේකෙ දෙන පරිවර්තන ප්‍රශ්න තනියෙන් කරන්න
        උත්සහ කරන්න.. මුල් පාරටනම් ඔයා පරිවර්තන කරන්න පටන් ගන්නෙ අනීවාර්‍යෙන්ම
        ඔයාට හදාගන්න බැරි වෙයි.. කමක් නැ. ඔයා ඒකෙන් හිතන්න පුරුදු වෙනවා ..
        වැරදෙද්දි තමයි ඉගෙනගන්නෙ.... පරිවර්තන ආයෙ ආයෙ කරන්න.. මේක මෙහෙම වෙන්නෙ
        කොමද මේකෙන් මේකට පරිවර්තනය උනෙ කොහොමද හිත හිත තමයි කරන්න ඕනෙ.. ඒනම් ඊලග
        එකෙන් හම්බ වෙමු.. උඹලට ජය..!!!!
      </p>

      <p className="highlight">
        ආ තව එකක් .... ප්ලේ ස්ටෝර් එකට ගිහින් අපේ ගේම් එකට හොද රිවිව් එකක්
        දාන්නත් අමතක කරන්නෙපා ඉතින් ! ඒ දේවල් කියවද්දි තමයි අපේ සතුට වැඩිවෙන්නෙ
        සහ අපිට මීටත් වඩා හොද දේවල් ඔයාලට දෙන්න දිරිමත් වෙන්නෙ.
      </p>

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory6;
