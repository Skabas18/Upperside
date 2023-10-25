import React from 'react'
import CustomSlider from '../components/CustomSlider'
import AutoSlider from '../components/AutoSlider'
import '../styles/AutoSlider.css'
import { data } from '../components/Data'


function Inicio() {
  return (
    <div>
      <div>
        <CustomSlider data={data} />
      </div>
      <div className="App">
        <h1>Slider Automático con React</h1>
        <AutoSlider />
      </div>
    </div>
  )
}

export default Inicio