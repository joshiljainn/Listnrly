import React from 'react';
import { TrendingUp } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <div className="p-2 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-xl shadow-lg">
          <TrendingUp className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
      </div>
      {showText && (
        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Listnrly
        </span>
      )}
    </div>
  );
};

export default Logo;