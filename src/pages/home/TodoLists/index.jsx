import TodoItem from "./TodoItem";
import { useTodo } from "../../../stores/todo/hooks";

export default function TodoLists() {
  const { todos } = useTodo();

  return (
    <div className="flex items-center gap-5 flex-wrap">
      {todos.map((todo, index) => {
        return <TodoItem todo={todo} key={index} />;
      })}
    </div>
  );
}
