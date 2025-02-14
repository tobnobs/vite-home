import { Instance, Instances } from "@react-three/drei";
import useAnimation from "./useAnimation";

const circleCount = 50;

const Cicle = () => {
  const { meshRef, color } = useAnimation();

  return (
    <Instance ref={meshRef} color={color} />
  );
}

const Circles = () => {
  return (
    <Instances limit={circleCount} range={circleCount}>
      <circleGeometry args={[2, 30]} />
      <meshBasicMaterial color="#f0f0f0" />
      {Array.from({ length: circleCount }).map((_, index) => (
        <Cicle key={index} />
      ))}
    </Instances>
  );
};

export default Circles;
