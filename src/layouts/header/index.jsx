import classNames from "classnames";
import { setUser } from "../../stores/auth/action";
import { useAuth } from "../../stores/auth/hooks";

export default function Header() {
  const { user } = useAuth();

  return (
    <div className="border-b border-slate-600 px-10 py-5 flex items-center justify-between">
      <h1 className="text-4xl font-bold text-slate-300">Login</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setUser({ id: 1, name: "Can-1" })}
          className={classNames(
            "text-lg font-semibold bg-cyan-500 px-3 py-1.5 rounded-md transition duration-300 hover:bg-cyan-700 hover:text-slate-200 select-none",
            {
              "pointer-events-none !bg-slate-600": user.id === 1,
            }
          )}
        >
          Can-1
        </button>
        <button
          onClick={() => setUser({ id: 2, name: "Can-2" })}
          className={classNames(
            "text-lg font-semibold bg-cyan-500 px-3 py-1.5 rounded-md transition duration-300 hover:bg-cyan-700 hover:text-slate-200 select-none",
            {
              "pointer-events-none !bg-slate-600": user.id === 2,
            }
          )}
        >
          Can-2
        </button>
        <button
          onClick={() => setUser({ id: false, name: false })}
          className={classNames(
            "text-lg font-semibold bg-cyan-500 px-3 py-1.5 rounded-md transition duration-300 hover:bg-cyan-700 hover:text-slate-200 select-none",
            {
              "pointer-events-none !bg-slate-600": user.id === false,
            }
          )}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
