import React, { useEffect, useState } from 'react'
import useRoleStore from '../zustand/rolesStore';
import { useUserStore } from '../zustand/userStore';

function AddEditUser({ mode, userToEdit }) {

    const [userName, setUserName] = useState('')
    const [status, setStatus] = useState(null);
    const [role, setRole] = useState('')
    // const [  ]

    const roles = useRoleStore((state) => state.roles);
    const permissions = useRoleStore((state) => state.permissions)
    const addNewUser = useUserStore((state) => state.addNewUser)
    const userErrMsg = useUserStore((state) => state.userErrMsg)
    const resetUserErrMsg = useUserStore((state) => state.resetUserErrMsg)
    const usersData = useUserStore(state => state.usersData)
    const updateUser = useUserStore(state => state.updateUser)






    const [goodSubmit, setGoodSubmit] = useState(false)

    const handleAddUser = () => {
        if (userName && status && role) {
            const userId = userToEdit?.id;

            mode === 'edit' ? updateUser({ name: userName, status, role, id: userId })
                : addNewUser({ name: userName, status, role })
            setGoodSubmit(true);

            if (!usersData.find((user) => user.name === userName)) {


                document.getElementById('my_modal_1').close();
                setTimeout(() => {
                    resetUserErrMsg();
                }, 1000)
            }
        }

    }

    useEffect(() => {
        if (mode === 'edit' && Object.values(userToEdit).length > 0) {
            console.log('edit mode')
            setUserName(userToEdit.name);
            setRole(userToEdit.role);
            setStatus(userToEdit.status);
        }

        console.log(mode)

    }, [userToEdit])

    const clearForm = () => {
        setUserName('');
        setRole('');
        setStatus('Inactive');

    }



    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col shadow-xl  border-blue-400">
                    <form method="dialog">
                        {userToEdit?.name}

                        <button onClick={() => clearForm()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg"> { mode && mode[0].toUpperCase() +  mode.slice(1)} User </h3>
                    <div className='flex flex-col items-start gap-4 justify-center  p-4
                        mx-auto my-0 border-0  border-blue-900
                    ' >

                        <label className="input input-sm input-bordered flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-6 w-6 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input value={userName} onChange={((e) => setUserName(e.target.value))} type="text" className="grow" placeholder="Enter name" />
                        </label>

                        <div className="form-control w-52">
                            <h3 className='font-bold'> Status </h3>
                            <label className="label cursor-pointer">
                                <span className="label-text"> Inactive</span>
                                <input checked={status === 'Active'} onChange={((e) => setStatus(e.target.checked ? 'Active' : 'Inactive'))} type="checkbox" className="toggle toggle-primary" />
                                <span className="label-text"> Active</span>

                            </label>
                        </div>

                        <select className="select select-bordered w-2/3 max-w-xs" value={role} onChange={((e) => setRole(e.target.value))}>
                            <option disabled value=''>Assign Role</option>
                            {Object.keys(roles).map((role) => (
                                <option key={role} value={role}> {role}</option>
                            ))}
                        </select>

                        <div className='w-2/3   pl-4 flex gap-2' >
                            {role && roles[role].length > 0 && roles[role].map((perm) => (
                                <div key={perm} className="badge badge-primary px-4 py-3"> {perm} </div>
                            ))}
                        </div>

                        <div className='  justify-self-end border-0 border-blue-900 ml-auto' >

                            <button className='btn btn-secondary w-32 btn-sm sm:btn-md' onClick={handleAddUser} > {mode === 'edit' ? 'Edit' : 'Add'} </button>

                            {userErrMsg &&
                            <p className="py-4"> {'*' + userErrMsg} </p>
                            }
                        </div>

                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default AddEditUser