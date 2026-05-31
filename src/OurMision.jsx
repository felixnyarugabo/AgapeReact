import { useEffect, useState } from "react";

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
      setIndex((prev) => (prev + 1) % messages.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const styles = `
  
  .social {
    width: 100%;
    display: flex;
    gap: 25px;
    padding: 30px;
    box-sizing: border-box;
    background: #f5f5f5;
  }

  /* CARDS */
  .card {
    flex: 1;
    background: white;
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    transition: 0.3s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.12);
  }

  /* TEXT */
  .card h2 {
    font-size: 26px;
    margin-bottom: 10px;
  }

  .card h3 {
    font-size: 20px;
    line-height: 34px;
    color: #333;
  }

  .card p {
    font-size: 16px;
    line-height: 28px;
    color: #444;
  }

  /* TABLET */
  @media (max-width: 768px) {
    .social {
      flex-direction: column;
      padding: 20px;
      gap: 15px;
    }

    .card {
      padding: 20px;
      text-align: center;
    }

    .card h3 {
      font-size: 18px;
      line-height: 30px;
    }

    .card h2 {
      font-size: 22px;
    }
  }

  /* MOBILE */
  @media (max-width: 480px) {
    .social {
      padding: 10px;
    }

    .card {
      padding: 15px;
      border-radius: 12px;
    }

    .card h3 {
      font-size: 16px;
      line-height: 26px;
    }

    .card h2 {
      font-size: 18px;
    }
  }

  `;

  return (
    <>
      <style>{styles}</style>

      <div className="social">

        {/* CARD 1 */}
        <section className="card">
          <h3>{messages[index]}</h3>
        </section>

        {/* CARD 2 */}
        <section className="card">
          <h2>📍 Church Location</h2>
          <p>
            Omoja 3, Kwamaji, Nairobi, Kenya opposite <strong>P.C.A Church</strong>
          </p>
        </section>

      </div>
    </>
  );
}

export default SocialMedia;