"use client"; // Ensures this component runs only on the client side

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false }); // Prevents SSR issues

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  return <Lottie animationData={animationPath} loop autoplay style={{ width }} />;
};

export default AnimationLottie;
