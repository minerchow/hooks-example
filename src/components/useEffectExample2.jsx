import React , { useState , useEffect } from 'react';

function useInterval(callback,time){
    useEffect(()=>{
        const i = setInterval(callback,time);
        return () => {
            clearInterval(i);
        }
    })
}

export default function EffectExample2() {
    const [count,setCount] = useState(0);

    useInterval(()=>{
        setCount((count)=>{
            return count = count + 1;
        })
    },1000)


    return (
        <div>{count}</div>
    )
}