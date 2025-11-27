import { FaLink, FaRegWindowRestore } from "react-icons/fa6";
import { GoFileMedia } from "react-icons/go";
import { FaFileInvoice } from "react-icons/fa";

export default function FloatingWidget() {
  const items = [
    { icon: <FaLink size={18} />, label: "Link in Bio" },
    { icon: <FaRegWindowRestore size={18} />, label: "Store" },
    { icon: <GoFileMedia size={18} />, label: "Media Kit" },
    { icon: <FaFileInvoice size={18} />, label: "Invoicing" },
  ];

  return (
    <div className="hidden fixed left-4 top-1/2 -translate-y-1/2 z-40 lg:flex flex-col items-center gap-4 bg-mainstack-white py-6 rounded-full shadow-md">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative w-12 h-12  flex items-center justify-center cursor-pointer hover:text-mainstack-yellow transition-all"
        >
          {item.icon}

          <span
            className="absolute left-[110%] top-1/2 -translate-y-1/2 
            whitespace-nowrap bg-mainstack-primary text-mainstack-white text-xs px-2 py-1 rounded-md 
            opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
