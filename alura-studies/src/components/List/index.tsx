import { ITask } from '../../types/task';
import style from  './List.module.scss';
import Item from "./item";


function List({tasks}: {tasks: ITask[]}) {
    
    return (
        <aside className={style.tasksList}>
            <h2> Daily Studies </h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        </aside>
    )
}

export default List;