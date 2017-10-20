//向后台发送get请求，返回promise
const HOST = "http://localhost:9090";
export const get = (url) => {
    return fetch(`${HOST}${url}`, {
        method: "get",
        //默认情况下跨域为了安全 是不携带cookie的，加此此选项可以带上cookie
        credentials: "include",
        headers: {
            "Accept": "application/json"
        }
    }).then(res => res.json());
};

export const post = (url, body) => {
    return fetch(`${HOST}${url}`, {
        method: "post",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)//请标体
    }).then(res => res.json());
};




