import React from 'react'
import NavBar from './NavBar';
import {albumsData} from '../assets/assets';
import AlbumItem from './AlbumItem';
import {songsData} from '../assets/assets';
import SongItem from './SongItem';

function DisplayHome() {
  return (
    <>
        <NavBar/>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl text-white'>Featured charts</h1>
            <div className='flex overflow-auto text-white'>
            {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
            </div>
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl text-white'>Today's biggest hits</h1>
            <div className='flex overflow-auto text-white'>
            {songsData.map((item,index)=>(<SongItem key={index} name={item.name} id={item.id} image={item.image}/>))}
            </div>
        </div>
    </>
  )
}

export default DisplayHome