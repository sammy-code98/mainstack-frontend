import Reciept from "../../assets/receipt_long.svg";
interface TransactionEmptyStateProps {
  onClearFilter: () => void;
}

export default function TransactionEmptyState({
  onClearFilter,
}: TransactionEmptyStateProps) {
  return (
    <div className="py-4 flex justify-center items-center">
      <div className="space-y-4">
        <div className="h-14 w-14 bg-mainstack-secondary rounded-2xl flex justify-center items-center">
          <img src={Reciept} alt="reciept" />
        </div>

        <div className="space-y-3 max-w-[369px]">
          <h3 className="text-mainstack-primary text-2xl font-semibold">
            No matching transaction found for the selected filter
          </h3>
          <p className="text-base text-mainstack-gray">
            Change your filters to see more results, or add a new product.
          </p>
        </div>

        <div>
          <button
            onClick={onClearFilter}
            className="py-2 px-6 bg-mainstack-secondary text-mainstack-primary font-semibold rounded-full text-sm cursor-pointer hover:shadow"
          >
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
}
