import { useState } from "react";
import Utube from "./Utube";

function Homepage() {
  const [show, setShow] = useState(false);

  const styles = `
  
  /* MAIN PAGE */
  .home{
    width:100%;
    font-family:Arial, sans-serif;
    background:#f5f5f5;
  }

  /* HERO */
  .marquee{
    background:src="/public/image/web-agape-removebg-preview.png";
    color:blue;
     
    text-align:center;
    padding:15px;
  }

  .marquee h2{
    font-size:20px;
  }

  /* INFO SECTION */
  .moreinfor{
    display:flex;
    gap:25px;
    padding:30px;
    flex-wrap:wrap;
  }

  .left, .right{
    flex:1;
    background:white;
    padding:20px;
    border-radius:16px;
    box-shadow:0 6px 18px rgba(0,0,0,0.08);
  }

  /* TABLE */
  table{
    width:100%;
    border-collapse:collapse;
  }

  th, td{
    border:1px solid #ddd;
    padding:12px;
    text-align:center;
  }

  th{
    background:#111827;
    color:white;
  }

  /* SOCIAL SECTION */
  .social{
    text-align:center;
    padding:30px;
    background:white;
    margin:20px;
    border-radius:16px;
    box-shadow:0 6px 18px rgba(0,0,0,0.08);
  }

  .social button{
    padding:10px 20px;
    border:none;
    background:orangered;
    color:white;
    border-radius:8px;
    cursor:pointer;
    margin-top:10px;
  }

  .utube{
    margin-top:20px;
  }

  /* MISSION */
  .mission{
    padding:30px;
    text-align:center;
  }

  .Goals{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
    gap:20px;
  }

  .love, .joy, .faith{
    background:white;
    padding:20px;
    border-radius:16px;
    box-shadow:0 6px 18px rgba(0,0,0,0.08);
  }

  /* BLOG */
  .blog{
    padding:30px;
  }

  .find{
    background:white;
    padding:20px;
    border-radius:16px;
    box-shadow:0 6px 18px rgba(0,0,0,0.08);
    overflow-x:auto;
  }

  /* RESPONSIVE */
  @media (max-width:768px){

    .moreinfor{
      flex-direction:column;
      padding:15px;
    }

    .marquee h2{
      font-size:16px;
    }

    th, td{
      padding:8px;
      font-size:13px;
    }

    .social{
      margin:10px;
      padding:20px;
    }

  }
    .home{
  min-height:50vh; /* Adjust as needed */
  padding:10px;
}

  @media (max-width:480px){

  .home{
  min-height:50vh; /* Adjust as needed */
  padding:10px;
}
      

    .social{
      padding:15px;
    }

    .Goals{
      grid-template-columns:1fr;
    }

  }

  `;

  return (
    <>
      <style>{styles}</style>

      <div className="home">

        {/* HERO */}
        <div className="marquee">
          <h2>Welcome to Our Church Family ✝️ | “Come as you are, grow in faith”</h2>
        </div>

        {/* INFO */}
        <div className="moreinfor">

          <div className="left">
            <h1>About Our Church</h1>
            <p>
              We are a Christ-centered community dedicated to worship, teaching,
              and serving others.
            </p>
            <p>
              Join us every Sunday for powerful worship and uplifting messages.
            </p>
          </div>

          <div className="right">
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Start-Time</th>
                  <th>End-Time</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Sunday Service</td>
                  <td>Every Sunday</td>
                  <td>9:30 AM</td>
                  <td>1:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* SOCIAL */}
        <div className="social">
          <h2>Connect With Us</h2>
          <p>Follow us on social media for updates</p>

          <button onClick={() => setShow(!show)}>
            {show ? "Close Community" : "Join Community"}
          </button>

          <div className="utube">
            {show && <Utube />}
          </div>
        </div>

        {/* MISSION */}
        <div className="mission">
          <h1>Our Mission</h1>

          <div className="Goals">

            <div className="love">
              <h2>Love</h2>
              <p>We show God's love through kindness.</p>
            </div>

            <div className="joy">
              <h2>Joy</h2>
              <p>We celebrate faith with joy.</p>
            </div>

            <div className="faith">
              <h2>Faith</h2>
              <p>We grow stronger in faith.</p>
            </div>

          </div>
        </div>

        {/* BLOG */}
        <div className="blog">
          <div className="find">

            <h2>Upcoming Events</h2>

            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th> S-Time</th>
                  <th>E-Time</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Sunday Service</td>
                  <td>Every Sunday</td>
                  <td>9:00 AM</td>
                  <td>1:00 PM</td>
                </tr>

                <tr>
                  <td>Player day</td>
                  <td>Friday</td>
                  <td>2:00 PM</td>
                  <td>8:00 PM</td>
                  
                </tr>
                  <tr>
                  <td>Women Player</td>
                  <td>Wed day</td>
                  <td>2:00 PM</td>
                  <td>7:00 PM</td>
                  
                </tr>

                <tr>
                  <td>Prayer Night</td>
                  <td>Friday</td>
                  <td>10:00 PM</td>
                  <td>7:00 AM</td>
                </tr>
              </tbody>

            </table>

          </div>
        </div>

      </div>
    </>
  );
}

export default Homepage;