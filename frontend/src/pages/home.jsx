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
    setloading(false)
  })
  },[])
  return (
    <div>
      <Navbar />
      { loading && <div>Loading...</div>}
      <div className="flexthis">
     {  data &&

        data.map((d)=>(
          <div className='cards'>
          <img src={d['house-url'][0]} className='images' />

          </div>
        ))


     }
      </div>


      <Footer />
    </div>
  )
}

export default Home