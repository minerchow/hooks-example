import React , { useState , useEffect } from 'react';

function useCount(initialValue){
    const [count,setCount] = useState(initialValue);

    const setCountFun = () =>{
        setCount((count) => {
            return count = count + 1;
        })
    }

    //相当 componentupdate
    // useEffect(()=>{
    //     console.log(`${count} times`)
    // })

    //依赖什么作用
    useEffect(()=>{
        console.log(`${count} times`)
    },[])
    return [
        count,setCountFun
    ]
} 

export default () => {
    const [count , addCount]  = useCount(0);

    return (
        <div>
            your count {count}
            <button onClick={addCount}>add</button>
        </div>
    )
}