import axios from 'axios';

export const formClean = (
  inputZValue
) => {
  console.log('trigger the form clean');
  console.log(inputZValue);
}
// REVIEW 也就是说可以随意的调用 普通 js 的方法


export const delayRequest = (link, time, axiosClient=axios) => {
  return new Promise((resolve, reject)=>{
    setTimeout(async () => {
      try {
        const response = await axiosClient.get(link)  
        resolve(response)
      } catch (error) {
        reject(error)
      }
      
    }, time);
  })
}