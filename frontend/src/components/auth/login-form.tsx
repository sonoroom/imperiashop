import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Checkbox, Link, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    rememberMe: true,
  });
  
  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };
  
  const handleOAuthLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Implement OAuth login
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-center">Welcome back</h1>
        <p className="text-default-500 text-center">Log in to your account to continue shopping</p>
      </div>
      
      <div className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onValueChange={v => handleChange('email', v)}
          variant="bordered"
          isRequired
          startContent={<Icon icon="lucide:mail" className="text-default-400" width={16} />}
        />
        
        <Input
          label="Password"
          type="password"
          value={formData.password}
          onValueChange={v => handleChange('password', v)}
          variant="bordered"
          isRequired
          startContent={<Icon icon="lucide:lock" className="text-default-400" width={16} />}
        />
      </div>
      
      <div className="flex justify-between items-center">
        <Checkbox
          isSelected={formData.rememberMe}
          onValueChange={v => handleChange('rememberMe', v)}
          size="sm"
        >
          Remember me
        </Checkbox>
        
        <Link href="#" size="sm">Forgot password?</Link>
      </div>
      
      <Button
        type="submit"
        color="primary"
        fullWidth
        isLoading={isLoading}
      >
        Log In
      </Button>
      
      <div className="flex items-center gap-2">
        <Divider className="flex-grow" />
        <span className="text-default-500 text-xs">OR</span>
        <Divider className="flex-grow" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="flat"
          onPress={() => handleOAuthLogin('google')}
          startContent={<Icon icon="logos:google-icon" width={18} />}
          fullWidth
        >
          Google
        </Button>
        
        <Button
          variant="flat"
          onPress={() => handleOAuthLogin('github')}
          startContent={<Icon icon="logos:github-icon" width={18} />}
          fullWidth
        >
          GitHub
        </Button>
      </div>
      
      <div className="text-center">
        <span className="text-default-500 text-sm">Don't have an account? </span>
        <Button variant="light" onPress={onSwitchToRegister} className="p-0">
          Sign up
        </Button>
      </div>
    </form>
  );
};