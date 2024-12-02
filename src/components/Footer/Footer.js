import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-title">
          <h1 onClick={() => (window.location.href = "/")}>
            Movie<span>Mania</span>
          </h1>
        </div>
        <div className="footer-about-container">
          <div className="footer-about">
            <small>All about subscriptions</small>
          </div>
          <div className="footer-about">
            <small>Activate Promotional Code</small>
          </div>
          <div className="footer-about">
            <small>User Agreement</small>
          </div>
          <div className="footer-about">
            <small>Privacy Policy</small>
          </div>
          <div className="footer-about">
            <small>Delete Profile</small>
          </div>
        </div>

        <div className="footer-media-container">
          <div className="footer-media">
            <small>Tv and media players</small>
          </div>
          <div className="footer-media">
            <small>Smartphones</small>
          </div>
          <div className="footer-media">
            <small>+233 123 478 459</small>
          </div>
          <div className="support-container" id="support-containerid">
            <div className="support">
              <small>Support</small>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-links-container">
        <div className="footer-socials">
          <div className="footer-links">
            <small>
              <a href="#">Twitter</a>
            </small>
          </div>
          <div className="footer-links">
            <small>
              <a href="#">Facebook</a>
            </small>
          </div>
          <div className="footer-links">
            <small>
              <a href="#">Youtube</a>
            </small>
          </div>
        </div>

        <div className="footer-copyright">
          <small>2024 All rights reserved</small>
        </div>
      </div>
    </div>
  );
}
