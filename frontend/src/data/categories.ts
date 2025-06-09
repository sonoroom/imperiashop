import { Category } from "../types/product";

// Navigation categories with subcategories and items
export const navCategories: Category[] = [
  {
    id: "components",
    name: "Computer Components",
    subcategories: [
      {
        id: "processors",
        name: "Processors",
        items: [
          { id: "intel", name: "Intel CPUs" },
          { id: "amd", name: "AMD CPUs" },
          { id: "server", name: "Server Processors" },
        ]
      },
      {
        id: "graphics-cards",
        name: "Graphics Cards",
        items: [
          { id: "nvidia", name: "NVIDIA GPUs" },
          { id: "amd-gpu", name: "AMD GPUs" },
          { id: "workstation", name: "Workstation GPUs" },
        ]
      },
      {
        id: "motherboards",
        name: "Motherboards",
        items: [
          { id: "intel-boards", name: "Intel Motherboards" },
          { id: "amd-boards", name: "AMD Motherboards" },
          { id: "server-boards", name: "Server Motherboards" },
        ]
      },
      {
        id: "memory",
        name: "Memory",
        items: [
          { id: "ddr4", name: "DDR4 RAM" },
          { id: "ddr5", name: "DDR5 RAM" },
          { id: "server-ram", name: "Server Memory" },
        ]
      },
      {
        id: "storage",
        name: "Storage",
        items: [
          { id: "ssd", name: "Solid State Drives" },
          { id: "hdd", name: "Hard Disk Drives" },
          { id: "nvme", name: "NVMe SSDs" },
          { id: "external", name: "External Storage" },
        ]
      },
      {
        id: "power-supplies",
        name: "Power Supplies",
        items: [
          { id: "atx", name: "ATX Power Supplies" },
          { id: "sfx", name: "SFX Power Supplies" },
          { id: "redundant", name: "Redundant Power Supplies" },
        ]
      },
    ]
  },
  {
    id: "peripherals",
    name: "Peripherals",
    subcategories: [
      {
        id: "monitors",
        name: "Monitors",
        items: [
          { id: "gaming", name: "Gaming Monitors" },
          { id: "ultrawide", name: "Ultrawide Monitors" },
          { id: "4k", name: "4K & 8K Monitors" },
          { id: "professional", name: "Professional Monitors" },
        ]
      },
      {
        id: "keyboards",
        name: "Keyboards",
        items: [
          { id: "mechanical", name: "Mechanical Keyboards" },
          { id: "gaming-keyboards", name: "Gaming Keyboards" },
          { id: "wireless-keyboards", name: "Wireless Keyboards" },
        ]
      },
      {
        id: "mice",
        name: "Mice & Pointing Devices",
        items: [
          { id: "gaming-mice", name: "Gaming Mice" },
          { id: "wireless-mice", name: "Wireless Mice" },
          { id: "trackballs", name: "Trackballs" },
        ]
      },
      {
        id: "headsets",
        name: "Headsets & Audio",
        items: [
          { id: "gaming-headsets", name: "Gaming Headsets" },
          { id: "speakers", name: "Computer Speakers" },
          { id: "microphones", name: "Microphones" },
        ]
      },
    ]
  },
  {
    id: "computers",
    name: "Computers & Laptops",
    subcategories: [
      {
        id: "gaming-pc",
        name: "Gaming PCs",
        items: [
          { id: "entry-gaming", name: "Entry-level Gaming" },
          { id: "mid-gaming", name: "Mid-range Gaming" },
          { id: "high-gaming", name: "High-end Gaming" },
        ]
      },
      {
        id: "workstations",
        name: "Workstations",
        items: [
          { id: "content-creation", name: "Content Creation" },
          { id: "cad", name: "CAD/CAM Workstations" },
          { id: "scientific", name: "Scientific Workstations" },
        ]
      },
      {
        id: "gaming-laptops",
        name: "Gaming Laptops",
        items: [
          { id: "entry-gaming-laptop", name: "Entry-level Gaming" },
          { id: "mid-gaming-laptop", name: "Mid-range Gaming" },
          { id: "high-gaming-laptop", name: "High-end Gaming" },
        ]
      },
      {
        id: "business-laptops",
        name: "Business Laptops",
        items: [
          { id: "ultrabooks", name: "Ultrabooks" },
          { id: "business", name: "Business Laptops" },
          { id: "mobile-workstations", name: "Mobile Workstations" },
        ]
      },
    ]
  },
  {
    id: "networking",
    name: "Networking",
    subcategories: [
      {
        id: "routers",
        name: "Routers",
        items: [
          { id: "wireless-routers", name: "Wireless Routers" },
          { id: "gaming-routers", name: "Gaming Routers" },
          { id: "mesh-systems", name: "Mesh WiFi Systems" },
        ]
      },
      {
        id: "switches",
        name: "Network Switches",
        items: [
          { id: "unmanaged", name: "Unmanaged Switches" },
          { id: "managed", name: "Managed Switches" },
          { id: "poe", name: "PoE Switches" },
        ]
      },
      {
        id: "network-cards",
        name: "Network Cards",
        items: [
          { id: "wifi-cards", name: "WiFi Cards" },
          { id: "ethernet-cards", name: "Ethernet Cards" },
        ]
      },
    ]
  },
  {
    id: "accessories",
    name: "Accessories",
    subcategories: [
      {
        id: "cooling",
        name: "Cooling",
        items: [
          { id: "cpu-coolers", name: "CPU Coolers" },
          { id: "case-fans", name: "Case Fans" },
          { id: "liquid-cooling", name: "Liquid Cooling" },
        ]
      },
      {
        id: "cables",
        name: "Cables & Adapters",
        items: [
          { id: "hdmi", name: "HDMI Cables" },
          { id: "displayport", name: "DisplayPort Cables" },
          { id: "usb", name: "USB Cables" },
          { id: "power-cables", name: "Power Cables" },
        ]
      },
      {
        id: "tools",
        name: "Tools & Maintenance",
        items: [
          { id: "tool-kits", name: "Tool Kits" },
          { id: "cleaning", name: "Cleaning Supplies" },
          { id: "thermal-paste", name: "Thermal Paste" },
        ]
      },
    ]
  },
];

// Featured categories for the homepage
export const featuredCategories = [
  {
    id: "processors",
    name: "CPUs & Processors",
    description: "Latest Intel and AMD processors for gaming and workstations",
    image: "https://img.heroui.chat/image/dashboard?w=400&h=300&u=cat-cpu",
    productCount: 124
  },
  {
    id: "graphics-cards",
    name: "Graphics Cards",
    description: "High-performance NVIDIA and AMD GPUs",
    image: "https://img.heroui.chat/image/dashboard?w=400&h=300&u=cat-gpu",
    productCount: 87
  },
  {
    id: "motherboards",
    name: "Motherboards",
    description: "Premium motherboards for Intel and AMD platforms",
    image: "https://img.heroui.chat/image/dashboard?w=400&h=300&u=cat-motherboard",
    productCount: 93
  },
  {
    id: "memory",
    name: "Memory & RAM",
    description: "DDR4 and DDR5 memory modules for all systems",
    image: "https://img.heroui.chat/image/dashboard?w=400&h=300&u=cat-ram",
    productCount: 76
  },
  {
    id: "storage",
    name: "Storage",
    description: "SSDs, HDDs, and NVMe drives for all storage needs",
    image: "https://img.heroui.chat/image/dashboard?w=400&h=300&u=cat-storage",
    productCount: 112
  },
  {
    id: "monitors",
    name: "Monitors",
    description: "Gaming, professional and ultrawide displays",
    image: "https://img.heroui.chat/image/dashboard?w=400&h=300&u=cat-monitor",
    productCount: 68
  }
];
