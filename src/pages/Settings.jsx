import { useState, useEffect, useRef } from "react";

function Support() {

  const [language, setLanguage] = useState("english");
  const [darkMode, setDarkMode] = useState(false);
  const [liveText, setLiveText] = useState("");
  const recognitionRef = useRef(null);

  const styles = `
  
  /* MAIN WRAPPER */
  .support {
    width: 100%;
    min-height: 100vh;
    padding: 30px;
    box-sizing: border-box;
    background: #f5f5f5;
    font-family: Arial, sans-serif;
    transition: 0.3s;
  }

  .support.dark {
    background: #121212;
    color: white;
  }

  /* TITLE */
  .support h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  /* SETTINGS CARD */
  .settings-card {
    max-width: 900px;
    margin: auto;
    background: white;
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);

    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .support.dark .settings-card {
    background: #1e1e1e;
  }

  /* EACH SETTING */
  .setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #eee;
    gap: 10px;
  }

  .support.dark .setting-item {
    border-bottom: 1px solid #333;
  }

  .setting-item label {
    flex: 1;
    font-size: 15px;
  }

  /* BUTTONS */
  button {
    padding: 8px 14px;
    border: none;
    border-radius: 8px;
    background: orangered;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background: #ff5722;
  }

  /* SAVE BUTTON */
  .save-btn {
    width: 100%;
    padding: 12px;
    background: green;
    font-size: 16px;
    margin-top: 10px;
  }

  /* LIVE TRANSLATION */
  .live-translation {
    flex-direction: column;
    align-items: flex-start;
  }

  .translation-box {
    margin-top: 15px;
    padding: 10px;
    border-radius: 8px;
    background: #f2f2f2;
  }

  .support.dark .translation-box {
    background: #222;
  }

  /* TEXTAREA */
  textarea {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    resize: none;
  }

  .support.dark textarea {
    background: #2a2a2a;
    color: white;
    border: 1px solid #444;
  }

  /* TABLET */
  @media (max-width: 768px) {
    .support {
      padding: 20px;
    }

    .setting-item {
      flex-direction: column;
      align-items: flex-start;
    }

    button {
      width: 100%;
      margin-top: 8px;
    }
  }

  /* MOBILE */
  @media (max-width: 480px) {
    .support {
      padding: 15px;
    }

    .settings-card {
      padding: 15px;
    }

    .setting-item {
      font-size: 14px;
    }

    textarea {
      font-size: 14px;
    }
  }

  `;

  return (
    <>
      <style>{styles}</style>

      <div className={darkMode ? "support dark" : "support"}>

        <h1>Church Settings</h1>

        <section className="settings-card">

          {/* LANGUAGE */}
          <div className="setting-item">
            <label>Language</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>English</option>
              <option>Kiswahili</option>
              <option>French</option>
              <option>Kinyamulenge</option>
            </select>
          </div>

          {/* THEME */}
          <div className="setting-item">
            <label>Theme</label>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* LIVE TRANSLATION */}
          <div className="setting-item live-translation">

            <label>Live Translation</label>

            <div>
              <button>Start</button>
              <button style={{ marginLeft: "10px" }}>Stop</button>
            </div>

            <div className="translation-box">
              <strong>English Translation:</strong>
              <p>{liveText}</p>
            </div>

            <textarea value={liveText} readOnly />

          </div>

          {/* SAVE */}
          <button className="save-btn">Save Settings</button>

        </section>

      </div>
    </>
  );
}

export default Support;