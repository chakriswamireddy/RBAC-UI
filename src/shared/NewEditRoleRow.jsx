import React, { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import { BiEdit } from 'react-icons/bi';
import useRoleStore from '../zustand/rolesStore';
import ComboBox from './ComboBox';

function NewRoleRow({ mode,exisRol,exisPerms, resetEditRow }) {

    const roles = useRoleStore((state) => state.roles);
    const permissions = useRoleStore((state) => state.permissions)
    const addRole = useRoleStore((state) => state.addRole)
    const roleErrMsg = useRoleStore((state) => state.roleErrMsg)
    const resetRoleErrMsg = useRoleStore((state) => state.resetRoleErrMsg)
    const updateRole = useRoleStore((state) => state.updateRole)






    const [newRoleName, setNewRoleName] = useState('')
    const [newPerms, setNewPerms] = useState([])

    const [openNewRole, setOpenNewRole] = useState(false)

    const handleSelectChange = (newSelection) => {
        setNewPerms(newSelection);
    }

    const handleNewRole = () => {
        console.log(newRoleName , newPerms.length )
        newRoleName && newPerms.length > 0 && addRole(newRoleName, newPerms)
        setNewPerms([])
        setNewRoleName('')
        setOpenNewRole(false)
      

        setTimeout(() => {
            resetRoleErrMsg();
        }, 1000)

    }

    const handleEditRole =() => {
        console.log("coming to edit")
        newRoleName && newPerms.length > 0 && updateRole(newRoleName, newPerms);
        setNewPerms([])
        setNewRoleName('')
        // setOpenNewRole(false)
        resetEditRow();

        setTimeout(() => {
            resetRoleErrMsg();

        }, 1000)
    }

    useEffect(()=> {
        if (mode==='edit')  {
            setOpenNewRole(true); 
            setNewRoleName(exisRol);
            setNewPerms(exisPerms);
        }
    },[mode])


    return (
        <>
            {mode !== 'edit' &&
                <div className="card-actions justify-end">
                    <button className="btn btn-sm  sm:btn btn-info" onClick={() => setOpenNewRole(!openNewRole)} >
                        {openNewRole ? 'Cancel' : 'Add Role'}</button>
                </div>
            }


            {openNewRole &&

                <div className='flex items-center gap-2 py-4 border-b border-blue-500' >
                    <div className='w-1/3 border-0 border-blue-500 pl-4'>
                        <input
                            type="text"
                            placeholder="Type here"
                            value={newRoleName}
                            onChange={(e) => setNewRoleName(e.target.value)}
                            className="input input-bordered  w-full max-w-xs h-10" />
                    </div>


                    <div className='w-2/3 border-0 border-green-500 pl-4 flex gap-2 items-center justify-between' >

                        <ComboBox
                            items={permissions}
                            selectedItems={newPerms}
                            onSelectionChange={handleSelectChange}

                        />
                        <button onClick={ mode==='edit' ?  handleEditRole : handleNewRole} className="btn btn-sm btn-success  ">
                        { mode==='edit' ? 'Edit' : 'Save' } </button>
                    </div>
                </div>
            }
        </>
    )
}

export default NewRoleRow