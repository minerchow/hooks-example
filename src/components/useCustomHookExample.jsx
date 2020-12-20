import React, {useEffect, useState} from 'react';

const  useCounter = (initialState) => {
    const [count, setCount] = useState(initialState);

    const setCounter = (prams) => {
        setCount((count)=>{
            console.log(prams)
            return count + 1;
        })
    }

    useEffect(()=>{
        console.log(count)
    },[count])

    return [count,setCounter]
}

const Counter = () =>{
    const [count, setCount] = useCounter(0);
    
    return (
        <div>
            {count}
            <button onClick={()=>{
                setCount('aaa')
            }} style={{"height":"40px"}}>加一碗</button>
        </div>
    )
    
}

export default Counter;