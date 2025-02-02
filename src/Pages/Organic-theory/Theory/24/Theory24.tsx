import React from "react";
import featureOrganic from "../../feature-organic.jpg"; // Updated import path
import image1 from "./1.png"; // Adjust path as necessary
import image2 from "./2.png"; // Adjust path as necessary

const Theory24: React.FC = () => {
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
        <b>24. ඇල්ඩෝල් සම්බන්ධ වැදගත් කරුනු කිහිපයක්</b>
      </h1>
      <p>
        <br />
      </p>
      <p>
        1. ඇල්ඩෝල් සංගනණයෙන් ලැබුණු ඵලයක් නම් එහිදි එම සංයෝගයේ OH කාණ්ඩයක්
        පැවතිය හැකි අතර එම OH කාණ්ඩය සහිත කාබන්ට කාබන් පරමානු දෙකක් ඈතින්
        ඇල්ඩිහයිඩ හෝ කීටෝන කාණ්ඩයක් දැකගත හැකිය..
      </p>
      <br />
      <img
        src={image1}
        alt=""
        style={{ display: "block", margin: "20px auto", maxWidth: "100%" }}
      />
      <br />
      <p>
        <b>මෙය ඵලයක් ඇල්ඩෝල් සංගනනයෙන් ලැබුනීද යන්න බලාගත හැකි උපක්‍රමයකි..</b>
      </p>
      <p>
        2. ඇල්ඩෝල් සගනණය මගින් එකම සංයෝගයක අඩංගු කාබන් සංඛ්‍යාව දෙගුන වනවා සේම
        එකිනෙකට වෙනස් සංයෝග දෙකකද එනම් ඇල්ඩිහයිඩ හා කීටෝන සමගද ඇල්ඩෝල් සංගනණය
        සිදු විය හැක.
      </p>
      <p>
        <b>
          3. ඇල්ඩෝල් සංගනණයෙන් ලැබුනු OH කාණ්ඩය විජලකාරයක් භාවිතයෙන් තොරව
          රත්කිරීමෙන් පමණක් උවද විජලනය කල හැක (විජලනය කරනවා කියන්නෙ ජල අණුවක්
          ඉවත් කරනවා කියන එක)
        </b>
      </p>
      <br />
      <img
        src={image2}
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

export default Theory24;
