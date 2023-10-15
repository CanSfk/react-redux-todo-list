import { useState } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { addTodo } from "../../../stores/todo/action";
import { useAuth } from "../../../stores/auth/hooks";

export default function AddTodo() {
  const [value, setValue] = useState("");
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ title: value, userId: user.id, id: nanoid(), done: false });
    setValue("");
  };

  return (
    <form
      action="#"
      className="grid gap-5 w-max px-4 py-3 rounded-md bg-slate-600 h-max"
    >
      <h2 className="select-none text-2xl font-semibold text-green-300 text-center">
        Add Todo Form
      </h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={user.id === false ? "Please log in" : "Title"}
          className={`bg-transparent rounded-md border select-none border-slate-200 outline-none px-2 py-1 font-medium text-slate-100 transition duration-300 focus:border-cyan-400 ${
            user.id === false && "pointer-events-none"
          }`}
        />
      </div>
      <button
        onClick={(e) => handleSubmit(e)}
        className={classNames(
          "w-full px-3 py-1.5 font-bold rounded-md outline-none select-none bg-green-400 text-slate-800 hover:bg-green-500 hover:text-slate-100 transiton duration-300",
          {
            "pointer-events-none !bg-slate-400": user.id === false,
          }
        )}
      >
        Add
      </button>
    </form>
  );
}
