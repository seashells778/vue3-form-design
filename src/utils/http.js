import axios from 'axios'


export const getComponentsData = ()=>{
    return new Promise((resolve,reject)=>{
        axios.get(
            'https://pre-hwork.haier.net/hpnback/project/api/project/list/getFilterValues',
            {
                headers:{
                  "Ain":  '%7B%22appId%22%3A%22hwork%22%2C%22userCode%22%3A%2221082803%22%2C%22userName%22%3A%22%E8%A7%A3%E4%B9%85%E8%8E%B9%22%2C%22roleCode%22%3A%22zxptry%22%2C%22roleName%22%3A%22%E9%80%9A%E7%94%A8%E8%A7%92%E8%89%B2%22%2C%22encryptFlag%22%3A%221%22%7D'
                }
            }
        ).then(res=>{
            console.log(res.data)
            if(res.data.code === 200){
                resolve(res.data.data) 
            }else{
                reject(res.data)
            }
        })

    })
    
}
