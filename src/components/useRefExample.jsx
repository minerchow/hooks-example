import React , { useState , useRef } from 'react';

export default function useRefExample(){
    const [counter,setCounter] = useState(0);
    const prev = useRef(null);
    return (
        <>
        <div>当前的值 {counter}</div>
        <div>之前的值 {prev.current}</div>
        <button onClick={()=>{
            setCounter((x)=>{
                prev.current = counter;
                return x + 1;
            })
        }}>add</button>
        <button onClick={(x)=>{
            setCounter((x)=>{
                prev.current = counter;
                return x - 1;
            })
        }}>remove</button>
        </>
    );
}