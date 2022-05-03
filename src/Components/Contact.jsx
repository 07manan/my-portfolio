import React from "react";

function Contact() {
  return (
    <div id="contact">
      <div className="contact">
        <h2>Contact Me</h2>
        <form className="form">
          <div data-aos="fade-right" className="input">
            <p>Name:</p>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div data-aos="fade-right" className="input">
            <p>Email:</p>
            <input type="email" placeholder="Enter Email" />
          </div>
          <div data-aos="fade-right" className="input">
            <p>Phone No.:</p>
            <input type="number" placeholder="Enter Phone No." />
          </div>
          <div data-aos="fade-right" className="input">
            <p>Message:</p>
            <textarea
              type="text"
              placeholder="Why do you want to contact me?"
            />
          </div>
          <input type="submit" className="submit" value="Send" />
        </form>
        <div aos-data="fade-left" className="contactdetails">
          <table>
            <tbody>
              <tr>
                <td>
                  <i className="fa-solid fa-location-dot" />
                </td>
                <td>
                  <a
                    href="https://goo.gl/maps/ymRTngg9wbau1TM37"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nava Revas, Idar, Gujarat 383450
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-phone" />
                </td>
                <td>
                  <a href="tel:+91 7069340884" target="_blank" rel="noreferrer">
                    +91 7069340884
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-solid fa-envelope" />
                </td>
                <td>
                  <a
                    href="mailto:07manan1850@gmailcom"
                    target="_blank"
                    rel="noreferrer"
                  >
                    07manan1850@gmail.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contact;
