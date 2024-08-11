import {  useSelector } from "react-redux"

export default function OrderName({key}){
    const { users =[] } = useSelector(state => state.userState)
   

    const user= users.find( user => user.id=== key);
    
        return <p><b>Name:</b>{user.name}</p>     
      
}