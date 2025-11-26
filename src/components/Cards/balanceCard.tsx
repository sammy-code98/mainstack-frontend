import { MdInfoOutline } from "react-icons/md";

interface BalanceCardProps {
  title: string;
  amount: string;
}

export default function BalanceCard({ title, amount }: BalanceCardProps) {
  return (
    <div className="rounded-sm p-2 mb-2.5 cursor-pointer">
      <div className="flex justify-between items-center">
        <p className="text-lg text-mainstack-gray font-medium">{title}</p>
        <div className="text-mainstack-gray">
          <MdInfoOutline size="1.5rem" />
        </div>
      </div>
      <h3 className="text-mainstack-primary text-2xl lg:text-3xl font-bold mt-2">
        USD {amount}
      </h3>
    </div>
  );
}
