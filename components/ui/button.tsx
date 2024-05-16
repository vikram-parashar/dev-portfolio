const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-white text-black rounded-full aspect-square group relative w-32 h-32 -rotate-12 font-semibold">
      <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap">
        {children}
      </span>
      <span className="group-hover:-translate-y-1/2 group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-nowrap">
        {children}
      </span>
    </button>
  );
};
export default Button;
