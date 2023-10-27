import React from 'react'
import CustomSlider from '../components/CustomSlider'
import AutoSlider from '../components/AutoSlider'
import '../styles/Home.css'
import { data } from '../components/Data'
import SubMenu from '../components/SubMenu'


function Inicio() {
  console.log(data)
  return (
    <div>
      <div>

        <CustomSlider data={data} />
      </div>
      <div className="two-column-container">
        <div className="Columna">
          <AutoSlider />

        </div>
        <div className="Columna">
          <div className='Titulo1'>
            <h1>YOUR</h1>
            <h2>STREAMING</h2>
          </div>
          <div className='Subtitulo'>
            <h3>YOUR STYLE</h3>
          </div>
            <SubMenu />
          <AutoSlider />
        </div>
      </div>
    </div>
  )
}

export default Inicio