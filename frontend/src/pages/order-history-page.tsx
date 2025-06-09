import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Card, 
  CardBody, 
  Tabs, 
  Tab, 
  Pagination,
  Chip
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { getOrderHistory } from '../data/orders';

export const OrderHistoryPage: React.FC = () => {
  const [status, setStatus] = React.useState<string>("all");
  const [page, setPage] = React.useState(1);
  
  const { orders, totalPages } = getOrderHistory(status, page);
  
  // Helper function to get status chip color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'processing':
        return 'primary';
      case 'shipped':
        return 'secondary';
      case 'cancelled':
        return 'danger';
      default:
        return 'default';
    }
  };
  
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      
      <Tabs 
        variant="underlined" 
        aria-label="Order history tabs"
        onSelectionChange={(key) => setStatus(key as string)}
        selectedKey={status}
      >
        <Tab key="all" title="All Orders" />
        <Tab key="processing" title="Processing" />
        <Tab key="shipped" title="Shipped" />
        <Tab key="completed" title="Completed" />
        <Tab key="cancelled" title="Cancelled" />
      </Tabs>
      
      <div className="mt-6 space-y-6">
        {orders.length === 0 ? (
          <Card className="border border-default-200" shadow="sm">
            <CardBody className="py-16 text-center">
              <Icon icon="lucide:package" className="mx-auto text-default-400 mb-4" width={48} />
              <h2 className="text-xl font-bold mb-2">No orders found</h2>
              <p className="text-default-500 mb-6">
                {status === 'all' 
                  ? "You haven't placed any orders yet." 
                  : `You don't have any ${status} orders.`}
              </p>
              <Button as={Link} to="/" color="primary">
                Browse Products
              </Button>
            </CardBody>
          </Card>
        ) : (
          <>
            {/* Order list */}
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="border border-default-200" shadow="sm">
                  <CardBody>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="font-bold">Order #{order.id}</span>
                          <span className="text-default-500">•</span>
                          <span className="text-default-500">{order.date}</span>
                          <Chip 
                            color={getStatusColor(order.status) as any} 
                            size="sm"
                            variant="flat"
                          >
                            {order.status}
                          </Chip>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          <div>
                            <span className="text-default-500">Items: </span>
                            <span>{order.items.length}</span>
                          </div>
                          <div>
                            <span className="text-default-500">Total: </span>
                            <span className="font-medium">${order.total.toFixed(2)}</span>
                          </div>
                          <div>
                            <span className="text-default-500">Payment: </span>
                            <span>{order.paymentMethod}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="flat">
                          Track Order
                        </Button>
                        <Button size="sm" variant="flat">
                          View Order
                        </Button>
                        {order.status === 'Completed' && (
                          <Button 
                            size="sm" 
                            variant="flat" 
                            color="primary"
                            startContent={<Icon icon="lucide:repeat" width={16} />}
                          >
                            Buy Again
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex flex-nowrap overflow-x-auto gap-4 pb-2 hide-scrollbar">
                        {order.items.map((item) => (
                          <Link 
                            to={`/product/${item.productId}`}
                            key={item.productId}
                            className="flex-shrink-0 w-16"
                          >
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-md border border-default-200"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <Pagination
                  total={totalPages}
                  initialPage={page}
                  onChange={setPage}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};