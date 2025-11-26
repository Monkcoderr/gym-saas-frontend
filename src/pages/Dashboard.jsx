import { useState,useEffect } from "react";
import { useAuth } from "../context/AuthContext";


const {user} = useAuth()

const [members,setMembers] = useState([])

useEffect(async()=>{
    const response = await fetch('http://localhost:3000/api/members',{
        method : GET,
        headers : sdkj
    })
},[])

function Dashboard(){

}