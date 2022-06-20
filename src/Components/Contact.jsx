import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdDoneAll } from "react-icons/io";

function Contact() {
  const form = useRef();
  const [btnDisabled, setBtnDisabled] = React.useState(false);
  const disableBtn = () => {
    setBtnDisabled(true);
  };

  const sendEmail = (e) => {
    disableBtn();
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

  // const copyEmail = async () => {
  //   try {
  //     await navigator.clipboard.writeText("07manan1850@gmail.com");
  //     toast.success("Email copied to clipboard", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div id="contact">
      <div className="contact">
        <h1 className="animateIn">Contact Me</h1>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="input">
            <p>Name:</p>
            <input type="text" name="name" placeholder="Enter Name" />
          </div>
          <div className="input">
            <p>Email:</p>
            <input type="email" name="email" placeholder="Enter Email" />
          </div>
          <div className="input">
            <p>Phone No.:</p>
            <input type="number" name="phone" placeholder="Enter Phone No." />
          </div>
          <div className="input">
            <p>Message:</p>
            <textarea
              type="text"
              name="message"
              placeholder="How can I help you?"
            />
          </div>
          <button disabled={btnDisabled} type="submit" className="submit">
            {btnDisabled ? <IoMdDoneAll /> : "Send"}
          </button>
        </form>
      </div>
      <ToastContainer className="toast" />
    </div>
  );
}

export default Contact;
