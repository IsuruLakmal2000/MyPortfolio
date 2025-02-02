import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary
import image3 from "./3.png"; // Adjust path as necessary

const Theory25: React.FC = () => {
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
        <b>25. HCN සමග ඇල්ඩිහයිඩ හා කිටෝන දක්වන ප්‍රතික්‍රියාව</b>
      </h1>
      <p>
        <br />
      </p>
      <p>පහත ප්‍රතික්‍රියාව හොදින් බලන්න.</p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        ඔර්ගනික් වල අමාරු හරිය ඉවරයි.. බය නැතුව දැන් ඉස්සරහ ටික ගොඩදාගන්න
        පුලුවන්..
      </p>
      <p>
        ඉහත ප්‍රතික්‍රියාවෙදිත් කලින් බොහො ප්‍රතික්‍රියා වල වගේම ධන ආරොපිත
        ස්ථානයකට රින ආරෝපිත කාන්ඩයක් සම්බන්ධ වීම තමයි සිදුවෙන්නෙ. ඇල්ඩිහයිඩයේ හෝ
        කීටෝනයේ ඔක්සිජන් අඩංගූ කාබන් පරමානුව කුඩා ධන ගතියක් උසුලන බැවින් HCN වල
        CN⁻ කොටස ඒ හා සම්බන්ධ වීම තමයි මෙහිදි සිදුවෙන්නේ.. H⁺ කොටස තමයි ඔක්සිජන්
        වලට සම්බන්ධ වෙලා OH වෙන්නේ..
      </p>
      <br />
      <p className="highlight">
        *** KCN වැනි CN⁻ අයන අඩංගු සංයෝගයක් යෙදූවිට ඉහත ප්‍රතික්‍රියාව වඩාත්
        කාර්‍යක්ෂමව සිදු වෙයි...
      </p>
      <br />
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <img
        src={image3}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        <b>
          මෙතනින් පස්සෙ බෙන්සීන් තමයි පටන් ගන්න තීන්නෙ.. පට්ට වැදගත් වගේම පට්ට
          ලේසි කොටසක්... මෙච්චර කල් කරපු තියරි ටික ඔයා පිලිවෙලට බැලුවනම්
          පරිවර්තන ප්‍රශ්න තනියම උත්සහ කරානම් සහ ඒවා ආයේ ආයේ කරානම් ඔයාට මේ
          වෙද්දි ඔර්ගනික් වලට පට්ට ආසාවක් ඇති වෙලා තීන්න ඕන... අඩෝ! මට එහෙම
          ආසාවක් නැනෙ බන්!!... ඔව් වෙන්න පුලුවන්... ගනින් පාස්ට් පේපර් පොත කරපම්
          බෙන්සීන් නැති පරිවර්තන ටික... උබ මේකේ දීපු පරිවර්තන ප්‍රශ්න කලානම් ආයෙ
          ආයේ පාස්ට් පේපර් පොතේ තීන ප්‍රශ්න කිරි කජු වගේ කියල උබටම හිතේවී.....
          ඒවා කරන්න පුළුවන් කියද්දිවත් උබට ආසවක් දැනෙන්නෙ නැත්තම් උබ රහත් වෙච්ච
          එකෙක් වෙන්න ඕන..!
        </b>
      </p>
      <br />

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory25;
