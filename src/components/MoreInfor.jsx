import React, { useEffect, useState } from "react";

function MoreInfor() {
  const [change, setChange] = useState(0);

  const infor = [
    `Agape love is God’s unconditional,
sacrificial love shown to humanity.`,

    `Agape love is the highest form of love, coming directly from God.`,

    `Bible Verse:
“Love one another as I have loved you.” — John 13:34`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setChange((prev) => (prev + 1) % infor.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [change]);

  return (
    <div className="moreinfor" >
      <section className="left" >
        {/* <h1>AGAPE</h1> */}
        {/* <p>{infor[change]}</p> */}
      </section>

      <section className="right" >
        {/* <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/iH7j8v0ud8g"
          title="Church Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}

        <iframe width="560" height="315" src="https://www.youtube.com/embed/O5kFZj1GQa8?si=wM3pvt7cxsNHShE9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h1>JOIN OUR LIVE STREAM</h1>
      </section>
    </div>
  );
}

export default MoreInfor;