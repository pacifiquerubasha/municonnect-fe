import {
    FileSpreadsheet,
    FileText,
    Users,
    FolderKanban,
    Calendar,
    UserRoundCheck,
    LayoutDashboard,
    Building,
    Package
  } from "lucide-react";
  
  
export type MenuItem = {
    name: string,
    url: string,
    icon: any
}

type Menu = {
    [key: string]: MenuItem[]
}

export const menu:Menu = {
    "User" : [
        {
            "name": "Overview",
            "url": "/overview",
            icon: LayoutDashboard
        },
        {
            "name": "Datasets",
            "url": "/datasets",
            icon: Package
        },
        {
            "name": "Articles",
            "url": "/articles",
            icon: FileText
        },
        {
            "name": "Projects",
            "url": "/projects",
            icon: FolderKanban
        },
    ],      
    "Institution" : [
        {
            "name": "Overview",
            "url": "/overview",
            icon: LayoutDashboard
        },
        {
            "name": "Datasets",
            "url": "/datasets",
            icon: Package
        },
        {
            "name": "Articles",
            "url": "/articles",
            icon: FileText
        },
        {
            "name": "Projects",
            "url": "/projects",
            icon: FolderKanban
        },
        {
            "name": "Affiliated Users",
            "url": "/affiliated-users",
            icon: UserRoundCheck
        },
    ],
    "Admin" : [
        {
            "name": "Overview",
            "url": "/overview",
            icon: LayoutDashboard
        },
        {
            "name": "Datasets",
            "url": "/datasets",
            icon: Package
        },
        {
            "name": "Articles",
            "url": "/articles",
            icon: FileText
        },
        {
            "name": "Projects",
            "url": "/projects",
            icon: FolderKanban
        },
        {
            "name": "Events",
            "url": "/events",
            icon: Calendar
        },
        {
            "name": "Users",
            "url": "/users",
            icon: Users
        },
        {
            "name": "Institutions",
            "url": "/institutions",
            icon: Building
        },
        
    ],
    
    
}