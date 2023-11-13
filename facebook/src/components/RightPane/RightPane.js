import React from 'react'
import "./rightPane.css"

export default function RightPane() {
  return (
    <div className='RightPaneBox'>
      <div className="rightPaneContainer">
          <div className="adContainer">
            <span className="sponzerd">Sponsored</span>
            <img src="/images/ad.jpg" alt="" className='adImage' />
            <span className="adText">
            Adtext is a digitally streamlined subtitling operation that offers
the highest quality subtitling as a single, combined service,
in partnership with all the leading commercial distribution companies.
            </span>
          </div>
            <div className="birthdayContainer">
              <img src="/images/bir.jpg" alt="" className="birthdayImage" />
              <span className="birthdayText"><b>Janith Nanayakkara</b>and <b>2 others</b> 
              havin g birthday today..!</span>
            </div>
      </div>
    </div>
  )
}
