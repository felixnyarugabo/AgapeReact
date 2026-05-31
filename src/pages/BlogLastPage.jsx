import React from "react";

function BlogLastPage() {

  const styles = `
  
  /* MAIN WRAPPER */
  .blog {
    width: 100%;
    min-height: 100vh;
    padding: 30px;
    box-sizing: border-box;
    background: #f5f5f5;
    font-family: Arial, sans-serif;
  }

  /* CONTAINER */
  .find {
    max-width: 900px;
    margin: auto;
  }

  /* TABLE CARD */
  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  }

  th {
    background: orangered;
    color: white;
    padding: 14px;
    text-align: left;
    font-size: 14px;
  }

  td {
    padding: 14px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
  }

  tr:hover {
    background: #f9f9f9;
  }

  /* LINKS */
  a {
    text-decoration: none;
    color: #0077ff;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  /* MOBILE CARD STYLE */
  @media (max-width: 768px) {

    table, thead, tbody, th, td, tr {
      display: block;
      width: 100%;
    }

    th {
      display: none;
    }

    tr {
      margin-bottom: 15px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      padding: 10px;
    }

    td {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border: none;
      border-bottom: 1px solid #eee;
    }

    td:last-child {
      border-bottom: none;
    }

    td::before {
      content: attr(data-label);
      font-weight: bold;
      color: #333;
    }
  }

  /* SMALL MOBILE */
  @media (max-width: 480px) {
    .blog {
      padding: 15px;
    }

    td {
      font-size: 13px;
    }
  }

  `;

  return (
    <>
      <style>{styles}</style>

      <div className="blog">

        <section className="find">
          <section className="utube">
  <section className="betery"><iframe width="560" height="315" src="https://www.youtube.com/embed/xBQ21QG_ylM?si=H_HuFBzhEX_2RoZR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></section>
  <section className="shining"><iframe width="560" height="315" src="https://www.youtube.com/embed/t1zkz8Rucv0?si=hkAqgpW-kpKE0BBx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></section>
  <section className="fondation"><iframe width="560" height="315" src="https://www.youtube.com/embed/O5kFZj1GQa8?si=O7mVuGU0Dn-ZREQn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></section>
  {/* <section className="church"><iframe width="560" height="315" src="https://www.youtube.com/embed/O5kFZj1GQa8?si=O7mVuGU0Dn-ZREQn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></section> */}
</section>

          <table>

            <thead>
              <tr>
                <th>YouTube</th>
                <th>Facebook</th>
                <th>Twitter</th>
                <th>Location</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td data-label="YouTube">
                  <a href="https://www.youtube.com/@agapelightchurchinternatio1035" target="_blank" rel="noreferrer">
                    Church Live
                  </a>
                </td>

                <td data-label="Facebook">
                  <a href="https://web.facebook.com/reg/?entry_point=aymh&next=" target="_blank" rel="noreferrer">
                    Church Facebook
                  </a>
                </td>

                <td data-label="Twitter">
                  <a href="https://www.youtube.com/watch?v=xBQ21QG_ylM" target="_blank" rel="noreferrer">
                    Church Twitter
                  </a>
                </td>

                <td data-label="Location">
                  Omoja 3, Kwamaji, Nairobi
                </td>
              </tr>
            </tbody>

          </table>

        </section>

      </div>
    </>
  );
}

export default BlogLastPage;
