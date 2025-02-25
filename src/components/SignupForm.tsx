
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SignupFormProps {
  onFlip: () => void;
}

const SignupForm = ({ onFlip }: SignupFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="glass w-full p-10 rounded-2xl shadow-xl">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-sm text-gray-600 mt-2">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="input-animation w-full h-11"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="input-animation w-full h-11"
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
              placeholder="Choose a password"
              className="input-animation w-full h-11"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="role">
              Role
            </label>
            <Select>
              <SelectTrigger className="w-full input-animation h-11">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="vp">VP</SelectItem>
                <SelectItem value="pm">Project Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full h-11 button-animation text-base" type="submit">
            Sign up
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={onFlip}
            className="text-sm text-primary hover:underline transition-all"
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
