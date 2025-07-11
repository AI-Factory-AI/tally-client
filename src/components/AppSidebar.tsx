import { Home, Settings, Vote, Eye, Users, Send, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const items = [
  { title: "Overview", url: "/app/overview", icon: Home },
  { title: "Ballots", url: "/app/ballot", icon: Vote },
  { title: "Voters", url: "/app/voter", icon: User },
  { title: "Preview", url: "/app/preview", icon: Eye },
  { title: "Add-ons", url: "/app/addons", icon: Users },
  { title: "Launch", url: "/app/launch", icon: Send },
  { title: "Settings", url: "/app/settings", icon: Settings },
];

export function AppSidebar() {                                                                                                                                                                                                                                                                       
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="w-16 bg-gray-900 dark:bg-gray-950 flex flex-col items-center pt-6 pb-4 space-y-6 h-full">
      <NavLink 
        to="/app/dashboard"
        className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
      >
        <div className="w-4 h-4 bg-white rounded opacity-80"></div>
      </NavLink>
      
      <div className="flex flex-col space-y-4 px-2 flex-1">
        {items.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors group relative ${
              isActive(item.url)
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
            }`}
            title={item.title}
          >
            <item.icon className="h-4 w-4" />
            <span className="text-[8px] font-medium leading-none">{item.title}</span>
            
            <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 dark:bg-gray-950 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
