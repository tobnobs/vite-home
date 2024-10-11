import useAnimation from "./useAnimation";

const Circle = () => {
  const { meshRef, radius, color } = useAnimation();

  return (
    <mesh ref={meshRef}>
      <circleGeometry args={[radius, 30]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Circle;
