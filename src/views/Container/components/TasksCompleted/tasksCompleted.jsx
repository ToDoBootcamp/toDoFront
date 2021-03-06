import axios from "axios"
import { useEffect } from "react"
import { Card } from "../Tasks/components/Cards/components/Card/Card"
import styles from "./styles.module.css"


function TasksCompleted(props) {
  const { listTasks, setListTasks } = props
  useEffect(() => {
    const petition = async () => {
      await axios
        .get(`https://fierce-castle-95757.herokuapp.com/api/todo`)
        .then((res) => {
          if (res.status === 200) {
            setListTasks(res.data)
            console.log(res.data)
          } else {
            console.log("no se hizo")
          }
        })
    }
    petition()
  }, [setListTasks])
  
  return (
    <div className={styles.completed}>
      <h2>Tareas completadas</h2>
      <div className={styles.containerCards}>
        {listTasks.map((value, index) =>
          value.completed ? (
            <Card
              key={index}
              id={value.id}
              title={value.title}
              description={value.description}
              date={value.date}
              completed={value.completed}
              deleted={value.deleted}
              listTasks={listTasks}
              setListTasks={setListTasks}
            />
          ) : undefined
        )}
      </div>
    </div>
  )
}
export { TasksCompleted }
