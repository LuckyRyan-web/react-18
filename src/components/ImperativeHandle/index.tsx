/**
 * useImperativeHandle 可以配合 forwardRef 自定义暴露给父组件的实例值
 * @author liuyuan
 * @date 2022-08-25 16:06
 * @since 0.0.0
 */

import React, { useImperativeHandle, useRef, forwardRef } from 'react'
//import classnames from 'classnames'
//import style from './style.module.scss'

interface ImperativeHandleProps {}

const ImperativeHandle: React.FC<ImperativeHandleProps> = (
    props,
    ref: React.MutableRefObject<Partial<HTMLInputElement>>,
) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        focus: () => {
            console.log('表单被点击啦', ref)
            inputRef.current?.focus()
        },
    }))
    return <input ref={inputRef}></input>
}

export const FancyInput = React.memo(forwardRef(ImperativeHandle))

// export default React.memo(ImperativeHandle)
