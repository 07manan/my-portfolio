import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [btnDisabled, setBtnDisabled] = React.useState(false);

  const statechange = () => {
    setBtnDisabled(true);
  };

  const sendEmail = (e) => {
    statechange();
    console.log(btnDisabled);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wghu8pa",
        "template_oon5utn",
        form.current,
        "sFlcX8HMdzYbdUL4x"
      )
      .then(
        (result) => {
          toast.success("Your message has been sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.name.value = "";
          form.current.email.value = "";
          form.current.phone.value = "";
          form.current.message.value = "";
        },
        (error) => {
          toast.error("Error, message not sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <div id="contact">
      <div className="contact">
        <h2>Contact Me</h2>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div data-aos="fade-right" className="input">
            <p>Name:</p>
            <input type="text" name="name" placeholder="Enter Name" />
          </div>
          <div data-aos="fade-right" className="input">
            <p>Email:</p>
            <input type="email" name="email" placeholder="Enter Email" />
          </div>
          <div data-aos="fade-right" className="input">
            <p>Phone No.:</p>
            <input type="number" name="phone" placeholder="Enter Phone No." />
          </div>
          <div data-aos="fade-right" className="input">
            <p>Message:</p>
            <textarea
              type="text"
              name="message"
              placeholder="How can I help you?"
            />
          </div>
          <input
            disabled={btnDisabled}
            type="submit"
            className="submit"
            value="Send"
          />
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
      <ToastContainer className="toast" />
    </div>
  );
}

export default Contact;
