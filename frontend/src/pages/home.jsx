import {useState, useEffect} from 'react'
import Navbar from '../components/navbar'
import './page.css'
import {Link} from 'react-router-dom'


function Home() {


  const [data, setdata]=useState('')
  const [loading,setloading]=useState(true)
  const [error,seterror]=useState(false)

  useEffect(()=>{
    fetch('http://localhost:2000/')
  .then(res=> 
    res.json()
  )
  .then(data=>{
    console.log(data)
    setdata(data)
    setloading(false)
  })
  },[])
  return (
    <div className='home-main'>
      <Navbar />
      { loading && <div>Loading...</div>}
      <div className="flexthis">
     {  data &&

        data.map((d)=>(
         <Link to={'/'+d.houseid}> 
         <div className='cards'>
          <img src={d['house-url'][0]} className='images' />

          </div>
          </Link>
          
        ))


     }
      </div>
     <div className="addhouse">

     </div>

      
    </div>
  )
}

export default Home