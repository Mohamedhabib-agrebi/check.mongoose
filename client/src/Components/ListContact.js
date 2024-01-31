import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllcontacts } from "../Redux/Actions"
import CardContact from "./CardContact"

const ListContact =()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllcontacts())
    },[])

    const contacts = useSelector(state=> state.contacts)

    return(
        <div>
            {
                contacts.map((el,i,t)=> <CardContact el={el}/>)
            }
        </div>
    )

}

export default ListContact