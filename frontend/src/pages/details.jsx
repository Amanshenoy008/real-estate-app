import {useEffect, useState  } from 'react'
import {useParams} from 'react-router-dom'




function Details() {

    const {id}=useParams()
    const [dat,setdat]=useState('')

    useEffect(()=>{

        fetch('http://localhost:2000/')
        .then(res=>res.json())
        .then(data=>{
            setdat(data[id-1])
            console.log(dat)
        })


    },[])

  return (
    <div className='details-main'>
                            
                            <div className='detailss'>
                            <p>OWNER : {dat['owner-name']}</p>
                           <p>House Type: {dat['house-type']}</p>
                           <p>owner-contact: {dat['owner-contact']}</p>
                           <p>House-n.o. : {dat['resident-id']}</p>
                           <p>House phone n.o.: {dat['phone-no']}</p>
                           <p>Resident-name: {dat['resident-name']}</p>
                            </div>
                            <div className="visitor-detail">
                                <p></p>
                            </div>

     </div>
  )
}

export default Details