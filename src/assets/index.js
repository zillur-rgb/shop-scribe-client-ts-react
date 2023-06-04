import React from 'react'
import { RiShoppingCart2Line, RiListUnordered } from 'react-icons/ri'
import { GiBackwardTime } from 'react-icons/gi'
import { AiOutlineBarChart } from 'react-icons/ai'

import { images } from '../../utils'

const index = () => {
  return (
    <div className='app__sidebar'>
      <nav className="navbar vh-100 align-items-auto">
        <div className="container-fluid d-flex flex-column justify-content-between align-items-center h-100">
          {/* logo */}
          <div className='app__sidebar-logo'>
            <a className="navbar-brand" href="#">
              <img src={images.logo} alt="logo" />
            </a>
          </div>
          {/* shoppify items nav */}
          <div className='app__sidebar-nav'>
            <div className="nav-item list-items">
              <RiListUnordered />
            </div>
            <div className="nav-item history-items">
              <GiBackwardTime />
            </div>
            <div className="nav-item stats-items">
              <AiOutlineBarChart />
            </div>
          </div>
          {/* cart items  */}
          <div className='app__sidebar-cart position-relative'>
            <div className="item-num position-absolute">4</div>
            <RiShoppingCart2Line className='cart-icon' />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default index
