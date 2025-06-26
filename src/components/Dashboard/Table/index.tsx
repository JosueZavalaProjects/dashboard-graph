export const Table = () => {
  //<div className="border rounded-lg overflow-hidden">

  return (
    <div className="w-full border border-gray-300 rounded-lg">
      <table className="w-full ">
        <thead className="">
          <tr className="text-left border-b border-gray-300">
            <th className="p-4 font-normal " colSpan={2}>
              Recent Orders
            </th>
            <th className="font-normal">Amount</th>
            <th className="font-normal">Status</th>
            <th className="font-normal">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-4">#12345</td>
            <td className="">John Doe</td>
            <td>$120,00</td>
            <td>
              <Badge status={Status.Shipped} />
            </td>
            <td>07/21/2023</td>
          </tr>
          <tr className="border-t">
            <td className="p-4">#12344</td>
            <td>Jane Smith</td>
            <td>$89,99</td>
            <td>
              <Badge status={Status.Pending} />
            </td>
            <td>07/20/2023</td>
          </tr>
          <tr className="border-t">
            <td className="p-4">#12343</td>
            <td>Michael Johnson</td>
            <td>$150,50</td>
            <td>
              <Badge status={Status.Delivered} />
            </td>
            <td>07/18/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

enum Status {
  Shipped = "shipped",
  Pending = "pending",
  Delivered = "delivered",
}

const STATUS_STYLES = {
  [Status.Shipped]: "bg-blue-600 text-white",
  [Status.Pending]: "bg-yellow-400 text-black",
  [Status.Delivered]: "bg-[#20bb94] text-white",
};
const Badge = ({ status }: { status: Status }) => {
  return (
    <div
      className={`text-center p-1 w-20 rounded-lg capitalize ${STATUS_STYLES[status]}`}
    >
      {status}
    </div>
  );
};
