import { create } from "zustand";
import { names, users } from "../assets/InitialData";

// let imgSerNo=7;

const useUserStore = create((set) => ({
  names: names,
  usersData: users,
  imgSerNo: 7,

  userErrMsg: "",

  importUsersData: (data) => set(() => ({ usersData: data })),

  addNewUser: (newUser) =>
    set((state) => {
      const nextImgSerNo =
        state.imgSerNo === state.names.length - 1 ? 0 : state.imgSerNo + 1;

      return state.usersData.find((user) => user.name == newUser.name)
        ? { userErrMsg: "User Exists" }
        : {
            usersData: [
              ...state.usersData,
              {
                ...newUser,
                img: names[nextImgSerNo],
                id: state.usersData.length + 1,
              },
            ],
            imgSerNo: nextImgSerNo,
          };
    }),

  updateUser: (userD) =>
    set((state) => {
      const updatedData = state.usersData.map((u) =>
        u.id === userD.id ? { ...u, ...userD } : u
      );

      console.log(updatedData)

      return state.usersData.find((user) => user.name == userD.name) 
      ? { userErrMsg: "User Exists" } :
      { usersData: updatedData }
      // state.usersData.find((user) => user.id == userD.id)?
      //   : { userErrMsg: "User Id Does not Exists" };
    }),

  removeUser: (id) =>
    set((state) => {
      return state.usersData.find((user) => user.id ==  id)
        ? { usersData: state.usersData.filter((user) => user.id !== id) }
        : { userErrMsg: "User Id Does not Exists" };
    }),

  resetUserErrMsg: () => set(() => ({ userErrMsg: "" })),

  deleteAll: () => set({ usersData: [] }),
  //  (data) => set( () => ({}))
}));

export { useUserStore };
