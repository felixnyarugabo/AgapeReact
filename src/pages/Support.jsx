import React from "react";

function SupportBoard() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Financial Support</h1>

        <p style={styles.text}>
          Support our ministry through M-Pesa
        </p>

        <div style={styles.numberBox}>
          <span style={styles.number}>0792180944</span>
        </div>

        <p style={styles.note}>
          Thank you for your generosity and support.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "#f4f6f9",
  },
  card: {
    width: "100%",
    maxWidth: "600px",
    background: "#fff",
    borderRadius: "20px",
    padding: "40px 20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "15px",
    color: "#1a202c",
  },
  text: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    marginBottom: "25px",
    color: "#555",
  },
  numberBox: {
    background: "#00a651",
    color: "#fff",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px",
  },
  number: {
    fontSize: "clamp(1.8rem, 6vw, 3rem)",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  note: {
    color: "#666",
    fontSize: "1rem",
  },
};

export default SupportBoard;