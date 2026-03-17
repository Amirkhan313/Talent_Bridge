import React, { useEffect, useState } from 'react'
import Person from './Person'
import { FaLeaf } from 'react-icons/fa'
import CustomSkeleton from './Skeleton.jsx'


const PeopleList = ({isHome = false}) => {
    // const filteredPeople = isHome?People.slice(0,4):People
    const [developers, setDevelopers] = useState([])
    const [loading, setLoading] = useState(true)
    // const skeletonCount = isHome ? 4 : Database.developers.length
    const skeletonCount = isHome ? 2 : 4

    useEffect(()=>{
        const timer = setTimeout(()=>{
            const fetchDvelopers = async ()=>{
                const apiUrl = isHome 
                ? '/api/developers?_limit=2'
                :'/api/developers'
                try {
                    const res = await fetch(apiUrl);
                    const data = await res.json();
                    // const limitData = data.slice(0,4)
                    setDevelopers(data)
                } catch (error) {
                    console.log('data fetched failed',error)                
                }
                finally{
                    setLoading(false)
                }
            }
            fetchDvelopers()
        },1000)
        return ()=> clearTimeout(timer)
    },[isHome])
        
        // const timer = setInterval(() => {
        //     const fetchDeveloper = async ()=>{
            //        try {
                //          const res = await fetch('http://localhost:8000/developers?_limit=4');
                //         const data = await res.json();
        //         setDevelopers(data)
        //        } catch (error) {
        //         console.log('fetch api is faiked',error)
        //        }
        //        finally{
        //         setLoading(false)
        //        }
        //     }
        //     fetchDeveloper()
        //     return ()=> clearInterval(timer)
        // }, 700);
        
        // const timeing = setTimeout(()=>{
            //     console.log("Hi Amir Khan")
            //     return ()=>clearTimeout(timeing)
            // },1000)
            
  return (
    <section className={`md:px-12 max-md:px-8 bg-blue-50 my-5 pt-6 pb-3`}>
        <div className="mx-auto">
            <div className="topText mb-7">
                <h2 className='text-[#0274da] text-2xl capitalize text-center font-bold'>
                     {isHome ? "See developers" : "List of developers"}
                </h2>
                <p className='text-gray-700 text-center font-poppins font-medium'>{isHome?"Find the most talented developers for your projects":"Here, you can see and find the most skilled developers that can provide you with all of your needs as best as possible"}</p>
            </div>
            {loading?
                <div className="grid min-[830px]:grid-cols-2 gap-x-5">
                      {Array(skeletonCount).fill(0).map((_,i)=><CustomSkeleton type="developerPage" key={i}/>)}
                </div>
                :
                <div className="grid min-[830px]:grid-cols-2 gap-x-5">
                    {developers.map((person)=>(
                        <Person key={person.id} person={person}/>
                    ))}
                </div>
            }
        </div>
    </section>
  )}

export default PeopleList
