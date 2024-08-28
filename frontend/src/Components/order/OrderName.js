import {  useDispatch, useSelector } from "react-redux"
import {   getUsers } from "../../actions/userActions"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function OrderName({key}){
    const { users =[] } = useSelector(state => state.userState)
    const dispatch = useDispatch();
    const {id } = useParams();
   
    useEffect(() => {
     dispatch(getUsers)
   },[id,dispatch]) 
    const user= users.find( user => user.id=== key);
    
        return <p><b>Name:</b>{user.name}</p>     
      
}