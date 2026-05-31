import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nav = [
    {
      name: "home",
      path: "Home",
    },
    {
      name: "service",
      path: "Service",
    },
    {
      name: "Support",
      path: "support",
    },
    {
      name: "setting",
      path: "Setting",
    },
  ];

  return (
    <div className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        background: "light-blue",
        color: "orange",
        position: "relative",
        baground:"/public/image/c3e8e8d34fb7eb3e3a618b333f9ccd61.jpg"
      }}
      
    >
      {/* LOGO */}
      <div>
         <a href="https://www.youtube.com/@agapelightchurchinternatio1035" target="_blank" rel="noreferrer">
                    <img src="image/web-agape-removebg-preview.png" alt="" width={"40px"} />
                  </a>
        
      </div>

      {/* ICON ONLY BELOW 600PX */}
      {mobile && (
        <div
          onClick={() => setOpen(!open)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
          }}
        >
          ☰
        </div>
      )}

      {/* NAV CONTENT */}
      <div
        style={{
          display: mobile ? (open ? "flex" : "none") : "flex",
          flexDirection: mobile ? "column" : "row",
          alignItems: "center",
          gap: mobile ? "20px" : "40px",

          /* ORIGINAL STYLE ON BIG SCREEN */
          position: mobile ? "absolute" : "static",
          top: mobile ? "70px" : "",
          right: mobile ? "10px" : "",
          background: mobile ? "#222" : "transparent",
          padding: mobile ? "20px" : "0",
          borderRadius: mobile ? "10px" : "0",
        }}
      >
        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search"
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "none",
            width: mobile ? "100%" : "200px",

          } }
        />

        {/* LINKS */}
        <ul
          style={{
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            gap: mobile ? "20px" : "160px",
            listStyle: "none",
            margin: "0",
            padding: "0",
            
          }}
        >
          {nav.map((object) => (
            <li key={object.path}>
              <Link
                to={object.path}
                style={{
                  color: "white",
                  textDecoration: "none",
                }} 
              >
                {object.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;