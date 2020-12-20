import React , { useReducer } from 'react';

function reducer(state,action){
   console.log(state)
    switch(action.type){
        case 'add':
            return {
                count : state.count + 1
            };
        case 'sub':
            return {
                count : state.count - 1
            }; 
    }
}

export default function Counter(){
    const [counter,dispatch] = useReducer(reducer,{count:0});

    const add = () => {
        dispatch({type:"add"});
    }

    const sub = () => {
        dispatch({type:"sub"});
    }

    return (
        <div>
            your counter {counter.count}
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
        </div>
    )
}