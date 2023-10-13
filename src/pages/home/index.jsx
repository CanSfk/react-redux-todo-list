import Header from "../../layouts/header";
import Profile from "./profile";
import AddTodo from "./addTodo";
import TodoLists from "./TodoLists";

export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-800">
      <Header />
      <Profile />
      <div className="mt-20 px-20 flex gap-20">
        <AddTodo />
        <TodoLists />
      </div>
    </div>
  );
}
