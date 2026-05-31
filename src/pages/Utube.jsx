function Utube() {
  const videos = [
    {
      title: "Sunday Worship Service",
      channel: "Grace Church",
      views: "12K views",
      time: "2 days ago",
      image:
        "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Powerful Prayer Session",
      channel: "Faith Ministry",
      views: "8K views",
      time: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bible Study Live",
      channel: "Hope Church",
      views: "20K views",
      time: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const styles = `
  
  /* GRID CONTAINER */
  .youtube-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
  }

  /* CARD */
  .video-card {
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: 0.3s ease;
  }

  .video-card:hover {
    transform: translateY(-6px);
  }

  /* IMAGE */
  .video-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  /* INFO */
  .video-info {
    padding: 12px;
  }

  .video-title {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .video-channel {
    font-size: 13px;
    color: #666;
  }

  .video-meta {
    font-size: 12px;
    color: #999;
  }

  /* TABLET */
  @media (max-width: 768px) {
    .youtube-container {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      padding: 15px;
      gap: 15px;
    }

    .video-card img {
      height: 140px;
    }
  }

  /* MOBILE */
  @media (max-width: 480px) {
    .youtube-container {
      grid-template-columns: 1fr;
      padding: 10px;
    }

    .video-card img {
      height: 180px;
    }
  }

  `;

  return (
    <>
      <style>{styles}</style>

      <div className="youtube-container">
        {videos.map((video, index) => (
          <div key={index} className="video-card">

            <img src={video.image} alt={video.title} />

            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-channel">{video.channel}</p>
              <span className="video-meta">
                {video.views} • {video.time}
              </span>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

export default Utube;