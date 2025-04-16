// import { Container, Root, Text } from "@react-three/uikit"
import { LevelProps } from '../interfaces'
import { useEffect } from "react"
import Model from "../Model"
import { Container, Root } from "@react-three/uikit"
import { Button } from "../components/apfel/button"
import { HomeIcon } from "@react-three/uikit-lucide"

import { Environment } from "@react-three/drei";
// import { Button } from '../components/apfel/button';
// import { Volume2 } from "@react-three/uikit-lucide"
// import * as THREE from "three";
import VideoPlayer from '../VideoPlayer';

export default function ParsaLevel3({ setNotification, setCurrentLevel }: LevelProps) {
  // const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Please wear the PPE Kit before the tour of the facility and read the instructions carefully")
  }, [])

 

  return (
    <>
      <Model
        url="/assets_2/ina_tank_dt_v2_m.glb"
        position={[1.5, 1.8, -1]}
        scale={1}
        rotation={[0, 0, 0]}
      />
      <Model
        url="/assets_2/_1_fuel_system_mountain_diagram.glb"
        position={[4, 3, -8]}
        scale={0.1}
        rotation={[0, 0, 0]}
      />
      <Environment
        files="/assets_2/klippad_sunrise_2_2k.hdr"
        background
        ground={{
          height: 20,
          radius: 100,
          scale: 230
        }}
      />
      <VideoPlayer scale={[0.6, 0.48, 1]} src="/assets_2/fuel_system_sop_mountain.mp4" position={[-8, 2.5, -2]}
        rotation={[0, Math.PI / 4, 0]}></VideoPlayer>
      <group position={[-2, 1.7, -3]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={() => setCurrentLevel(1)}>
              <HomeIcon width={55} height={55} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
    </>
  )

}