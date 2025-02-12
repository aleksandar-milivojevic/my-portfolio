import React from "react";
import SocialBtns from "./SocialBtns";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react";

export default function Contact({ data, socialData }) {
  const { sectionHeading, contactImg, contactInfo } = data;
  return (
    <section id="contactus" className="section contactus-section">
      <div className="container">
        <div className="contactus-box rounded overflow-hidden gray-bg">
          <div className="row g-0 p-4 p-lg-5">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              <div
                className="contactus-title"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h5>{sectionHeading.title}</h5>
                <p className="m-0">{sectionHeading.subTitle}</p>
              </div>
            </div>
          </div>
          <div className="row g-0 contactus-form p-4 p-lg-5 flex-row-reverse">
            <div className="col-lg-8">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-4 pe-md-5">
              <div className="contact-banner d-none d-lg-block">
                <img src={contactImg} title alt="Avatar" />
              </div>
              <ContactInfo contactInfoData={contactInfo} />
              <SocialBtns socialBtns={socialData} />

              {/* Dugme sada dolazi ispod socijalnih mreža */}
              <div className="download-cv mt-4 text-start">
                <a
                  href="/AleksandarMilivojevicCV.pdf"
                  download
                  className="cv-btn"
                >
                  <Icon icon="bi:download" className="me-2" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stilizacija dugmeta */}
      <style jsx>{`
        .cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #007bff;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.3s ease;
        }
        .cv-btn:hover {
          background: #0056b3;
        }
      `}</style>
    </section>
  );
}
