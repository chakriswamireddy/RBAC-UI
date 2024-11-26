import React, { useEffect } from 'react'
import { useUserStore } from '../zustand/userStore'
import useRoleStore from '../zustand/rolesStore';

function DelPopup({ deleteId, deleteRowNo }) {
  const removeItem  = !deleteRowNo ? useUserStore(state => state.removeUser): useRoleStore((state) => state.removeRole) ;

  const handleDelete = () => {
    removeItem(deleteId || deleteRowNo);
    console.log("successfully deleted user !")
  }

  // useEffect(()=> {console.log('coming insidw',removeItem)},[removeItem])

  return (
    <div>
      <dialog id="del_user_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Deleting {deleteId ? 'User Record' : deleteRowNo+ ' Role'  }</h3>
          <p className="py-4">Are you sure to delete ?</p>
          <div className="modal-action ">
            <form method="dialog" className="  flex gap-6 items-center " >

              <button className='btn '>Cancel </button>
              <button className="btn btn-error" onClick={handleDelete} >Confirm</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default DelPopup