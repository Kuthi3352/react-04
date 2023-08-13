import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingActions } from '../store/MovieBooking/slice';
import './style.css'

const Result = () => {
    const dispatch = useDispatch()
    const {chairBookings} = useSelector((state) => state.movieBooking)
    console.log('chairBookings', chairBookings);
  return (
    <div>
         <h2 className="mt-3 mb-5"style={{color:"white"}}>Danh sách ghế bạn chọn</h2>
            <div className='result'>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair booked"></div>
                    <p>Ghế đã đặt</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair booking"></div>
                    <p>Ghế đang chon</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair"></div>
                    <p>Ghế chưa đặt</p>
                </div>
            </div>
            <table className='table mt-3 result__bot'>
                <thead>
                    <tr>
                        <td className='top'>Số Ghế</td>
                        <td className='top'>Giá</td>
                        <td className='top'>Hủy</td>
                    </tr>
                </thead>
                <tbody>
                    {/* map ra ui */}
                    {
                        chairBookings.map(chair =>(
                            <tr key={chair.soGhe}>
                                <td>{chair.soGhe}</td>
                                <td>{chair.gia}</td>
                                <td className='text-danger font-bold fs-4 cursor text-center' onClick={()=>{
                                    dispatch(movieBookingActions.setChairBookings(chair))
                                }}>X</td>
                               
                            </tr>
                        ))
                    }
                    <tr>
                        <td className='thanhToan'>Tổng tiền thanh toán</td>
                        <td>
                            {
                                chairBookings.reduce((total, chair)=>{
                                    return (total += chair.gia)
                                }, 0)
                            }
                        </td>
                        <td></td>
                        
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-warning text-white fs-5 Bold text' onClick={()=>{
                dispatch(movieBookingActions.setChairBookeds())
            }}>Thanh Toán</button>
    </div>
  )
}

export default Result