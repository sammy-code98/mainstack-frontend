import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useQuery } from "@tanstack/react-query";
import BalanceCard from "../Cards/balanceCard";
import { options } from "../../staticData";
import { QueryKeys } from "../../constants/queryKeys";
import { getTransactions, getWallet } from "../../api/index.api";

export default function Balance() {
  const { isLoading, data } = useQuery({
    queryKey: [QueryKeys.wallet],
    queryFn: getWallet,
  });
  const { data: transdata, isLoading: loading } = useQuery({
    queryKey: [QueryKeys.transactionsGraph],
    queryFn: () => getTransactions(),
  });

  const chartData = transdata?.flatMap(
    (tdata: { date: string; amount: string }) => ({
      x: tdata.date,
      y: tdata.amount,
    }),
  );

  const series: ApexOptions["series"] = [
    {
      name: "Available Balance",
      data: chartData,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="col-span-2 p-6">
        <div className="flex items-center gap-16 lg:gap-32">
          <div>
            <p className="text-mainstack-gray font-medium text-sm lg:text-base">
              Available Balance
            </p>
            <h3 className="text-mainstack-primary text-2xl lg:text-4xl font-bold mt-2">
              USD {isLoading ? "0.00" : data?.balance}{" "}
            </h3>
          </div>
          <button className="bg-mainstack-primary px-6 lg:px-12 py-4 rounded-full text-mainstack-white font-semibold hover:opacity-50">
            Withdraw
          </button>
        </div>
        <div className="mt-8">
          {loading ? (
            <p className="text-center mt-4 text-mainstack-primary text-sm">
              Loading Chart...
            </p>
          ) : (
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={350}
            />
          )}
        </div>
      </div>

      <div className="mt-12">
        <BalanceCard
          title={"Ledger Balance"}
          amount={isLoading ? "0.00" : data?.ledger_balance}
        />
        <BalanceCard
          title={"Total Payout"}
          amount={isLoading ? "0.00" : data?.total_payout}
        />
        <BalanceCard
          title={"Total Revenue"}
          amount={isLoading ? "0.00" : data?.total_revenue}
        />
        <BalanceCard
          title={"Pending Payout"}
          amount={isLoading ? "0.00" : data?.pending_payout}
        />
      </div>
    </div>
  );
}
