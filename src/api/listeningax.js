import axiosInstance from "./axiosInstance";

const submitAnswerSummarize=async(details)=>{
    const res=await axiosInstance.post('/summary/checkresult',{details})
    // console.log(res.data)
    return res.data;
}

const userAnswer=async(details)=>{
    // console.log(details)
    const res=await axiosInstance.post('/summary/userAnswer',details)
    // console.log("response is",res.data)
    return res.data;
}


export {submitAnswerSummarize,userAnswer}