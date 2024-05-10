import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.top = e.clientY + "px";
      cursorRef.current.style.left = e.clientX + "px";
    }

    if (borderRef.current) {
      borderRef.current.animate(
        {
          top: `${e.clientY}px`,
          left: `${e.clientX}px`,
        },
        {
          duration: 500,
          fill: "forwards",
        },
      );
    }
  };

  const handleClickdown = () => {
    if (borderRef.current) {
      borderRef.current.style.transform = "scale(0) translate(-50%,-50%)";
    }
  };

  const handleClickup = () => {
    if (borderRef.current) {
      borderRef.current.style.transform = "scale(1) translate(-50%,-50%)";
    }
  };

  const handleMouseEnter = () => {
    if (cursorRef.current && borderRef.current) {
      cursorRef.current.style.transform = "scale(5) translate(-10%,-10%)";
      borderRef.current.style.transform = "scale(0) translate(-50%,-50%)";
    }
  };
  const handleMouseLeave = () => {
    if (cursorRef.current && borderRef.current) {
      cursorRef.current.style.transform = "scale(1) translate(-50%,-50%)";
      borderRef.current.style.transform = "scale(1) translate(-50%,-50%)";
    }
  };
  const handleHide = () => {
    if (cursorRef.current && borderRef.current) {
      cursorRef.current.style.display = "none";
      borderRef.current.style.display = "none";
    }
  };
  const handleShow = () => {
    if (cursorRef.current && borderRef.current) {
      cursorRef.current.style.display = "block";
      borderRef.current.style.display = "block";
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mousedown", handleClickdown);
    document.addEventListener("mouseup", handleClickup);
    document.querySelectorAll(".cursor-hover").forEach((elem) => {
      elem.addEventListener("mouseenter", handleMouseEnter);
    });
    document.querySelectorAll(".cursor-hover").forEach((elem) => {
      elem.addEventListener("mouseleave", handleMouseLeave);
    });
    document.querySelectorAll(".cursor-hide").forEach((elem) => {
      elem.addEventListener("mouseenter", handleHide);
    });
    document.querySelectorAll(".cursor-hide").forEach((elem) => {
      elem.addEventListener("mouseleave", handleShow);
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mousedown", handleClickdown);
      document.removeEventListener("mouseup", handleClickup);
      document.querySelectorAll(".cursor-hover").forEach((elem) => {
        elem.removeEventListener("mouseenter", handleMouseEnter);
      });
      document.querySelectorAll(".cursor-hover").forEach((elem) => {
        elem.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="pointer-events-none hidden md:block">
      <div
        id="cursor"
        className="mix-blend-difference bg-white h-2 w-2 rounded-full fixed -translate-x-1/2 -translate-y-1/2 transition duration-300"
        ref={cursorRef}
      ></div>
      <div
        className="mix-blend-difference border-2 border-white w-10 h-10 rounded-full fixed -translate-x-1/2 -translate-y-1/2 transition duration-300"
        ref={borderRef}
        style={{
          transformOrigin: "0% 0%",
        }}
      ></div>
    </div>
  );
};
export default Cursor;
