import CarouselSlides from "@/components/layout/carousel-slides";
import { aboutIcon, adminIcon, agentsIcon, dashboardIcon, driverIcon, homeIcon, peopleIcon, profileIcon, revenueIcon, scanIcon, searchIcon, securityIcon } from "./icons";
import { ActivitySquareIcon, CarTaxiFront, SettingsIcon, Map } from "lucide-react";

export const SLIDES = [
    <>
         <CarouselSlides
              desc="Accountability in a civilized society is the stepping stone to development and progressive environment"
              images="/avater.png"
              author="ISCE Digital Concept"
              title="Ananmbra State"
         />
    </>,
    // <>
    // 	<CarouselSlides
    // 		desc='We believe that accountability is fundamental for societal progress, and TRANSPAY stands as a testament to that ethos, offering a reliable and efficient means for commuters'
    // 		images='/mbanefo.jpeg'
    // 		author='Hon. Afam Mbanefo'
    // 		title='Minister of Transport'
    // 	/>
    // </>,
    // <>
    // 	<CarouselSlides
    // 		desc='Just as development relies on being accountable for our actions, TRANSPAY cultivates an efficient and sustainable transit system, contributing to the growth and prosperity of our community.'
    // 		images='/ibezim.jpg'
    // 		author='Dr. Onyeka Ibezim'
    // 		title='Deputy Governor of Anambra State'
    // 	/>
    // </>,
];
export const LOGIN_DETAILS = [
  {
    title: "User ID",
    entry: "AgentISCE",
  },
  {
    title: "Password",
    entry: "IsaacE2000",
  },
];

export const PERSONAL_INFORMATION = [
  {
    title: "Name",
    entry: "Isaac Emperor",
  },
  {
    title: "E-mail Address",
    entry: "IsaacEmperor@gmail.com",
  },
  {
    title: "Phone Number",
    entry: "080-332-7264",
  },
];
export const ADDRESS_INFORMATION = [
  {
    title: "Address",
    entry: "No, 14 Agbero Road, Anambra",
  },
  {
    title: "Area Location",
    entry: "Mile 1-3",
  },
];
export enum WAIVER_STATUS {
  approved = "APPROVED",
  declined = "DECLINED",
  pending = "PENDING",
  cancelled = "CANCELLED",
}
export const API =
  process.env.LIVE_BACKEND_URL ||
  "https://generally-equal-elephant.ngrok-free.app";
export const URLS = {
     activity: {
          all: "/api/v1/activities",
     },
     "audit-trails": {
          all: "/api/v1/audit-trails",
          vehicle: "/api/v1/audit-trails/vehicles",
          user: "/api/v1/audit-trails/users",
     },
     admin: {
          all: "/api/v1/admins",
          me: "/api/v1/admins/me",
     },
     agent: {
          all: "/api/v1/agents",
          me: "/api/v1/agents/me",
     },
     green: {
          all: "/api/v1/greenengine",
          me: "/api/v1/greenengine/me",
          search: "/api/v1/greenengine/search",
     },
     auth: {
          signin: {
               admin: "/api/v1/users/login",
               agent: "/api/v1/users/login",
          },
     },
     dashboard: {
          default: "/api/v1/dashboard",
          total_revenue_yearly: "/api/v1/dashboard/total-year-revenue",
          total_revenue_monthly: "/api/v1/dashboard/total-month-revenue",
          total_revenue_weekly: "/api/v1/dashboard/total-week-revenue",
          total_revenue_daily: "/api/v1/dashboard/total-day-revenue",
          net_total: "/api/v1/dashboard/net-total",
          total_tracker_yearly: "/api/v1/dashboard/total-trackers-revenue",
          activities_with_limit: "/api/v1/dashboard/all-activities",
          blacklisted_admin: "/api/v1/dashboard/blacklisted-admins",
          chart: "/api/v1/dashboard/chart",
     },
     driver: {
          all: "/api/v1/drivers",
          blacklist: "/api/v1/drivers/blacklist", // add vehicle to blacklist
     },
     revenue: {
          stats: "/api/v1/revenue/stats",
          report: "/api/v1/revenue/report",
          total: "/api/v1/revenue/total",
          custom: "/api/v1/revenue/customRevenue",
          day: "/api/v1/revenue/daily",
          week: "/api/v1/revenue/weekly",
          month: "/api/v1/revenue/monthly",
          year: "/api/v1/revenue/yearly",
     },
     vehicle: {
          all: "/api/v1/vehicles",
          blacklist: "/api/v1/vehicles/blacklist", // add vehicle to blacklist
          search: "/api/v1/vehicles/search", // add vehicle to blacklist
          asin: "/api/v1/vehicles/verify", // verify vehicle using ASIN
          fareflex: "/api/v1/vehicles/imei", // add fareflex to vehicle
     },
     settings: "/api/v1/settings", // for add ${id} for single.
     tracker: {
          location: "/location/find",
          stat: "/stat/find",
     },
     transactions: {
          all: "/api/v1/transaction",
          "net-total": "/api/v1/transaction/total-net",
          "total-revenue": "/api/v1/transaction/total-revenue",
          "total-tracker": "/api/v1/transaction/total-tracker",
     },
     user: "/api/v1/users",
};
export const AGENT_DASHBOARD_CARD = [
     {
          name: "Vehicles",
          description: "Vehicle list & Update",
          icon: peopleIcon,
          number: "",
          href: "/vehicles?page=1&limit=15",
          image: "/tricycle.jpg",
     },
     // {
     // 	name: 'Fines & Penalties',
     // 	description: 'Create fines & penalties',
     // 	icon: finesIcon,
     // 	number: '10,000',
     // 	href: '/fines',
     // 	image: '/tricycle.jpg',
     // },
     // {
     //      name: "Scan Plate",
     //      description:
     //           "Scan Driver Plate to retrieve drivers information plate",
     //      icon: "",
     //      number: "",
     //      href: "/scan",
     //      image: "/scanplate.png",
     // },
];
export const VIEW_DRIVER_TABLE = [
     {
          Date: "23-08-2023",
          amount_NGN: "15000",
          payment_type: "Cash",
          handled_by: "Agent john",
     },
     {
          Date: "22-08-2023",
          amount_NGN: "10000",
          payment_type: "Bank Transfer",
          handled_by: "Agent James",
     },
     {
          Date: "24-08-2023",
          amount_NGN: "25000",
          payment_type: "Cash",
          handled_by: "Agent Jane",
     },
     {
          Date: "21-08-2023",
          amount_NGN: "60,000",
          payment_type: "Mobile Transfer",
          handled_by: "Agent Janet",
     },
     {
          Date: "23-08-2023",
          amount_NGN: "5000",
          payment_type: "Cash",
          handled_by: "Agent Jonathan",
     },
     {
          Date: "25-08-2023",
          amount_NGN: "19000",
          payment_type: "Cash",
          handled_by: "Agent Helen",
     },
     {
          Date: "25-08-2023",
          amount_NGN: "19000",
          payment_type: "Cash",
          handled_by: "Agent Helen",
     },
     {
          Date: "25-08-2023",
          amount_NGN: "19000",
          payment_type: "Cash",
          handled_by: "Agent Helen",
     },
     {
          Date: "25-08-2023",
          amount_NGN: "19000",
          payment_type: "Cash",
          handled_by: "Agent Helen",
     },
];
export const ADD_DRIVER_TABLE = [
     {
          Name: "Okechukwu John",
          Phone_Number: "09078398045",
     },
     {
          Name: "Ikechukwu Jonathan",
          Phone_Number: "09078398048",
     },
     {
          Name: "Tobechukwu Tony",
          Phone_Number: "09078398047",
     },
     {
          Name: "Godson Alfred",
          Phone_Number: "09078398075",
     },
     {
          Name: "Godwin Emmanuel",
          Phone_Number: "09078399045",
     },
     {
          Name: "Micheal Thomas",
          Phone_Number: "09078398065",
     },
     {
          Name: "Abraham Pius",
          Phone_Number: "09078398985",
     },
     {
          Name: "Anthony Wilson",
          Phone_Number: "09078398095",
     },
     {
          Name: "Obi Moses",
          Phone_Number: "09078398105",
     },
];
export const DRIVER_TABLE = [
     {
          name: "Emeka Ignatius",
          plate: "tfgh-ilt",
          status: "active",
          category: "cleared",
     },
     {
          name: "Emmanuel Ozigbo",
          plate: "trhb6-9jw",
          status: "inactive",
          category: "debtors",
     },
     {
          name: "Divine Onyekachukwu",
          plate: "gtw8-owg",
          status: "waived",
          category: "debtors",
     },
     {
          name: "Oyeniran Ayobami",
          plate: "97yy-kjy",
          status: "active",
          category: "cleared",
     },
];
export const TRACKER_BASE_URL =
     "https://api.gwgps12580.com/v1/Ch_manage_controller/api";
export const BUS_IMAGE_SAMPLE =
     "https://images.unsplash.com/photo-1616792577902-f1d86383a21b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2803&q=80";

     export const WAIVER_HISTORY = [
          {
               timeline: "Jan 31 - Feb 20",
               reason: "Car Repair",
               status: "active",
               generated_by: "Agent Emeka 1",
          },
          {
               timeline: "May 21 - June 1",
               reason: "Car Repair",
               status: "inactive",
               generated_by: "Agent Leo1",
          },
          {
               timeline: "Dec 31 - Jan 20",
               reason: "Car Repair",
               status: "inactive",
               generated_by: "Agent Divine1",
          },
          {
               timeline: "Oct 31 - Nov 20",
               reason: "Car Repair",
               status: "inactive",
               generated_by: "Agent Emeka 1",
          },
          {
               timeline: "Jan 31 - Feb 20",
               reason: "Car Repair",
               status: "active",
               generated_by: "Agent Emeka 1",
          },
          {
               timeline: "Jan 31 - Feb 20",
               reason: "Car Repair",
               status: "active",
               generated_by: "Agent Emeka 1",
          },
          {
               timeline: "Jan 31 - Feb 20",
               reason: "Car Repair",
               status: "inactive",
               generated_by: "Agent Emeka 1",
          },
          {
               timeline: "Jan 31 - Feb 20",
               reason: "Car Repair",
               status: "inactive",
               generated_by: "Agent Emeka 1",
          },
          {
               timeline: "Jan 31 - Feb 20",
               reason: "Car Repair",
               status: "inactive",
               generated_by: "Agent Emeka 1",
          },
          {
               timeline: "Jan 31 - Feb 20",
               reason: "Car Repair",
               status: "active",
               generated_by: "Agent Divine1",
          },
          {
               timeline: "May 15 - June 13",
               reason: "Car Repair",
               status: "active",
               generated_by: "Agent Leo1",
          },
     ];

     export const SIDEBAR_LINKS_AGENT = [
          {
               title: "Dashboard",
               href: "/dashboard",
               icon: dashboardIcon,
          },
          {
               title: "Vehicles",
               href: "/vehicles?page=1&limit=15",
               icon: driverIcon,
          },
          {
               title: "Scan",
               href: "/scan",
               icon: scanIcon,
          },
          {
               title: "Search",
               href: "/search",
               icon: searchIcon,
          },
     ];

     export const MANAGE_SIDEBAR_LINKS = [
          {
               name: "Home",
               href: "/manage",
               icon: homeIcon,
          },
          {
               name: "My Profile",
               href: "/manage/profile",
               icon: profileIcon,
          },
          {
               name: "Security",
               href: "/manage/security",
               icon: securityIcon,
          },
          {
               name: "About Us",
               href: "/manage/about",
               icon: aboutIcon,
          },
          {
               name: "Dashboard",
               href: "/dashboard",
               icon: dashboardIcon,
          },
          {
               title: "Search",
               href: "/search",
               icon: searchIcon,
          },
     ];

     export const SIDEBAR_LINKS = [
          {
               title: "Dashboard",
               href: "/dashboard",
               icon: dashboardIcon,
          },
          {
               title: "Admins",
               href: "/admins",
               icon: adminIcon,
          },
          {
               title: "Activities",
               href: "/activities",
               icon: <ActivitySquareIcon className="h-5 w-5" />,
          },
          {
               title: "Agents",
               href: "/agents",
               icon: agentsIcon,
          },
          {
               title: "Vehicles",
               href: "/vehicles?page=1&limit=15",
               icon: <CarTaxiFront className="h-5 w-5" />,
          },
          // {
          // 	title: 'Drivers',
          // 	href: '/drivers',
          // 	icon: driverIcon,
          // },
          // {
          // 	title: 'Fines & Penalties',
          // 	href: '/fines',
          // 	icon: finesIcon,
          // },
          {
               title: "Scan",
               href: "/scan",
               icon: scanIcon,
          },
          {
               title: "Search",
               href: "/search",
               icon: searchIcon,
          },
          {
               title: "Revenue",
               href: "/revenue",
               icon: revenueIcon,
          },
          {
               title: "Map",
               href: "/map",
               icon: <Map className="h-5 w-5" />,
          },
          // {
          // 	title: 'Property',
          // 	href: '/property',
          // 	icon: <HomeIcon className='h-4 w-4' />,
          // },
          {
               title: "Settings",
               href: "/settings",
               icon: <SettingsIcon className="h-5 w-5" />,
          },
     ];

     export const LANDING_CARD_CONTENTS: {
          title: string;
          description: string;
     }[] = [
          {
               title: "Efficient Revenue Collection",
               description:
                    "Our advanced system automates the revenue collection process, reducing human error and ensuring accurate data recording.",
          },
          {
               title: "On and Off Activities",
               description:
                    "We detect on and off-road activities using Fare Flex devices.",
          },
          {
               title: "User-Friendly Interface",
               description:
                    "Transpay offers an interactive interface for both government officials and vehicle operators, making it easy to manage and monitor transactions.",
          },
          {
               title: "Secure Transactions",
               description:
                    "Transpay ensures that all transactions are safe and secure, using security protocols to protect sensitive information.",
          },
     ];
     export const HOW_IT_WORKS: {
          title: string;
          description: string;
     }[] = [
          {
               title: " Fare Flex Device Installation",
               description:
                    "Each commercial vehicle is equipped with a state-of-the-art Fare Flex Device.",
          },
          {
               title: "Revenue Generation",
               description:
                    "Transpay processes the data, calculates the revenue, and facilitates  payment processing.",
          },
          {
               title: "Monitoring and Reporting",
               description:
                    "Authorities can monitor the entire process and generate detailed reports for auditing and analysis.",
          },
     ];
     export enum VehicleValues {
          TRICYCLE = 333,
          SHUTTLE_BUS = 400,
          BUS_INTRASTATE = 500,
          TRUCKS = 500,
          BUS_INTERSTATE = 666,
          OTHERS = 333,
     }