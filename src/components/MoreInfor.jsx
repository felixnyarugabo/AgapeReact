import React from "react";

function MoreInfor() {
  const moreInfo = [
    {
      title: "Love",
      page: `Agape love is God’s unconditional,
sacrificial love shown to humanity.
It is patient, kind, and not self-seeking. 
God demonstrated it by sending Jesus Christ to die for our sins.
Agape love calls believers to love others sincerely,
forgive freely, and reflect God’s character in everyday life
through actions and truth.

Agape love is the highest form of love, coming directly from God.
It is selfless, pure, and unconditional, not based on feelings but on choice and commitment.
Believers are called to live in this love daily by showing kindness, patience, and forgiveness to others.
When we walk in agape love, we reflect God’s nature to the world.
The Bible teaches this clearly in John 13:34, where Jesus says, “Love one another as I have loved you.”
This command shows that true Christian living is rooted in loving others the same way Christ loves us.

Bible Verse:
“Love one another as I have loved you.” — John 13:34`,
    },
  ];

  return (
    <div className="moreinfor">
      <section className="left">
        <h1>{moreInfo[0].title}</h1>
        <p>{moreInfo[0].page}</p>
      </section>

      <section className="right">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bzY-MRbejKk?si=0p52id0rUiO0uCKB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
}

export default MoreInfor;
