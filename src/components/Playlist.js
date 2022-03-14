import React from 'react'
import '../assets/css/Playlist.css'
import acer1 from '../assets/images/acer-1.png'
import acer2 from '../assets/images/acer-2.png'
import acer3 from '../assets/images/acer-3.png'
import acer7 from '../assets/images/acer7.png'

export default function Playlist() {
    return (
        <>
            <div className='mt-5 container'>
                <h1 className='text-center heading__1'>Playlist</h1>
                <div className='d-flex playlist__1'>
                    <div className='card__1'>
                        <img src={acer1} className='img__1' />
                    </div>
                    <div className='card__2'>
                        <img src={acer2} className='img__2' />
                    </div>
                    <div className='card__3'>
                        <img src={acer3} className='img__3' />
                    </div>
                    <div className='card__4'>
                        <img src={acer7} className='img__4' />
                    </div>
                    <div className='card__5'>
                        <img src={acer3} className='img__5' />
                    </div>
                    <div className='card__6'>
                        <img src={acer2} className='img__6' />
                    </div>
                    <div className='card__7'>
                        <img src={acer1} className='img__7' />
                    </div>
                    <p className='trending__'>TRENDING</p>
                </div>
            </div>
        </>
    )
}
