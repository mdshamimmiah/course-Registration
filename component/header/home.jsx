import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { BsBook } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import Card from '../card';

const Home = () => {
    const [homeCard, setHomeCard] = useState([]);
    const [selectedCards,setSelectedCards] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [totalRemaining,setTotalRemaining] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)
   

useEffect(() =>{
    fetch('course.json')
    .then((res) => res.json())
    .then((data) =>setHomeCard(data))
}, [])

const handleCard = (homeCard) =>{

    const isExit=selectedCards.find(item=>item.id==homeCard.id)
    // console.log(isExit)

    let count =homeCard.Credit;
    if(isExit){
     toast('already booked')
    }else{
        selectedCards.forEach((item) => {
            count = count + item.Credit;
        });

        let sum = homeCard.price
        selectedCards.forEach((item) => {
           sum += item.price;
      });
      
        
        
        const totalCreditRemaining = 20 - count;
     
      
      if(count > 20){
      toast('your limit Fullfil')
      }
   else{
    setTotalPrice(sum)
    setTotalRemaining(count);
    setRemaining(totalCreditRemaining); 
   setSelectedCards([...selectedCards,homeCard])

   }
    }
 
};

    return (
                <div>

                    <div>
                        <h1 className='text-4xl font-bold text-center my-6 mx-auto'>Course Registration</h1>
                    </div>
        <div className='lg:flex lg:justify-between'>
          
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3 mt-3 w-3/4 ml-12 '>
            {
                homeCard.map((homeCard) =>(
                    <div key={homeCard.idx} className="card  bg-base-100 shadow-xl ">
                    <figure className="px-2 pt-2">
                        <img src={homeCard.cover} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-left">
                        <h2 className="card-title text-lg">{homeCard.title}</h2>
                        <p>{homeCard.description}</p>
                        <div className="card-actions block ">
                           <div className='flex'>
                           <p className='mr-2'>$ Price: {homeCard.price}</p> 
                           <p className='mt-1'><BsBook></BsBook></p>
                           <span className='ml-2'>Credit: {homeCard.Credit}hr</span>
                            </div>
                            <button onClick={() => handleCard(homeCard)} className="bg-[#2F80ED] text-white rounded [8px] mt-3 w-[80%] block mx-auto lg:w-[250px] h-[40px]">Select</button>
                        </div>
                        
                    </div>
                   
                </div>
                  
                ))

            }
              
            </div>
            <div className=' mt-4 mx-auto bg-slate-100 p-2 h-96 ml-16 w-72 py-14 text-center'>
              <Card selectedCards={selectedCards} remaining={remaining} totalRemaining={totalRemaining} totalPrice={totalPrice}></Card>
               {

               }
            </div>

        </div>
        </div>
    );
};

export default Home;