import {
  MdOutlineSettings,
  MdOutlineHistoryEdu,
  MdCardGiftcard,
  MdOutlineGridView,
  MdOutlineBugReport,
  MdSwitchAccount,
  MdOutlineLogout,
  MdOutlineHome,
  MdOutlineAnalytics,
  MdOutlinePayments,
  MdOutlinePeopleAlt,
  MdOutlineApps,
} from "react-icons/md";
import { useUserInitials } from "../../hooks/useUserInitials";

const profileItems = [
  { icon: <MdOutlineSettings size="1.5rem" />, title: "Settings" },
  { icon: <MdOutlineHistoryEdu size="1.5rem" />, title: "Purchase History" },
  { icon: <MdCardGiftcard size="1.5rem" />, title: "Refer and Earn" },
  { icon: <MdOutlineGridView size="1.5rem" />, title: "Integrations" },
  { icon: <MdOutlineBugReport size="1.5rem" />, title: "Report Bug" },
  { icon: <MdSwitchAccount size="1.5rem" />, title: "Switch Account" },
  { icon: <MdOutlineLogout size="1.5rem" />, title: "Sign Out" },
];
const onMobile = [
  { icon: <MdOutlineHome size="1.5rem" />, title: "Home" },
  { icon: <MdOutlineAnalytics size="1.5rem" />, title: "Analytics" },
  { icon: <MdOutlinePayments size="1.5rem" />, title: "Revenue" },
  { icon: <MdOutlinePeopleAlt size="1.5rem" />, title: "CRM" },
  { icon: <MdOutlineApps size="1.5rem" />, title: "Apps" },
];

export default function ProfileCard() {
  const { firstLetter, secondLetter, user } = useUserInitials();

  return (
    <div className="bg-mainstack-white rounded-3xl shadow-md px-4 py-6 mt-24  lg:w-1/4 absolute -top-4 lg:top-0">
      <div className="flex  gap-4">
        <div>
          <div className="rounded-full w-14 h-14 flex items-center justify-center  bg-mainstack-primary text-mainstack-white  font-semibold">
            {firstLetter}
            {secondLetter}
          </div>
        </div>
        <div>
          <h4 className="text-mainstack-primary font-semibold lg:text-lg">
            {user?.first_name} {user?.last_name}
          </h4>
          <p className="text-mainstack-gray text-base">{user?.email}</p>
        </div>
      </div>
      <div className="lg:mt-6">
        {onMobile.map((mobile) => {
          return (
            <div className="flex items-center gap-4 py-2 lg:py-4 cursor-pointer lg:hidden">
              <span className="text-mainstack-gray">{mobile.icon}</span>
              <p className="text-mainstack-primary font-medium text-base">
                {mobile.title}
              </p>
            </div>
          );
        })}

        {profileItems.map((items) => {
          return (
            <div
              className="flex items-center gap-4 py-2 lg:py-4 cursor-pointer"
              key={items.title}
            >
              <span className="text-mainstack-gray">{items.icon}</span>
              <p className="text-mainstack-primary font-medium text-base">
                {items.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
