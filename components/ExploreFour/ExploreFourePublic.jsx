"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import w11 from "@/public/assests/w11.png";
import w12 from "@/public/assests/w12.png";
import w13 from "@/public/assests/w13.gif";
import w14 from "@/public/assests/w14.gif";
import w15 from "@/public/assests/w15.gif";
import bgImage from "@/public/assests/watchBg.png";

const ExploreFourePublic = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, []);

  const images = [w11, w12, w13, w14, w15];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="relative flex items-center justify-center bg-black h-screen">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Image src={bgImage} alt="Background" className="w-[400px] h-[600px]" />
      </div>
      <div className="relative z-0" style={{ width: "400px", height: "550px" }}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          >
            <Image
              src={image}
              alt={`image-${index}`}
              className="rounded-full w-[340px] h-[340px] ml-7 mt-[100px]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExploreFourePublic;
