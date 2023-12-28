import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <div className="flex items-center justify-center w-32 h-32 mb-4">
        <Image
          src="/loading.gif"
          alt="logo"
          width={64}
          height={64}
          layout="fixed"
        />
      </div>
      <div className="flex items-center justify-center w-32 h-32 mb-4">
        <Image
          src="/loading.gif"
          alt="loading"
          width={64}
          height={64}
          layout="fixed"
        />
      </div>
    </div>
  );
}
