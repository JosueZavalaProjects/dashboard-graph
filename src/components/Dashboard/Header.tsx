import { UserIcon } from "@heroicons/react/16/solid";

export const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <div className="flex items-center text-4xl">Dashboard</div>
        <div className="grid justify-items-center items-center bg-gray-300 w-14 h-14 rounded-full">
          <UserIcon className="size-11 text-black" />
        </div>
      </div>
    </div>
  );
};
