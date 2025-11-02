import React from 'react';
import { Solution, Product, ProductSuite, Article } from './types';

// --- ICONS (NEW TWO-TONE STYLE) ------------------------------------------------

// FIX: Replaced JSX with React.createElement to be valid in a .ts file.
const TwoToneIcon: React.FC<{ paths: (string|React.ReactElement)[] }> = ({ paths }) => (
    React.createElement('svg', { fill: "none", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: paths[0] as string, fill: "#A7C7FF" }),
        React.createElement('path', { d: paths[1] as string, stroke: "#377DFF", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
        ...(paths.slice(2).map((path, i) => 
            typeof path === 'string' 
            ? React.createElement('path', { key: i, d: path, stroke: "#377DFF", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
            : path
        ))
    )
);

// FIX: Replaced all JSX component usage with React.createElement calls.
// Solution & Feature Icons
const ResidentialIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M8 40V23.4142C8 22.8619 8.21071 22.3304 8.58579 21.9554L22.5858 7.95541C23.3668 7.17436 24.6332 7.17436 25.4142 7.95541L39.4142 21.9554C39.7893 22.3304 40 22.8619 40 23.4142V40H8Z", "M8 40V23.4142C8 22.8619 8.21071 22.3304 8.58579 21.9554L22.5858 7.95541C23.3668 7.17436 24.6332 7.17436 25.4142 7.95541L39.4142 21.9554C39.7893 22.3304 40 22.8619 40 23.4142V40H8Z", "M20 28H28V40H20V28Z"]});
const CommercialIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M4 44V14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V44H4Z", "M4 44V14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V44M14 12V4M34 12V4", "M14 22H20", "M28 22H34", "M14 32H20", "M28 32H34"]});
const InvestmentIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M4 40V8C4 6.89543 4.89543 6 6 6H42C43.1046 6 44 6.89543 44 8V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40Z", "M4 40V8C4 6.89543 4.89543 6 6 6H42C43.1046 6 44 6.89543 44 8V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40Z", "M12 24H18", "M24 18V30", "M30 14H36"]});
const SeniorLivingIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M19 22C21.7614 22 24 19.7614 24 17C24 14.2386 21.7614 12 19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22Z", "M29 22C31.7614 22 34 19.7614 34 17C34 14.2386 31.7614 12 29 12C26.2386 12 24 14.2386 24 17C24 19.7614 26.2386 22 29 22Z", "M40 31H8V33C8 36.3137 10.6863 39 14 39H34C37.3137 39 40 36.3137 40 33V31Z"]});
const CoworkingIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M17 19C19.2091 19 21 17.2091 21 15C21 12.7909 19.2091 11 17 11C14.7909 11 13 12.7909 13 15C13 17.2091 14.7909 19 17 19Z", "M31 19C33.2091 19 35 17.2091 35 15C35 12.7909 33.2091 11 31 11C28.7909 11 27 12.7909 27 15C27 17.2091 28.7909 19 31 19Z", "M24 28C26.7614 28 29 25.7614 29 23C29 20.2386 26.7614 18 24 18C21.2386 18 19 20.2386 19 23C19 25.7614 21.2386 28 24 28Z", "M12 37H36V40H12V37Z"]});
const EnergyIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 4L14 22H24L22 44L34 26H24L24 4Z", "M24 4L14 22H24L22 44L34 26H24L24 4Z"]});
const LearningIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M6 8V42", "M42 8V42", "M13 36V14C13 10.6863 15.6863 8 19 8H29C32.3137 8 35 10.6863 35 14V36", "M13 14H35"]});
const LeasingIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24.0002 4.00024L40.0002 20.0002L28.0002 32.0002L12.0002 16.0002L24.0002 4.00024Z", "M34 26L40 20", "M12 16L28 32", "M18 10L12 16", "M4 34H14V44H4V34Z"]});
const MarketingIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 25C30.0751 25 35 20.0751 35 14C35 7.92487 30.0751 3 24 3C17.9249 3 13 7.92487 13 14C13 20.0751 17.9249 25 24 25Z", "M24 25V44", "M17 44H31"]});
const ProcurementIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M12 19C15.3137 19 18 16.3137 18 13C18 9.68629 15.3137 7 12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19Z", "M12 19L6 42H18L12 19Z", "M24 19C27.3137 19 30 16.3137 30 13C30 9.68629 27.3137 7 24 7C20.6863 7 18 9.68629 18 13C18 16.3137 20.6863 19 24 19Z", "M24 19L18 42H30L24 19Z", "M36 19C39.3137 19 42 16.3137 42 13C42 9.68629 39.3137 7 36 7C32.6863 7 30 9.68629 30 13C30 16.3137 32.6863 19 36 19Z", "M36 19L30 42H42L36 19Z"]});
const ListingNetworksIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z", "M4 24H44", "M24 4C18 10 18 16 18 24C18 32 18 38 24 44", "M24 4C30 10 30 16 30 24C30 32 30 38 24 44"]});
const FeatureIcon1: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M16 12L32 12", "M16 22L32 22", "M16 32L32 32", "M44 4H4V44H44V4Z"]});
const FeatureIcon2: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M4 11H44", "M11 11V18", "M37 11V18", "M12 18H36V40C36 41.1046 35.1046 42 34 42H14C12.8954 42 12 41.1046 12 40V18Z", "M18 25H22", "M18 31H30"]});
const FeatureIcon3: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M31 4H17", "M24 4L24 34", "M13 15L24 4L35 15", "M4 34H44V44H4V34Z"]});
const FeatureIcon4: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M13 10V3L4 14h7v7l9-11h-7z", "M24 4L14 22H24L22 44L34 26H24L24 4Z"]});
const FeatureIcon5: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 16C28.4183 16 32 12.4183 32 8C32 3.58172 28.4183 0 24 0C19.5817 0 16 3.58172 16 8C16 12.4183 19.5817 16 24 16Z", "M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z", "M8 32C12.4183 32 16 28.4183 16 24C16 19.5817 12.4183 16 8 16C3.58172 16 0 19.5817 0 24C0 28.4183 3.58172 32 8 32Z"]});
const FeatureIcon6: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 23C28.4183 23 32 19.4183 32 15C32 10.5817 28.4183 7 24 7C19.5817 7 16 10.5817 16 15C16 19.4183 19.5817 23 24 23Z", "M34.6667 41H13.3333C12.6 41 12 40.2 12 39.4V39.4C12 33.6 17.2 29 24 29C30.8 29 36 33.6 36 39.4V39.4C36 40.2 35.4 41 34.6667 41Z"]});

// Product Icons
const CorePlatformIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 4L4 14V34L24 44L44 34V14L24 4Z", "M4 14L24 24L44 14", "M24 44V24"]});
const ResidentServicesIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 23C28.4183 23 32 19.4183 32 15C32 10.5817 28.4183 7 24 7C19.5817 7 16 10.5817 16 15C16 19.4183 19.5817 23 24 23Z", "M34.6667 41H13.3333C12.6 41 12 40.2 12 39.4V39.4C12 33.6 17.2 29 24 29C30.8 29 36 33.6 36 39.4V39.4C36 40.2 35.4 41 34.6667 41Z"]});
const AspireIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 24L4 14L24 4L44 14L24 24Z", "M36 28.4V40L24 46L12 40V28.4L24 34.4L36 28.4Z"]});
const RightSourceIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M10 6H38V42H10V6Z", "M10 6L24 20L38 6"]});
const CareSuiteIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M42.2708 13.7292C39.0208 10.4792 34.25 10.4792 31 13.7292L24.0208 20.7083L17.0417 13.7292C13.7917 10.4792 9.02083 10.4792 5.77083 13.7292C2.52083 16.9792 2.52083 21.75 5.77083 25.0417L24.0208 43.2917L42.2708 25.0417C45.5208 21.75 45.5208 16.9792 42.2708 13.7292Z", "M42.2708 13.7292C39.0208 10.4792 34.25 10.4792 31 13.7292L24.0208 20.7083L17.0417 13.7292C13.7917 10.4792 9.02083 10.4792 5.77083 13.7292C2.52083 16.9792 2.52083 21.75 5.77083 25.0417L24.0208 43.2917L42.2708 25.0417C45.5208 21.75 45.5208 16.9792 42.2708 13.7292Z"]});
const MatrixIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M4 14H44", "M4 24H44", "M4 34H44", "M14 4V44", "M24 4V44", "M34 4V44"]});
const KubeSuiteIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M14 14H34V34H14V14Z", "M4 4H24V24H4V4Z", "M24 24H44V44H24V24Z"]});
const ScreeningIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z", "M16 24L22 30L34 18"]});
const CoromIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z", "M33 43L24 29", "M15 43L24 29", "M5 33L19 24", "M43 33L29 24", "M5 15L19 24", "M43 15L29 24", "M15 5L24 19", "M33 5L24 19"]});
const AcquisitionIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M30 18H18V30H30V18Z", "M10 38H38V44H10V38Z", "M24 18V4"]});
const AssetIQIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M40 44V18H27L32 23L25 30L17 22L8 31", "M40 44H8", "M8 10H40V4H8V10Z"]});
const BillPayIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M4 33V15C4 13.8954 4.89543 13 6 13H42C43.1046 13 44 13.8954 44 15V33C44 34.1046 43.1046 35 42 35H6C4.89543 35 4 34.1046 4 33Z", "M4 24H44"]});
const BluepointIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M4 4H44V34H4V4Z", "M4 14H44", "M14 14V34", "M24 14V34", "M34 14V34"]});
const CaseManagerIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M16 6H32V12H16V6Z", "M8 16H40V42H8V16Z", "M24 16V6"]});
const DataConnectIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 16C28.4183 16 32 12.4183 32 8C32 3.58172 28.4183 0 24 0C19.5817 0 16 3.58172 16 8C16 12.4183 19.5817 16 24 16Z", "M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z", "M8 32C12.4183 32 16 28.4183 16 24C16 19.5817 12.4183 16 8 16C3.58172 16 0 19.5817 0 24C0 28.4183 3.58172 32 8 32Z"]});
const TenantShieldIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M43 22.0132V12L24 4L5 12V22.0132C5 33.3521 12.6343 43.1923 24 44C35.3657 43.1923 43 33.3521 43 22.0132Z", "M16 24L22 30L34 18"]});
const ReachIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z", "M24 24L34 14", "M24 4V10", "M4 24H10", "M24 44V38", "M44 24H38", "M10 14L4 8", "M38 14L44 8", "M10 34L4 40", "M38 34L44 40"]});
const WebsitesIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 38C32.8366 38 40 30.8366 40 22C40 13.1634 32.8366 6 24 6C15.1634 6 8 13.1634 8 22C8 30.8366 15.1634 38 24 38Z", "M24 6V42", "M8 22H40"]});
const MaintenanceIQIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z", "M42.7346 25.1322L38.8683 26.2644C38.3888 28.0264 37.5147 29.6548 36.3134 31.002L38.0313 34.1956C38.455 35.0062 38.311 36.0093 37.7011 36.721C37.0913 37.4326 36.1213 37.7535 35.2536 37.5218L31.3965 36.4354C30.0125 37.5528 28.4373 38.3975 26.7412 38.8683L25.1322 42.7346C24.7731 43.5936 23.8588 44.1356 22.9097 43.9961C21.9606 43.8566 21.2185 43.0394 21.1322 42.0621L19.7356 38.0313C17.9736 37.5147 16.3452 36.6312 14.998 35.3134L11.8044 37.0313C10.9938 37.455 9.99074 37.311 9.27899 36.7011C8.56725 36.0913 8.24646 35.1213 8.47817 34.2536L9.56461 30.3965C8.44716 29.0125 7.6025 27.4373 7.13171 25.7412L3.26538 24.8678C2.4064 24.5269 1.86438 23.6412 2.0039 22.7097C2.14342 21.7781 2.96058 21.0185 3.93789 20.8678L7.96873 19.7356C8.48535 17.9736 9.36879 16.3452 10.6866 14.998L8.96873 11.8044C8.54504 10.9938 8.68903 9.99074 9.29888 9.27899C9.90874 8.56725 10.8787 8.24646 11.7464 8.47817L15.6035 9.56461C16.9875 8.44716 18.5627 7.6025 20.2588 7.13171L21.8678 3.26538C22.2269 2.4064 23.1412 1.86438 24.0903 2.0039C25.0394 2.14342 25.7815 2.96058 25.8678 3.93789L27.2644 7.96873C29.0264 8.48535 30.6548 9.36879 31.998 10.6866L35.1956 8.96873C36.0062 8.54504 37.0093 8.68903 37.721 9.29888C38.4327 9.90874 38.7535 10.8787 38.5218 11.7464L37.4354 15.6035C38.5528 16.9875 39.3975 18.5627 39.8683 20.2588L43.7346 21.8678C44.5936 22.2269 45.1356 23.1412 44.9961 24.0903C44.8566 25.0394 44.0394 25.7815 43.0621 25.8678L39.0313 27.2644C38.5147 29.0264 37.6312 30.6548 36.3134 31.998L38.0313 35.1956C38.455 36.0062 38.311 37.0093 37.7011 37.721C37.0913 38.4326 36.1213 38.7535 35.2536 38.5218L31.3965 37.4354C30.0125 38.5528 28.4373 39.3975 26.7412 39.8683L25.1322 43.7346C24.7731 44.5936 23.8588 45.1356 22.9097 44.9961C21.9606 44.8566 21.2185 44.0394 21.1322 43.0621L19.7356 39.0313C17.9736 38.5147 16.3452 37.6312 14.998 36.3134L11.8044 38.0313C10.9938 38.455 9.99074 38.311 9.27899 37.7011C8.56725 37.0913 8.24646 36.1213 8.47817 35.2536L9.56461 31.3965C8.44716 30.0125 7.6025 28.4373 7.13171 26.7412L3.26538 25.8678C2.4064 25.5269 1.86438 24.6412 2.0039 23.7097C2.14342 22.7781 2.96058 22.0185 3.93789 21.8678L7.96873 20.7356C8.48535 18.9736 9.36879 17.3452 10.6866 16.002L8.96873 12.8044C8.54504 11.9938 8.68903 10.9907 9.29888 10.279C9.90874 9.56725 10.8787 9.24646 11.7464 9.47817L15.6035 10.5646C16.9875 9.44716 18.5627 8.6025 20.2588 8.13171L21.8678 4.26538C22.2269 3.4064 23.1412 2.86438 24.0903 3.0039C25.0394 3.14342 25.7815 3.96058 25.8678 4.93789L27.2644 8.96873C29.0264 9.48535 30.6548 10.3688 31.998 11.6866L35.1956 9.96873C36.0062 9.54504 37.0093 9.68903 37.721 10.2989C38.4327 10.9087 38.7535 11.8787 38.5218 12.7464L37.4354 16.6035C38.5528 17.9875 39.3975 19.5627 39.8683 21.2588L43.7346 22.1322Z"]});
const ConstructionManagerIcon: React.FC = () => React.createElement(TwoToneIcon, { paths: ["M40 23T40 42H8V23L24 10L40 23Z", "M40 23L24 10L8 23", "M40 42H8V23", "M18 29V35", "M30 29V35"]});


// --- SOLUTIONS DATA ---------------------------------------------------------

export const solutions: Solution[] = [
    {
      id: "property-management",
      icon: React.createElement(ResidentialIcon),
      title: "Property Management",
      description: "End-to-end software for residential, commercial, and mixed-use portfolios, from accounting to facilities management.",
      longDescription: "Our core Property Management solution provides a complete, cloud-based platform to run your entire portfolio. It integrates marketing, leasing, operations, and accounting into one seamless system, giving you a single source of truth and unparalleled control over your business.",
      features: [
          { title: "Unified Ledger", description: "A robust, multi-entity general ledger for all property and corporate accounting.", icon: React.createElement(FeatureIcon1) },
          { title: "Facilities Management", description: "Automate work orders, manage vendors, and conduct mobile inspections.", icon: React.createElement(FeatureIcon2) },
          { title: "Resident & Tenant Portals", description: "Self-service portals for online payments, maintenance requests, and communications.", icon: React.createElement(FeatureIcon3) },
      ],
      benefits: ["Streamline Daily Operations", "Improve Portfolio Visibility", "Enhance Tenant Satisfaction", "Scale with Confidence"]
    },
    {
      id: "asset-performance",
      icon: React.createElement(InvestmentIcon),
      title: "Asset Performance",
      description: "Drive asset strategy with powerful tools for budgeting, forecasting, valuations, and performance analytics.",
      longDescription: "Maximize returns and mitigate risk with our Asset Performance suite. Gain deep insights into your portfolio's financial health, create sophisticated forecasts, and automate valuation processes to make smarter, data-driven investment and operational decisions.",
      features: [
          { title: "Budgeting & Forecasting", description: "Create detailed budgets, run multiple forecast scenarios, and compare performance against actuals.", icon: React.createElement(FeatureIcon1) },
          { title: "Automated Valuations", description: "Perform discounted cash flow (DCF) and other valuation models with real-time data.", icon: React.createElement(FeatureIcon2) },
          { title: "Performance Dashboards", description: "Visualize key performance indicators (KPIs) for your entire portfolio down to the asset level.", icon: React.createElement(FeatureIcon3) },
      ],
      benefits: ["Maximize Net Operating Income (NOI)", "Improve Forecasting Accuracy", "Streamline Asset Strategy", "Mitigate Investment Risk"]
    },
    {
      id: "coworking-flexible-space",
      icon: React.createElement(CoworkingIcon),
      title: "Coworking & Flexible Space",
      description: "Manage your entire flexible workspace with a single platform for sales, billing, and member engagement.",
      longDescription: "Our Coworking solution is designed for the dynamic needs of flexible workspaces. Manage leads, automate billing for memberships and services, handle room bookings, and provide a seamless mobile experience for your members, all from one integrated platform.",
      features: [
          { title: "CRM & Sales Pipeline", description: "Track leads, manage tours, and automate the sales process from inquiry to membership.", icon: React.createElement(FeatureIcon1) },
          { title: "Automated Billing", description: "Handle complex billing for memberships, services, and on-demand bookings.", icon: React.createElement(FeatureIcon2) },
          { title: "Member Portal & App", description: "A branded app for members to book rooms, connect with the community, and manage their account.", icon: React.createElement(FeatureIcon3) },
      ],
      benefits: ["Increase Occupancy and Revenue", "Automate Administrative Tasks", "Enhance Member Experience", "Scale Your Workspace Business"]
    },
    {
      id: "energy-management",
      icon: React.createElement(EnergyIcon),
      title: "Energy Management",
      description: "Reduce utility expenses and improve sustainability with energy procurement, analytics, and billing solutions.",
      longDescription: "Take control of your portfolio's energy consumption with our comprehensive Energy Management suite. We provide tools for invoice processing, consumption analytics, and automated billing to help you reduce costs, improve sustainability, and meet ESG goals.",
      features: [
          { title: "Utility Invoice Processing", description: "Automate the capture, auditing, and payment of utility invoices across your portfolio.", icon: React.createElement(FeatureIcon1) },
          { title: "Consumption Analytics", description: "Track energy usage in real-time to identify anomalies and opportunities for savings.", icon: React.createElement(FeatureIcon2) },
          { title: "ESG Reporting", description: "Generate reports for GRESB, ENERGY STAR, and other sustainability benchmarks.", icon: React.createElement(FeatureIcon3) },
      ],
      benefits: ["Reduce Utility Expenses", "Improve Budget Accuracy", "Enhance Sustainability & ESG Performance", "Automate Complex Billing"]
    },
     {
      id: "senior-care",
      icon: React.createElement(SeniorLivingIcon),
      title: "Senior Care",
      description: "An integrated solution for managing senior living facilities, combining property management, clinical services, and resident engagement.",
      longDescription: "Our Senior Living solution is designed to meet the unique needs of independent living, assisted living, and memory care communities. It integrates property management and accounting with resident care, electronic health records (EHR), and billing, providing a single source of truth for your operations.",
       features: [
          { title: "Electronic Health Records (EHR)", description: "Manage resident care plans, assessments, and medication administration with a fully integrated EHR.", icon: React.createElement(FeatureIcon4) },
          { title: "Resident Engagement", description: "Tools for activity scheduling, family communication, and dining management to enhance community life.", icon: React.createElement(FeatureIcon5) },
          { title: "Unified Billing", description: "Consolidate care charges, rent, and ancillary services into a single resident invoice.", icon: React.createElement(FeatureIcon6) },
      ],
      benefits: ["Improve Quality of Care", "Enhance Resident & Family Engagement", "Streamline Billing & Financials", "Ensure Regulatory Compliance"]
    },
     {
      id: "marketing",
      icon: React.createElement(MarketingIcon),
      title: "Marketing",
      description: "Attract, convert, and retain residents and tenants with a full suite of marketing and leasing tools.",
      longDescription: "Our Marketing solution provides an end-to-end platform to manage your entire marketing and leasing funnel. From dynamic property websites and ILS syndication to a powerful CRM, we give you the tools to attract high-quality leads and convert them into tenants faster.",
       features: [
          { title: "Property Marketing Websites", description: "Create beautiful, mobile-responsive websites with real-time pricing and availability.", icon: React.createElement(FeatureIcon4) },
          { title: "Customer Relationship Management (CRM)", description: "Manage leads, track communications, and automate follow-ups to nurture prospects.", icon: React.createElement(FeatureIcon5) },
          { title: "Online Leasing & Screening", description: "A complete online leasing workflow, from application and screening to digital lease signing.", icon: React.createElement(FeatureIcon6) },
      ],
      benefits: ["Generate More Qualified Leads", "Shorten Leasing Cycles", "Improve Marketing ROI", "Enhance the Renter Journey"]
    },
    {
      id: "procurement",
      icon: React.createElement(ProcurementIcon),
      title: "Procurement",
      description: "Centralize and automate your purchasing process, from vendor management to invoice processing.",
      longDescription: "Streamline your entire procurement lifecycle with our Procure-to-Pay solution. Manage vendors, enforce compliance with approved catalogs, and automate purchase orders and invoice approvals to gain full control over your spend.",
       features: [
          { title: "Vendor Management", description: "Onboard and manage vendors, track compliance, and rate performance.", icon: React.createElement(FeatureIcon4) },
          { title: "e-Procurement", description: "Shop from approved vendor catalogs with negotiated pricing to control spend.", icon: React.createElement(FeatureIcon5) },
          { title: "Automated Invoice Processing", description: "Use AI to capture and code invoices, then route them for automated approval workflows.", icon: React.createElement(FeatureIcon6) },
      ],
      benefits: ["Gain Full Spend Visibility", "Reduce Operating Costs", "Enforce Policy Compliance", "Automate AP Processes"]
    },
    {
      id: "listing-networks",
      icon: React.createElement(ListingNetworksIcon),
      title: "Skyline Listing Networks",
      description: "Increase exposure and expand your reach by syndicating listings to our network of high-traffic marketplaces.",
      longDescription: "Maximize your listing exposure with a single click. The Skyline Listing Network syndicates your availability across our portfolio of popular internet listing services for residential and commercial properties, generating more leads and reducing vacancy.",
       features: [
          { title: "Multi-Family Listings", description: "Syndicate to leading apartment search sites to reach millions of prospective renters.", icon: React.createElement(FeatureIcon4) },
          { title: "Commercial Listings", description: "Market your office, industrial, and retail space on top-tier commercial real estate platforms.", icon: React.createElement(CommercialIcon) },
          { title: "Lead Management", description: "All leads from our network sites flow directly into your CRM for seamless tracking.", icon: React.createElement(FeatureIcon6) },
      ],
      benefits: ["Maximize Listing Exposure", "Generate More High-Quality Leads", "Reduce Vacancy and Downtime", "Simplify Marketing Efforts"]
    },
];

// --- PRODUCT SUITES DATA ----------------------------------------------------

export const productSuites: ProductSuite[] = [
    {
        id: 'core-platforms',
        name: 'Core Platforms',
        description: 'The foundation of your real estate operations, providing comprehensive accounting, operations, and reporting.',
        products: [
            {
                id: 'indra-horizon',
                icon: React.createElement(CorePlatformIcon),
                title: 'Indra Horizon',
                description: 'The enterprise-grade platform for sophisticated property and investment management.',
                longDescription: 'Indra Horizon is our premier platform, designed for large, diversified real estate portfolios. It offers robust, GAAP-compliant accounting, sophisticated job costing, and powerful reporting capabilities to give you unparalleled control and insight over your assets. Horizon is highly configurable to support your unique business processes.',
                features: [
                    { title: 'Multi-Entity Accounting', description: 'Manage complex ownership structures with automated consolidations and intercompany transactions.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Advanced Budgeting & Forecasting', description: 'Create detailed budgets, run multiple forecast scenarios, and compare performance against actuals.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Customizable Reporting Engine', description: 'Build, schedule, and distribute custom report packets for any stakeholder.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Single Source of Truth', 'Enhanced Operational Control', 'Scalability for Growth', 'Data-Driven Decision Making']
            },
            {
                id: 'indra-flow',
                icon: React.createElement(CorePlatformIcon),
                title: 'Indra Flow',
                description: 'An intuitive, all-in-one solution for growing property management companies.',
                longDescription: 'Indra Flow simplifies property management with an easy-to-use, cloud-based platform. It combines accounting, leasing, and operations into one solution, accessible from anywhere. Flow is designed for rapid implementation, allowing you to get up and running and see value quickly.',
                features: [
                    { title: 'Simplified Accounting', description: 'Streamlined payables, receivables, and bank reconciliation with an intuitive interface.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Built-in Marketing & Leasing', description: 'Post vacancies, screen tenants, and execute leases all from within the platform.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Owner & Tenant Portals', description: 'Provide stakeholders with self-service access to statements, payments, and communications.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Increased Efficiency', 'Improved Cash Flow', 'Enhanced Customer Service', 'Work from Anywhere']
            }
        ]
    },
    {
        id: 'leasing-marketing',
        name: 'Leasing & Marketing Suite',
        description: 'A complete toolset to attract prospects, shorten the leasing cycle, and enhance the resident experience.',
        products: [
            {
                id: 'skyline-portal-suite',
                icon: React.createElement(ResidentServicesIcon),
                title: 'Skyline Portal Suite',
                description: 'A full suite of resident-facing tools for marketing, leasing, and engagement.',
                longDescription: 'The Skyline Portal Suite is an end-to-end solution for the entire resident lifecycle. It combines property marketing websites, online leasing, resident portals, and facilities management into one seamless platform, driving both new leases and resident retention.',
                features: [
                    { title: 'Property Marketing Websites', description: 'Create beautiful, mobile-responsive websites with real-time pricing and availability.', icon: React.createElement(WebsitesIcon) },
                    { title: 'Online Leasing & Screening', description: 'A complete online leasing workflow, from application and screening to digital lease signing.', icon: React.createElement(ScreeningIcon) },
                    { title: 'Resident Portal & App', description: 'A branded app for residents to pay rent, submit maintenance requests, and connect with the community.', icon: React.createElement(ResidentServicesIcon) },
                ],
                benefits: ['Accelerate Leasing Velocity', 'Improve Resident Satisfaction', 'Streamline Marketing Efforts', 'Centralize Communications']
            },
            {
                id: 'skyline-reach',
                icon: React.createElement(ReachIcon),
                title: 'Skyline REACH',
                description: 'Digital marketing services including SEO, PPC, and social media management.',
                longDescription: 'Skyline REACH is our in-house digital marketing agency for property management. Our experts create and execute data-driven marketing strategies, including search engine optimization (SEO), pay-per-click (PPC) advertising, and social media campaigns, to drive qualified traffic to your properties.',
                features: [
                    { title: 'Search Engine Optimization (SEO)', description: 'Improve your organic search rankings to attract more prospective renters.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Pay-Per-Click (PPC) Advertising', description: 'Launch targeted ad campaigns on Google and social media to generate leads.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Reputation Management', description: 'Monitor and manage your online reviews to build a positive brand image.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Generate More High-Quality Leads', 'Increase Brand Visibility', 'Improve Marketing ROI', 'Leverage Expert Knowledge']
            },
             {
                id: 'skyline-crm-iq',
                icon: React.createElement(MarketingIcon),
                title: 'Skyline CRM IQ',
                description: 'A powerful, mobile-first CRM for leasing agents to manage leads and automate follow-up.',
                longDescription: 'Skyline CRM IQ is a customer relationship management platform built specifically for leasing. It provides a 360-degree view of your prospects, automates communication workflows, and delivers powerful analytics to help you convert more leads into leases.',
                features: [
                    { title: 'Lead Management', description: 'Consolidate leads from all sources and track every interaction in one place.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Automated Workflows', description: 'Create automated email and text message campaigns to nurture leads.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Performance Analytics', description: 'Track leasing agent performance and identify marketing campaign effectiveness.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Convert More Leads', 'Improve Agent Productivity', 'Enhance the Renter Journey', 'Gain Actionable Insights']
            },
        ]
    },
    {
        id: 'investment-management',
        name: 'Investment Management Suite',
        description: 'A powerful set of tools for investment managers to analyze assets, manage portfolios, and report to investors.',
        products: [
             {
                id: 'indra-investment-manager',
                icon: React.createElement(InvestmentIcon),
                title: 'Indra Investment Manager',
                description: 'Automate portfolio management, performance measurement, and investor reporting.',
                longDescription: 'Indra Investment Manager centralizes your portfolio data to provide a single source of truth for your investment management activities. It automates complex calculations, streamlines capital calls and distributions, and provides a secure portal for investor communications.',
                features: [
                    { title: 'Portfolio Management', description: 'Track asset performance, manage debt, and model complex fund structures.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Performance Measurement', description: 'Calculate IRR, TWR, and other key performance metrics automatically.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Investor Portal', description: 'Provide investors with secure, 24/7 access to dashboards, documents, and reports.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Improve Investor Transparency', 'Streamline Reporting', 'Enhance Data Accuracy', 'Scale Your AUM']
            },
            {
                id: 'indra-acquisition-manager',
                icon: React.createElement(AcquisitionIcon),
                title: 'Indra Acquisition Manager',
                description: 'Streamline the entire deal pipeline from sourcing and underwriting to closing.',
                longDescription: 'Indra Acquisition Manager provides a centralized platform to manage your deal pipeline. Track potential investments, create detailed underwriting models, and manage due diligence checklists to ensure a smooth and efficient acquisition process.',
                features: [
                    { title: 'Deal Pipeline Management', description: 'Track and manage deals from sourcing to closing with a visual pipeline.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Underwriting & Projections', description: 'Create sophisticated financial models and run multiple investment scenarios.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Due Diligence Checklists', description: 'Assign tasks and track the progress of due diligence activities.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Improve Deal Flow', 'Standardize Underwriting', 'Enhance Collaboration', 'Close Deals Faster']
            },
            {
                id: 'indra-asset-iq',
                icon: React.createElement(AssetIQIcon),
                title: 'Indra Asset IQ',
                description: 'Real-time asset performance intelligence with customizable dashboards and reporting.',
                longDescription: 'Indra Asset IQ connects directly to your operational data to provide real-time business intelligence. Create customizable dashboards to monitor key performance indicators (KPIs), compare budget vs. actuals, and drill down into the details of your asset performance.',
                features: [
                    { title: 'Customizable Dashboards', description: 'Visualize your data with interactive charts, graphs, and maps.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Real-Time Data', description: 'Get up-to-the-minute insights into your portfolio\'s operational and financial performance.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Drill-Down Capabilities', description: 'Analyze data from the portfolio level all the way down to individual transactions.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Gain Actionable Insights', 'Improve Portfolio Visibility', 'Enhance Reporting', 'Make Data-Driven Decisions']
            },
            {
                id: 'skyline-matrix',
                icon: React.createElement(MatrixIcon),
                title: 'Skyline Matrix',
                description: 'A market research and asset analysis tool for multifamily investments.',
                longDescription: 'Skyline Matrix offers the industry’s most comprehensive market intelligence for the multifamily sector. Access detailed property-level data, analyze market trends, and identify investment opportunities with an intuitive, map-based interface.',
                features: [
                    { title: 'Comprehensive Property Data', description: 'Access detailed information on every multifamily property in your target markets.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Rent Comparables', description: 'Run real-time rent surveys and analyze comparable properties to optimize pricing.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Market Analytics', description: 'Track supply, demand, and economic trends with in-depth market reports.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Make Smarter Investment Decisions', 'Optimize Asset Performance', 'Identify New Opportunities', 'Gain a Competitive Edge']
            },
        ]
    },
    {
        id: 'operations-suite',
        name: 'Operations & Financial Suite',
        description: 'Streamline back-office operations, from procurement and payments to compliance and training.',
        products: [
            {
                id: 'skyline-bill-pay',
                icon: React.createElement(BillPayIcon),
                title: 'Skyline Bill Pay',
                description: 'Automate accounts payable with online invoice processing and vendor payments.',
                longDescription: 'Skyline Bill Pay transforms your accounts payable process. It combines automated invoice processing with a secure platform for electronic vendor payments, helping you reduce costs, improve control, and pay vendors faster.',
                features: [
                    { title: 'Automated Invoice Processing', description: 'Use AI to capture and code invoices, then route them for automated approval workflows.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Electronic Vendor Payments', description: 'Pay vendors via ACH, virtual card, or check with a secure, automated process.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Vendor Management Portal', description: 'A self-service portal for vendors to manage their information and track payments.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Reduce AP Processing Costs', 'Improve Spend Visibility', 'Eliminate Late Fees', 'Enhance Vendor Relationships']
            },
            {
                id: 'indra-data-connect',
                icon: React.createElement(DataConnectIcon),
                title: 'Indra Data Connect',
                description: 'Integrate your property management data with other third-party applications.',
                longDescription: 'Indra Data Connect provides a set of APIs and standard data exports to connect your Skyline Infrastructure data with other systems. Whether you need to integrate with a CRM, business intelligence tool, or other application, Data Connect provides a secure and reliable way to share information.',
                features: [
                    { title: 'RESTful APIs', description: 'A comprehensive library of APIs to access your data programmatically.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Standard Data Exports', description: 'Scheduled exports of your data in common formats like CSV and XML.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Secure & Reliable', description: 'Built with enterprise-grade security to ensure your data is protected.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Break Down Data Silos', 'Automate Business Processes', 'Enhance Reporting Capabilities', 'Improve Data Accuracy']
            },
             {
                id: 'indra-aspire',
                icon: React.createElement(AspireIcon),
                title: 'Indra Aspire',
                description: 'A flexible learning management system (LMS) for employee and resident training.',
                longDescription: 'Indra Aspire is a user-friendly learning management system that makes it easy to create, assign, and track online training. Use it for employee onboarding, compliance training, or even to provide educational resources to your residents.',
                features: [
                    { title: 'Course Authoring', description: 'Build engaging online courses with videos, documents, and quizzes.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Automated Assignments', description: 'Assign training based on job role or other criteria and track completion.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Comprehensive Reporting', description: 'Monitor training progress and ensure compliance with detailed reports.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Improve Employee Performance', 'Reduce Compliance Risk', 'Streamline Onboarding', 'Enhance Resident Engagement']
            },
             {
                id: 'indra-rightsource',
                icon: React.createElement(RightSourceIcon),
                title: 'Indra RightSource',
                description: 'Outsourced business services, including invoice processing and energy management.',
                longDescription: 'Focus on your core business and let Indra RightSource handle the back-office tasks. Our team of experts can manage your invoice processing, utility billing, and energy procurement, helping you reduce costs and improve efficiency.',
                features: [
                    { title: 'Outsourced Invoice Processing', description: 'Our team handles data entry and validation for your accounts payable invoices.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Utility Bill Management', description: 'We manage the entire utility billing lifecycle for your properties.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Energy Procurement Services', description: 'Our experts help you source energy in deregulated markets to reduce costs.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Reduce Administrative Overhead', 'Lower Operating Costs', 'Access Expert Knowledge', 'Improve Business Focus']
            },
             {
                id: 'skyline-bluepoint',
                icon: React.createElement(BluepointIcon),
                title: 'Skyline Bluepoint',
                description: 'Utility expense management and invoice processing for commercial and multifamily properties.',
                longDescription: 'Skyline Bluepoint automates the complex process of managing utility expenses. Our platform captures and audits utility invoices, provides detailed analytics on consumption and costs, and integrates with your accounting system for seamless payment processing.',
                features: [
                    { title: 'Automated Invoice Capture', description: 'Eliminate manual data entry with our automated invoice processing service.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Cost & Consumption Analytics', description: 'Track utility spend and identify opportunities for savings with powerful dashboards.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Seamless GL Integration', description: 'Post utility expenses to your general ledger automatically.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Reduce Utility Costs', 'Improve Budget Accuracy', 'Eliminate Late Fees', 'Enhance Sustainability']
            },
        ]
    },
    {
        id: 'facilities-maintenance-suite',
        name: 'Facilities & Maintenance Suite',
        description: 'Comprehensive tools for managing construction, maintenance, and facility operations.',
        products: [
            {
                id: 'skyline-construction-manager',
                icon: React.createElement(ConstructionManagerIcon),
                title: 'Skyline Construction Manager',
                description: 'Manage construction projects from bidding and budgeting through to completion.',
                longDescription: 'Skyline Construction Manager provides a full-featured platform for real estate developers and operators to manage their construction projects. It integrates job costing, budgeting, contract management, and reporting to provide real-time visibility into project health and profitability.',
                features: [
                    { title: 'Job Cost Accounting', description: 'Track all project costs in real time, from labor and materials to subcontractor invoices.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Contract & Change Order Management', description: 'Manage contracts with suppliers and subcontractors, and track change orders seamlessly.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Project Dashboards', description: 'Get a high-level view of all your projects with customizable dashboards and reports.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Improve Project Profitability', 'Enhance Cost Control', 'Streamline Project Management', 'Reduce Risk']
            },
            {
                id: 'skyline-maintenance-iq',
                icon: React.createElement(MaintenanceIQIcon),
                title: 'Skyline Maintenance IQ',
                description: 'An intelligent platform for managing work orders, preventative maintenance, and inspections.',
                longDescription: 'Skyline Maintenance IQ streamlines your entire maintenance process. It allows you to manage reactive work orders, schedule preventative maintenance, conduct mobile inspections, and manage your inventory of parts and supplies. The mobile app empowers technicians to be more efficient in the field.',
                features: [
                    { title: 'Work Order Management', description: 'Create, assign, and track work orders from a centralized dashboard.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Preventative Maintenance Scheduling', description: 'Schedule recurring maintenance tasks to prolong asset life and reduce costs.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Mobile Inspections', description: 'Conduct property and unit inspections from a mobile device with customizable checklists.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Increase Technician Productivity', 'Reduce Maintenance Costs', 'Prolong Asset Lifespan', 'Improve Resident Satisfaction']
            }
        ]
    },
    {
        id: 'specialized-markets-suite',
        name: 'Specialized Markets Suite',
        description: 'Tailored solutions for unique real estate markets, including senior living, coworking, and corporate real estate.',
        products: [
            {
                id: 'indra-care-suite',
                icon: React.createElement(CareSuiteIcon),
                title: 'Indra Care Suite',
                description: 'A full-service platform for senior living management, from wellness to billing.',
                longDescription: 'Indra Care provides a single, centralized solution for managing senior living communities. It combines an electronic health record (EHR) with property management and accounting, giving you a holistic view of your residents and operations.',
                features: [
                    { title: 'Electronic Health Record (EHR)', description: 'Manage care plans, assessments, eMAR, and incident tracking.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Unified Billing', description: 'Automate billing for care services, rent, and ancillary charges on a single statement.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Family & Resident Portals', description: 'Engage families with updates on their loved ones and provide residents with community information.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Improve Quality of Care', 'Streamline Financial Operations', 'Enhance Family Engagement', 'Ensure Compliance']
            },
             {
                id: 'indra-case-manager',
                icon: React.createElement(CaseManagerIcon),
                title: 'Indra Case Manager',
                description: 'Compliance and case management for affordable housing and voucher programs.',
                longDescription: 'Indra Case Manager simplifies the administration of affordable housing programs. It automates compliance checks, manages waitlists, and streamlines the process of managing housing assistance payments (HAP) and resident certifications.',
                features: [
                    { title: 'Automated Compliance', description: 'Ensure compliance with HUD, LIHTC, and other affordable housing regulations.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Waitlist Management', description: 'Manage your applicant waitlist and process applications electronically.', icon: React.createElement(FeatureIcon2) },
                    { title: 'HAP & Certification Processing', description: 'Automate the submission of HAP vouchers and manage resident income certifications.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Ensure Regulatory Compliance', 'Improve Staff Efficiency', 'Streamline Program Administration', 'Reduce Errors']
            },
            {
                id: 'indra-kube-suite',
                icon: React.createElement(KubeSuiteIcon),
                title: 'Indra Kube Suite',
                description: 'The all-in-one software for coworking space management, billing, and member engagement.',
                longDescription: 'Indra Kube provides a complete solution for managing your coworking space. From lead management and automated billing to a branded member portal and app, Kube streamlines your operations so you can focus on building your community.',
                features: [
                    { title: 'CRM & Sales Automation', description: 'Manage leads and automate the entire sales and onboarding process.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Automated Billing & Payments', description: 'Handle billing for memberships, meeting rooms, and other services.', icon: React.createElement(FeatureIcon2) },
                    { title: 'White-Label Member App', description: 'Provide members with an app to book rooms, pay invoices, and connect with other members.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Increase Revenue', 'Automate Operations', 'Enhance Member Experience', 'Scale Your Business']
            },
            {
                id: 'skyline-corom',
                icon: React.createElement(CoromIcon),
                title: 'Skyline Corom',
                description: 'An integrated solution for corporate real estate, lease management, and facility maintenance.',
                longDescription: 'Skyline Corom is designed for corporate tenants to manage their entire real estate portfolio. It centralizes lease administration, accounting, and facilities management to help you reduce occupancy costs and mitigate risk.',
                features: [
                    { title: 'Lease Administration & Accounting', description: 'Manage critical dates and ensure compliance with ASC 842 and IFRS 16.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Transaction Management', description: 'Oversee site selection, acquisition, and disposition of corporate properties.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Facilities Management', description: 'Manage work orders and preventative maintenance for your corporate locations.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Reduce Occupancy Costs', 'Ensure Lease Compliance', 'Streamline Facilities Operations', 'Improve Strategic Planning']
            },
            {
                id: 'skyline-tenantshield',
                icon: React.createElement(TenantShieldIcon),
                title: 'Skyline TenantShield',
                description: 'Renters insurance programs to protect your residents and your assets.',
                longDescription: 'Skyline TenantShield makes it easy to manage a renters insurance program. Our platform allows you to track resident insurance policies, and offer an integrated, low-cost option to residents who need coverage, protecting your properties from resident-caused damage.',
                features: [
                    { title: 'Insurance Tracking', description: 'Track the insurance policies of your residents to ensure compliance with lease requirements.', icon: React.createElement(FeatureIcon1) },
                    { title: 'Integrated Enrollment', description: 'Offer residents an easy way to enroll in a policy directly through their online portal.', icon: React.createElement(FeatureIcon2) },
                    { title: 'Risk Mitigation', description: 'Reduce your exposure to resident-caused damages and liability claims.', icon: React.createElement(FeatureIcon3) },
                ],
                benefits: ['Mitigate Property Risk', 'Increase Ancillary Revenue', 'Ensure Lease Compliance', 'Streamline Administration']
            },
        ]
    }
];

// --- NEWS DATA --------------------------------------------------------------

export const articles: Article[] = [
    {
      id: "next-gen-ai",
      title: "Skyline Infrastructure Announces Next-Gen AI for Property Management",
      date: "October 26, 2025",
      excerpt: "Our new AI-powered analytics tool provides unprecedented insights into portfolio performance, helping clients make smarter, data-driven decisions.",
      content: `Skyline Infrastructure today unveiled its groundbreaking AI-powered analytics platform, Indra Insight. This next-generation tool leverages machine learning algorithms to analyze vast datasets from property operations, financial records, and market trends. 
      The platform provides property managers and asset owners with predictive insights, helping them to optimize rental pricing, forecast maintenance needs, and identify opportunities for revenue growth. 
      'With Indra Insight, we are moving beyond traditional reporting to provide truly actionable intelligence,' said the company's CEO, A. Aggarwal. 'Our clients can now anticipate market shifts and resident needs with a level of accuracy that was previously impossible, giving them a significant competitive advantage.'`
    },
    {
      id: "best-place-to-work",
      title: "Company Recognized as 'Best Place to Work in PropTech'",
      date: "September 15, 2025",
      excerpt: "For the third consecutive year, Skyline Infrastructure has been awarded for its outstanding company culture and employee satisfaction.",
      content: `For the third year in a row, Skyline Infrastructure has been named one of the 'Best Places to Work in PropTech' by the Tech Tribune. The award recognizes companies that have created exceptional workplace environments and a vibrant, supportive culture.
      The selection process is based on anonymous employee feedback covering areas such as work-life balance, leadership, and professional development opportunities. 
      'Our team is our greatest asset, and this award is a testament to the culture of collaboration and innovation we've built together,' said the Head of People Operations. 'We are committed to providing a workplace where everyone can thrive and do their best work.'`
    },
    {
      id: "future-of-cre",
      title: "The Future of Commercial Real Estate: A Digital-First Approach",
      date: "August 2, 2025",
      excerpt: "In this whitepaper, our experts discuss the key technological trends shaping the future of commercial property management and leasing.",
      content: `Skyline Infrastructure has released a new whitepaper titled "The Future of Commercial Real Estate: A Digital-First Approach." The report explores how technology is transforming the CRE landscape, from AI-driven leasing platforms to IoT-enabled smart buildings.
      The paper provides a roadmap for CRE owners and operators on how to adopt a digital-first strategy to improve efficiency, enhance tenant experience, and stay competitive in a rapidly evolving market. 
      Key topics include the rise of flexible workspaces, the importance of data analytics in decision-making, and the growing demand for sustainable and tech-enabled buildings.`
    },
    {
      id: "europe-expansion",
      title: "Skyline Infrastructure Expands Operations to Europe",
      date: "July 19, 2025",
      excerpt: "New offices in London and Berlin will serve our growing client base in the European market, offering localized support and services.",
      content: `In a significant move to bolster its international presence, Skyline Infrastructure announced the opening of two new offices in Europe: one in London, United Kingdom, and another in Berlin, Germany. This expansion is driven by increasing demand for the company's integrated real estate technology solutions across the European market.
      The new offices will provide sales, support, and implementation services, ensuring that local clients receive the dedicated attention and expertise they need. 
      'Europe represents a massive opportunity for growth, and this expansion allows us to better serve our existing clients and introduce the power of the Skyline platform to new ones,' said the company's CEO.`
    },
    {
      id: "client-spotlight-acme",
      title: "Client Spotlight: How Acme Properties Increased NOI by 15%",
      date: "June 5, 2025",
      excerpt: "Learn how Acme Properties leveraged our residential suite to streamline operations, reduce costs, and significantly boost their net operating income.",
      content: `This month's client spotlight features Acme Properties, a regional property management firm with a portfolio of 5,000 multifamily units. By implementing the Skyline Residential Suite, Acme was able to automate key processes, from leasing and maintenance to accounting and reporting.
      The results were transformative. Within 18 months, Acme Properties reduced their average days-on-market by 30%, decreased maintenance resolution times by 50%, and ultimately increased their portfolio-wide Net Operating Income (NOI) by an impressive 15%. 
      'The Skyline platform gave us the visibility and control we needed to make smarter operational decisions,' said the COO of Acme Properties. 'The efficiency gains have been a game-changer for our business.'`
    },
     {
      id: "esg-webinar-recap",
      title: "Webinar Recap: Mastering ESG Reporting in Real Estate",
      date: "May 22, 2025",
      excerpt: "Did you miss our recent webinar on Environmental, Social, and Governance reporting? Watch the full recording and download the presentation here.",
      content: `Last week, Skyline Infrastructure hosted a successful webinar on the critical topic of Environmental, Social, and Governance (ESG) reporting in the real estate industry. Experts from our Energy Management and Investment Suites discussed the growing importance of ESG for investors and tenants, and provided practical guidance on how to collect data, track performance, and generate reports for frameworks like GRESB and ENERGY STAR.
      For those who missed the live event, the full recording is now available on-demand. Viewers can learn how to leverage technology to streamline their ESG initiatives and turn sustainability into a competitive advantage.`
    },
];