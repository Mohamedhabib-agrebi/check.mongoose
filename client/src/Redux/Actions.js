import { get } from "mongoose"
import { GETALLCONTACTS, GETONECONTACT } from "./ActionTypes"
import axios from 'axios'
export const getAllcontacts=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/contact/getAllcontacts')

        dispatch(
            {
            type : GETALLCONTACTS,
            payload : res.data.contacts
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const addcontact=(newUser,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/contact/addcontact',newUser)
    
        dispatch(getAllcontacts())

        navigate('/ListContact')
    } catch (error) {
        console.log(error)
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
       const res = await axios.get(`/api/contact/getOneContact/${id}`)

       dispatch(
        {
            type : GETONECONTACT,
            payload : res.data.contact 
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const editContact=(id,upUser,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/updateContact/${id}`,upUser)

        dispatch(getAllcontacts())
        navigate(`/ListContact`)
    } catch (error) {
        console.log(error)
        
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contact/deleteContact/${id}`)

        dispatch(getAllcontacts())
    } catch (error) {
        console.log(error)
    }
}