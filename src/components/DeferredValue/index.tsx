/**
 * @author liuyuan
 * @date 2022-08-25 15:35
 * @since 0.0.0
 */

import React from 'react'
//import classnames from 'classnames'
import style from './style.module.scss'

/* 模拟数据 */
const mockList1 = new Array(10000).fill('tab1').map((item, index) => item + '--' + index)
const mockList2 = new Array(10000).fill('tab2').map((item, index) => item + '--' + index)
const mockList3 = new Array(10000).fill('tab3').map((item, index) => item + '--' + index)

const tab: {
    [key: string]: any
} = {
    tab1: mockList1,
    tab2: mockList2,
    tab3: mockList3,
}

interface DeferredValueProps {}

const DeferredValue: React.FC<DeferredValueProps> = (props) => {
    const [active, setActive] = React.useState('tab1') //需要立即响应的任务，立即更新任务
    const deferActive = React.useDeferredValue(active) // 把状态延时更新，类似于过渡任务
    const handleChangeTab = (activeItem: string) => {
        setActive(activeItem) // 立即更新
    }
    const renderData = tab[deferActive] // 使用滞后状态
    return (
        <div>
            <div>
                {Object.keys(tab).map((item, key) => (
                    <button key={key} onClick={() => handleChangeTab(item)}>
                        {item}
                    </button>
                ))}
            </div>
            <ul>
                {renderData.map((item: number) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(DeferredValue)
