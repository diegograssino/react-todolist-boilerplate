function App() {
  return (
    <div className="flex flex-column flex-centered full-height">
      <div className="card margin-bottom">
        <h1 className="text-centered margin-bottom">📘 To-Do List</h1>
        <div className=" flex flex-space-between">
          <input type="text" placeholder="Type here a task ..." />
          <button className="padding-y">⏳</button>
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
