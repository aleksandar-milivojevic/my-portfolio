import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handler for input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form data before sending:", formData);
    console.log("Form reference:", formRef.current);

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    setIsSending(true);
    setErrorMessage("");

    emailjs
      .sendForm(
        "service_dyqd8hm", // Service ID
        "template_8w1w5pz", // Template ID
        formRef.current,
        "grRixWY2V0ERZ5YQO" // Public Key
      )
      .then(
        (response) => {
          console.log("Email sent!", response.status, response.text);
          alert("Your message has been sent!");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
          setIsSending(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
          setErrorMessage("Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <form ref={formRef} id="contact-form" onSubmit={sendEmail}>
      <div className="row gx-3 gy-4">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              name="user_name"
              placeholder="Name *"
              className="form-control"
              type="text"
              value={formData.user_name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input
              name="user_email"
              placeholder="Email *"
              className="form-control"
              type="email"
              value={formData.user_email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              name="subject"
              placeholder="Subject *"
              className="form-control"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your message</label>
            <textarea
              name="message"
              placeholder="Your message *"
              rows={4}
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <div className="col-md-12">
          <div className="send">
            <button
              className={`px-btn w-100 ${loading ? "disabled" : ""}`}
              type="submit"
              disabled={isSending}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

// const onSubmit = async event => {
//   event.preventDefault();
//   setLoading(true);
//   const formData = new FormData(event.target);

//   formData.append('access_key', '6d7bc3fc-6190-43c5-8298-89ac5ef7494f');

//   const object = Object.fromEntries(formData);
//   const json = JSON.stringify(object);

//   const res = await fetch('https://api.web3forms.com/submit', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: json,
//   }).then(res => res.json());

//   if (res.success) {
//     setFormData({ name: '', email: '', subject: '', message: '' });
//     setLoading(false);
//   }
// };
