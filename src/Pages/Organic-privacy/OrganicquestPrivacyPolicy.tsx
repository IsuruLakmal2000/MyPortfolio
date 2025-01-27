import React from "react";
import featureimage from "./feature-organic.jpg";
import "./Organicquest.css";
const OrganicQuest: React.FC = () => {
  return (
    <div className="container">
      <img src={featureimage} alt="Organic Chemistry" className="image" />
      <h1 className="title">Privacy Policy</h1>

      <p>
        Welcome to the privacy policy for Organic Quest, a game developed by
        CircularX games. This policy explains how we collect, use, and protect
        the personal information of our users.
      </p>

      <h2 className="subtitle">Information We Collect</h2>
      <p>
        When you create an account for Organic Quest, we will collect the
        following information:
      </p>
      <ul>
        <li className="list-item">
          Name: This is required for personalization and communication within
          the game.
        </li>
        <li className="list-item">
          Email Address: This is used for account management and communication
          purposes.
        </li>
        <li className="list-item">
          Account Password: This is used for secure login and authentication.
        </li>
        <li className="list-item">
          We do not collect any additional personal information beyond what is
          necessary for the basic functionality of the game.
        </li>
      </ul>

      <h2 className="subtitle">How We Use Your Information</h2>
      <p>
        The information we collect is used solely for the purpose of providing
        and improving the Organic Quest game experience. Specifically, we use
        your information to:
      </p>
      <ul>
        <li className="list-item">
          Authenticate your account and provide access to the game.
        </li>
        <li className="list-item">
          Communicate with you about your account, updates, and other important
          information.
        </li>
      </ul>

      <h2 className="subtitle">Data Protection and Security</h2>
      <p>
        We take the privacy and security of your information very seriously. We
        use industry-standard practices to protect your data, including
        encryption and access controls. Your personal information will not be
        shared with or sold to any third parties.
      </p>

      <h2 className="subtitle">Deleting Your Account</h2>
      <p>
        If you wish to delete your Organic Quest account, you can do so within
        the game settings. Upon deletion, all of your personal information will
        be permanently removed from our systems.
      </p>

      <h2 className="subtitle">Contact Information</h2>
      <div className="contact-info">
        <p>
          If you have any questions or concerns about this privacy policy,
          please contact us at:
        </p>
        <p>Email: isurulakmal200013@gmail.com</p>
      </div>
    </div>
  );
};
export default OrganicQuest;
