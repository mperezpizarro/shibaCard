import React from 'react'
import { AiFillGithub, AiFillTwitterCircle, AiFillCodepenCircle } from 'react-icons/ai'

import './Social.css'

const Social = () => {
  return (
    <div className='social'>
      <p>
        {
          window.appLang=='EN' ? 
          <>Web icon created by <a href="https://www.flaticon.com/free-icons/shiba-inu" title="shiba inu icons"><strong>smalllikeart</strong></a></> :
          <>Icono de la web creado por <a href="https://www.flaticon.com/free-icons/shiba-inu" title="shiba inu icons"><strong>smalllikeart</strong></a></>
        }
      </p>
      <p>
        {
          window.appLang=='EN' ? 
          <>Web created by <strong>Dráfty</strong></> :
          <>Web creada por <strong>Dráfty</strong></>
        }
      </p>
      <div className="links">
          <a href="https://github.com/mperezpizarro"><AiFillGithub /></a>
          <a href="https://twitter.com/dr4fty"><AiFillTwitterCircle /></a>
          <a href="https://codepen.io/mperezpizarro"><AiFillCodepenCircle /></a>
      </div>
    </div>
  )
}

export default Social