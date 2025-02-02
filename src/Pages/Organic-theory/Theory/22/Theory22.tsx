import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary

const Theory22: React.FC = () => {
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
        <b>22. අම්ල හේලයිඩ සමග ග්‍රිනාඩ් ප්‍රතිකාරකය දක්වන ප්‍රතික්‍රියා</b>
      </h1>
      <p>
        <br />
      </p>
      <p>පහත උදාහරනය හොදින් බලන්න</p>
      <p>
        අපි කලින් ඇල්කේන බැලුවනෙ. ඒවගෙ කාබන් අතර තනි බන්දන තමයි තිබුනෙ. නමුත්
        මෙහිදි තියෙන්නෙ කාබන් පරමානු අතර දිවිතව බන්දනයක්.. සමාන්‍ය එන් ඇල්කීනෙක
        පොදු සූත්‍රය මෙහෙම තීන්නෙ.
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        මෙහිදි පලමුව සිදුවන්නේ අම්ල හේලයිඩයේ හැලජන පරමානුව ඉවත්වී එ වෙනුවට රින
        (-) ගතියක් සහිත කාබන්ට ධන ගතියක් සහිත කාබන් බැදීමයි.
      </p>
      <p className="specialPoints">
        ඉන්පසුව තව දුරටත් ග්‍රිනාඩ් ප්‍රතිකාරකය පවතීනම් (වැඩිපුර ග්‍රිනාඩ්
        ප්‍රතිකාරකය හා ප්‍රතික්‍රියා කරවූ විට) තවත් ග්‍රිනාඩ් කොටසක් ධන ගතියක්
        සහිත කාබන් හා බැදේ.
      </p>
      <p>
        පලමු ප්‍රතික්‍රියාවෙන් පසුව කීටෝනයක් ඇතිවි ඇති බව පෙනේ. කීටෝනයෙ ද්විත්ව
        බන්ධන O නිසා එයට සම්බන්ධ කාබන් ධන ගතියක් උසුලයි.. එබැවින් ග්‍රිනාදි රින
        (-) ගතියක් සහිත කාබන් ඒ හා බැදේ..
      </p>
      <p>
        ඒ අනුව අම්ල හේලයිඩයක් සමග ග්‍රිනාඩ් ප්‍රතිකාරක අනු 2ක් උපරිමව
        ප්‍රතික්‍රියා කෙරේ...
      </p>
      <br />
      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory22;
