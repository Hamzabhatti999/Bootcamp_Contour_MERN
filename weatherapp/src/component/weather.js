import React from 'react';


export default function weather() {
    const data = [
        {
            Key: 1,
            country: "Pakistan",
            cities: [{
                city1: "Islamabad",
                city2: "Karachi",
                city3: "Lahore"
            }]
        },
        {
            Key: 2,
            country: "Turkey",
            cities: [{
                city1: "Istanbul",
                city2: "Ankara",
                city3: "Konya"

            }]
        },
        {
            Key: 3,
            country: "Australia",
            cities: [{
                city1: "Melbourne",
                city2: "Sydney",
                city3: "Perth"

            }]
        },

    ]
    return (
        <div className='bg-hero bg-fixed bg-cover h-full'>
            <div className=''>
                <h1 className='text-center text-slate-200 text-5xl font-extrabold underline font-serif'>Weather App</h1>
                <div className='flex gap-x-3 justify-center items-center mt-10'>
                    {data.map((val, index) => {
                        return (<>
                            <input className='p-3' type="text" placeholder='Select Country' value={val.country} />
                            {
                                val.cities.map((val, index) => {
                                    return (<>
                                        <input className='p-3' type="text" placeholder='Select City' value={val.city1}/>
                                    </>)
                                })

                            }
                        </>)
                    })}

                </div>
                <div className='flex flex-col py-10 w-32'>
                <p className='bg-white'>Precipitation</p>
                <p className='bg-white'>Humidity</p>
                <p className='bg-white'>Wind</p>
            </div>
            </div>
            
        </div>
    )
}
