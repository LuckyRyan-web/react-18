/**
 * @author liuyuan
 * @date 2022-08-25 15:46
 * @since 0.0.0
 */

import React, { useReducer } from 'react'
//import classnames from 'classnames'
//import style from './style.module.scss'

interface ReducerProps {}

const Reducer: React.FC<ReducerProps> = (props) => {
    const [state, dispatch] = useReducer(
        (
            state: number,
            action: {
                name: string
            },
        ) => {
            const { name } = action

            switch (name) {
                case 'add':
                    return state + 1
                case 'reduction':
                    return state - 1
            }

            return state
        },
        0,
    )

    return (
        <div>
            <button onClick={() => dispatch({ name: 'add' })}>add</button>
            <button onClick={() => dispatch({ name: 'reduction' })}>reduction</button>
            <div>{state}</div>
        </div>
    )
}

export default React.memo(Reducer)
