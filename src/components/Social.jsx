import React from 'react'
import { AiFillGithub, AiFillTwitterCircle, AiFillCodepenCircle } from 'react-icons/ai'

import './Social.css'

const Social = () => {
  return (
    <div className='social'>
      <p>Web icon created by <a href="https://www.flaticon.com/free-icons/shiba-inu" title="shiba inu icons"><strong>smalllikeart</strong></a></p>
      <p>Web created by <strong>Dráfty</strong></p>
      <div className="links">
          <a href="https://github.com/mperezpizarro"><AiFillGithub /></a>
          <a href="https://twitter.com/dr4fty"><AiFillTwitterCircle /></a>
          <a href="https://codepen.io/mperezpizarro"><AiFillCodepenCircle /></a>
      </div>
    </div>
  )
}

export default Social