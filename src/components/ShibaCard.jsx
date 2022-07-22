import React, { useState, useEffect } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Loader from './Loader'

import './ShibaCard.css'

const ShibaCard = () => {
    const [loading, setLoading] = useState(true)
    const [shibaData, setShibaData] = useState([])

    const fetchShiba = async () => {
        setLoading(true)
        const data = await fetch('https://shibe.online/api/shibes?count=1')
        const imgUrl = await data.json()
        setLoading(false)
        setShibaData(imgUrl[0])
    }

    useEffect(() => {
      fetchShiba()
    }, [])
    

    return (
        <div className='card-container'>
            {
                loading ? 
                <Loader /> :
                <Flippy 
                    flipOnHover={false} flipOnClick={true} 
                    flipDirection="horizontal" 
                    style={{
                        width: '90%',
                        maxWidth: '500px',
                        aspectRatio: '9/12',
                        cursor: 'pointer'
                    }}
                >
                    <FrontSide style={{backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 0 6px rgba(0, 0, 0, .5)'}}>
                        <div className="card-item">
                            <h3>
                                Reveal your <span>Shiba</span>!
                            </h3>
                        </div>
                    </FrontSide>
                    <BackSide onClick={fetchShiba} style={{backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 0 6px rgba(0, 0, 0, .5)'}}>
                        <div className="card-item">
                            <div id='img'><img src={shibaData} alt="Shiba image" /></div>
                            <div><h4>Click again to see another one</h4></div>
                        </div>
                    </BackSide>
                </Flippy>
            }
        </div>
    )
}

export default ShibaCard