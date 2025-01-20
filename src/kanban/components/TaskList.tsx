import { Task } from "../../shared/helpers/taskInterface";
import { TaskCard } from "./TaskCard";

interface TaskList{
    list : Task[];
}

export const TaskList: React.FC<TaskList> = ({list}) => {
  return (
    <div className="grid gap-3 grid-cols-1 justify-items-center">
        {list &&  Object.entries(list).map(([key,task]) => <TaskCard key={key} task={task}/> )}    
    </div>
  )
}
