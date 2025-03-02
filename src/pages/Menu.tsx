
import React from 'react';
import Layout from '@/components/Layout';

const Menu: React.FC = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">More Options</h1>
          <p className="text-gray-600">Settings and profile coming soon</p>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
