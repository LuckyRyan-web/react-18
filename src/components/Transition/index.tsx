/**
 * @author liuyuan
 * @date 2022-08-25 15:25
 * @since 0.0.0
 */

import React, { useTransition } from 'react'
import classnames from 'classnames'
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

interface TransitionProps {}

const Transition: React.FC<TransitionProps> = (props) => {
    const [active, setActive] = React.useState('tab1') //需要立即响应的任务，立即更新任务
    const [renderData, setRenderData] = React.useState(tab[active]) //不需要立即响应的任务，过渡任务
    const [isPending, startTransition] = useTransition()

    const handleChangeTab = (activeItem: string) => {
        setActive(activeItem) // 立即更新
        startTransition(() => {
            // startTransition 里面的任务优先级低
            setRenderData(tab[activeItem])
        })
    }

    return (
        <div>
            <div className='tab'>
                {Object.keys(tab).map((item, key) => (
                    <button
                        className={classnames(active === item ? style.active : '', style.tab)}
                        onClick={() => handleChangeTab(item)}
                        key={key}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <ul>
                {isPending && <div> loading... </div>}
                {renderData.map((item: number) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(Transition)
