import React from "react";
import "./LegacyPrivacy.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy governs the manner in which Legacy Defenders Mobile
        collects, uses, maintains, and discloses information collected from
        users of the Legacy Defenders Mobile game.
      </p>

      <h2>Information Collection and Usage</h2>
      <p>
        Legacy Defenders Mobile does not collect any personal information or
        data from its users. The game does not require an internet connection to
        function, and no user data is collected or stored.
      </p>

      <h2>Advertising</h2>
      <p>
        Legacy Defenders Mobile may display third-party advertisements within
        the game. These advertisements may be provided by external ad networks,
        and they may use cookies or similar technologies to collect non-personal
        information about the user's device, such as the device type, IP
        address, and in-game activities. Legacy Defenders Mobile does not have
        control over the content or privacy practices of these third-party
        advertisements.
      </p>

      <h2>Permission</h2>
      <p>
        Legacy Defenders Mobile does not request or require any kind of
        permissions from the user, as it does not collect personal information,
        access device features, or require an internet connection to function.
        The game respects the privacy of its users and does not involve any
        intrusive permissions.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Legacy Defenders Mobile is intended for a general audience and does not
        knowingly collect any personal information from children under the age
        of 13. If a parent or guardian believes that their child has provided
        personal information to us, they should contact us immediately at
        contact.legacydefenders@gmail.com. We will make reasonable efforts to
        promptly remove the information from our records.
      </p>

      <h2>Contact Information</h2>
      <div className="contact-info">
        <p>
          For any inquiries or concerns regarding privacy or the Legacy
          Defenders Mobile game, users can contact us at:
        </p>
        <p>Email: contact.legacydefenders@gmail.com</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
