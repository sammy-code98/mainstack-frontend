import type { ApexOptions } from "apexcharts";
import type { IconType } from "react-icons";
import {
  FcBrokenLink,
  FcImageFile,
  FcPicture,
  FcShop,
  FcViewDetails,
} from "react-icons/fc";

export const options: ApexOptions = {
  colors: ["#FF5403"],
  chart: {
    toolbar: {
      show: false,
    },
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    show: false,
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
  },
  xaxis: {
    type: "datetime",
    labels: {
      format: "MMM d , yyyy",
    },
  },
};

export const TransactionType = [
  { value: "store", label: "Store Transactions" },
  { value: "tipped", label: "Get Tipped " },
  { value: "withdraw", label: "Withdrawals" },
  { value: "charges", label: "Chargebacks" },
  { value: "cash", label: "Cashbacks" },
  { value: "referral", label: "Refer & Earn" },
];

export const TransactionStatus = [
  { value: "sucess", label: "Successful" },
  { value: "pending", label: "Pending" },
  { value: "fail", label: "Failed" },
];

export const btnText = ["Today", "Last 7 days", "This month", "Last 3 months"];

interface AppCardItem {
  icon: IconType;
  title: string;
  subTitle: string;
}
export const appCardData: AppCardItem[] = [
  {
    icon: FcBrokenLink,
    title: "Link in Bio",
    subTitle: "Manage your Link in Bio",
  },
  { icon: FcShop, title: "Store", subTitle: "Manage your Store activities" },
  { icon: FcPicture, title: "Media Kit", subTitle: "Manage your Media Kit" },
  { icon: FcViewDetails, title: "Invoicing", subTitle: "Manage your Invoices" },
  { icon: FcImageFile, title: "Bookings", subTitle: "Manage your Bookings" },
];
