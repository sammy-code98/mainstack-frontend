import { IoChevronForwardOutline } from "react-icons/io5";
import { appCardData } from "../../staticData";

interface AppCardI {
  onPress: () => void;
}
export default function AppCard({ onPress }: AppCardI) {
  return (
    <div className="bg-mainstack-white rounded-3xl shadow-md p-6 mt-6 lg:w-xl absolute -top-4 lg:top-0">
      <div className="space-y-2">
        {appCardData.map((app) => (
          <div
            key={app.title}
            onClick={onPress}
            className="group flex justify-between items-center rounded-2xl px-4 py-3 cursor-pointer 
                    hover:border hover:border-mainstack-secondary 
                    hover:shadow-sm hover:shadow-mainstack-gray/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-mainstack-secondary rounded-xl flex justify-center items-center">
                <app.icon size="1.6rem" />
              </div>
              <div className="space-y-1">
                <h6 className="font-semibold text-sm text-mainstack-primary">
                  {app.title}
                </h6>
                <p className="text-sm text-mainstack-gray">{app.subTitle}</p>
              </div>
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <IoChevronForwardOutline size="1rem" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
