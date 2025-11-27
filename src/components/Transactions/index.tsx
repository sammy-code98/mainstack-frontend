/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineFileDownload } from "react-icons/md";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import TransactionCard from "../Cards/transactionCard";
import TransactionSkeleton from "./transactionSkeleton";
import FilterDrawer from "./filterDrawer";
import { QueryKeys } from "../../constants/queryKeys";
import { getTransactions } from "../../api/index.api";
import type { FilterSchema } from "../../schema/transaction.schema";
import TransactionEmptyState from "./transactionEmptyState";
import { exportToExcel } from "../../constants/exportXlsx";
import toast from "react-hot-toast";

export default function Transactions() {
  const [filters, setFilters] = useState<FilterSchema | any>(undefined);
  const [openFilterDrawer, setOpenFilterDrawer] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.transactions, filters],
    queryFn: () => getTransactions(filters),
    placeholderData: keepPreviousData,
  });

  const results = data ?? [];

  const handleOpenFilterDrawer = () => {
    setOpenFilterDrawer(!openFilterDrawer);
  };

  const handleClearFilter = () => {
    setFilters(undefined);
    toast("Filters cleared", { icon: "✨" });
  };

  const exportFormattedData = results.map((item: any) => ({
    productName: item?.metadata?.product_name ?? "",
    customerName: item?.metadata?.name ?? "",
    amount: item?.amount ?? "",
    date: item?.date ?? "",
    status: item?.status ?? "",
    type: item?.type ?? "",
  }));

  const handleExport = () => {
    if (!results.length) {
      toast.error("No data available to export");
      return;
    }
    exportToExcel(exportFormattedData, "transactions");
    toast.success("Transactions exported successfully");
  };

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center flex-wrap">
        <div className="pl-4">
          <h4 className="text-mainstack-primary text-lg lg:text-xl font-bold">
            {results?.length} Transactions
          </h4>
          <p className="text-mainstack-gray">Your transactions for all time</p>
        </div>
        <div className="flex px-4  gap-12 lg:gap-8 mt-2">
          <button
            className="flex justify-center items-center gap-2 text-base font-semibold bg-mainstack-secondary text-mainstack-primary rounded-full px-8 py-2 cursor-pointer"
            onClick={handleOpenFilterDrawer}
          >
            Filter <MdKeyboardArrowDown />
          </button>
          <button
            onClick={handleExport}
            className="flex justify-center items-center gap-2 text-base font-semibold bg-mainstack-secondary text-mainstack-primary rounded-full px-8 py-2 cursor-pointer"
          >
            Export list <MdOutlineFileDownload />{" "}
          </button>
        </div>
      </div>
      <hr className="mt-6 text-mainstack-secondary" />
      <div className="py-4">
        {isLoading ? (
          <TransactionSkeleton />
        ) : results.length === 0 ? (
          <TransactionEmptyState onClearFilter={handleClearFilter} />
        ) : (
          <>
            {results.map((transact: any, idx: any) => {
              return (
                <TransactionCard
                  key={idx}
                  product_name={transact.metadata?.product_name}
                  name={transact.metadata?.name}
                  amount={transact.amount}
                  date={transact.date}
                  status={transact.status}
                  type={transact.type}
                />
              );
            })}
          </>
        )}
      </div>
      <div>
        {openFilterDrawer ? (
          <FilterDrawer
            clickHandler={() => handleOpenFilterDrawer()}
            isOpen={openFilterDrawer}
            onApply={(vals) => {
              const payload: FilterSchema = {};
              if ((vals as any).dateFrom)
                payload.dateFrom = (vals as any).dateFrom;
              if ((vals as any).dateTo) payload.dateTo = (vals as any).dateTo;
              if ((vals as any).type?.length) payload.type = (vals as any).type;
              if ((vals as any).status?.length)
                payload.status = (vals as any).status;
              setFilters(Object.keys(payload).length ? payload : undefined);
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
