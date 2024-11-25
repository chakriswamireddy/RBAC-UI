import { create } from "zustand";


const useRoleStore = create((set) => ({
    permissions: ['read','write','Delete'] ,
    roles: {"Admin" : ['read','write','Delete'],'Editor':  ['read','write' ] ,"Viewer": ['read']  },
    roleErrMsg: '',

    addRole: (role,perms) => set ((state) => {

            return Object.keys(state.roles).find((r) => r=== role) 
            ? {roleErrMsg: 'Role Already Exists'}
            : {roles: {...state.roles, [role]:perms}} 
    
    }),
    removeRole : (role) => set((state) => {
        if (Object.keys(state.roles).length>1) {
            const updated = {...state.roles};
            delete updated[role];
            return { roles: updated }
        }
        return { roleErrMsg: 'Atleast One Role is needed'};
    }),

    updateRole : (role,perms) => set((state) => {
        return Object.keys(state.roles).find((r) => r === role) 
        ? {roles : {...state.roles, [role]: perms}}
        : {roleErrMsg: 'Role Does not Exists'}
        
    })  ,

    resetRoleErrMsg: () => set(() => ({roleErrMsg:''}))

    

}))

export default useRoleStore