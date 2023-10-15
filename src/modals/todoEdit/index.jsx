import classNames from "classnames";
import { removeModal } from "../../stores/modal/action";
import { useModal } from "../../stores/modal/hooks";
import { useEffect, useState } from "react";
import { updateTodo } from "../../stores/todo/action";

export default function TodoEdit() {
  const { data } = useModal();
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setValue(data.title);
    setChecked(data.done);
  }, []);

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.3)] grid place-items-center z-20">
      <form className="grid gap-5 w-[400px] h-max px-4 py-3 rounded-md bg-slate-600">
        <h2 className="select-none text-2xl font-semibold text-green-300 text-center">
          Todo Edit Form
        </h2>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className={`bg-transparent rounded-md border select-none border-slate-200 outline-none px-2 py-1 font-medium text-slate-100 transition duration-300 focus:border-cyan-400`}
        />

        <label className="flex gap-2 items-center select-none text-orange-400">
          <input
            type="checkbox"
            onChange={() => setChecked(!checked)}
            checked={checked}
            className="w-4 h-4"
          />
          <span className="text-lg font-medium">Completed</span>
        </label>

        <div className="flex gap-5">
          <button
            onClick={(e) => {
              e.preventDefault();
              updateTodo({ title: value, id: data.id, done: checked });
              removeModal();
            }}
            className={classNames(
              "flex-1 px-3 py-1.5 font-bold rounded-md outline-none select-none bg-green-400 text-slate-800 hover:bg-green-500 hover:text-slate-100 transiton duration-300"
            )}
          >
            Save
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              removeModal();
            }}
            className={classNames(
              "px-3 py-1.5 font-bold rounded-md outline-none select-none bg-pink-400 text-slate-800 hover:bg-pink-500 hover:text-slate-100 transiton duration-300"
            )}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
