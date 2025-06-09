import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Checkbox, Link, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
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
  
  const handleOAuthRegister = (provider: string) => {
    console.log(`Register with ${provider}`);
    // Implement OAuth register
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-center">Create an account</h1>
        <p className="text-default-500 text-center">Sign up to start shopping with TechGear</p>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            value={formData.firstName}
            onValueChange={v => handleChange('firstName', v)}
            variant="bordered"
            isRequired
          />
          
          <Input
            label="Last Name"
            value={formData.lastName}
            onValueChange={v => handleChange('lastName', v)}
            variant="bordered"
            isRequired
          />
        </div>
        
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
        
        <Input
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onValueChange={v => handleChange('confirmPassword', v)}
          variant="bordered"
          isRequired
          startContent={<Icon icon="lucide:lock" className="text-default-400" width={16} />}
        />
      </div>
      
      <Checkbox
        isSelected={formData.agreeTerms}
        onValueChange={v => handleChange('agreeTerms', v)}
        size="sm"
      >
        I agree to the <Link href="#" size="sm">Terms of Service</Link> and <Link href="#" size="sm">Privacy Policy</Link>
      </Checkbox>
      
      <Button
        type="submit"
        color="primary"
        fullWidth
        isLoading={isLoading}
        isDisabled={!formData.agreeTerms}
      >
        Create Account
      </Button>
      
      <div className="flex items-center gap-2">
        <Divider className="flex-grow" />
        <span className="text-default-500 text-xs">OR</span>
        <Divider className="flex-grow" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="flat"
          onPress={() => handleOAuthRegister('google')}
          startContent={<Icon icon="logos:google-icon" width={18} />}
          fullWidth
        >
          Google
        </Button>
        
        <Button
          variant="flat"
          onPress={() => handleOAuthRegister('github')}
          startContent={<Icon icon="logos:github-icon" width={18} />}
          fullWidth
        >
          GitHub
        </Button>
      </div>
      
      <div className="text-center">
        <span className="text-default-500 text-sm">Already have an account? </span>
        <Button variant="light" onPress={onSwitchToLogin} className="p-0">
          Log in
        </Button>
      </div>
    </form>
  );
};