import { Cards } from "./Cards";
import { Charts } from "./Charts";
import { Header } from "./Header";
import { Table } from "./Table";

export const Dashboard = () => {
  // overflow-y-scroll max-h-[42rem] pb-20 xl:pb-4 xl:max-h-[46rem]
  return (
    <>
      <div className="flex flex-col gap-6 pb-4 ">
        <Header />
        <div className="flex flex-col gap-6 overflow-y-scroll max-h-[75vh] md:max-h-[42rem]">
          <Cards />
          <Charts />
          <Table />
        </div>
      </div>
    </>
  );
};
