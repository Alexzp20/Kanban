import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { Task } from "../../shared/helpers/taskInterface"

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({task}) => {
  return (
    <Card isBlurred  shadow="sm" className="w-full border-none bg-background/60 dark:bg-default-100/50">
    <CardHeader className="flex gap-3">
      <div className="flex flex-col">
        <p className="text-md">{task.name}</p>
        <p className="text-small text-default-500">{task.priority}</p>
      </div>
    </CardHeader>
    <Divider />
    <CardBody>
      <p>{task.description}</p>
    </CardBody>
  </Card>
  )
}
