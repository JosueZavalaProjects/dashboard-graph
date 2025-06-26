import { Bars3Icon } from "@heroicons/react/16/solid";
import { NavItem } from "./NavItem";

interface Props {
  children: React.ReactNode;
}

export const NavBar = ({ children }: Props) => {
  return (
    <section className="flex items-center justify-center p-8 bg-slate-200 w-screen h-screen mx-auto relative">
      <main className="flex h-full lg:w-[70rem] rounded-xl bg-white">
        <div className="flex-col gap-4 rounded-l-xl bg-slate-100 p-6 border-r border-r-slate-300 hidden lg:w-1/5 lg:flex">
          <span>
            <Bars3Icon className="size-10 text-gray-700" />
          </span>
          <nav>
            <ul className="flex flex-col gap-2 text-lg">
              <NavItem label="Dashboard" isSelected />
              <NavItem label="Users" />
              <NavItem label="Settings" />
            </ul>
          </nav>
        </div>
        <div className="p-6 w-full lg:w-4/5">{children}</div>
      </main>
    </section>
  );
};
