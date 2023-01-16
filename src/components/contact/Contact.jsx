import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  ArrowRight,
  EnvelopeOpen,
  PaperPlaneTilt,
  WhatsappLogo,
} from "phosphor-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5khi18c",
      "template_gnn6ghe",
      form.current,
      "InARslwoMdCbRt1Jp"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contacto">
      <h2 className="section-title">Ponerse en contacto</h2>
      <span className="section-subtitle">Contactame</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Hablame</h3>

          <div className="contact-info">
            <div className="contact-card">
              <EnvelopeOpen className="contact-card-icon" />
              <h3 className="contact-card-title">Correo</h3>
              <span className="contact-card-data">
                edwintorrado15@gmail.com
              </span>
              <a
                href="mailto:edwintorrado15@gmail.com"
                className="contact-button"
              >
                Escribeme
                <ArrowRight className="contact-button-icon" />
              </a>
            </div>

            <div className="contact-card">
              <WhatsappLogo className="contact-card-icon" />
              <h3 className="contact-card-title">WhatsApp</h3>
              <span className="contact-card-data">+57 3053773151</span>
              <a href="" className="contact-button">
                Escribeme
                <ArrowRight className="contact-button-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-content">
          <h3 className="contact-title">Escribeme tu proyecto </h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Nombre</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Escriba su nombre"
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Correo</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Escriba su correo"
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Proyecto</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Escriba su proyecto"
              />
            </div>

            <button className="button button-flex">
              Enviar <PaperPlaneTilt className="button-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
