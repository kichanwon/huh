import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, useTexture  } from "@react-three/drei";

const GlassBottle = () => {
  const bottleRef = useRef();
  const liquidRef = useRef();
  const labelTexture = useTexture("/img/gamuchi-removebg-preview.png");

  // 애니메이션 (천천히 회전)
  useFrame(() => {
    if (bottleRef.current) {
        bottleRef.current.rotation.x = 0; // X축 회전
        bottleRef.current.rotation.y += 0.01; // Y축 회전
        bottleRef.current.rotation.z = 0.3; // Z축 회전
    }
  });

  return (
    <group ref={bottleRef}>
      {/* 병 본체 */}
      <mesh>
        <cylinderGeometry args={[1.3, 1.3, 4, 30]} />
        <MeshTransmissionMaterial
          thickness={0.3}
          roughness={0.1}
          transmission={1}
          ior={1}
          chromaticAberration={10.01}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* 라벨 추가 (병 앞쪽에 배치) */}
      <mesh position={[0, 0, 0]}>
      <cylinderGeometry args={[1.31, 1.31, 2, 64, 1, true]} /> 
      <meshBasicMaterial 
          map={labelTexture} 
          transparent={true}
          
        />
        
        </mesh>

      {/* 병 목 부분 */}
      <mesh position={[0, 2.4, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.8, 32, true]} />
        <MeshTransmissionMaterial
          thickness={0.5}
          roughness={0.1}
          transmission={1}
          ior={1}
          chromaticAberration={10.01}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* 병 뚜껑 */}
      <mesh position={[0, 2.8, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="brown" roughness={6} metalness={0.8} />
      </mesh>


    {/* 내용물 */}
      <mesh ref={liquidRef} position={[0, -0.1, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 3.5, 32]} /> {/* 내용물 높이 조정 */}
        <meshStandardMaterial color="brown" opacity={0.8} transparent={true} />
      </mesh>

    {/* <mesh position={[0, 1, 0]}>
        <torusGeometry args={[1.2, 32, 32]} />
        <MeshTransmissionMaterial
          thickness={0.5}
          roughness={0.1}
          transmission={1}
          ior={1.5}
        />
      </mesh> */}


    </group>
  );
};

export default GlassBottle;