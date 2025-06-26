import { Cards } from "./Cards";
import { Charts } from "./Charts";
import { Header } from "./Header";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Header />
        <Cards />
        <Charts />
      </div>
    </>
  );
};
