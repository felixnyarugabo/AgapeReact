import React from 'react'

function BlogLastPage() {

  return (
    <div className='blog'>

      <section className='find'>

        <table>

          <tr>
            <th>YouTube</th>
            <th>Facebook</th>
            <th>Twitter</th>
            <th>Location</th>
          </tr>

          <tr>
            <td>
              <a 
                href="https://youtube.com/" 
                target="_blank" 
                rel="noreferrer"
              >
                Church Live
              </a>
            </td>

            <td>
              <a 
                href="https://facebook.com/" 
                target="_blank" 
                rel="noreferrer"
              >
                Church Facebook
              </a>
            </td>

            <td>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noreferrer"
              >
                Church Twitter
              </a>
            </td>

            <td>
 
              Omoja 3, Kwamaji, Nairobi
            </td>

          </tr>

        </table>

      </section>

    </div>
  )
}

export default BlogLastPage