/**
 * useInsertionEffect
 * 执行时机在 DOM 更新前， useInsertionEffect > useLayoutEffect > useEffect
 * 本质上 useInsertionEffect 主要是解决 CSS-in-JS 在渲染中注入样式的性能问题
 * @author liuyuan
 * @date 2022-08-25 15:41
 * @since 0.0.0
 */

import React, { useInsertionEffect, useLayoutEffect, useEffect } from 'react'
//import classnames from 'classnames'
//import style from './style.module.scss'

interface InsertionEffectProps {}

const InsertionEffect: React.FC<InsertionEffectProps> = (props) => {
    useInsertionEffect(() => {
        console.log('useInsertionEffect')
        /* 动态创建 style 标签插入到 head 中 */
        const style = document.createElement('style')
        style.innerHTML = `
          .css-in-js{
            color: red;
            font-size: 20px;
          }
        `
        document.head.appendChild(style)
    }, [])

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    }, [])

    useEffect(() => {
        console.log('useEffect')
    }, [])

    return <div className='css-in-js'> hello , useInsertionEffect </div>
}

export default React.memo(InsertionEffect)
