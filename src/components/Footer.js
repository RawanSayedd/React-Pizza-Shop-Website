import React from "react";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <LinkedinIcon />
        <GithubIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
      <p>
        &copy; CopyRights 2023,
        <a href="https://github.com/RawanSayedd" target="_blank">
          Rawan Sayed Aly
        </a>
      </p>
    </div>
  );
}

export default Footer;
