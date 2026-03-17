import { BsPeopleFill } from 'react-icons/bs';
import { CgWorkAlt } from 'react-icons/cg';
import {  LucideRoute } from 'lucide-react';
import { FaDatabase } from 'react-icons/fa';
import { MdDashboard, MdDynamicFeed } from 'react-icons/md';
import {  TbTopologyRing } from 'react-icons/tb';

const Features = [
    {
        id:1,
        icon: BsPeopleFill,
        feature: "manage developers",
        description:"Able to add, view, delete, and update developer profiles."
    },
       {
        id:2,
        icon: CgWorkAlt,
        feature: "manage jobs",
        description:"Manage job details: add, delete, view, update and organize job lists dynamically"
    },
       {
        id:3,
        icon: MdDynamicFeed,
        feature: "dynamic pages & data",
        description:"Render the pages of developers and jobs listings dynamically using React"
    },
       {
        id:4,
        icon: LucideRoute,
        feature: "react router",
        description:"Impelement client-side routing to navigate between pages"
    },
       {
        id:5,
        icon: TbTopologyRing,
        feature: "state management",
        description:"Efficiently manage application state across components using modern state management techniques"
    },
       {
        id:6,
        icon: FaDatabase,
        feature: "storing data, using json sever",
        description:"Store and retrieve data seamlessly using JSON Server for backend simulation and API testing."
    },
       {
        id:7,
        icon: MdDashboard,
        feature: "dashboard managementn",
        description:"Monitor, organize, and manage application data with a user-friendly dashboard interface."
    }
]

export default Features