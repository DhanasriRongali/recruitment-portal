
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface LoginFormProps {
  onFlip: () => void;
}

const LoginForm = ({ onFlip }: LoginFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="glass w-full p-8 rounded-2xl shadow-xl">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-sm text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="input-animation w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="input-animation w-full"
              required
            />
          </div>

          <Button className="w-full button-animation" type="submit">
            Sign in
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={onFlip}
            className="text-sm text-primary hover:underline transition-all"
          >
            New user? Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
