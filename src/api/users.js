import axiosInstance from "./axiosInstance";

const addUser=async(data)=>{
    const res=await axiosInstance.post('/signUp/newUser',data)
    return res.data;
}

const findUser=async(data)=>{
    const res=await axiosInstance.post('/login/findUser',data)
    return res.data
}


export {addUser,findUser}