function Support() {

  const styles = `
  
  .support{
    width:100%;
    padding:40px 20px;
    background:#f5f5f5;
    box-sizing:border-box;
    text-align:center;
    font-family:Arial, sans-serif;
  }

  .support h1{
    margin-bottom:30px;
    font-size:28px;
    color:#111;
  }

  /* GRID CONTAINER */
  .carrie{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));
    gap:20px;
  }

  /* CARDS */
  .thids,
  .offering,
  .rent,
  .temporaly{
    background:white;
    padding:25px;
    border-radius:16px;
    box-shadow:0 6px 18px rgba(0,0,0,0.08);
    text-align:left;
    transition:0.3s ease;
  }

  /* HOVER */
  .thids:hover,
  .offering:hover,
  .rent:hover,
  .temporaly:hover{
    transform:translateY(-6px);
    box-shadow:0 12px 25px rgba(0,0,0,0.12);
  }

  /* TEXT */
  .carrie h2{
    font-size:20px;
    margin-bottom:10px;
  }

  .carrie p{
    font-size:15px;
    line-height:26px;
    color:#444;
  }

  .carrie ul{
    margin:15px 0;
    padding-left:20px;
  }

  .carrie li{
    font-size:14px;
    margin-bottom:6px;
    color:#333;
  }

  /* BUTTON */
  .carrie button{
    padding:10px 15px;
    border:none;
    border-radius:8px;
    background:orangered;
    color:white;
    cursor:pointer;
    transition:0.3s;
  }

  .carrie button:hover{
    background:#ff5722;
  }

  /* TABLET */
  @media(max-width:768px){
    .support{
      padding:25px 15px;
    }

    .support h1{
      font-size:22px;
    }

    .carrie{
      grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));
      gap:15px;
    }

    .thids,
    .offering,
    .rent,
    .temporaly{
      padding:20px;
    }
  }

  /* MOBILE */
  @media(max-width:480px){
    .support{
      padding:15px 10px;
    }

    .support h1{
      font-size:20px;
    }

    .carrie{
      grid-template-columns:1fr;
    }

    .thids,
    .offering,
    .rent,
    .temporaly{
      padding:15px;
    }
  }

  
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="support">

        <h1>Church Support & Giving</h1>

        <section className="carrie">

          {/* TITHES */}
          <section className="thids">
            <h2>🙏 Tithes</h2>
            <p>Faithful giving through tithes helps support the ministry.</p>
            <ul>
              <li>Sunday Worship Support</li>
              <li>Youth Ministry</li>
              <li>Community Evangelism</li>
              <li>Church Maintenance</li>
            </ul>
            <button>Give Tithe</button>
          </section>

          {/* OFFERINGS */}
          <section className="offering">
            <h2>💝 Offerings</h2>
            <p>Offerings help support missions and families in need.</p>
            <ul>
              <li>Thanksgiving Offering</li>
              <li>Mission Support</li>
              <li>Widows Care</li>
              <li>Church Events</li>
            </ul>
            <button>Send Offering</button>
          </section>

          {/* RENT */}
          <section className="rent">
            <h2>🏠 Rent Assistance</h2>
            <p>We help families facing financial challenges.</p>
            <ul>
              <li>Emergency Shelter</li>
              <li>Family Assistance</li>
              <li>Counseling</li>
              <li>Food Support</li>
            </ul>
            <button>Request Help</button>
          </section>

          {/* TEMPORARY */}
          <section className="temporaly">
            <h2>🤝 Temporary Support</h2>
            <p>Support for people in difficult seasons.</p>
            <ul>
              <li>Medical Help</li>
              <li>Prayer Support</li>
              <li>Transport Help</li>
              <li>Visitation</li>
            </ul>
            <button>Contact Ministry</button>
          </section>

        </section>

      </div>
    </>
  );
}

export default Support;