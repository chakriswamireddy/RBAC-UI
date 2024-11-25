import React from 'react'

function DashboardSk() {
    return (
        <div className=' border-0 border-blue-400 self-center w-full sm:w-3/4 max-w-2xl     '>
            <div className=" skeleton card md:card-side   shadow-xl w-full">
                <div className='skeleton h-40 w-1/3 border-right-2 border-gray-500'> </div>
                <div className="card-body">
                    <h1 className=" skeleton card-title h-5 w-full text-2xl underline underline-offset-1"> </h1>



                    <div className='flex flex-col gap-3  '>


                        <div className="card h-12 sm:h-8  shadow-xl">
                            <div className=" skeleton card-body p-3 sm:p-7 ">

                            </div>
                        </div>

                        <div className='flex gap-2 mt-4 justify-evenly'>

                        {Array.from({length:3}).map((i,index)=> (

                            <div key={index} className="card    h-12 sm:h-8 w-1/3  shadow-xl">
                                <div className=" skeleton card-body p-3 sm:p-7 ">

                                </div>
                            </div>

            ))}



                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardSk