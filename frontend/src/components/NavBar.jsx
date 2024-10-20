import React from 'react'

const NavBar = ({handleYear}) => {

 const yearList = ["2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008"];

 function handleYearChange(data) {
    handleYear(data);
  }
  return (
    <div className=' bg-white border-b-2 border-black'>
    <div className='py-3 px-3 bg-white h-25 flex flex-row border-b-2 border-black '>    
        <div className=' text-black ml-4 mr-12'>
        <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/PP.png" alt='csk'/>
        </div>

        <div className="grid grid-cols-11 gap-10">
        <a href="/csk" className=' relative max-w-xs overflow-hidden bg-cover bg-no-repeat' >
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90" src="/teamLogos/CSK.png" alt='csk'/>
            </a>
            <div className=''>
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/DC.png" alt='csk'/>
            </div>
            <div className=''>
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/GT.png" alt='csk'/>
            </div>
            
            <div className=''>
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/KKR.png" alt='csk'/>
            </div>
            <div className=''>
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/LSG.png" alt='csk'/>
            </div>
            <div className=''>
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/MI.png" alt='csk'/>
            </div>
            <div className=''>
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/RCB.png" alt='csk'/>
            </div>
            <div className=''>
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/RR.png" alt='csk'/>
            </div>
            <div className=''>
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/SRH.png" alt='csk'/>
            </div>
            <div className=''>
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/PK.png" alt='csk'/>
            </div>
            <div className=''>
                <img className="object-scale-down h-20 w-20 max-w-xs transition duration-300 ease-in-out hover:scale-90 " src="/teamLogos/PW.png" alt='csk'/>
            </div>
        </div>
    </div>
    <div>
    <div className='flex'>
      
        {yearList.map((y)=>(
            <>
             <button 
             onClick={(e)=>{handleYearChange(e.target.value);}}
             className='w-24 max-w-xs transition duration-300 ease-in-out hover:scale-90 font-semibold select:bg-slate-600'
             value={y}>{y}</button> 
             </>
        ))}
                
    </div>
    </div>
    </div>
  )
}

export default NavBar

