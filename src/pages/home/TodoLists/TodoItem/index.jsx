import classNames from "classnames";
import { deleteTodo } from "../../../../stores/todo/action";
import { useAuth } from "../../../../stores/auth/hooks";
import { setModal } from "../../../../stores/modal/action";

export default function TodoItem({ todo }) {
  const { user } = useAuth();
  return (
    <div
      className={classNames(
        "text-slate-100 px-3 py-2 rounded-md bg-slate-950 text-lg font-semibold flex flex-col justify-between min-h-[100px] relative overflow-hidden",
        {
          "pointer-events-none opacity-20": todo.userId !== user.id,
        }
      )}
    >
      <span>{todo.title}</span>
      <div className="flex items-center gap-4">
        <button
          onClick={() =>
            setModal({
              name: "todoEdit",
              data: todo,
            })
          }
          className="px-2 py-0.5 rounded-md text-semibold text-blue-100 bg-blue-500 text-sm transition duration-300 hover:bg-blue-700 z-10"
        >
          Update
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-2 py-0.5 rounded-md text-semibold text-red-100 bg-red-500 text-sm transition duration-300 hover:bg-red-700 z-10"
        >
          Delete
        </button>
      </div>
      {todo.done && (
        <div className="absolute top-0 left-0 w-full h-full bg-slate-950/40 grid place-items-center">
          <span className="text-base font-bold text-green-400 select-none z-10">
            Completed
          </span>
        </div>
      )}
    </div>
  );
}
