import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary

const Theory10: React.FC = () => {
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
        <b>10. ආම්ලික H ආශ්‍රිත කාබන් වැඩි කිරීමේ ප්‍රතික්‍රියා (ක්‍රමය 2)</b>
      </h1>
      <p>
        <br />
      </p>
      <h2>ක්‍රමය 2</h2>
      <p className="specialPoints">
        ඇල්ඩිහයිඩ හා කිටෝන සමග ප්‍රතික්‍රියාව මගින් කාබන් සංඛ්‍යාව වැඩි කිරිම.
      </p>
      <p>මුලින්ම උදාහරනෙ බලන්න..</p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <ul>
        <li>
          <p className="specialPoints">
            මෙහිදි වම්පස ත්‍රිත්ව බන්දනේට යාබද කාබන් රින ආරෝපිතයිනෙ. දැන් ඔය
            ඊතලෙ උඩ තීන ඇල්ඩිහයිඩයෙ O විද්‍යුත් ස්ෘනතාවෙන් කාබන්ට වඩා වැඩියි..
            ඒක නිසා ඔක්සිජන් දෙසට ඉලෙක්ට්‍රෝන ඇදගන්නා නිසා එම ඔක්සිජන්ට සම්බන්ද
            කාබන්ට කුඩා දන ආරොපනයක් ලැබෙනවා...ඊටපස්සෙ ඔය ඇල්ඩිහයිඩෙ ධන කාබනුයි
            වම්
          </p>
        </li>
        <li>
          <p className="specialPoints">
            පස කොටසෙ තීන රින කාබනුයි සෙට් වෙනවා... මතකනෙ හැම වෙලෙම සෙට් වෙන්නෙ
            විරිද්ද ආරෝපන දෙන්නා.. කොල්ලයි කෙල්ලයි වගෙ හරියට!!
          </p>
        </li>
        <li>
          <p className="specialPoints">
            ඊටපස්සෙ දකුනු පැත්තෙ එ දෙන්න සෙට් උනාම ඔක්සිජන්ගෙ තීන්නෙ එක
            බන්දනයයි.. එතකොට ඔක්සිජන් රින ආරොපිත නිසා වම් පැත්තෙ තිබ්බ Na⁺ කැල්ල
            ඔතනට ලං වෙනවා..
          </p>
        </li>
      </ul>

      <br />
      <p className="blue">
        ** ඉහතදි ලැබුනු ඵලයට අම්ලයක් හෝ ජලය යෙදුවහොත් රින ආරොපිත O පරමානුව H⁺
        ලබාගනිමින් OH කාන්ඩයක් බවට පත්වෙයි..
      </p>
      <br />
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        <b>
          මේ තියරි වලට අදාල ප්‍රශ්න තමයි අපේ ගේම් එකේ මුල් හරියේ තියෙන්නෙ.. ඔයාට
          මේ තියරි බලලා ගේම් එක ඉස්සරහට කරගෙන යන්න පුලුවන්. අපි හැමවෙලේම ඔයාට
          වෙනස් අත්දැකීමක් එක්ක හොදම දේ දෙන්න තමයි මහන්සි වෙන්නේ ! ඒනිසා අපේ
          සතුට වෙන්නෙ ඔයා මේ දේවල් වලින් යමක් අරගෙන ගේම් එක දිගටම ප්ලේ කරගෙන යන
          එක තමයී ! ....
        </b>
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

export default Theory10;
