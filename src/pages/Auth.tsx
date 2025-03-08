
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { toast } from "sonner";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Mock authentication - would be replaced with actual auth
      console.log('Authenticating with:', { email, password });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show success message
      toast.success(isLogin ? "Signed in successfully!" : "Account created successfully!");
      
      // Navigate to home page
      navigate('/');
    } catch (error) {
      console.error('Authentication error:', error);
      toast.error("Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-[#0a0b2e] flex flex-col items-center justify-start pt-12">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>
      
      {/* Logo */}
      <div className="text-white text-3xl font-bold mb-8 z-10 tracking-widest">
        ED ALPHA
      </div>
      
      {/* Auth Card */}
      <div className="bg-[#171838]/90 backdrop-blur-md w-[90%] max-w-sm rounded-3xl p-6 z-10 shadow-xl border border-purple-900/20">
        <h2 className="text-white text-2xl font-bold mb-6">
          {isLogin ? 'Sign in' : 'Sign up'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="edalpha.app@gmail.com"
              className="w-full bg-[#232450] text-white border border-purple-900/30 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-[#232450] text-white border border-purple-900/30 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              required
            />
          </div>
          
          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-cyan-400 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "w-full py-3 rounded-full text-white font-medium transition-all",
              "bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90",
              isLoading && "opacity-70 cursor-not-allowed"
            )}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {isLogin ? 'Signing in...' : 'Signing up...'}
              </span>
            ) : (
              isLogin ? 'Sign in' : 'Sign up'
            )}
          </button>
        </form>
        
        <div className="mt-4 text-center text-white text-sm">
          <p>or sign in using</p>
          <div className="flex justify-center space-x-6 mt-3">
            <SocialButton type="twitter" />
            <SocialButton type="facebook" />
            <SocialButton type="google" />
          </div>
        </div>
        
        <div className="mt-6 text-center text-white text-sm">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={toggleAuthMode}
            className="text-cyan-400 font-medium hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Social login buttons
const SocialButton = ({ type }: { type: 'twitter' | 'facebook' | 'google' }) => {
  const navigate = useNavigate();
  
  const handleSocialLogin = () => {
    // Mock social authentication
    console.log(`Logging in with ${type}`);
    toast.success(`Signed in with ${type.charAt(0).toUpperCase() + type.slice(1)}`);
    navigate('/');
  };

  const getIcon = () => {
    switch (type) {
      case 'twitter':
        return (
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
          </svg>
        );
      case 'google':
        return (
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z" />
          </svg>
        );
    }
  };

  return (
    <button 
      className="w-10 h-10 rounded-full bg-[#232450] text-white flex items-center justify-center hover:bg-[#2c2d5e] transition-colors"
      onClick={handleSocialLogin}
    >
      {getIcon()}
    </button>
  );
};

export default Auth;
