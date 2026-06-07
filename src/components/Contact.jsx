import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsAppMessage = () => {
    const waNumber = "6281574779615";

    const text = `Halo Muhammad Zikri,

Full Name: ${name}
Email: ${email}
Phone Number: ${phone}

Message:
${message}`;

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <motion.section
      id="contact"
      className="contact mz-contact-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <style>
        {`
          .mz-contact-section {
            width: 100%;
            overflow: hidden;
          }

          .mz-contact-box {
            width: 100%;
            background: #111c2d;
            border-radius: 40px;
            padding: 60px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 60px;
            align-items: start;
          }

          .mz-contact-info {
            min-width: 0;
          }

          .mz-contact-info h2 {
            color: #ffffff;
            font-size: clamp(32px, 5vw, 58px);
            line-height: 1.15;
            margin: 0 0 24px;
            font-weight: 600;
            letter-spacing: -0.03em;
          }

          .mz-contact-info p {
            color: #a7b0c0;
            line-height: 1.7;
            font-size: clamp(15px, 1.4vw, 18px);
            margin: 0 0 36px;
            max-width: 560px;
          }

          .mz-contact-list {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .mz-contact-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.035);
            border: 1px solid rgba(255, 255, 255, 0.06);
            transition: all 0.3s ease;
            min-width: 0;
            text-decoration: none;
          }

          .mz-contact-item:hover {
            transform: translateX(6px);
            border-color: rgba(16, 185, 129, 0.35);
            background: rgba(255, 255, 255, 0.08);
          }

          .mz-contact-icon {
            width: 52px;
            height: 52px;
            min-width: 52px;
            border-radius: 16px;
            background: #172234;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            flex-shrink: 0;
          }

          .mz-contact-icon img {
            width: 24px;
            height: 24px;
            object-fit: contain;
            display: block;
          }

          .mz-whatsapp-icon {
            color: #25d366;
          }

          .mz-instagram-icon {
            color: #e4405f;
          }

          .mz-contact-item-content {
            min-width: 0;
          }

          .mz-contact-item span {
            display: block;
            color: #7d8796;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.4px;
            margin-bottom: 4px;
          }

          .mz-contact-item h4 {
            color: #ffffff;
            font-size: 16px;
            line-height: 1.35;
            font-weight: 700;
            margin: 0;
            overflow-wrap: anywhere;
            word-break: break-word;
          }

          .mz-contact-form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 18px;
            min-width: 0;
          }

          .mz-contact-form input,
          .mz-contact-form textarea {
            width: 100%;
            background: #081425;
            border: 1px solid rgba(255, 255, 255, 0.06);
            color: #ffffff;
            padding: 16px;
            border-radius: 14px;
            outline: none;
            font-size: 15px;
            line-height: 1.5;
            transition: all 0.3s ease;
          }

          .mz-contact-form textarea {
            resize: vertical;
            min-height: 150px;
            max-height: 320px;
          }

          .mz-contact-form input::placeholder,
          .mz-contact-form textarea::placeholder {
            color: #7d8796;
          }

          .mz-contact-form input:focus,
          .mz-contact-form textarea:focus {
            border-color: rgba(16, 185, 129, 0.7);
            box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12);
          }

          .mz-contact-form button {
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: rgba(16, 185, 129, 0.16);
            color: #10b981;
            border: 2px solid rgba(16, 185, 129, 0.75);
            padding: 16px;
            border-radius: 14px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .mz-contact-form button:hover {
            background: #10b981;
            color: #06111f;
            border-color: #10b981;
            transform: translateY(-3px);
            box-shadow: 0 0 28px rgba(16, 185, 129, 0.24);
          }

          .mz-contact-form button:active {
            transform: translateY(-1px);
          }

          @media (max-width: 1200px) {
            .mz-contact-box {
              padding: 52px;
              gap: 46px;
            }
          }

          @media (max-width: 992px) {
            .mz-contact-box {
              grid-template-columns: 1fr;
              padding: 44px;
              gap: 40px;
            }

            .mz-contact-info {
              text-align: center;
            }

            .mz-contact-info p {
              margin-left: auto;
              margin-right: auto;
            }

            .mz-contact-list {
              max-width: 640px;
              margin: 0 auto;
            }
          }

          @media (max-width: 768px) {
            .mz-contact-box {
              padding: 32px 22px;
              border-radius: 26px;
              gap: 30px;
            }

            .mz-contact-info h2 {
              font-size: 28px;
              font-weight: 600;
              margin-bottom: 16px;
            }

            .mz-contact-info p {
              font-size: 15px;
              line-height: 1.65;
              margin-bottom: 26px;
            }

            .mz-contact-list {
              gap: 14px;
            }

            .mz-contact-item {
              align-items: flex-start;
              padding: 14px;
              gap: 14px;
            }

            .mz-contact-item:hover {
              transform: translateY(-3px);
            }

            .mz-contact-icon {
              width: 44px;
              height: 44px;
              min-width: 44px;
              font-size: 20px;
              border-radius: 14px;
            }

            .mz-contact-icon img,
            .mz-contact-icon svg {
              width: 21px;
              height: 21px;
            }

            .mz-contact-item span {
              font-size: 10.5px;
            }

            .mz-contact-item h4 {
              font-size: 13.5px;
            }

            .mz-contact-form {
              gap: 14px;
            }

            .mz-contact-form input,
            .mz-contact-form textarea {
              padding: 14px;
              font-size: 14px;
              border-radius: 12px;
            }

            .mz-contact-form textarea {
              min-height: 135px;
            }

            .mz-contact-form button {
              padding: 14px;
              font-size: 14px;
              border-radius: 12px;
            }
          }

          @media (max-width: 480px) {
            .mz-contact-box {
              padding: 28px 18px;
              border-radius: 22px;
            }

            .mz-contact-info h2 {
              font-size: 26px;
              font-weight: 600;
            }

            .mz-contact-info p {
              font-size: 14.5px;
            }

            .mz-contact-item {
              padding: 13px;
              gap: 12px;
              border-radius: 15px;
            }

            .mz-contact-icon {
              width: 40px;
              height: 40px;
              min-width: 40px;
              border-radius: 12px;
            }

            .mz-contact-icon img,
            .mz-contact-icon svg {
              width: 19px;
              height: 19px;
            }

            .mz-contact-item h4 {
              font-size: 12.8px;
            }

            .mz-contact-form input,
            .mz-contact-form textarea,
            .mz-contact-form button {
              padding: 13px;
            }
          }

          @media (max-width: 360px) {
            .mz-contact-box {
              padding: 24px 14px;
            }

            .mz-contact-item {
              gap: 10px;
              padding: 12px;
            }

            .mz-contact-icon {
              width: 38px;
              height: 38px;
              min-width: 38px;
            }

            .mz-contact-item h4 {
              font-size: 12px;
            }

            .mz-contact-form textarea {
              min-height: 120px;
            }
          }
        `}
      </style>

      <div className="mz-contact-box">
        <motion.div
          className="mz-contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>Kontak Saya</h2>

          <p>
            Hubungi sosial media kami
          </p>

          <div className="mz-contact-list">
            <a href="mailto:mz150904@gmail.com" className="mz-contact-item">
              <div className="mz-contact-icon mz-gmail-icon">
                <img
                  src="https://cdn.simpleicons.org/gmail/EA4335"
                  alt="Gmail logo"
                />
              </div>

              <div className="mz-contact-item-content">
                <span>Email</span>
                <h4>mz150904@gmail.com</h4>
              </div>
            </a>

            <a
              href="https://wa.me/6281574779615"
              target="_blank"
              rel="noopener noreferrer"
              className="mz-contact-item"
            >
              <div className="mz-contact-icon mz-whatsapp-icon">
                <FaWhatsapp />
              </div>

              <div className="mz-contact-item-content">
                <span>WhatsApp</span>
                <h4>+62 815 7477 9615</h4>
              </div>
            </a>

            <a
              href="https://instagram.com/emzikrri"
              target="_blank"
              rel="noopener noreferrer"
              className="mz-contact-item"
            >
              <div className="mz-contact-icon mz-instagram-icon">
                <FaInstagram />
              </div>

              <div className="mz-contact-item-content">
                <span>Instagram</span>
                <h4>@emzikrri</h4>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.form
          className="mz-contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          onSubmit={(event) => {
            event.preventDefault();
            sendWhatsAppMessage();
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
