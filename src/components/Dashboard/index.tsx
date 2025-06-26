import { Cards } from "./Cards";
import { Charts } from "./Charts";
import { Header } from "./Header";
import { Table } from "./Table";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Header />
        <div className="flex flex-col gap-6 overflow-y-scroll max-h-[50rem] pb-4">
          <Cards />
          <Charts />
          <Table />
        </div>
      </div>
    </>
  );
};
