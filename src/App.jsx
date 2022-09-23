import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
  const [idCount, setIdCount] = useState(0);

  const addTask = t => {
    if (t) {
      setTasks([...tasks, { id: idCount, name: t, list: 'in-process' }]);
      setIdCount(idCount + 1);
      setInputTask('');
    }
  };

  useEffect(() => {
    console.log(tasks);
    console.log('idCount: ' + idCount);
  }, [tasks, idCount]);

  return (
    <div className="flex flex-column flex-centered full-height">
      <div className="card margin-bottom">
        <h1 className="text-centered margin-bottom">📘 To-Do List</h1>
        <div className=" flex flex-space-between">
          <input
            type="text"
            placeholder="Type here a task ..."
            onChange={e => setInputTask(e.target.value)}
            value={inputTask}
          />
          <button className="padding-y" onClick={e => addTask(inputTask)}>
            ⏳
          </button>
        </div>
      </div>
      <div className="card margin-bottom">
        <h2 className="margin-bottom">In Process</h2>
        <ul>
          <li className="flex flex-space-between margin-bottom">
            ⏳ Task
            <div>
              <button>🎉</button> <button>❌</button>
            </div>
          </li>
          <li className="flex flex-space-between margin-bottom">
            ⏳ Another task
            <div>
              <button>🎉</button> <button>❌</button>
            </div>
          </li>
        </ul>
        <p className="margin-bottom">Nothing here! 🤷‍♀️</p>
      </div>
      <div className="card margin-bottom">
        <h2 className="margin-bottom">Finished</h2>
        <ul>
          <li className="flex flex-space-between margin-bottom">
            🎉 Task
            <div>
              <button>❌</button>
            </div>
          </li>
          <li className="flex flex-space-between margin-bottom">
            🎉 Another task
            <div>
              <button>❌</button>
            </div>
          </li>
        </ul>
        <p className="margin-bottom">Nothing here! 🤷‍♀️</p>
      </div>
    </div>
  );
}

export default App;
