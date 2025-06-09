// Mock order history data

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: string;
  items: OrderItem[];
  total: number;
  paymentMethod: string;
  shippingAddress: string;
}

const mockOrders: Order[] = [
  {
    id: "ORD-12345",
    date: "June 15, 2023",
    status: "Completed",
    items: [
      {
        productId: "gpu-001",
        name: "NVIDIA GeForce RTX 4080 SUPER 16GB Graphics Card",
        price: 1199.99,
        quantity: 1,
        image: "https://img.heroui.chat/image/game?w=80&h=80&u=gpu1"
      },
      {
        productId: "cpu-001",
        name: "AMD Ryzen 9 7950X 16-Core Processor",
        price: 589.99,
        quantity: 1,
        image: "https://img.heroui.chat/image/game?w=80&h=80&u=cpu1"
      }
    ],
    total: 1789.98,
    paymentMethod: "Credit Card",
    shippingAddress: "123 Main St, Anytown, USA"
  },
  {
    id: "ORD-12346",
    date: "July 2, 2023",
    status: "Shipped",
    items: [
      {
        productId: "ram-001",
        name: "Corsair Dominator Platinum RGB 32GB (2x16GB) DDR5 6200MHz",
        price: 269.99,
        quantity: 2,
        image: "https://img.heroui.chat/image/game?w=80&h=80&u=ram1"
      }
    ],
    total: 539.98,
    paymentMethod: "PayPal",
    shippingAddress: "123 Main St, Anytown, USA"
  },
  {
    id: "ORD-12347",
    date: "July 10, 2023",
    status: "Processing",
    items: [
      {
        productId: "ssd-001",
        name: "Samsung 990 PRO 2TB NVMe M.2 SSD",
        price: 249.99,
        quantity: 1,
        image: "https://img.heroui.chat/image/game?w=80&h=80&u=ssd1"
      },
      {
        productId: "case-001",
        name: "Lian Li O11 Dynamic EVO ATX Mid Tower Case",
        price: 169.99,
        quantity: 1,
        image: "https://img.heroui.chat/image/game?w=80&h=80&u=case1"
      },
      {
        productId: "psu-001",
        name: "Corsair HX1000 80 PLUS Platinum Fully Modular Power Supply",
        price: 219.99,
        quantity: 1,
        image: "https://img.heroui.chat/image/game?w=80&h=80&u=psu1"
      }
    ],
    total: 639.97,
    paymentMethod: "Credit Card",
    shippingAddress: "123 Main St, Anytown, USA"
  },
  {
    id: "ORD-12348",
    date: "August 5, 2023",
    status: "Cancelled",
    items: [
      {
        productId: "monitor-001",
        name: "ASUS ROG Swift PG32UQX 32\" 4K HDR Gaming Monitor",
        price: 2999.99,
        quantity: 1,
        image: "https://img.heroui.chat/image/game?w=80&h=80&u=monitor1"
      }
    ],
    total: 2999.99,
    paymentMethod: "Credit Card",
    shippingAddress: "123 Main St, Anytown, USA"
  },
  {
    id: "ORD-12349",
    date: "September 12, 2023",
    status: "Completed",
    items: [
      {
        productId: "keyboard-001",
        name: "Logitech G Pro X Mechanical Gaming Keyboard",
        price: 149.99,
        quantity: 1,
        image: "https://img.heroui.chat/image/game?w=80&h=80&u=keyboard1"
      },
      {
        productId: "mouse-001",
        name: "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
        price: 149.99,
        quantity: 1,
        image: "https://img.heroui.chat/image/game?w=80&h=80&u=mouse1"
      }
    ],
    total: 299.98,
    paymentMethod: "PayPal",
    shippingAddress: "123 Main St, Anytown, USA"
  }
];

export function getOrderHistory(status: string = 'all', page: number = 1, ordersPerPage: number = 5) {
  // Filter orders by status
  let filteredOrders = status === 'all' 
    ? mockOrders 
    : mockOrders.filter(order => order.status.toLowerCase() === status.toLowerCase());
  
  // Sort by date (newest first)
  filteredOrders = [...filteredOrders].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Paginate
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = (page - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, endIndex);
  
  return {
    orders: paginatedOrders,
    totalOrders: filteredOrders.length,
    totalPages
  };
}
