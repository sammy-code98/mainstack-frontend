/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { MdClose } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { btnText, TransactionStatus, TransactionType } from "../../staticData";
import {
  filterSchema,
  type FilterSchema,
} from "../../schema/transaction.schema";

interface FilterDrawerProps {
  clickHandler: () => void;
  isOpen: boolean;
  onApply: (data: FilterSchema) => void;
}

export default function FilterDrawer({
  clickHandler,
  isOpen,
  onApply,
}: FilterDrawerProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterSchema>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      dateFrom: undefined,
      dateTo: undefined,
      type: undefined,
      status: undefined,
    },
  });

  const submitHandler = (values: FilterSchema) => {
    onApply({
      dateFrom: values.dateFrom
        ? new Date(values.dateFrom).toISOString()
        : undefined,
      dateTo: values.dateTo ? new Date(values.dateTo).toISOString() : undefined,
      type: values.type ?? undefined,
      status: values.status ?? undefined,
    } as unknown as FilterSchema);
    clickHandler();
  };

  const handleClear = () => {
    reset();
    onApply({} as FilterSchema);
    clickHandler();
  };

  return (
    <div
      className={`fixed space-y-8 top-0 right-0 z-50 h-screen px-4 lg:px-8 py-4 w-full lg:w-4/12 mt-2 bg-mainstack-white rounded-3xl  transition duration-700 ease-in-out transform
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      style={{ boxShadow: `${isOpen ? "0 0 0 100000px rgba(0,0,0,.2)" : ""}` }}
    >
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-mainstack-primary font-bold text-2xl">Filter</h3>
          <div>
            <MdClose
              size="1.5rem"
              onClick={clickHandler}
              className="cursor-pointer text-mainstack-gray "
            />
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-2">
          {btnText.map((text, index) => {
            return (
              <div key={index}>
                <button className="py-3 px-2.5 lg:py-2 lg:px-6  text-mainstack-primary font-semibold rounded-full border border-mainstack-secondary bg-mainstack-white focus:outline-none">
                  {text}
                </button>
              </div>
            );
          })}
        </div>
        <div className="space-y-4">
          <h4 className="text-mainstack-primary text-base font-bold">
            Date Range
          </h4>

          <div className="flex gap-2">
            <Controller
              control={control}
              name="dateFrom"
              render={({ field }) => (
                <DatePicker
                  selected={field.value ?? undefined}
                  onChange={(val) => field.onChange(val ?? undefined)}
                  className="bg-mainstack-secondary rounded-lg border-none px-12 w-full py-3 text-sm text-mainstack-gray"
                  placeholderText="From"
                />
              )}
            />

            <Controller
              name="dateTo"
              control={control}
              render={({ field }) => (
                <DatePicker
                  selected={field.value ?? undefined}
                  onChange={(val) => field.onChange(val ?? undefined)}
                  className="bg-mainstack-secondary rounded-lg px-4 w-full py-3 text-sm"
                  placeholderText="To"
                />
              )}
            />
          </div>
          {errors.dateFrom && (
            <p className="text-xs text-red-500">{errors.dateFrom.message}</p>
          )}
          {errors.dateTo && (
            <p className="text-xs text-red-500">{errors.dateTo.message}</p>
          )}
        </div>

        <div>
          <h4 className="text-mainstack-primary text-base font-bold">
            Transaction Type
          </h4>
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <Select
                  isMulti
                  value={
                    field.value?.map((v: string) => ({ label: v, value: v })) ??
                    []
                  }
                  onChange={(selected) =>
                    field.onChange(
                      selected
                        ? (selected as any).map((s: any) => s.value)
                        : [],
                    )
                  }
                  options={TransactionType.map((t) => ({
                    label: t.label,
                    value: t.value,
                  }))}
                  className="bg-mainstack-secondary rounded-lg border-none block p-1 w-full text-sm text-mainstack-gray"
                />
              );
            }}
          />
        </div>

        <div>
          <h4 className="text-mainstack-primary text-base font-bold">
            Transaction Status
          </h4>

          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <Select
                isMulti
                value={
                  field.value?.map((v: string) => ({ label: v, value: v })) ??
                  []
                }
                onChange={(selected) =>
                  field.onChange(
                    selected ? (selected as any).map((s: any) => s.value) : [],
                  )
                }
                options={TransactionStatus.map((t) => ({
                  label: t.label,
                  value: t.value,
                }))}
                className="bg-mainstack-secondary rounded-lg border-none block p-1 w-full text-sm text-mainstack-gray"
              />
            )}
          />
        </div>

        <div className="absolute bottom-8 w-full pr-12 flex gap-4">
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 border border-mainstack-secondary rounded-full py-3 text-mainstack-primary"
          >
            Clear
          </button>

          <button
            type="submit"
            className="flex-1 bg-mainstack-primary py-3 rounded-full text-mainstack-white"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
