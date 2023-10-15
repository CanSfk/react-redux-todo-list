import Header from "../../layouts/header";
import Profile from "./profile";
import AddTodo from "./addTodo";
import TodoLists from "./TodoLists";
import { modals } from "../../modals";
import { useModal } from "../../stores/modal/hooks";

export default function Home() {
  const { name } = useModal();
  const currentModal = modals.find((m) => m.name === name);

  return (
    <>
      <div className="w-full pb-20 min-h-screen bg-slate-800">
        {currentModal && <currentModal.element />}
        <Header />
        <Profile />
        <div className="mt-20 px-20 flex gap-20">
          <AddTodo />
          <TodoLists />
        </div>
      </div>
    </>
  );
}
