import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingActions } from '../store/MovieBooking/slice'
import cln from 'classnames'

const Chair = ({ghe, className}) => {
    const dispatch = useDispatch()
    const {chairBookings, chairBookeds} = useSelector((state) => state.movieBooking)
    // console.log('chairBookings', chairBookings);
    console.log(chairBookeds);
  return (
    <div className={cln('Chair mt-3', className,
    {booking: chairBookings.find((chair) => chair.soGhe === ghe.soGhe),
     booked: chairBookeds.find((chair) =>chair.soGhe === ghe.soGhe),   
    
    })} onClick={() =>{
        dispatch(movieBookingActions.setChairBookings(ghe))
    }}>{ghe.soGhe}</div>
  )
}

export default Chair