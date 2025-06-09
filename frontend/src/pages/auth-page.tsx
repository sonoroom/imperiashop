import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { LoginForm } from '../components/auth/login-form';
import { RegisterForm } from '../components/auth/register-form';
import { motion, AnimatePresence } from 'framer-motion';

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <div className="max-w-md mx-auto">
        <Card className="border border-default-200" shadow="sm">
          <CardBody className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'register'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {isLogin ? (
                  <LoginForm onSwitchToRegister={toggleForm} />
                ) : (
                  <RegisterForm onSwitchToLogin={toggleForm} />
                )}
              </motion.div>
            </AnimatePresence>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};