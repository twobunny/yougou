import http from "superagent" 

const baseUrl = "localhost...";

function fitlerUrl(url){
    if(url.startsWith("http")){
        return url;
    }else{
        return baseUrl+url;
    }
}
export default {
    get(url,params){
        return new Promise((resolve,reject)=>{
            http.get(fitlerUrl(url)).query(params || {}).end((err,res) => {
                if(err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        })
    }

}