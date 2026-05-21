import React from "react";

function SocialMedia() {
  return (
    <div className="social">
      <section className="welcome">
        <h3>
          Welcome to our church, a place of faith, hope, <br /> and love in
          Jesus Christ. We are glad you are here to worship with us. <br /> May
          you feel God’s presence, peace, and joy. <br /> We invite you to grow
          spiritually, connect with others, <br />
          and experience the transforming power of God’ <br />s Word today.
        </h3>
      </section>
      <section className="location">
        <h2>📍 Church Location</h2>

        <p>
          Our church is located in{" "}
          <strong>Omoja 3, Kwamaji, Nairobi, Kenya</strong>, alongside{" "}
          <strong>P.C.A Church</strong>.
        </p>

        <span className="small-text">Easy to find • Everyone is welcome</span>
      </section>
    </div>
  );
}

export default SocialMedia;
