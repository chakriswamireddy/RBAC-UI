import React, { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import { useUserStore } from '../zustand/userStore'
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import AddEditUser from '../shared/AddEditUser';
import plusPng from '../assets/icons/plus.png'
import classNames from 'classnames';
import DelPopup from '../shared/DelPopup';
import ReactPaginate from 'react-paginate';


function UsersTable() {

  const usersData = useUserStore(state => state.usersData)
  const updateUser = useUserStore(state => state.updateUser)
  const userErrMsg = useUserStore((state) => state.userErrMsg)


  const [mode, setMode] = useState(null)

  const [userToEdit, setUserToEdit] = useState(null)

  const [deleteId, setDeleteId] = useState(null)

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);


  const [paginatedData,setPaginatedData] = useState(null);

  const [searchKey,setSearchKey] = useState('')


  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const [searchedFilteredData, setSearchedFilteredData] = useState(null)

  useEffect(()=> {
    setSearchKey('')
    setSearchedFilteredData(usersData)
  },[usersData])


  const handleSearchUser = (val) => {
    if (val!==null) { 
      setSearchKey(val)
      setSearchedFilteredData(usersData.filter((user) => user.name.toLowerCase().includes(val.toLowerCase())));
       
     }
  }

  useEffect(()=> {
    setPaginatedData(searchedFilteredData?.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    ))


  },[searchedFilteredData,currentPage])



  return (
    <div className="overflow-x-auto mx-auto flex flex-col border-0 gap-4 border-pink-400 w-full sm:w-3/4  max-w-2xl">
      <div className='w-full self-end flex align-center justify-between border-0 border-blue-300 gap-6'>


        <input value={searchKey} onChange={(e) => handleSearchUser(e.target.value)} type="text" placeholder="Search User" 
        className="input input-bordered w-1/3 max-w-xs input-sm my-auto focus:outline-none" />

        <button className='btn btn-info btn-sm sm:btn'  onClick={() => { setMode('add'); setUserToEdit(null); document.getElementById('my_modal_1').showModal() }} >
          Add User
          <img src={plusPng} className='h-6 w-6' />
        </button>
      </div>

      <table className="table bg-blue-100 w-full rounded-xl " >
        <thead>
          <tr>
            <th className=' text-sm'> User </th>
            <th className='  text-sm' >Status </th>
            <th className='text-center text-sm'> Role </th>
            <th className='  text-sm'> Actions </th>
          </tr>
        </thead>

        <tbody>



          {/* {usersData.length > 0 && usersData.map(({ id, img, name, status, role }) => (


            <tr key={id} className=' border-0 border-blue-300'>
              <td className='border-0  w-1/5 border-blue-500 text-center ' >




                <div className="flex items-center gap-3 border-0 w-max border-blue-500">
                  <div className="avatar">
                    <div className="mask mask-squircle h-8 w-8 sm:h-12 sm:w-12">
                      <img alt={img} src={`https://api.dicebear.com/9.x/personas/svg?seed=${img}`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-xs sm:text-sm"> {name} </div>
                  </div>
                </div>
              </td>
              <td className='border-0 sm:w-32 border-blue-500 p-1 sm:p-4' >
                <div className={classNames('text-xs sm:text-sm w-max border-0 border-red-200 p-2 sm:p-2',
                  status === 'Active' ? `badge badge-success` : `badge badge-warning text-slate-200`
                )}> {status} </div>
              </td>
              <td className='border-0 border-blue-500 text-center text-xs sm:text-sm ' > {role}</td>
              <td className='border-0 border-blue-500 text-center '>
                <div className='flex gap-3 items-center justify-center gap-4'>
                  <button onClick={() => { setMode('edit'); setUserToEdit({ id, img, name, status, role }); document.getElementById('my_modal_1').showModal() }} >

                    <BiEdit className='  text-info text-xl md:text-2xl' />
                  </button>
                  <button onClick={() => { setDeleteId(id); document.getElementById('del_user_modal').showModal() }}>
                    <AiOutlineDelete fontSize='20px' className='text-error' />
                  </button>
                </div>
              </td>
            </tr>
          ))
          } */}

          {paginatedData?.map(({ id, img, name, status, role }) => (
            <tr key={id} className=' border-0 border-blue-300'>
              <td className='border-0  w-1/5 border-blue-500 text-center ' >




                <div className="flex items-center gap-3 border-0 w-max border-blue-500">
                  <div className="avatar">
                    <div className="mask mask-squircle h-8 w-8 sm:h-12 sm:w-12">
                      <img alt={img} src={`https://api.dicebear.com/9.x/personas/svg?seed=${img}`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-xs sm:text-sm"> {name} </div>
                  </div>
                </div>
              </td>
              <td className='border-0 sm:w-32 border-blue-500 p-1 sm:p-4' >
                <div className={classNames('text-xs sm:text-sm w-max border-0 border-red-200 p-2 sm:p-2',
                  status === 'Active' ? `badge badge-success` : `badge badge-warning text-slate-200`
                )}> {status} </div>
              </td>
              <td className='border-0 border-blue-500 text-center text-xs sm:text-sm ' > {role}</td>
              <td className='border-0 border-blue-500 text-center '>
                <div className='flex gap-3 items-center justify-center gap-4'>
                  <button onClick={() => { setMode('edit'); setUserToEdit({ id, img, name, status, role }); document.getElementById('my_modal_1').showModal() }} >

                    <BiEdit className='  text-info text-xl md:text-2xl' />
                  </button>
                  <button onClick={() => { setDeleteId(id); document.getElementById('del_user_modal').showModal() }}>
                    <AiOutlineDelete fontSize='20px' className='text-error' />
                  </button>
                </div>
              </td>
            </tr>
          ))}


        </tbody>
      </table>

      <ReactPaginate
        pageCount={Math.ceil(usersData.length / itemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />

      <AddEditUser mode={mode} userToEdit={userToEdit} />

      {/* {deleteId && */}
      <DelPopup deleteId={deleteId} />
      {/* } */}

    </div>
  )
}

export default UsersTable