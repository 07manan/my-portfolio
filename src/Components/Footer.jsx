import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="social">
        <ul>
          <li>
            <a
              href="https://github.com/07manan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github-square" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/manan-patel-606a98221/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/07_manan?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/917069340884?text=Hii"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
          </li>
        </ul>
      </div>
      <p>
        <a
          href="https://github.com/07manan/my-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Designed & built by Manan Patel
        </a>
      </p>
    </div>
  );
}

export default Footer;
