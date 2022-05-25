import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Provide your name"),
  email: yup.string().email().required("Please provide your email"),
  phone: yup.string().required("Please provide your Phone No."),
  message: yup
    .string()
    .required("Provide your message so that I can contact you"),
});

function Contact() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const sendEmail = (e) => {
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
        <form className="form" ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div data-aos="fade-right" className="input">
            <p>Name:</p>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              {...register("name")}
            />
            <p className="error">{errors.name?.message}</p>
          </div>
          <div data-aos="fade-right" className="input">
            <p>Email:</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              {...register("email")}
            />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div data-aos="fade-right" className="input">
            <p>Phone No.:</p>
            <input
              type="number"
              name="phone"
              placeholder="Enter Phone No."
              {...register("phone")}
            />
            <p className="error">{errors.phone?.message}</p>
          </div>
          <div data-aos="fade-right" className="input">
            <p>Message:</p>
            <textarea
              type="text"
              name="message"
              placeholder="How can I help you?"
              {...register("message")}
            />
            <p className="error">{errors.message?.message}</p>
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
      <ToastContainer className="toast" />
    </div>
  );
}

export default Contact;
