import { useEffect, useState } from "react";
// import "./SocialMedia.css";


function SocialMedia() {
  const messages = [
    "Welcome to our church family 🌿 May God fill your heart with peace and joy.",
    "You are not here by accident 🙏 God has a purpose for your life.",
    "May your faith grow stronger today and your worries be replaced with hope ✨",
    "God loves you deeply ❤️ You are welcome in His house of grace.",
    "Be encouraged today 💛 This is a place of healing, love, and restoration.",
    "May the Lord bless you and keep you as you worship with us today 🙌",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="social">

      {/* WELCOME */}
      <section className="welcome">

        <h3>
          {messages[index]}
        </h3>

      </section>

      {/* LOCATION */}
      <section className="location">

        <h2>📍 Church Location</h2>

        <p>
          Omoja 3, Kwamaji, Nairobi, Kenya opposite
          <strong> P.C.A Church</strong>
        </p>

      </section>

    </div>
  );
}

export default SocialMedia;