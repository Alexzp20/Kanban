import { Button } from "@nextui-org/react"
import { useState } from "react";
import { Fragment } from "react/jsx-runtime"
import { TaskList } from "../components/TaskList";
import { Task } from "../../shared/helpers/taskInterface";

const tasks: Task[] = [{
    type: 1,
    name: "Task example",
    priority: "High",
    description: "This is a Example for task"
}, {
    type: 1,
    name: "Task example",
    priority: "High",
    description: "This is a Example for task"
}]

export const KanbanPage = () => {

    const [pendingTask, setPendindTask] = useState<Task[]>([...tasks]);
    const [taskProcess, setTaskProcess] = useState<Task[]>([]);
    const [completedTask, setCompletedTask] = useState<Task[]>([]);
    return (
        <Fragment>
            <h1 className="mb-20 mx-3 mt-4 font-sans text-5xl text-center text-zinc-50">¡KANBAN BOARD!</h1>
            <Button color="secondary" variant="ghost" className="w-1/4 grid justify-self-center mb-10 text-xl"> Add Task</Button>
            <div className="h-screen flex flex-col lg:flex-row flex-nowrap gap-20 px-3 py-6 text-center text-zinc-50 text-2xl">
                <div className="h-auto w-full basis-4/12">
                    <h4 className="">PENDING TASKS</h4>
                    <div className=" bg-green-500 h-auto rounded-md px-2 py-4">
                        <TaskList list={pendingTask} />
                    </div>
                </div>
                <div className=" w-full basis-4/12">
                    <h4 className="">TASKS IN PROCESS</h4>
                    <div className=" bg-yellow-500 h-auto rounded-md px-2 py-4">
                        <TaskList list={taskProcess} />
                    </div>
                </div>
                <div className=" w-full basis-4/12">
                    <h4 className="">COMPLETED TASKS</h4>
                    <div className=" bg-red-500 h-auto rounded-md px-2 py-4">
                        <TaskList list={completedTask} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
