import React from "react";

function MoreInfor() {
  return (
    <div className="moreinfor">
      {/* Left Section */}
      <section
        style={{
          flex: 1,
          minWidth: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            background: "#fff",
            borderRadius: "20px",
            padding: "40px 25px",
            textAlign: "center",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              color: "#1b5e20",
              marginBottom: "20px",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            🙏 Financial Support
          </h1>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
              fontSize: "1.1rem",
            }}
          >
            Your generous giving helps us continue spreading God's love,
            supporting ministry activities, and serving our community.
          </p>

          <div
            style={{
              background: "#00a651",
              color: "#fff",
              padding: "25px",
              borderRadius: "15px",
              margin: "30px 0",
            }}
          >
            <h2>M-Pesa Number</h2>

            <div
              style={{
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                fontWeight: "bold",
                letterSpacing: "3px",
              }}
            >
              0792180944
            </div>
          </div>

          <p
            style={{
              color: "#666",
              fontStyle: "italic",
            }}
          >
            Thank you for partnering with us in ministry.
          </p>
        </div>
      </section>

      {/* Right Section */}
      <section
        style={{
          flex: 1,
          minWidth: "320px",
          textAlign: "center",
        }}
      >
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/O5kFZj1GQa8?si=wM3pvt7cxsNHShE9"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            borderRadius: "15px",
          }}
        ></iframe>

        <h1>JOIN OUR LIVE STREAM</h1>
      </section>
    </div>
  );
}

export default MoreInfor;