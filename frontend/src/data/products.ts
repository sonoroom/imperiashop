import { Product } from "../types/product";

// Sample products for the recommended section
export const recommendedProducts: Product[] = [
  {
    id: "gpu-001",
    name: "NVIDIA GeForce RTX 4080 SUPER 16GB Graphics Card",
    brand: "NVIDIA",
    category: "Graphics Cards",
    subcategory: "Gaming",
    price: 1199.99,
    originalPrice: 1299.99,
    stock: 15,
    rating: 4.8,
    images: [
      "https://img.heroui.chat/image/game?w=600&h=600&u=gpu1",
      "https://img.heroui.chat/image/game?w=600&h=600&u=gpu1-2",
      "https://img.heroui.chat/image/game?w=600&h=600&u=gpu1-3",
      "https://img.heroui.chat/image/game?w=600&h=600&u=gpu1-4"
    ],
    description: "Experience unparalleled gaming performance with the NVIDIA GeForce RTX 4080 SUPER. Featuring 16GB of high-speed GDDR6X memory, advanced ray tracing capabilities, and DLSS 3.0 technology, this graphics card delivers stunning visuals and exceptional framerates in the most demanding games and applications.",
    features: [
      "16GB GDDR6X Memory",
      "DLSS 3.0 AI-Enhanced Graphics",
      "2nd Generation RT Cores",
      "4th Generation Tensor Cores",
      "PCIe 4.0 Interface",
      "3x DisplayPort 1.4a, 1x HDMI 2.1"
    ],
    specifications: [
      { name: "GPU Architecture", value: "NVIDIA Ada Lovelace" },
      { name: "CUDA Cores", value: "9728" },
      { name: "Memory Size", value: "16GB GDDR6X" },
      { name: "Memory Interface", value: "256-bit" },
      { name: "Memory Speed", value: "23 Gbps" },
      { name: "Boost Clock", value: "2.5 GHz" },
      { name: "TDP", value: "320W" },
      { name: "Recommended PSU", value: "750W" },
      { name: "Power Connectors", value: "1x 16-pin (adapter included)" },
      { name: "Dimensions", value: "304 x 137 x 61 mm" }
    ],
    reviews: [
      {
        id: "r1",
        user: "GamerPro99",
        rating: 5,
        comment: "Incredible performance! I'm getting 140+ FPS in all my favorite games at 4K. Ray tracing is amazing and DLSS 3 works like magic.",
        date: "May 15, 2023"
      },
      {
        id: "r2",
        user: "TechEnthusiast",
        rating: 4,
        comment: "Great card overall, but runs a bit hot under heavy load. Had to improve my case airflow to compensate.",
        date: "June 2, 2023"
      }
    ],
    isNew: true
  },
  {
    id: "cpu-001",
    name: "AMD Ryzen 9 7950X 16-Core Processor",
    brand: "AMD",
    category: "Processors",
    subcategory: "Desktop",
    price: 589.99,
    originalPrice: 699.99,
    stock: 23,
    rating: 4.9,
    images: [
      "https://img.heroui.chat/image/game?w=600&h=600&u=cpu1",
      "https://img.heroui.chat/image/game?w=600&h=600&u=cpu1-2",
      "https://img.heroui.chat/image/game?w=600&h=600&u=cpu1-3"
    ],
    description: "The AMD Ryzen 9 7950X is a high-performance desktop processor featuring 16 cores and 32 threads based on the Zen 4 architecture. With a base clock of 4.5GHz and boost clock up to 5.7GHz, this CPU delivers exceptional multi-threaded performance for gaming, content creation, and professional workloads.",
    features: [
      "16 Cores / 32 Threads",
      "Base Clock: 4.5GHz, Boost Clock: up to 5.7GHz",
      "80MB Total Cache",
      "PCIe 5.0 Support",
      "DDR5 Memory Support",
      "Socket AM5"
    ],
    specifications: [
      { name: "Architecture", value: "Zen 4" },
      { name: "Cores/Threads", value: "16 / 32" },
      { name: "Base/Boost Clock", value: "4.5 GHz / 5.7 GHz" },
      { name: "Total L3 Cache", value: "64MB" },
      { name: "TDP", value: "170W" },
      { name: "Memory Support", value: "DDR5-5200" },
      { name: "Socket", value: "AM5" },
      { name: "Manufacturing Process", value: "5nm" },
      { name: "PCIe Version", value: "5.0" },
      { name: "Included Cooler", value: "Not Included" }
    ],
    reviews: [
      {
        id: "r1",
        user: "ContentCreator",
        rating: 5,
        comment: "Rendering times cut in half compared to my previous CPU. Video encoding is blazing fast!",
        date: "April 12, 2023"
      },
      {
        id: "r2",
        user: "PCBuilder",
        rating: 5,
        comment: "The most powerful consumer CPU I've used. Handles everything I throw at it without breaking a sweat.",
        date: "May 3, 2023"
      }
    ]
  },
  {
    id: "mb-001",
    name: "ASUS ROG Strix X670E-E Gaming WiFi Motherboard",
    brand: "ASUS",
    category: "Motherboards",
    subcategory: "AMD",
    price: 499.99,
    stock: 8,
    rating: 4.7,
    images: [
      "https://img.heroui.chat/image/game?w=600&h=600&u=mb1",
      "https://img.heroui.chat/image/game?w=600&h=600&u=mb1-2",
      "https://img.heroui.chat/image/game?w=600&h=600&u=mb1-3"
    ],
    description: "The ASUS ROG Strix X670E-E Gaming WiFi is a high-end motherboard designed for AMD Ryzen 7000 series processors. Featuring robust power delivery, advanced cooling, and extensive connectivity options, this motherboard provides an excellent foundation for a high-performance gaming or content creation system.",
    features: [
      "AMD AM5 Socket for Ryzen 7000 Series",
      "16+2 Power Stages with ProCool II Power Connector",
      "PCIe 5.0 Support",
      "WiFi 6E and 2.5Gb Ethernet",
      "USB 3.2 Gen 2x2 Type-C",
      "Aura Sync RGB Lighting"
    ],
    specifications: [
      { name: "CPU Support", value: "AMD Ryzen 7000 Series" },
      { name: "Socket", value: "AM5" },
      { name: "Chipset", value: "AMD X670E" },
      { name: "Memory", value: "4x DDR5 DIMM, up to 6400+ MHz" },
      { name: "Expansion Slots", value: "2x PCIe 5.0 x16, 1x PCIe 4.0 x4" },
      { name: "Storage", value: "4x M.2 (PCIe 5.0/4.0), 6x SATA 6Gb/s" },
      { name: "Networking", value: "WiFi 6E, 2.5 Gigabit Ethernet" },
      { name: "Audio", value: "ROG SupremeFX 7.1 Surround Sound" },
      { name: "USB", value: "USB 3.2 Gen 2x2, Gen 2, Gen 1, USB 2.0" },
      { name: "Form Factor", value: "ATX" }
    ],
    reviews: [
      {
        id: "r1",
        user: "SystemBuilder",
        rating: 5,
        comment: "Excellent motherboard with all the features you could want. BIOS is intuitive and overclocking is straightforward.",
        date: "March 10, 2023"
      },
      {
        id: "r2",
        user: "TechReviewer",
        rating: 4,
        comment: "Great performance and build quality, but a bit pricey compared to similar options from other brands.",
        date: "April 15, 2023"
      }
    ]
  },
  {
    id: "ram-001",
    name: "Corsair Dominator Platinum RGB 32GB (2x16GB) DDR5 6200MHz",
    brand: "Corsair",
    category: "Memory",
    subcategory: "DDR5",
    price: 269.99,
    originalPrice: 299.99,
    stock: 35,
    rating: 4.8,
    images: [
      "https://img.heroui.chat/image/game?w=600&h=600&u=ram1",
      "https://img.heroui.chat/image/game?w=600&h=600&u=ram1-2",
      "https://img.heroui.chat/image/game?w=600&h=600&u=ram1-3"
    ],
    description: "Corsair Dominator Platinum RGB DDR5 memory redefines premium DDR5 memory with superior aluminum construction, tightly screened memory chips, and 12 ultra-bright Capellix RGB LEDs per module. Built with hand-sorted, high-frequency memory chips for maximum performance and tight response times.",
    features: [
      "32GB (2x16GB) DDR5-6200MHz",
      "Patented Dual-Channel DHX Cooling",
      "12 Ultra-bright Capellix RGB LEDs per Module",
      "iCUE Software Compatible",
      "Custom Intel XMP 3.0 Profiles",
      "CL36 Timings"
    ],
    specifications: [
      { name: "Memory Type", value: "DDR5" },
      { name: "Capacity", value: "32GB (2x16GB)" },
      { name: "Speed", value: "6200MHz" },
      { name: "Tested Latency", value: "36-39-39-76" },
      { name: "Voltage", value: "1.25V" },
      { name: "RGB Lighting", value: "Capellix RGB" },
      { name: "Profile Support", value: "XMP 3.0" },
      { name: "Heat Spreader", value: "Aluminum" },
      { name: "Warranty", value: "Limited Lifetime" },
      { name: "Compatibility", value: "Intel 12th/13th Gen, AMD Ryzen 7000" }
    ],
    reviews: [
      {
        id: "r1",
        user: "MemoryEnthusiast",
        rating: 5,
        comment: "Incredible performance and stunning RGB lighting. Runs at advertised speeds with no issues.",
        date: "February 5, 2023"
      },
      {
        id: "r2",
        user: "OverclockerPro",
        rating: 4,
        comment: "Great RAM with excellent overclocking headroom. Pushed to 6400MHz with minimal voltage increase.",
        date: "March 22, 2023"
      }
    ]
  },
  {
    id: "ssd-001",
    name: "Samsung 990 PRO 2TB NVMe M.2 SSD",
    brand: "Samsung",
    category: "Storage",
    subcategory: "NVMe SSD",
    price: 249.99,
    originalPrice: 279.99,
    stock: 42,
    rating: 4.9,
    images: [
      "https://img.heroui.chat/image/game?w=600&h=600&u=ssd1",
      "https://img.heroui.chat/image/game?w=600&h=600&u=ssd1-2",
      "https://img.heroui.chat/image/game?w=600&h=600&u=ssd1-3"
    ],
    description: "The Samsung 990 PRO is a high-performance PCIe 4.0 NVMe SSD that delivers exceptional speeds for gaming, content creation, and professional workloads. With Samsung's proprietary controller and V-NAND technology, it provides sequential read speeds up to 7,450 MB/s and write speeds up to 6,900 MB/s.",
    features: [
      "2TB Storage Capacity",
      "PCIe 4.0 NVMe Interface",
      "Up to 7,450 MB/s Read, 6,900 MB/s Write",
      "Samsung V-NAND Technology",
      "Dynamic Thermal Guard",
      "Samsung Magician Software Support"
    ],
    specifications: [
      { name: "Capacity", value: "2TB" },
      { name: "Interface", value: "PCIe 4.0 x4 / NVMe 2.0" },
      { name: "Form Factor", value: "M.2 2280" },
      { name: "Sequential Read", value: "Up to 7,450 MB/s" },
      { name: "Sequential Write", value: "Up to 6,900 MB/s" },
      { name: "Random Read IOPS", value: "Up to 1,400,000 IOPS" },
      { name: "Random Write IOPS", value: "Up to 1,550,000 IOPS" },
      { name: "NAND Type", value: "Samsung V-NAND" },
      { name: "Controller", value: "Samsung Proprietary" },
      { name: "Warranty", value: "5 Years or 1,200 TBW" }
    ],
    reviews: [
      {
        id: "r1",
        user: "SpeedDemon",
        rating: 5,
        comment: "Lightning fast! Games load almost instantly, and file transfers are incredibly quick.",
        date: "January 18, 2023"
      },
      {
        id: "r2",
        user: "VideoEditor",
        rating: 5,
        comment: "Perfect for 4K video editing. Scrubbing through timeline is butter smooth with no hiccups.",
        date: "February 27, 2023"
      }
    ]
  },
  {
    id: "case-001",
    name: "Lian Li O11 Dynamic EVO ATX Mid Tower Case",
    brand: "Lian Li",
    category: "Cases",
    subcategory: "ATX Mid Tower",
    price: 169.99,
    stock: 17,
    rating: 4.8,
    images: [
      "https://img.heroui.chat/image/game?w=600&h=600&u=case1",
      "https://img.heroui.chat/image/game?w=600&h=600&u=case1-2",
      "https://img.heroui.chat/image/game?w=600&h=600&u=case1-3"
    ],
    description: "The Lian Li O11 Dynamic EVO is an evolution of the award-winning O11 Dynamic series, offering even more versatility and functionality. With its dual-chamber design, modular front panel, and excellent cooling capabilities, this case provides a perfect foundation for high-performance systems and custom water cooling builds.",
    features: [
      "Dual-Chamber Design for Optimal Airflow",
      "Reversible Motherboard Tray",
      "Supports ATX, Micro-ATX, and Mini-ITX Motherboards",
      "Tempered Glass Side Panel",
      "Up to 10x 120mm Fan Support",
      "Extensive Water Cooling Support"
    ],
    specifications: [
      { name: "Case Type", value: "Mid Tower" },
      { name: "Dimensions", value: "462 x 285 x 459 mm" },
      { name: "Material", value: "Aluminum, Steel, Tempered Glass" },
      { name: "Motherboard Support", value: "ATX, Micro-ATX, Mini-ITX" },
      { name: "Expansion Slots", value: "7" },
      { name: "Drive Bays", value: "4x 2.5\", 2x 3.5\"" },
      { name: "Front I/O", value: "1x USB-C, 2x USB 3.0, HD Audio" },
      { name: "Fan Support", value: "10x 120mm or 7x 140mm" },
      { name: "Radiator Support", value: "Up to 360mm Top, Side, Bottom" },
      { name: "Max GPU Length", value: "423mm" }
    ],
    reviews: [
      {
        id: "r1",
        user: "PCModder",
        rating: 5,
        comment: "The best case I've ever built in. So many options for cooling and cable management is a dream.",
        date: "March 5, 2023"
      },
      {
        id: "r2",
        user: "WaterCoolingFan",
        rating: 5,
        comment: "Perfect for custom water cooling loops. Tons of radiator space and looks stunning with RGB.",
        date: "April 10, 2023"
      }
    ]
  },
  {
    id: "psu-001",
    name: "Corsair HX1000 80 PLUS Platinum Fully Modular Power Supply",
    brand: "Corsair",
    category: "Power Supplies",
    subcategory: "Fully Modular",
    price: 219.99,
    originalPrice: 249.99,
    stock: 22,
    rating: 4.7,
    images: [
      "https://img.heroui.chat/image/game?w=600&h=600&u=psu1",
      "https://img.heroui.chat/image/game?w=600&h=600&u=psu1-2",
      "https://img.heroui.chat/image/game?w=600&h=600&u=psu1-3"
    ],
    description: "The Corsair HX1000 is a high-performance power supply with 80 PLUS Platinum certification, delivering up to 92% energy efficiency. With fully modular cables, 100% Japanese capacitors, and a zero RPM fan mode, it provides clean, reliable power for high-end gaming PCs and workstations.",
    features: [
      "1000W Continuous Power Output",
      "80 PLUS Platinum Certified",
      "Fully Modular Cable System",
      "100% Japanese Capacitors",
      "Zero RPM Fan Mode",
      "10-Year Warranty"
    ],
    specifications: [
      { name: "Wattage", value: "1000W" },
      { name: "Efficiency Rating", value: "80 PLUS Platinum" },
      { name: "Form Factor", value: "ATX" },
      { name: "Cable Type", value: "Fully Modular" },
      { name: "PCIe Connectors", value: "6x 8-pin (6+2)" },
      { name: "EPS Connectors", value: "2x 8-pin (4+4)" },
      { name: "SATA Connectors", value: "12" },
      { name: "Fan Size", value: "135mm FDB Fan" },
      { name: "Protection", value: "OVP, UVP, OCP, OPP, SCP, OTP" },
      { name: "Operating Temperature", value: "0-50°C" }
    ],
    reviews: [
      {
        id: "r1",
        user: "PowerUser",
        rating: 5,
        comment: "Rock solid performance even under heavy load. Zero fan mode is practically silent during normal use.",
        date: "February 12, 2023"
      },
      {
        id: "r2",
        user: "SystemBuilder",
        rating: 4,
        comment: "Great PSU with clean power delivery. Cables are a bit stiff but very high quality.",
        date: "March 20, 2023"
      }
    ]
  },
  {
    id: "monitor-001",
    name: "ASUS ROG Swift PG32UQX 32\" 4K HDR Gaming Monitor",
    brand: "ASUS",
    category: "Monitors",
    subcategory: "Gaming",
    price: 2999.99,
    stock: 5,
    rating: 4.8,
    images: [
      "https://img.heroui.chat/image/game?w=600&h=600&u=monitor1",
      "https://img.heroui.chat/image/game?w=600&h=600&u=monitor1-2",
      "https://img.heroui.chat/image/game?w=600&h=600&u=monitor1-3"
    ],
    description: "The ASUS ROG Swift PG32UQX is a premium 4K gaming monitor featuring mini-LED backlight technology with 1152 dimming zones for stunning HDR performance. With a 144Hz refresh rate, 1ms response time, and NVIDIA G-SYNC ULTIMATE certification, it delivers an exceptional gaming experience with incredible visual quality.",
    features: [
      "32\" 4K IPS Display (3840 x 2160)",
      "Mini-LED Backlight with 1152 Dimming Zones",
      "NVIDIA G-SYNC ULTIMATE",
      "144Hz Refresh Rate, 1ms Response Time",
      "DisplayHDR 1400 Certified",
      "Quantum Dot Technology"
    ],
    specifications: [
      { name: "Screen Size", value: "32 inches" },
      { name: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { name: "Panel Type", value: "IPS" },
      { name: "Refresh Rate", value: "144Hz" },
      { name: "Response Time", value: "1ms (GtG)" },
      { name: "HDR", value: "DisplayHDR 1400" },
      { name: "Brightness", value: "500 nits (typical), 1400 nits (peak)" },
      { name: "Contrast Ratio", value: "1000:1" },
      { name: "Color Gamut", value: "DCI-P3 98%" },
      { name: "Inputs", value: "3x DisplayPort 1.4, 1x HDMI 2.1, USB Hub" }
    ],
    reviews: [
      {
        id: "r1",
        user: "ProGamer",
        rating: 5,
        comment: "The best gaming monitor I've ever used. HDR is mind-blowing and the mini-LED backlighting provides incredible contrast.",
        date: "January 5, 2023"
      },
      {
        id: "r2",
        user: "ContentCreator",
        rating: 4,
        comment: "Amazing for both gaming and creative work. Color accuracy is excellent after calibration. Only downside is the fan noise.",
        date: "February 15, 2023"
      }
    ]
  }
];

// Sample products for search results
export const searchProducts = [
  ...recommendedProducts,
  {
    id: "keyboard-001",
    name: "Logitech G Pro X Mechanical Gaming Keyboard",
    brand: "Logitech",
    category: "Peripherals",
    subcategory: "Keyboards",
    price: 149.99,
    stock: 28,
    rating: 4.7,
    images: ["https://img.heroui.chat/image/game?w=600&h=600&u=keyboard1"],
    description: "Premium gaming keyboard with swappable switches",
    features: [],
    specifications: [],
    reviews: []
  },
  {
    id: "mouse-001",
    name: "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
    brand: "Razer",
    category: "Peripherals",
    subcategory: "Mice",
    price: 149.99,
    stock: 35,
    rating: 4.8,
    images: ["https://img.heroui.chat/image/game?w=600&h=600&u=mouse1"],
    description: "Ultra-lightweight wireless gaming mouse",
    features: [],
    specifications: [],
    reviews: []
  },
  {
    id: "headset-001",
    name: "SteelSeries Arctis Pro Wireless Gaming Headset",
    brand: "SteelSeries",
    category: "Peripherals",
    subcategory: "Headsets",
    price: 329.99,
    stock: 0,
    rating: 4.6,
    images: ["https://img.heroui.chat/image/game?w=600&h=600&u=headset1"],
    description: "Premium wireless gaming headset with dual-battery system",
    features: [],
    specifications: [],
    reviews: []
  },
  {
    id: "laptop-001",
    name: "ASUS ROG Zephyrus G14 Gaming Laptop",
    brand: "ASUS",
    category: "Laptops",
    subcategory: "Gaming",
    price: 1799.99,
    originalPrice: 1999.99,
    stock: 7,
    rating: 4.8,
    images: ["https://img.heroui.chat/image/game?w=600&h=600&u=laptop1"],
    description: "Compact gaming laptop with AMD Ryzen 9 and RTX 4070",
    features: [],
    specifications: [],
    reviews: []
  }
];

// Product detail retrieval functions
export function getProductById(productId: string): Product | undefined {
  const allProducts = [...recommendedProducts, ...searchProducts];
  return allProducts.find(product => product.id === productId);
}

// Product listing retrieval function
export function getCategoryProducts(categoryId: string, page: number, sortBy: string) {
  // Get all products (in real app, would filter by category)
  let products = [...recommendedProducts, ...searchProducts].filter(product => 
    product.category.toLowerCase().includes(categoryId) || 
    product.subcategory.toLowerCase().includes(categoryId)
  );
  
  // Sort products
  switch (sortBy) {
    case 'price_low':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'price_high':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      products.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      products.sort((a, b) => a.isNew ? -1 : b.isNew ? 1 : 0);
      break;
    default:
      // Default sorting (featured)
      break;
  }
  
  // Find category information
  const category = {
    id: categoryId,
    name: categoryId.charAt(0).toUpperCase() + categoryId.slice(1).replace('-', ' ')
  };
  
  // Paginate (10 products per page)
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);
  
  return {
    products: paginatedProducts,
    category,
    totalPages
  };
}
