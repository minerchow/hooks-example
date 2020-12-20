import React , { useState } from 'react';
function useCount(initialValue){
    const [count,setCount] = useState(initialValue);

    const setCountFun = () =>{
        setCount((count) => {
            return count = count + 1;
        })
    }

    return [
        count,setCountFun
    ]
} 

const useStateExample = () => {
    const [count , addCount]  = useCount(0);

    return (
        <div>
            your count {count}
            <button onClick={addCount}>add</button>
        </div>
    )
}

export default useStateExample;

