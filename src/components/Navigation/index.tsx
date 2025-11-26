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

export default function Navigation() {
  const { firstLetter, secondLetter, isLoading } = useUserInitials();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <header className="sticky z-50 top-0 px-2 lg:px-12 ">
      <nav className="bg-base-white lg:px-4 py-2 lg:py-4 border-2 border-base-white shadow-md rounded-full">
        <div className="flex justify-between items-center mx-2 lg:mx-6">
          <img src={Logo} alt="componay-logo" />
          <div className="hidden lg:flex justify-between items-center gap-4">
            <a className="cursor-pointer py-2 px-6 flex items-center rounded-full bg-base-white text-base-gray hover:bg-primary hover:text-base-white">
              <p className="text-base font-semibold  flex items-center gap-1">
                <MdOutlineHome size="1.5rem" /> Home
              </p>
            </a>

            <a className="cursor-pointer py-2 px-6 flex items-center rounded-full bg-base-white text-base-gray hover:bg-primary hover:text-base-white">
              <p className="text-base font-semibold  flex items-center gap-1">
                <MdOutlineAnalytics size="1.5rem" /> Analytics
              </p>
            </a>

            <a className="cursor-pointer py-2 px-6 flex items-center rounded-full bg-primary text-base-white">
              <p className="text-base font-semibold  flex items-center gap-1">
                <MdOutlinePayments size="1.5rem" /> Revenue
              </p>
            </a>
            <a className="cursor-pointer py-2 px-6 flex items-center rounded-full bg-base-white text-base-gray hover:bg-primary hover:text-base-white">
              <p className="text-base font-semibold  flex items-center gap-1">
                <MdOutlinePeopleAlt size="1.5rem" /> CRM
              </p>
            </a>
            <a className="cursor-pointer py-2 px-6 flex items-center rounded-full bg-base-white text-base-gray hover:bg-primary hover:text-base-white">
              <p className="text-base font-semibold  flex items-center gap-1">
                <MdOutlineApps size="1.5rem" /> Apps
              </p>
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="cursor-pointer text-base-gray">
              <MdNotificationsNone size="1.5rem" />
            </div>
            <div className="cursor-pointer text-base-gray">
              <MdOutlineChat size="1.5rem" />
            </div>
            <div
              className="flex justify-between gap-4 items-center bg-secondary rounded-full py-1 px-2 w-3/4 text-base-gray cursor-pointer"
              onClick={handleOpenModal}
            >
              {isLoading ? (
                <div className="animate-pulse">
                  <div className="rounded-full w-11 h-11 bg-secondary"></div>
                </div>
              ) : (
                <div className="rounded-full w-11 h-11 flex items-center justify-center  bg-primary text-base-white  font-semibold">
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
