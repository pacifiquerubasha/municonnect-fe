import { type ClassValue, clsx } from "clsx";
import {
  BellElectric,
  Bitcoin,
  BookmarkCheck,
  BrickWall,
  Bus,
  Cable,
  Clapperboard,
  Cpu,
  Cross,
  Drum,
  Flower2,
  Forklift,
  HandCoins,
  Hospital,
  Hotel,
  Landmark,
  LibraryBig,
  Medal,
  Nfc,
  PackageCheck,
  Percent,
  ReceiptEuro,
  ReceiptText,
  Scale,
  School,
  ShieldPlus,
  Tractor,
  TramFront,
  Warehouse,
  Webcam,
  Zap,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, locale: string) {
  return new Date(dateString).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

type DataSourceItem = {
  key: string;
  [key: string]: any;
};

export const convertToDataSource = (
  data: any[][]
): { dataSource: DataSourceItem[]; columns: any[] } => {
  if (data.length === 0) return { dataSource: [], columns: [] };

  const headers = data[0].slice(0, 5);
  const rows = data.slice(1);

  const dataSource = rows.map((row, index) => {
    const item: DataSourceItem = { key: (index + 1).toString() };
    headers.forEach((header, colIndex) => {
      item[header] = row[colIndex];
    });
    return item;
  });

  const columns = headers.map((header) => ({
    title: header,
    dataIndex: header,
    key: header,
  }));

  return { dataSource, columns };
};

export const categories = [
  {
    name: "Technology",
    count: 5,
  },
  {
    name: "Health",
    count: 3,
  },
  {
    name: "Finance",
    count: 2,
  },
  {
    name: "Education",
    count: 4,
  },
  {
    name: "Agriculture",
    count: 1,
  },
  {
    name: "Transport",
    count: 2,
  },
  {
    name: "Environment",
    count: 3,
  },
  {
    name: "Energy",
    count: 2,
  },
  {
    name: "Tourism",
    count: 1,
  },
  {
    name: "Telecommunications",
    count: 3,
  },
  {
    name: "Trade",
    count: 2,
  },
  {
    name: "Manufacturing",
    count: 1,
  },
  {
    name: "Mining",
    count: 2,
  },
  {
    name: "Construction",
    count: 3,
  },
  {
    name: "Real Estate",
    count: 2,
  },
  {
    name: "Retail",
    count: 1,
  },
  {
    name: "Wholesale",
    count: 3,
  },
  {
    name: "Hospitality",
    count: 2,
  },
  {
    name: "Media",
    count: 1,
  },
  {
    name: "Entertainment",
    count: 2,
  },
  {
    name: "Sports",
    count: 3,
  },
  {
    name: "Culture",
    count: 2,
  },
  {
    name: "Government",
    count: 1,
  },
  {
    name: "Non-Profit",
    count: 3,
  },
  {
    name: "Research",
    count: 2,
  },
  {
    name: "Development",
    count: 1,
  },
  {
    name: "Security",
    count: 2,
  },
  {
    name: "Legal",
    count: 3,
  },
  {
    name: "Insurance",
    count: 2,
  },
  {
    name: "Logistics",
    count: 1,
  },
  {
    name: "Supply Chain",
    count: 3,
  },
  {
    name: "Human Resources",
    count: 2,
  },
  {
    name: "Marketing",
    count: 1,
  },
  {
    name: "Sales",
    count: 3,
  },
  {
    name: "Customer Service",
    count: 2,
  },
  {
    name: "Product Management",
    count: 1,
  },
  {
    name: "Project Management",
    count: 3,
  },
  {
    name: "Quality Assurance",
    count: 2,
  },
  {
    name: "Engineering",
    count: 1,
  },
  {
    name: "Design",
    count: 3,
  },
  {
    name: "Data Science",
    count: 2,
  },
  {
    name: "Machine Learning",
    count: 1,
  },
  {
    name: "Artificial Intelligence",
    count: 3,
  },
  {
    name: "Blockchain",
    count: 2,
  },
  {
    name: "Internet of Things",
    count: 1,
  },
  {
    name: "Augmented Reality",
    count: 3,
  },
  {
    name: "Virtual Reality",
    count: 2,
  },
  {
    name: "Cybersecurity",
    count: 1,
  },
  {
    name: "Cloud Computing",
    count: 3,
  },
  {
    name: "Web Development",
    count: 2,
  },
  {
    name: "Mobile Development",
    count: 1,
  },
  {
    name: "Desktop Development",
    count: 3,
  },
  {
    name: "Game Development",
    count: 2,
  },
  {
    name: "DevOps",
    count: 1,
  },
  {
    name: "IT Management",
    count: 3,
  },
  {
    name: "Networking",
    count: 2,
  },
  {
    name: "Databases",
    count: 1,
  },
  {
    name: "Big Data",
    count: 3,
  },
  {
    name: "Business Intelligence",
    count: 2,
  },
  {
    name: "Analytics",
    count: 1,
  },
  {
    name: "Machine Vision",
    count: 3,
  },
  {
    name: "Natural Language Processing",
    count: 2,
  },
  {
    name: "Robotics",
    count: 1,
  },
  {
    name: "Automation",
    count: 3,
  },
];

/**
 * Formats a file size in bytes into a human-readable format.
 *
 * @param {number} size - The file size in bytes.
 * @returns {string} The formatted file size string.
 */
export const formatFileSize = (size: number): string => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let unitIndex = 0;
  while (size > 1024) {
    size = size / 1024;
    unitIndex++;
  }
  return `${size?.toFixed(1)} ${units[unitIndex]}`;
};

export const formatNumber = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function copyTextToClipboard(text:string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Copied to clipboard: ", text);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

interface DatasetInfo {
  name: string;
  owner: any;
  releaseDate: Date;
  licence: string;
  description: string;
  files: any;
}

function formatOwnerName(owner: string): string {
  const parts = owner.split(" ");
  if (parts.length < 2) return owner;
  const lastName = parts[parts.length - 1];
  const firstName = parts.slice(0, -1).join(" ");
  return `${lastName}, ${firstName.toUpperCase()}`;
}

export function generateHarvardCitation(dataset: DatasetInfo): string {
  if (!dataset) return "";
  const { name, owner, releaseDate, licence, description, files } = dataset;

  return `${formatOwnerName(owner?.fullName)} (${new Date(
    releaseDate
  ).getFullYear()}). ${name}. ${description}. [Dataset] ${licence}. Available at: ${files?.mainFile} (Accessed: ${new Date().toLocaleDateString(
    "en-GB"
  )}).`;
}

export const startupIndustries = [
  {
    name: "Education",
    icon: LibraryBig,
  },
  {
    name: "Health",
    icon: Cross,
  },
  {
    name: "Finance",
    icon: Landmark,
  },
  {
    name: "Technology",
    icon: Cpu,
  },
  {
    name: "Agriculture",
    icon: Tractor,
  },
  {
    name: "Transport",
    icon: Bus,
  },
  {
    name: "Environment",
    icon: Flower2,
  },
  {
    name: "Energy",
    icon: Zap,
  },
  {
    name: "Tourism",
    icon: TramFront,
  },
  {
    name: "Telecommunications",
    icon: Nfc,
  },
  {
    name: "Trade",
    icon: ReceiptEuro,
  },
  {
    name: "Manufacturing",
    icon: Warehouse,
  },
  {
    name: "Mining",
    icon: Bitcoin,
  },
  {
    name: "Construction",
    icon: BrickWall,
  },
  {
    name: "Real Estate",
    icon: Hotel,
  },
  {
    name: "Retail",
    icon: ReceiptText,
  },
  {
    name: "Wholesale",
    icon: Percent,
  },
  {
    name: "Hospitality",
    icon: Hospital,
  },
  {
    name: "Media",
    icon: Webcam,
  },
  {
    name: "Entertainment",
    icon: Clapperboard,
  },
  {
    name: "Sports",
    icon: Medal,
  },
  {
    name: "Culture",
    icon: Drum,
  },
  {
    name: "Government",
    icon: School,
  },
  {
    name: "Non-Profit",
    icon: HandCoins,
  },
  {
    name: "Research",
    icon: BookmarkCheck,
  },
  {
    name: "Development",
    icon: ShieldPlus,
  },
  {
    name: "Security",
    icon: ShieldPlus,
  },
  {
    name: "Legal",
    icon: Scale,
  },
  {
    name: "Insurance",
    icon: PackageCheck,
  },
  {
    name: "Logistics",
    icon: Forklift,
  },
  {
    name: "Supply Chain",
    icon: Cable,
  },
];
