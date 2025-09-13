
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import data from '../src/data.json';

function App() {
const [product, setProduct] = useState([]);
useEffect(()=>{
  async function all() {
   let res = await axios.get('https://dummyjson.com/products') ;
   setProduct(res.data.products);
  }
  all();

},[]);

// dummy json
const [showCard, setShowCard] = useState(true);
const handleYes = () => setShowCard(false);
const handleNo = () =>  alert("You clicked No!");

//my json
const [myself, setMyself] =useState(true);
const handlemyjson = ()=> setMyself(false);
 console.log(data);
 //console ar modde sob gula alada kore dekhanor jonno foreach use korsi
 data.data.forEach(item => {
  console.log("id:", item.id);
  console.log("name:", item.name);
  console.log("role:", item.role);
 })


 //kivhabe json dekbe


const handleshow = ()=> alert("if you see this json then you click right button in mouse then inspect and lastly console click and show output.");

  return (
    <>
  
   


 {showCard &&(
   <div class="card-wrapper w-[600px] h-[500px]   text-center mt-[100px] m-[200px] ml-[500px]">
    <div class="card ">Please hover this card
      <div class="card-front bg-amber-400 text-center"> </div>
      <div class="card-back bg-amber-400">
          <p className='mb-[35px] pt-[30px] text-3xl text-white font-extrabold  text-shadow-cyan-600 text-shadow-md  '>
     Dummy Json API
     </p>
     <p className='text-xl mb-[30px] '>Are you interseted Dummy Json then you click ,yes!</p>
  <button onClick={handleYes} className='btn1 px-[30px] py-[10px] rounded bg-amber-100 mr-[20px] text-[20px]'>Yes</button>
  <button onClick={handleNo} className='btn2 px-[30px] py-[10px] rounded bg-amber-100  text-[20px]'>No</button>
<p className='mt-[20px] text-3xl'>Or</p>
<p className='mb-[10px] pt-[15px] pb-[5px] text-3xl text-white font-extrabold  text-shadow-cyan-600 text-shadow-md  '>My JSON</p>
<p className='mb-[30px] text-xl'>please see my json in console.</p>

  <button onClick={handlemyjson} className='btn2 px-[30px] py-[10px] rounded bg-amber-100  text-[20px] mr-[20px]'>My Json</button>
  <button onClick={handleshow} className='btn2 px-[30px] py-[10px] rounded bg-amber-100  text-[20px]'>See</button>


      </div>
    </div>
  </div>
 )}



{/* dummy json */}

{!showCard &&
(
 <>
  <div className="text-center text-5xl mb-[100px] font-bold">DUMMY JSON</div>
<div className="grid grid-cols-4 gap-6 ml-[60px]">
  {product.map((item)=>(
    <div key={item.id} className="">
      <img src={item.images} alt={item.images}/>
      <h1>{item.title}</h1>
      <p>{item.price}</p>
    </div>
  ))}
</div>
 </>
)}


{/* nije banaisi json */}

 {!myself &&(
  <>
    <div>
      {/* data.json file ar data array thake value nisi tai data.data */}
      {data.data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.role}</p>
          <img src={item.img} alt={item.img}/>
        </div>
      ))}
    </div>
  </>
 )}
    </>
  )
}

export default App
