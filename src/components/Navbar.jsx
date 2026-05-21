import React from 'react'

function Navbar() {
    const nav=[
        {
        name:"home",path:"Home"
        },
        {
            name:"service", path:"Service"
        },
        {
            name:"give",path:"Give"
        },
        {
             name:"setting",path:"Setting"
        }
    ]
  return (
    <div className='nav'>
        <div className='logo'><img src="/public/image/blackks.png" alt="" width={"40px"} /></div>
        <div className='container'>

{nav.map(object=>(<li key={object.path}>{object.name}</li>))}
<button>click</button>
        </div>
    </div>
  )
}

export default Navbar