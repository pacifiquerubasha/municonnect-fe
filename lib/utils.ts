import { type ClassValue, clsx } from "clsx"
import { BellElectric, Bitcoin, BookmarkCheck, BrickWall, Bus, Cable, Clapperboard, Cpu, Cross, Drum, Flower2, Forklift, HandCoins, Hospital, Hotel, Landmark, LibraryBig, Medal, Nfc, PackageCheck, Percent, ReceiptEuro, ReceiptText, Scale, School, ShieldPlus, Tractor, TramFront, Warehouse, Webcam, Zap } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString:string, locale:string) {
  return new Date(dateString).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  })  
}

export const categories = [
  {
      name: 'Technology',
      count: 5
  },
  {
      name: 'Health',
      count: 3
  },
  {
      name: 'Finance',
      count: 2
  },
  {
      name: 'Education',
      count: 4
  },
  {
      name: 'Agriculture',
      count: 1
  },
  {
      name: 'Transport',
      count: 2
  },
  {
      name: 'Environment',
      count: 3
  },
  {
      name: 'Energy',
      count: 2
  },
  {
      name: 'Tourism',
      count: 1
  },
  {
      name: 'Telecommunications',
      count: 3
  },
  {
      name: 'Trade',
      count: 2
  },
  {
      name: 'Manufacturing',
      count: 1
  },
  {
      name: 'Mining',
      count: 2
  },
  {
      name: 'Construction',
      count: 3
  },
  {
      name: 'Real Estate',
      count: 2
  },
  {
      name: 'Retail',
      count: 1
  },
  {
      name: 'Wholesale',
      count: 3
  },
  {
      name: 'Hospitality',
      count: 2
  },
  {
      name: 'Media',
      count: 1
  },
  {
      name: 'Entertainment',
      count: 2
  },
  {
      name: 'Sports',
      count: 3
  },
  {
      name: 'Culture',
      count: 2
  },
  {
      name: 'Government',
      count: 1
  },
  {
      name: 'Non-Profit',
      count: 3
  },
  {
      name: 'Research',
      count: 2
  },
  {
      name: 'Development',
      count: 1
  },
  {
      name: 'Security',
      count: 2
  },
  {
      name: 'Legal',
      count: 3
  },
  {
      name: 'Insurance',
      count: 2
  },
  {
      name: 'Logistics',
      count: 1
  },
  {
      name: 'Supply Chain',
      count: 3
  },
  {
      name: 'Human Resources',
      count: 2
  },
  {
      name: 'Marketing',
      count: 1
  },
  {
      name: 'Sales',
      count: 3
  },
  {
      name: 'Customer Service',
      count: 2
  },
  {
      name: 'Product Management',
      count: 1
  },
  {
      name: 'Project Management',
      count: 3
  },
  {
      name: 'Quality Assurance',
      count: 2
  },
  {
      name: 'Engineering',
      count: 1
  },
  {
      name: 'Design',
      count: 3
  },
  {
      name: 'Data Science',
      count: 2
  },
  {
      name: 'Machine Learning',
      count: 1
  },
  {
      name: 'Artificial Intelligence',
      count: 3
  },
  {
      name: 'Blockchain',
      count: 2
  },
  {
      name: 'Internet of Things',
      count: 1
  },
  {
      name: 'Augmented Reality',
      count: 3
  },
  {
      name: 'Virtual Reality',
      count: 2
  },
  {
      name: 'Cybersecurity',
      count: 1
  },
  {
      name: 'Cloud Computing',
      count: 3
  },
  {
      name: 'Web Development',
      count: 2
  },
  {
      name: 'Mobile Development',
      count: 1
  },
  {
      name: 'Desktop Development',
      count: 3
  },
  {
      name: 'Game Development',
      count: 2
  },
  {
      name: 'DevOps',
      count: 1
  },
  {
      name: 'IT Management',
      count: 3
  },
  {
      name: 'Networking',
      count: 2
  },
  {
      name: 'Databases',
      count: 1
  },
  {
      name: 'Big Data',
      count: 3
  },
  {
      name: 'Business Intelligence',
      count: 2
  },
  {
      name: 'Analytics',
      count: 1
  },
  {
      name: 'Machine Vision',
      count: 3
  },
  {
      name: 'Natural Language Processing',
      count: 2
  },
  {
      name: 'Robotics',
      count: 1
  },
  {
      name: 'Automation',
      count: 3
  }
]

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
]