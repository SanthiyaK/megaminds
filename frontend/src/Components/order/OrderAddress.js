import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { adminOrders as adminOrdersAction } from "../../actions/orderActions"
import { Fragment, useEffect } from 'react';
import OrderName from './OrderName';






export default function OrderAddress(){
  
    const {adminOrders = []} = useSelector(state => state.orderState)
  
   
   
    const dispatch = useDispatch();
    const {id } = useParams();
   
     useEffect(() => {
      dispatch(adminOrdersAction)
    },[id,dispatch]) 
    return(
        
       <Fragment>
            <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-8 mt-5 order-details">
                     
                    <h4 className="mb-4">Address List</h4>
                      {adminOrders.map(adminOrder=>(
                            <div>
                        <p><b>ID:</b>{adminOrder.user}</p>
                       
                        <OrderName key={adminOrder.user}/>
                        <p className="mb-4"><b>Address:</b>{adminOrder.shippingInfo.address}</p>
                        <p className="mb-4"><b>State:</b>{adminOrder.shippingInfo.city}</p>
                        <p className="mb-4"><b>Postal Code:</b>{adminOrder.shippingInfo.postalCode}</p>
                        <p className="mb-4"><b>Country:</b>{adminOrder.shippingInfo.country}</p>
                         <p><b>Phone.No:</b>{adminOrder.shippingInfo.phoneNo}</p> 

                        
                        
                      <hr />
                    
                        </div>
                    
                           ))}
                           
                          
              </div>
              </div>
                  
      </Fragment>
    )
}