import React, { useState } from 'react' ;
import Find from '../../components/FInd/Find';
import Header from '../../components/header/Header';
import Navbar from '../../components/NavBar/Navbar';
import Mail from '../../components/mail/Mail';
import Footer from '../../components/footer/Footer';
import {useLocation} from 'react-router-dom'
import './list.css'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchitem/SearchItem';
import useFetch from "../../Hook/fetch"

const List =()=> {

    const location = useLocation()
    const [openDate,setOpenDate]=useState(false)
    const [date,setDate]=useState(location.state.date)
    const [source,setSource]=useState(location.state.source)
    const [destination,setDestination]=useState(location.state.destination)
     
    const { data , loading ,error , reFetch}=useFetch(`/bus?city=${source}&toCity=${destination}`)
    
const handleClick =()=>{
    reFetch()
}

    
    return(
       <div>
        <Navbar/>
        <Header/>
        <Find type ="items"/>
        <div className='ListContainer'>
            <div className='ListWrapper'>
                <div className='ListSearch'>
                <h1 className='LstTitle'>Search</h1>
                    <div className='LstItem'>
                        <label>Source</label>
                        <input placeholder={source}/>
                    </div>
                    <div className='LstItem'>
                        <label>Destination</label>
                        <input placeholder={destination}/>
                    </div> 
                    <div className='LstItem'>
                        <label>Date</label>
                         <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} `}</span>
                { openDate && <DateRange onChange={(item)=>setDate([item.selection])}
                minDate={new Date()}
                ranges={date}/>}
                    </div>
                    <button onClick={handleClick} >Search</button>
                </div>
                <div className='ListResult'>
                 {loading ? "loading" :<>
                {data.map(item=>(
                    <SearchItem item={item} key={item._id} />
                ))}
                
                </>} 

                </div>
                
            
            </div>
        </div>
        <Mail />
        <Footer/>
        
       </div>  
    )
}
export default List





