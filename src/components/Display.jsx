import React from 'react'
import {Routes,Route} from 'react-router-dom';
import DisplayHome from './DisplayHome';

function Display() {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] tet-white overflow-auto
    lg:w-[75%] ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome/>}></Route>
        </Routes>
    </div>
  )
}

export default Display