import React , { useCallback, useState  } from 'react';

export default function UseCallBackExample(){
    const [count, setCount] = useState(0);
    const [count2,setCount2] = useState(100);

    const addClick = useCallback(() => {
        return count;
    },[count])

    return (
        <>
        <div>{count}</div>
        <div>另外的点击: {count2}</div>
        <button onClick={()=>{setCount(count+1)}}>add</button>
        <button onClick={()=>{setCount2(count2+1)}}>另外的点击</button>
        <Child addClick={addClick}/>
        </>
    );
}


class Child extends React.PureComponent {
    render(){
        console.log('child')
        const { addClick } = this.props;
        return (
            <div>
                <div>Child</div>
                <button onClick={()=>{console.log(addClick())}}>add</button>
            </div>
        );
    }
}