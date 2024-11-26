import React, { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import useRoleStore from '../zustand/rolesStore'
import ComboBox from '../shared/ComboBox';
import { BiEdit } from 'react-icons/bi';
import NewRoleRow from '../shared/NewEditRoleRow';
import { AiOutlineDelete } from 'react-icons/ai';
import DelPopup from '../shared/DelPopup';



function RoleManager() {

  const roles = useRoleStore((state) => state.roles);
  const permissions = useRoleStore((state) => state.permissions)
  const addRole = useRoleStore((state) => state.addRole)
  const roleErrMsg = useRoleStore((state) => state.roleErrMsg)
  const resetRoleErrMsg = useRoleStore((state) => state.resetRoleErrMsg)
  const updateRole = useRoleStore((state) => state.updateRole)
  const removeRole = useRoleStore((state) => state.removeRole)



  // useEffect(() => {
  //   console.log(roles)
  // }, [roles])

  // const [editedRole, setEditedRole] = useState('')
  const [editedPerms, setEditedPerms] = useState([])

  const [editRowNo, setEditRowNo] = useState(null)

  const [deleteRowNo, setDeleteRowNo] = useState(null);


  const resetEditRow = () => {
    setEditRowNo(null)
  }



  return (
    <div className="card bg-base-100 w-11/12 sm:w-3/4 md:w-1/2 shadow-xl my-0 mx-auto">

      <figure>

      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl mb-6 sm:mb-1">Role Managment</h2>
        {/* {editRowNo} */}

        <NewRoleRow />
        <div className='border-0 border-error'>

          {/* //roles */}
          {Object.keys(roles).length > 0 && Object.keys(roles).map((role, index) => (

            (editRowNo === index ?
              <NewRoleRow key={index} mode='edit' exisRol={role} exisPerms={roles[role]} resetEditRow={resetEditRow} />
              // <div> edit row</div>
              :

              <div key={role} className='flex items-center gap-2 justify-between	 py-4 border-b border-blue-500' >
                <div className='w-1/3 border-0 border-blue-500  sm:pl-8'>  {role}  </div>
                <div className='w-1/2  md:w-full md:max-w-60   md:border-0  border-green-500 sm:pl-4 grid grid-cols-3 sm:gap-2' >

                  {roles[role].map((perm) => (
                    <div key={perm} className="badge badge-primary px-2 py-0 sm:px-4 sm:py-3 text-xs sm:text-sm"> {perm} </div>
                  ))}

                </div>
                {editRowNo === null &&
                  <div className='justify-self-end	  flex border-0 border-green-500 gap-2  sm:gap-4'>
                    <div onClick={() => setEditRowNo(index)}>  <BiEdit className=' text-info text-xl md:text-2xl' />  </div>
                    {
                      role !== 'Admin' ?
                        <button onClick={() => { setDeleteRowNo(role); document.getElementById('del_user_modal').showModal(); }} >

                          <AiOutlineDelete className='text-error text-xl md:text-2xl ' />
                        </button>
                        :
                        <div className="tooltip  tooltip-bottom" data-tip="Admin role cant be deleted">
                          <button > <AiOutlineDelete className='text-neutral  text-xl md:text-2xl' />  </button>
                        </div>
                    }

                  </div>
                }


              </div>
            )
          ))}



        </div>
        <p className=' text-xs sm:text-sm'> Modification of roles and permissions can be done here {editRowNo ? 'click outside two times while focus out of dropdown' : ''} </p>
        <p> {roleErrMsg} </p>
      </div>
      {/* {
          deleteRowNo && */}
      <DelPopup deleteId={null} deleteRowNo={deleteRowNo} />
      {/* } */}
    </div>

  )
}

export default RoleManager