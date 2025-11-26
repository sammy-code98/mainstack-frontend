import { useState } from "react";
import Logo from "../../assets/logo.svg";
import {
  MdOutlineHome,
  MdOutlineAnalytics,
  MdOutlinePayments,
  MdOutlinePeopleAlt,
  MdOutlineApps,
  MdNotificationsNone,
  MdOutlineChat,
  MdMenu,
} from "react-icons/md";
import ProfileCard from "../Cards/profileCard";
import { useUserInitials } from "../../hooks/useUserInitials";
import { IoChevronDownOutline } from "react-icons/io5";
import AppCard from "../Cards/appCard";

export default function Navigation() {
  const { firstLetter, secondLetter, isLoading } = useUserInitials();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isBtnClicked, setIsBtnClicked] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleBtnClicked = () => {
    setIsBtnClicked(!isBtnClicked);
  };

  return (
    <header className="sticky z-50 top-0 px-2 lg:px-12 ">
      <nav className="bg-mainstack-white lg:px-4 py-2 lg:py-4 border-2 border-mainstack-white shadow-md rounded-full">
        <div className="flex justify-between items-center mx-2 lg:mx-6">
          <img src={Logo} alt="componay-logo" />
          <div className="hidden lg:flex justify-between items-center gap-4">
            <a className="cursor-pointer py-2 px-6 flex items-center rounded-full bg-mainstack-white text-mainstack-gray hover:bg-mainstack-primary hover:text-mainstack-white">
              <p className="text-base font-semibold  flex items-center gap-1">
                <MdOutlineHome size="1.5rem" /> Home
              </p>
            </a>

            <a className="cursor-pointer py-2 px-6 flex items-center rounded-full bg-mainstack-white text-mainstack-gray hover:bg-mainstack-primary hover:text-mainstack-white">
              <p className="text-base font-semibold  flex items-center gap-1">
                <MdOutlineAnalytics size="1.5rem" /> Analytics
              </p>
            </a>

            <a className="cursor-pointer py-2 px-6 flex items-center rounded-full bg-mainstack-primary text-mainstack-white">
              <p className="text-base font-semibold  flex items-center gap-1">
                <MdOutlinePayments size="1.5rem" /> Revenue
              </p>
            </a>
            <a className="cursor-pointer py-2 px-6 flex items-center rounded-full bg-mainstack-white text-mainstack-gray hover:bg-mainstack-primary hover:text-mainstack-white">
              <p className="text-base font-semibold  flex items-center gap-1">
                <MdOutlinePeopleAlt size="1.5rem" /> CRM
              </p>
            </a>

            <div className="relative">
              <button
                onClick={handleBtnClicked}
                className={`
                 cursor-pointer py-2 px-6 flex justify-between items-center gap-8 rounded-full 
               ${
                 isBtnClicked
                   ? "bg-mainstack-primary text-mainstack-white"
                   : "bg-mainstack-white text-mainstack-gray hover:bg-mainstack-primary hover:text-mainstack-white"
               }
              `}
              >
                <p className="text-base font-semibold  flex items-center gap-1">
                  <MdOutlineApps size="1.5rem" /> Apps
                </p>
                {isBtnClicked && (
                  <p className="text-base font-semibold flex items-center gap-1">
                    Link in Bio
                    <IoChevronDownOutline size="1.2rem" />
                  </p>
                )}
              </button>

              <div
                className={`
             absolute left-0 top-full mt-2 transition-all duration-300 ease-out
      ${isBtnClicked ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
    `}
              >
                <AppCard onPress={() => setIsBtnClicked(!isBtnClicked)} />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="cursor-pointer text-mainstack-gray">
              <MdNotificationsNone size="1.5rem" />
            </div>
            <div className="cursor-pointer text-mainstack-gray">
              <MdOutlineChat size="1.5rem" />
            </div>

            <div
              className="flex justify-between gap-4 items-center bg-mainstack-secondary rounded-full py-1 px-2 w-3/4 text-mainstack-gray cursor-pointer"
              onClick={handleOpenModal}
            >
              {isLoading ? (
                <div className="animate-pulse">
                  <div className="rounded-full w-11 h-11 bg-mainstack-secondary"></div>
                </div>
              ) : (
                <div className="rounded-full w-11 h-11 flex items-center justify-center  bg-mainstack-primary text-mainstack-white  font-semibold">
                  {firstLetter}
                  {secondLetter}
                </div>
              )}
              <MdMenu size="1.5rem" />
            </div>
          </div>
        </div>
      </nav>
      <div>
        {openModal ? (
          <div className="flex justify-end items-center">
            <ProfileCard />
          </div>
        ) : null}
      </div>
    </header>
  );
}
