import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary

const Theory18: React.FC = () => {
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
        <b>18. ග්‍රීනාඩ් ප්‍රතීකාරකය සැදීමට සපුරාලිය යුතු අවශ්‍යතා..</b>
      </h1>
      <p>
        <br />
      </p>
      <p className="specialPoints">
        1. අදාල කාබනික සංයෝගයේ හැලජන පරමානුවක් අඩංගු විය යුතුය.
      </p>
      <p className="specialPoints">
        2. අදාල කාබනික සංයෝගය තුල පහත කොටස් අඩංගු නොවිය යුතුය.
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p className="specialPoints">
        3. අදාල කාබනික සංයෝගය තුල ඇල්ඩිහයිඩ , කීටෝන , අම්ල හේලයිඩ, එස්ටර යනාදි
        ග්‍රිනාඩ් ප්‍රතිකාරකය සමග ප්‍රතික්‍රියා කරන කාන්ඩ නොතිබිය යුතුය.
      </p>
      <br />
      <p>
        පහත කාබනික සංයෝග අතරින් ග්‍රිනාඩ් ප්‍රතිකාරකය සැදිය හැකි කාබනික සංයෝග
        තෝරන්න
      </p>

      <br />
      <img
        src={image2}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p className="highlight">
        <b>
          ** සාරංශයක් ලෙස ගත් විට O හා N කොටස් යම් කිසි සංයෝගයක පැවතියහොත් එවැනි
          කාබනික සංයෝගයකින් බොහො විට ග්‍රිනාඩ් ප්‍රතිකාරක පිලියෙල කල නොහැක..
        </b>
      </p>

      <div style={{ textAlign: "center" }}>
        <img src={featureOrganic} alt="Organic" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Theory18;
