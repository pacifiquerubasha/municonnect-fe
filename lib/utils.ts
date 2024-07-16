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
import { BaseCity } from "./types";

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
  if(!number) return "0"
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function copyTextToClipboard(text: string) {
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
  ).getFullYear()}). ${name}. ${description}. [Dataset] ${licence}. Available at: ${
    files?.mainFile
  } (Accessed: ${new Date().toLocaleDateString("en-GB")}).`;
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

export const cities: BaseCity[] = [
  { city: "Kinshasa", latitude: -4.3219, longitude: 15.3119 },
  { city: "Mbuji-Mayi", latitude: -6.15, longitude: 23.6 },
  { city: "Kananga", latitude: -5.897, longitude: 22.4488 },
  { city: "Lubumbashi", latitude: -11.6647, longitude: 27.4794 },
  { city: "Katako-Kombe", latitude: -3.4, longitude: 24.42 },
  { city: "Mbandaka", latitude: 0.0478, longitude: 18.2558 },
  { city: "Bukavu", latitude: -2.5, longitude: 28.8667 },
  { city: "Kisangani", latitude: 0.5167, longitude: 25.2 },
  { city: "Kibanseke Première", latitude: -4.4419, longitude: 15.395 },
  { city: "Bunia", latitude: 1.5667, longitude: 30.25 },
  { city: "Tshikapa", latitude: -6.4167, longitude: 20.8 },
  { city: "Uvira", latitude: -3.4, longitude: 29.15 },
  { city: "Likasi", latitude: -10.9833, longitude: 26.7333 },
  { city: "Kolwezi", latitude: -10.7167, longitude: 25.4667 },
  { city: "Kikwit", latitude: -5.0386, longitude: 18.8181 },
  { city: "Ndjili", latitude: -4.4089, longitude: 15.3775 },
  { city: "Kisenzi", latitude: -4.4094, longitude: 15.3425 },
  { city: "Matadi", latitude: -5.8167, longitude: 13.4833 },
  { city: "Goma", latitude: -1.6794, longitude: 29.2336 },
  { city: "Kabinda", latitude: -6.13, longitude: 24.48 },
  { city: "Beni", latitude: 0.5, longitude: 29.4667 },
  { city: "Butembo", latitude: 0.15, longitude: 29.2833 },
  { city: "Gbadolite", latitude: 4.2833, longitude: 21.0167 },
  { city: "Mwene-Ditu", latitude: -7, longitude: 23.45 },
  { city: "Isiro", latitude: 2.7833, longitude: 27.6167 },
  { city: "Kindu", latitude: -2.95, longitude: 25.95 },
  { city: "Boma", latitude: -5.85, longitude: 13.05 },
  { city: "Kamina", latitude: -8.7386, longitude: 24.9906 },
  { city: "Moanda", latitude: -5.9342, longitude: 12.3494 },
  { city: "Kalemie", latitude: -5.9128, longitude: 29.1906 },
  { city: "Wamba", latitude: 2.1442, longitude: 27.9929 },
  { city: "Gandajika", latitude: -6.75, longitude: 23.9667 },
  { city: "Bandundu", latitude: -3.3167, longitude: 17.3667 },
  { city: "Nsele", latitude: -4.3744, longitude: 15.4947 },
  { city: "Gemena", latitude: 3.25, longitude: 19.7667 },
  { city: "Kipushi", latitude: -11.7625, longitude: 27.25 },
  { city: "Baraka", latitude: -4.1041, longitude: 29.094 },
  { city: "Ilebo", latitude: -4.3167, longitude: 20.6 },
  { city: "Kongolo", latitude: -5.4, longitude: 27 },
  { city: "Bumba", latitude: 2.1844, longitude: 22.4703 },
  { city: "Lingwala", latitude: -4.3203, longitude: 15.2983 },
  { city: "Tshilenge", latitude: -6.25, longitude: 23.7667 },
  { city: "Lisala", latitude: 2.1486, longitude: 21.5133 },
  { city: "Buta", latitude: 2.8, longitude: 24.7333 },
  { city: "Inongo", latitude: -1.95, longitude: 18.2667 },
  { city: "Kenge", latitude: -4.8056, longitude: 17.0417 },
  { city: "Lusambo", latitude: -4.9729, longitude: 23.4368 },
  { city: "Boende", latitude: -0.281, longitude: 20.876 },
  { city: "Djugu", latitude: 1.9184, longitude: 30.5019 },
  { city: "Drodro", latitude: 1.7667, longitude: 30.5333 },
];
export const weatherIcons: { [key: string]: string } = {
  wind_speed: "/wind.svg",
  wind_degrees: "/wind_degree.svg",
  temp: "/temp.svg",
  humidity: "/humidity.svg",
  sunset: "/sunset.svg",
  min_temp: "/temp_min.svg",
  cloud_pct: "/cloud.svg",
  feels_like: "/feels_like.png",
  sunrise: "/sunrise.svg",
  max_temp: "/temp_max.svg",
};
