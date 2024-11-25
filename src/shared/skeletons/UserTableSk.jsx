import React from 'react'

function UserTableSk() {
  return (
    <div className=" overflow-x-auto mx-auto flex flex-col border-0 gap-4 border-pink-400 w-full sm:w-3/4  max-w-2xl">
    <div className='w-max self-end'>


    <button className=' skeleton h-12 w-28'   >
    </button>
    </div>

    <table className=" table bg-blue-100 w-full rounded-xl" >

      <tbody className='flex flex-col gap-2'>

      <tr className="skeleton h-6 w-full mb-3"></tr>

        {Array.from({length:10}).map((i,index)=> (
            <tr key={index}>
              <td>
                 <div className="skeleton h-4 w-full"></div>

              </td>

            </tr>
        ))}

      </tbody>
    </table>

</div>
  )
}

export default UserTableSk