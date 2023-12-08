import React from "react";
import style from  './List.module.scss';
import Item from "./item";

function List() {
    const tasks = [{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'JavaScript',
        time: '01:00:00'
    }, {
        task: 'TypeScript',
        time: '03:00:00'
    }]
    return (
        <aside className={style.tasksList}>
            <h2> day studies </h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        </aside>
    )
}

export default List;