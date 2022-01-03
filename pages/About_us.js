import React from 'react'
import Footer from 'components/Footers/Footer'
import Navbar from 'components/Navbars/IndexNavbar' 

function About_us() {
    return (
        <div>
            <Navbar/>
            {/* <!-- component --> */}
<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4 ">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white">Our Team</h1>
                
                <p className="text-2xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white py-10 ">
                Meet our Team Node 21
                </p>
            </div>
            
            <div className="flex flex-row pb-10 ">
                <div className='basis-1/3 px-2'>
                    <img className="object-scale-down  " src="https://ca.slack-edge.com/TNGRRLUMA-U026A5PM02F-1230b9d51081-512" alt=""/>
                    
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Razan Armouti</h1>
                    
                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300"> IT Manager </p>
                </div>

                <div className='basis-1/3 px-2'>
                    <img className="object-scale-down  " src="https://ca.slack-edge.com/TNGRRLUMA-U023A4YEU77-d5ee00719d95-512" alt=""/>
                    
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Haneen Darwish</h1>
                    
                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Full stack developer</p>
                </div>
                <div className='basis-1/3 px-2'> 
                    <img className="object-scale-down  " src="https://ca.slack-edge.com/TNGRRLUMA-U024VGEBA11-6461d529a898-512" alt=""/>
                    
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Farouk Ibrahim</h1>
                    
                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Full stack developer with background in civil engineering</p>
                </div>
                <div className='basis-1/3 px-2'> 
                    <img className="object-scale-down   " src="https://ca.slack-edge.com/TNGRRLUMA-U024NGNULJ2-049d8f6b72eb-512" alt=""/>
                    
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Tariq Sharaia</h1>
                    
                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Full stack developer with background in mechanical engineering</p>
                </div>
                <div className='basis-1/3 px-2'> 
                    <img className="object-scale-down  " src="https://ca.slack-edge.com/TNGRRLUMA-U023A4Z16SH-485718e1f125-512" alt=""/>
                    
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Ibrahem Bader</h1>
                    
                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Full stack developer</p>
                </div>

              
            </div>
            
        </div>
    </div>
    
</section>
<div style={{width: "100%", height: "50px" }}>

            </div>
<Footer/>
        </div>
    )
}

export default About_us
