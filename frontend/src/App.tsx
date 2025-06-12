import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { HomePage } from './pages/home-page';
import { ProductListingPage } from './pages/product-listing-page';
import { ProductDetailPage } from './pages/product-detail-page';
import { CartPage } from './pages/cart-page';
import { CheckoutPage } from './pages/checkout-page';
import { AuthPage } from './pages/auth-page';
import { ScrollToTop } from './components/common/scroll-to-top';
import { OrderConfirmationPage} from "./pages/order-confirmation-page.tsx";
import { TrackOrderPage } from './pages/track-order-page.tsx';


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:categoryId" element={<ProductListingPage />} />
          <Route path="product/:productId" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="track-order" element={<TrackOrderPage />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;