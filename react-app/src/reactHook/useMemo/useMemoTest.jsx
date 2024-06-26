import React, { useState } from 'react'
import ViewState from './ViewState';

/**
 * useMemo
 * useMemo는 Memorization기법을 사용한 react hook이다.
 * 메모리제이션기법은 한 번 연산해 본 결과를 기억해 두고, 
 * 다시 동일한 입력이 돌아오면 기억해둔 데이터를 변환하는 방법이다.
 * 
 * 사용법
 * useMemo(() => {}, [])
 * 
 * 첫 번째 인자로는 메모리제이션 해 줄 함수
 * 두 번째 인자로는 의존성배열
 */

const useMemoTest = () => {
    const [num, setNum] = useState(0);
    const [text, setText] = useState("");

    const increaseNum = () => {
        setNum(num + 1);
    }

    const decreaseNum = () => {
        setNum(num - 1);
    }

    const onChangeText = (ev) => {
        setText(ev.target.value);
    }

    return (
        <div>
            <div>
                <button onClick={increaseNum}>+</button>
                <button onClick={decreaseNum}>-</button>
                <input
                    type="text"
                    placeholder='글자를 입력하세요'
                    onChange={onChangeText}
                />
            </div>
            <ViewState
                num={num}
                text={text}
            />
        </div>
    )
}

export default useMemoTest