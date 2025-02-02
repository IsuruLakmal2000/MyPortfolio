import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary

const Theory21: React.FC = () => {
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
        <b>
          21. ඇල්ඩිහයිඩ හා කීටෝන සමග ග්‍රිනාඩ් ප්‍රතිකාරය දක්වන කාබන් සංඛ්‍යාව
          වැඩි කිර්‍රිමෙ ප්‍රතික්‍රියා
        </b>
      </h1>
      <p>
        <br />
      </p>
      <p>පහත ප්‍රතික්‍රියාව දෙස හොදින් බලන්න..</p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        මෙහීදීද සිදුවන්නෙ රින(-) ගතියක් සහිත C ධන (+) ගතියක් සහිත කාබන් හා
        බැදීමයි. එවීට කීටොනයෙ හෝ ඇල්ඩිහයිඩයෙ C හා O අතර එක් බන්ධනයක් ඉවත්වී O ට
        රින ආරොපනයක් ලැබෙ. ඉන්පසු එම රින ආරෝපිත O කරා (MgCl)⁺ කොටස ඇදි එයි.
        අවසානයේදි එයට ජලය හෝ අම්ලයක් (H⁺) යොදන විට OH කාන්ඩයක් නිර්මානය වෙයි.
      </p>
      <br />

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory21;
