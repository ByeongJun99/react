import React, { useEffect, useState } from 'react'

/**
 * useEffect
 * 컴포넌트가 랜더링 될 때 특정 작성을 실행할 수 있도록 하는 react hook
 * 클래스형 컴포넌트의 생명주기메소드의 역할을 할 수 있다.
 * 
 * 컴포넌트가 마운트됐을 때(처음 나타났을 때), 언마운트됐을 때(사라질 때)
 * 업데이트됐을 때(특정 state, props가 바뀌었을 때)
 * 
 * 사용법
 * useEffect(effect, []);
 * 첫번째 인자(effect) : 함수 -> 특정 상황에서 실행시켜줄 기능
 * 두번째 인자 : 배열 -> 의존성배열
 */

const UseEffectTest = () => {
    const [name, setName] = useState("최지원");
    const [num, setNum] = useState(0);

    const handleKeyUpName = (ev) => {
        setName(ev.target.value);
    }

    const handleClickNum = (ev) => {
        setNum(num + 1);
    }

    // 랜더링이 되었을 때, 그리고 state가 변경될 때 마다 console.log()가 찍혔다.
    // componentDidMount & componentDidUpdate의 역할을 대체할 수 있다.
    useEffect(() => {
        console.log("외존성 배열이 없는 useEffect호출")
    })

    // 랜더링이 되었을 때 한 번만 실행이 된다.
    // componentDidMount의 역할을 대체하고 있다.
    useEffect(() => {
        console.log("반배열을 의존성배열로 가진 useEffect호출")
    }, [])

    // 랜더링이 되었을 때, 그리고 name state가 변경되었을 때 호출된다.
    // 의존성배열 안에 있는 state가 변하면 해당 EFFECT함수를 호출해준다.
    // componentDidMount & componentDidUpdate
    useEffect(() => {
        console.log("[name]의존성 배열을 가진 useEffect호출")
    }, [name])

    // return함수를 추가하여 componentWillUnmount 역할을 할 수 있다.
    useEffect(() => {
        return () => {
            console.log("함수를 리턴하는 useEffect호출")
        }
    }, [name])

    return (
        <div>
            <p>안녕하세요. {name}입니다.</p>
            <input type="text" onKeyUp={handleKeyUpName}/>
            <p>{num}번 클릭</p>
            <button onClick={handleClickNum}>+</button>
        </div>
    )
}

export default UseEffectTest