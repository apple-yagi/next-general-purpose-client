import axios, { AxiosResponse } from "axios";
import { FC, useContext, useEffect, useState } from "react";
import AuthContext from '../../src/auth/AuthContext'
import PrivateRoute from "../../src/guards/PrivateRoute";
import { Task } from "../../types/tasks";

const Tasks: FC = () => {
  const { info } = useContext(AuthContext)
  const [tasks, setTasks] = useState<Task[]>([])

  const init = async () => {
    try {
      const res: AxiosResponse<Task[]> = await axios.get('http://localhost:8080/items', {
        headers: {
          'Authorization': `Bearer ${info.token}`
        }
      })
      setTasks(res.data)
    } catch (e) {
      alert('タスクの取得に失敗しました')
    }
  }

  useEffect(() => {
    if (info.token)
      init()
  }, [])

  return (
    <PrivateRoute>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </PrivateRoute>
  )
}

export default Tasks