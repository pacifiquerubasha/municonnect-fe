import {
  FileSpreadsheet,
  FileText,
  Users,
  FolderKanban,
  Calendar,
  UserRoundCheck,
  LayoutDashboard,
  Building,
  Package,
} from "lucide-react";

export type MenuItem = {
  name: string;
  url: string;
  icon: any;
};

type Menu = {
  [key: string]: MenuItem[];
};

export const menu: Menu = {
  individual: [
    {
      name: "Overview",
      url: "/overview",
      icon: LayoutDashboard,
    },
    {
      name: "Datasets",
      url: "/datasets",
      icon: Package,
    },
  ],
  institution: [
    {
      name: "Overview",
      url: "/overview",
      icon: LayoutDashboard,
    },
    {
      name: "Datasets",
      url: "/datasets",
      icon: Package,
    },
  ],
  admin: [
    {
      name: "Overview",
      url: "/overview",
      icon: LayoutDashboard,
    },
    {
      name: "Datasets",
      url: "/datasets",
      icon: Package,
    },
    {
      name: "Users",
      url: "/users",
      icon: Users,
    },

    {
      name: "Startups",
      url: "/startups",
      icon: Building,
    },
  ],
};
