/**
 * @author liuyuan
 * @date 2022-08-25 15:51
 * @since 0.0.0
 */

import React, { useRef } from 'react'
//import classnames from 'classnames'
//import style from './style.module.scss'

interface RefProps {}

const Ref: React.FC<RefProps> = (props) => {
    const dom = useRef(null)
    const handerSubmit = () => {
        /*  <div >表单组件</div>  dom 节点 */
        console.log(dom.current)
    }

    const count = useRef(0)

    return (
        <div>
            {/* ref 标记当前dom节点 */}
            <div ref={dom}>表单组件</div>
            <button onClick={() => handerSubmit()}>提交</button>

            <div>{count.current} ref 不会引起视图实时更新的</div>
            <button
                onClick={() => {
                    count.current++
                    console.log('count', count)
                }}
            >
                ref add
            </button>
        </div>
    )
}

export default React.memo(Ref)
