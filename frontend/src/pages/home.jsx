import {useState, useEffect} from 'react'
import Navbar from '../components/navbar'
import './page.css'
import Footer from '../components/footer'


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
  })
  },[])
  



  return (
    <div>
      <Navbar />
     
      


      <Footer />
    </div>
  )
}

export default Home