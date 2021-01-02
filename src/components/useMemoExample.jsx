import React , { useState , useMemo } from 'react';
const useMemoExample = () => {
    const [count, setCount] = useState(0);
    const [count2,setCount2] = useState(100);
    const expensive = useMemo(()=>{
        console.log('compute');
        return count;
    },[count]);

    return (
        <>
        <div>{count}</div>
        <div>expensive:{expensive}</div>
        <div>另外的点击: {count2}</div>
        <button onClick={()=>{setCount(count+1)}}>add</button>
        <button onClick={()=>{setCount2(count2+1)}}>另外的点击</button>
        </>
    );
}

export default useMemoExample;