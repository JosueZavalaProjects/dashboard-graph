interface NavItemProps {
  label: string;
  isSelected?: boolean;
}
export const NavItem = ({ label, isSelected = false }: NavItemProps) => {
  return (
    <li
      className={`rounded-lg p-2 cursor-pointer ${
        isSelected && "bg-slate-300"
      }`}
    >
      <div>{label}</div>
    </li>
  );
};
