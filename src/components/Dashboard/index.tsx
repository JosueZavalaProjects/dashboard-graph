import { Cards } from "./Cards";
import { Header } from "./Header";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <Header />
        <Cards />
      </div>
    </>
  );
};
