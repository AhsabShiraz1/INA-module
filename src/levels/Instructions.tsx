import { useEffect, useRef } from "react";
import { Root, Container, Text } from "@react-three/uikit";
import { LevelProps } from "../interfaces";
import Model from "../Model";
import { Environment, PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"
import { Image } from "@react-three/drei";



export default function Instructions({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);
  useEffect(() => {
    setNotification("These are VR instructions for the Quest 3");
  }, [setNotification]);

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      {/* <Model
        url="/assets/VR-instructions-space-1.glb"
        position={[0, 0, -2.5]}
        scale={[2, 2, 2]}
        rotation={[0, Math.PI, 0]}
      /> */}
      {/* <Model
        url="/assets/quest-3-model.glb"
        position={[1.5, 1.8, -1]}
        scale={0.6}
        rotation={[0, 0, 0]}
      /> */}
      <Model
        url="/assets_2/ina_tank_dt_v2_m.glb"
        position={[1.5, 1.8, -1]}
        scale={0.6}
        rotation={[0, 0, 0]}
      />
      <Environment
        files="/assets_2/autumn_field_puresky_2k.hdr"
        background
        ground={{
          height: 20,
          radius: 100,
          scale: 230
        }}
      />
     <Image
        url="/assets_2/logo.png"
        position={[4.8, 2.5, -1]}
        toneMapped={false}
        scale={[4, 3.9]}
        rotation={[0, -Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
      <group position={[0, 4, -3]} rotation={[0, 0, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="flex-start">
              <Text fontSize={12} fontWeight="bold">
                Predictive maintenance through Digital Twins
              </Text>
              <Text fontSize={10} fontWeight="medium">
                1. The application is a digital twin of the T90 tank.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                2. The application includes a 3D model of a vehicle.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                3.  The vehicle will have 3 live data points pertinent to the operation of the vechile.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                4. Based on the threshold set, the application will trigger an SOP for error resolution.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                5. Additionally,we have VR enabled to provide an immersive experience.
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets_2/Instructions-Voice-over.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 3.2, -3]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
    </>
  );
}
