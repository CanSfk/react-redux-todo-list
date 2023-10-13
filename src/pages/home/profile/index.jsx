import { useAuth } from "../../../stores/auth/hooks";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="w-full flex items-center select-none justify-center text-3xl font-bold text-slate-200 py-4">
      <span>
        {user.id === false ? "Please Log in" : `Welcome ${user.name}`}
      </span>
    </div>
  );
}
