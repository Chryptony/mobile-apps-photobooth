import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'
import {
    HomePage,
    Backdrop,
    FAQ,
    Pricelist,
    Template
} from '../pages'
const MainContent2 = () => {
  return (
      <Routes>
            <Route path="/" element={
                <HomePage></HomePage>
            }></Route>
            <Route path="/Backdrop" element={
                <Backdrop></Backdrop>
            }></Route>
            <Route path="/FAQ" element={
                <FAQ></FAQ>
            }></Route>
            <Route path="/Pricelist" element={
                <Pricelist></Pricelist>
            }></Route>
            <Route path="/Template" element={
                <Template></Template>
            }></Route>
        </Routes>
  )
}

export default MainContent2
