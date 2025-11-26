import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineFileDownload } from "react-icons/md";
import { useQuery } from '@tanstack/react-query'
import { getTransactions } from "../../api/index.api";
import TransactionCard from "../Cards/transactionCard";
import TransactionSkeleton from "./transactionSkeleton";
import FilterDrawer from "./filterDrawer";

export default function Transactions() {
  const { isLoading, data } = useQuery({ queryKey: ['transactions'], queryFn: getTransactions })

  const [openFilterDrawer, setOpenFilterDrawer] = useState<boolean>(false)

  const handleOpenFilterDrawer = () => {
    setOpenFilterDrawer(!openFilterDrawer)
  }

  return (
    <div className='mt-12'>
      <div className='flex justify-between items-center flex-wrap'>
        <div className="pl-4">
          <h4 className='text-primary text-lg lg:text-xl font-bold'>{data?.length} Transactions</h4>
          <p className='text-base-gray'>Your transactions for the last 7 days</p>
        </div>
        <div className='flex px-4  gap-12 lg:gap-8 mt-2'>
          <button
            className='flex justify-center items-center gap-2 text-base font-semibold bg-secondary text-primary rounded-full px-8 py-2 cursor-pointer'
            onClick={handleOpenFilterDrawer}>Filter <MdKeyboardArrowDown />
          </button>
          <button className='flex justify-center items-center gap-2 text-base font-semibold bg-secondary text-primary rounded-full px-8 py-2 cursor-pointer'>Export list <MdOutlineFileDownload /> </button>

        </div>

      </div>
      <hr className='mt-6' />
      <div className='mt-8'>
        {isLoading ? (<TransactionSkeleton />) : (
          <>
            {data?.map((transact: { metadata: { product_name: string; name: string; }; amount: string; date: string; status: string; type: string; }, index: null | undefined) => {
              return <TransactionCard
                key={index}
                product_name={transact.metadata?.product_name}
                name={transact.metadata?.name}
                amount={transact.amount}
                date={transact.date}
                status={transact.status}
                type={transact.type} />
            })}
          </>
        )}

      </div>
      <div>
        {openFilterDrawer ? (<FilterDrawer clickHandler={() => handleOpenFilterDrawer()} isOpen={openFilterDrawer} />) : null}
      </div>
    </div>
  )
}
