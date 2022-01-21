import Task from './Task';

import {useState} from 'react';

function TasksList() {

  const taskItemList = [
    "Follow Edukasyon.ph on Facebook.",
    "Follow AWS Siklab PH on Facebook.",
    "Follow Zuitt Coding Bootcamp on Facebook."
  ];


  const[taskValue, setTaskValue] = useState("Just another Task");
  console.log("taskValue", taskValue);

  const inputChangeHandler = (e)=>{
    setTaskValue(e.target.value);
  }

  return (
    <div>
      <input
        className="task-input"
        placeholder="Create a new task"
        onChange={(e) => inputChangeHandler(e)}
      />
    <ul>
      {
        taskItemList.map((task,index)=>{
    
          return <Task key={index} taskName={task}/>
        })
      }

    </ul>

    </div>
  );
}

export default TasksList;