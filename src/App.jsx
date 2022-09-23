import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] =
    useState('');
  const [idCount, setIdCount] = useState(0);

  useEffect(() => {
    const tAux = tasks.filter(
      t => t.list !== 'inprocess'
    );

    console.log(tAux);
  }, [tasks]);

  const addTask = t => {
    if (t) {
      setTasks([
        ...tasks,
        {
          id: idCount,
          name: t,
          list: 'inprocess',
        },
      ]);
      setInputValue('');
      setIdCount(idCount + 1);
    }
  };

  const delTask = id => {
    setTasks(
      tasks.filter(task => task.id !== id)
    );
  };

  const moveTask = t => {
    const pos = tasks.indexOf(t);
    const tasksAux = tasks;
    tasksAux[pos].list = 'finished';
    setTasks(tasksAux);
    console.log(tasks);
  };

  return (
    <div className="flex flex-column flex-centered full-height">
      <div className="card margin-bottom">
        <h1 className="text-centered margin-bottom">
          📘 To-Do List
        </h1>
        <div className=" flex flex-space-between">
          <input
            type="text"
            placeholder="Type here a task ..."
            onChange={e =>
              setInputValue(e.target.value)
            }
            value={inputValue}
          />
          <button
            className="padding-x"
            onClick={() => addTask(inputValue)}
          >
            ⏳
          </button>
        </div>
      </div>
      <div className="card margin-bottom">
        <h2 className="margin-bottom">
          In Process
        </h2>
        <ul>
          {tasks.map((task, i) => (
            <li
              className="flex flex-space-between margin-bottom"
              key={i}
            >
              ⏳ {task.name}
              <div>
                <button
                  onClick={() => moveTask(task)}
                >
                  🎉
                </button>{' '}
                <button
                  onClick={() => delTask(task.id)}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
        {tasks.length === 0 && (
          <p className="margin-bottom">
            Nothing here! 🤷‍♀️
          </p>
        )}
      </div>
      <div className="card margin-bottom">
        <h2 className="margin-bottom">
          Finished
        </h2>
        <ul>
          {tasks.map((task, i) => (
            <li
              className="flex flex-space-between margin-bottom"
              key={i}
            >
              🎉 {task.name}
              <div>
                <button
                  onClick={() => delTask(task.id)}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
        {tasks.length === 0 && (
          <p className="margin-bottom">
            Nothing here! 🤷‍♀️
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
