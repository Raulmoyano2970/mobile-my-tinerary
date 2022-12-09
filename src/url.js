export let baseURL= "http://192.168.1.41:8000/"

console.log(process.env.NODE_ENV === "production")

if(process.env.NODE_ENV==="production"){
    baseURL = process.env.REACT_BASE_URL
}

export default baseURL