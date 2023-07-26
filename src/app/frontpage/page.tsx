

import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[white] text-[black]">
      <div className="flex flex-col items-center justify-center flex-1">
        {/* <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Cakerella</h1> */}
        <div className="flex items-center justify-center flex-1 w-full h-full">
          <Image
            src="/Image/oreocupcakes.avif" 
            width={800}
            height={800}
            alt="Cakerella"
            className="object-cover h-full w-full rounded-md"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;