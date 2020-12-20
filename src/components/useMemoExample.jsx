import React , { useState , useMemo } from 'react';
const useMemoExample = () => {
    const [count,setCount] = useState(0);
    const memorizedText = useMemo(()=>{
        console.log('run useMemo');
        return `memo ${Date.now()}`;
    },[Math.floor(count/10)]);

    const addCount=()=>{
        setCount(count+1);
    }

    return (
        <div>
            {memorizedText}
            <div>{count}</div>
            <button onClick={addCount}>++++</button>
        </div>
    );
}

export default useMemoExample;