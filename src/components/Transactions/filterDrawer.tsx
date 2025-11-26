import { MdClose } from "react-icons/md";
import Select from "react-select";
import { btnText, TransactionStatus, TransactionType } from "../../staticData";

interface FilterDrawerProps {
  clickHandler: () => void;
  isOpen: boolean;
}

export default function FilterDrawer({
  clickHandler,
  isOpen,
}: FilterDrawerProps) {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen px-4 lg:px-8 py-4 w-full lg:w-4/12 mt-2 bg-base-white rounded-3xl  transition duration-700 ease-in-out transform
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      style={{ boxShadow: `${isOpen ? "0 0 0 100000px rgba(0,0,0,.2)" : ""}` }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-primary font-bold text-2xl">Filter</h3>
        <div>
          <MdClose
            size="1.5rem"
            onClick={clickHandler}
            className="cursor-pointer text-base-gray "
          />
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center flex-wrap gap-2">
        {btnText.map((text, index) => {
          return (
            <div key={index}>
              <button className="py-3 px-2.5 lg:py-2.5 lg:px-4  text-primary font-semibold rounded-full border border-secondary bg-base-white focus:outline-none">
                {text}
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <h4 className="text-primary text-base font-bold">Date Range</h4>
        <div className="mt-2 flex justify-between items-center gap-2">
          <input
            type="date"
            className="bg-secondary rounded-lg border-none px-10 py-2 text-sm text-base-gray"
            required
          />
          <input
            type="date"
            className="bg-secondary rounded-lg border-none px-10 py-2 text-sm text-base-gray"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-primary text-base font-bold">Transaction Type</h4>
        <div className="mt-2">
          <Select
            isMulti
            name="transactions"
            options={TransactionType}
            className="bg-secondary rounded-lg border-none block p-3.5 w-full text-sm text-base-gray"
          />
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-primary text-base font-bold">Transaction Status</h4>
        <div className="mt-2">
          <Select
            isMulti
            name="transactions"
            options={TransactionStatus}
            className="bg-secondary rounded-lg border-none block p-3.5 w-full text-sm text-base-gray"
          />
        </div>
      </div>

      <div className="mt-24 lg:mt-52">
        <div className="flex justify-between items-center">
          <button
            className="py-2 lg:py-4 px-10 lg:px-20 text-center text-primary font-semibold rounded-full border border-secondary bg-base-white focus:outline-none"
            onClick={clickHandler}
          >
            Clear
          </button>
          <button
            className="bg-primary py-2 px-10 lg:px-20 lg:py-4 rounded-full text-base-white font-semibold hover:opacity-50"
            onClick={clickHandler}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
