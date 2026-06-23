import { useState } from "react";
import { motion } from "framer-motion";
import { SiGmail, SiWhatsapp, SiInstagram } from "react-icons/si";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmailMessage = () => {
    const subject = "Pesan dari Portfolio Muhammad Zikri";

    const body = `
Nama Lengkap:
${name}

Email:
${email}

Nomor Telepon:
${phone}

Pesan:
${message}
`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=muhammadzikri549@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <motion.section
      id="contact"
      className="pp-contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <style>
        {`
          .pp-contact,
          .pp-contact * {
            box-sizing: border-box;
          }

          .pp-contact {
            width: 100%;
            padding: 70px var(--container-x, 8%) 80px;
            background: #ffffff !important;
            color: #000000 !important;
            overflow: hidden;
          }

          .pp-contact-box {
            width: 100%;
            background: #f3e4c8;
            border-radius: 24px;
            padding: 54px;
            border: 2px solid #000000;
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 54px;
            align-items: start;
            box-shadow: 8px 8px 0 #000000;
          }

          .pp-contact-info {
            min-width: 0;
          }

          .pp-contact-info h2 {
            display: inline-block;
            color: #000000;
            font-size: clamp(30px, 4vw, 48px);
            line-height: 1.15;
            margin: 0 0 24px;
            font-weight: 750;
            letter-spacing: -0.03em;
            border-bottom: 4px solid #f59e0b;
            padding-bottom: 10px;
          }

          .pp-contact-info p {
            color: #000000;
            line-height: 1.7;
            font-size: clamp(15px, 1.4vw, 18px);
            font-weight: 500;
            margin: 0 0 34px;
            max-width: 560px;
          }

          .pp-contact-list {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .pp-contact-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px;
            border-radius: 18px;
            border: 2px solid #000000;
            transition: all 0.28s ease;
            min-width: 0;
            text-decoration: none;
            color: #000000;
            box-shadow: 5px 5px 0 #000000;
          }

          .pp-contact-item:nth-child(1) {
            background: #f59e0b;
            box-shadow: 5px 5px 0 #92400e;
          }

          .pp-contact-item:nth-child(2) {
            background: #f3c4a8;
          }

          .pp-contact-item:nth-child(3) {
            background: #dfd0b7;
            box-shadow: 5px 5px 0 #000000;
          }

          .pp-contact-item:hover {
            transform: translate(-3px, -3px);
            box-shadow: 8px 8px 0 #000000;
          }

          .pp-contact-item:nth-child(1):hover {
            box-shadow: 8px 8px 0 #7c2d12;
          }

          .pp-contact-icon {
            width: 52px;
            height: 52px;
            min-width: 52px;
            border-radius: 14px;
            background: #ffffff;
            border: 2px solid #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            flex-shrink: 0;
            box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.28);
            transition: all 0.28s ease;
          }

          .pp-contact-icon svg {
            width: 25px;
            height: 25px;
            display: block;
          }

          .pp-gmail-icon {
            color: #ea4335;
          }

          .pp-whatsapp-icon {
            color: #25d366;
          }

          .pp-instagram-icon {
            background: radial-gradient(
              circle at 30% 107%,
              #fdf497 0%,
              #fdf497 5%,
              #fd5949 45%,
              #d6249f 62%,
              #285aeb 90%
            );
            color: #ffffff;
          }

          .pp-contact-item:hover .pp-contact-icon {
            transform: scale(1.06);
          }

          .pp-contact-item-content {
            min-width: 0;
          }

          .pp-contact-item span {
            display: block;
            color: rgba(0, 0, 0, 0.68);
            font-size: 12px;
            font-weight: 650;
            text-transform: uppercase;
            letter-spacing: 0.4px;
            margin-bottom: 4px;
          }

          .pp-contact-item h4 {
            color: #000000;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 720;
            margin: 0;
            overflow-wrap: anywhere;
            word-break: break-word;
          }

          .pp-contact-form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 18px;
            min-width: 0;
            background: #ffffff;
            border: 2px solid #000000;
            border-radius: 22px;
            padding: 26px;
            box-shadow: 6px 6px 0 #000000;
          }

          .pp-contact-form input,
          .pp-contact-form textarea {
            width: 100%;
            background: #fffaf0;
            border: 2px solid #000000;
            color: #000000;
            padding: 16px;
            border-radius: 14px;
            outline: none;
            font-size: 15px;
            line-height: 1.5;
            font-weight: 500;
            transition: all 0.28s ease;
          }

          .pp-contact-form textarea {
            resize: vertical;
            min-height: 150px;
            max-height: 320px;
          }

          .pp-contact-form input::placeholder,
          .pp-contact-form textarea::placeholder {
            color: rgba(0, 0, 0, 0.55);
          }

          .pp-contact-form input:focus,
          .pp-contact-form textarea:focus {
            background: #ffffff;
            border-color: #000000;
            box-shadow: 4px 4px 0 #f59e0b;
            transform: translate(-2px, -2px);
          }

          .pp-contact-form button {
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #f59e0b;
            color: #000000;
            border: 2px solid #000000;
            padding: 16px;
            border-radius: 30px;
            font-size: 15px;
            font-weight: 750;
            cursor: pointer;
            box-shadow: 6px 6px 0 #92400e;
            transition: all 0.28s ease;
          }

          .pp-contact-form button:hover {
            background: #fb923c;
            color: #000000;
            transform: translate(3px, 3px);
            box-shadow: 3px 3px 0 #7c2d12;
          }

          .pp-contact-form button:active {
            transform: translate(4px, 4px);
            box-shadow: 2px 2px 0 #7c2d12;
          }

          @media (max-width: 1200px) {
            .pp-contact-box {
              padding: 48px;
              gap: 42px;
            }
          }

          @media (max-width: 992px) {
            .pp-contact {
              padding: 64px var(--container-x, 6%) 72px;
            }

            .pp-contact-box {
              grid-template-columns: 1fr;
              padding: 42px;
              gap: 38px;
            }

            .pp-contact-list {
              max-width: 640px;
            }
          }

          @media (max-width: 768px) {
            .pp-contact {
              padding: 56px var(--container-x, 5%) 64px;
            }

            .pp-contact-box {
              padding: 32px 22px;
              border-radius: 22px;
              gap: 30px;
              box-shadow: 6px 6px 0 #000000;
            }

            .pp-contact-info h2 {
              font-size: 28px;
              margin-bottom: 16px;
            }

            .pp-contact-info p {
              font-size: 15px;
              line-height: 1.65;
              margin-bottom: 26px;
            }

            .pp-contact-list {
              gap: 14px;
            }

            .pp-contact-item {
              align-items: flex-start;
              padding: 14px;
              gap: 14px;
              box-shadow: 4px 4px 0 #000000;
            }

            .pp-contact-item:nth-child(1) {
              box-shadow: 4px 4px 0 #92400e;
            }

            .pp-contact-icon {
              width: 44px;
              height: 44px;
              min-width: 44px;
              font-size: 21px;
              border-radius: 12px;
            }

            .pp-contact-icon svg {
              width: 21px;
              height: 21px;
            }

            .pp-contact-item span {
              font-size: 10.5px;
            }

            .pp-contact-item h4 {
              font-size: 13.5px;
            }

            .pp-contact-form {
              padding: 22px;
              gap: 14px;
              border-radius: 18px;
              box-shadow: 5px 5px 0 #000000;
            }

            .pp-contact-form input,
            .pp-contact-form textarea {
              padding: 14px;
              font-size: 14px;
              border-radius: 12px;
            }

            .pp-contact-form textarea {
              min-height: 135px;
            }

            .pp-contact-form button {
              padding: 14px;
              font-size: 14px;
              border-radius: 12px;
            }
          }

          @media (max-width: 480px) {
            .pp-contact {
              padding-top: 46px;
              padding-bottom: 56px;
            }

            .pp-contact-box {
              padding: 26px 16px;
              border-radius: 20px;
              box-shadow: 5px 5px 0 #000000;
            }

            .pp-contact-info h2 {
              font-size: 26px;
            }

            .pp-contact-info p {
              font-size: 14.5px;
            }

            .pp-contact-item {
              padding: 13px;
              gap: 12px;
              border-radius: 15px;
            }

            .pp-contact-icon {
              width: 40px;
              height: 40px;
              min-width: 40px;
              border-radius: 11px;
            }

            .pp-contact-icon svg {
              width: 19px;
              height: 19px;
            }

            .pp-contact-item h4 {
              font-size: 12.8px;
            }

            .pp-contact-form {
              padding: 18px;
              border-radius: 16px;
              box-shadow: 4px 4px 0 #000000;
            }

            .pp-contact-form input,
            .pp-contact-form textarea,
            .pp-contact-form button {
              padding: 13px;
            }
          }

          @media (max-width: 360px) {
            .pp-contact-box {
              padding: 24px 14px;
            }

            .pp-contact-item {
              gap: 10px;
              padding: 12px;
            }

            .pp-contact-icon {
              width: 38px;
              height: 38px;
              min-width: 38px;
            }

            .pp-contact-item h4 {
              font-size: 12px;
            }

            .pp-contact-form {
              padding: 16px;
            }

            .pp-contact-form textarea {
              min-height: 120px;
            }
          }
        `}
      </style>

      <div className="pp-contact-box">
        <motion.div
          className="pp-contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>Kontak Saya</h2>

          <p>
            Hubungi saya melalui media sosial atau kirim pesan langsung melalui
            formulir di samping.
          </p>

          <div className="pp-contact-list">
            <a href="mailto:mz150904@gmail.com" className="pp-contact-item">
              <div className="pp-contact-icon pp-gmail-icon">
                <SiGmail />
              </div>

              <div className="pp-contact-item-content">
                <span>Email</span>
                <h4>muhammadzikri549@gmail.com</h4>
              </div>
            </a>

            <a
              href="https://wa.me/6281574779615"
              target="_blank"
              rel="noopener noreferrer"
              className="pp-contact-item"
            >
              <div className="pp-contact-icon pp-whatsapp-icon">
                <SiWhatsapp />
              </div>

              <div className="pp-contact-item-content">
                <span>WhatsApp</span>
                <h4>+62 815 7477 9615</h4>
              </div>
            </a>

            <a
              href="https://instagram.com/emzikrri"
              target="_blank"
              rel="noopener noreferrer"
              className="pp-contact-item"
            >
              <div className="pp-contact-icon pp-instagram-icon">
                <SiInstagram />
              </div>

              <div className="pp-contact-item-content">
                <span>Instagram</span>
                <h4>@emzikrri</h4>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.form
          className="pp-contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          onSubmit={(event) => {
            event.preventDefault();
            sendEmailMessage();
          }}
        >
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Alamat Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Nomor Telepon"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />

          <textarea
            rows="6"
            placeholder="Deskripsi"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />

          <button type="submit">Kirim Pesan</button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
