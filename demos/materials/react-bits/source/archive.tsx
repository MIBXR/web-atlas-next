import { useState } from "react";
import { createRoot } from "react-dom/client";
import FuseButton from "react-bits-fuse-button";

type TaskState = "todo" | "undoable" | "archived";

function ArchiveTask() {
  const [state, setState] = useState<TaskState>("todo");
  const [attempt, setAttempt] = useState(0);
  const status = {
    todo: "待办任务",
    undoable: "已归档，撤销窗口仍打开",
    archived: "归档完成",
  }[state];

  function restart() {
    setState("todo");
    setAttempt(value => value + 1);
  }

  return (
    <article className="task" aria-label="校对活动页面">
      <div className="task-row">
        <div>
          <h2>校对活动页面</h2>
          <p role="status">{status}</p>
        </div>
        <FuseButton
          key={attempt}
          label="归档"
          undoLabel="撤销"
          doneLabel="已归档"
          color="var(--archive-ink)"
          background="var(--archive-background)"
          settle="stay"
          onCommit={() => setState("undoable")}
          onUndo={() => setState("todo")}
          onFuseEnd={() => setState("archived")}
        />
      </div>
      {state === "archived" && (
        <button className="restart" type="button" onClick={restart}>重试样例</button>
      )}
    </article>
  );
}

createRoot(document.getElementById("archive-task")!).render(<ArchiveTask />);
