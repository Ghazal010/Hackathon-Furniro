import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

export default function FuniroFurniture() {
  return (
    <div className="relative flex items-center text-gray-800 mt-0 h-[85px] justify-center">
      <div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">Share your setup with</h2>
          <h3 className="text-2xl font-semibold text-yellow-500">#FuniroFurniture</h3>
        </div>
      </div>
      <div className="absolute left-11 top-1 bg-slate-600">
        <div className="absolute h-[380px] w-[80px] top-[90px] left-0">
          <Image src="/rectangle1.png" alt="Rectangle 1" width={80} height={380} />
        </div>
        <div className="absolute w-[300px] top-[260px] left-[90px] h-fit">
          <Image src="/rectangle 2.png" alt="Rectangle 2" width={300} height={300} />
        </div>
        <div className="w-[300px] h-96 absolute left-[400px] top-60">
          <Image src="/rectangle 40.png" alt="Rectangle 40" width={300} height={400} />
        </div>
        <div className="w-[300px] h-96 absolute left-[720px] top-40">
          <Image src="/rectangle 43.png" alt="Rectangle 43" width={300} height={400} />
        </div>
        <div className="w-[300px] h-96 absolute left-[1040px] top-36">
          <Image src="/rectangle 45.png" alt="Rectangle 45" width={300} height={400} />
        </div>
        <div className="w-[150px] h-64 absolute left-0 top-[500px] bg-slate-600">
          <Image src="/rectangle 37.png" alt="Rectangle 37" width={150} height={256} />
        </div>
        <div className="w-[215px] h-40 absolute left-44 top-[500px]">
          <Image src="/rectangle 39.png" alt="Rectangle 39" width={215} height={160} />
        </div>
        <div className="w-[215px] h-40 absolute left-[720px] top-[570px]">
          <Image src="/rectangle 41.png" alt="Rectangle 41" width={215} height={160} />
        </div>
        <div className="w-[215px] h-40 absolute left-[920px] top-[600px]">
          <Image src="/rectangle 44.png" alt="Rectangle 44" width={215} height={160} />
        </div>
      </div>
    </div>
  );
}
