import React , { useState , useEffect } from 'react';

export default () => {
    const [count,setCount] = useState(0);
    function myEffect(){
        const I = setInterval(()=>{
            console.log(count);
            setCount((count)=>{
                return count + 1;
            })
        },1000);

        return () => {
            clearInterval(I);
        }
    }

    useEffect(myEffect,[count]);
    return <div>{count}</div>
}