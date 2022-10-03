import React, { useEffect, useState } from 'react';

export type TodosPageProps = {
};



type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const TodosPage = (props: TodosPageProps) => {
    const { } = props;


    const [todos, setTodos] = useState([] as Array<Todo>);


    const [checkedMap, setCheckedMap] = useState({} as Record<string, boolean>)


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then(v => v.json()).then((data) => {
            setTodos(data);
        });
    }, []);

    return (
        <div >
            {todos.map((v) => {
                return <div key={v.id} className="todo-panel">
                    <span>{v.id}</span>
                    <span>{v.userId}</span>

                    {checkedMap[v.id] ?
                        <span>{v.title} is clicked</span> :
                        <button onClick={() => {


                            //We're definitely setting ourselves up for a memory leak here
                            // But this is probably good. 
                            setTimeout(() => {
                                setCheckedMap({
                                    ...checkedMap,
                                    [v.id]: true
                                })
                            }, 3000)
                        }} data-testid="title">{v.title}</button>
                    }

                    <span>{v.completed}</span>
                </div>
            })}
        </div>
    );
};
