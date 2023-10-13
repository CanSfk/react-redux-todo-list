import classNames from "classnames";
import { deleteTodo } from "../../../../stores/todo/action";
import { useAuth } from "../../../../stores/auth/hooks";

export default function TodoItem({ todo }) {
  const { user } = useAuth();
  return (
    <div
      className={classNames(
        "text-slate-100 px-3 py-2 rounded-md bg-slate-900 text-lg font-semibold flex flex-col justify-between min-h-[84px]",
        {
          "pointer-events-none opacity-50": todo.userId !== user.id,
        }
      )}
    >
      <span>{todo.title}</span>
      <div className="flex items-center gap-4">
        <button className="px-2 py-0.5 rounded-md text-semibold text-blue-100 bg-blue-500 text-sm transition duration-300 hover:bg-blue-700">
          Update
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-2 py-0.5 rounded-md text-semibold text-red-100 bg-red-500 text-sm transition duration-300 hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
