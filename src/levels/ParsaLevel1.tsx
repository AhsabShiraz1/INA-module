import { Environment } from "@react-three/drei"
import { LevelProps } from '../interfaces'
// import { Root, Text, Container } from "@react-three/uikit";
// import Model from '../Model'
import {  useEffect  } from "react"
// import { PositionalAudio,Image } from "@react-three/drei";
// import * as THREE from "three";
// import { Button } from '../components/apfel/button';
// import { Volume2 } from "@react-three/uikit-lucide"
import Model from "../Model";
import VideoPlayer from '../VideoPlayer';
import { Container, Root } from "@react-three/uikit"
import { Button } from "../components/apfel/button"
import { HomeIcon } from "@react-three/uikit-lucide"

export default function ParsaLevel1({ setNotification, setCurrentLevel }: LevelProps) {
  // const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Welcome to P.E.K.B Security Block, \n Collect your gatepass here and enter security office with valid ID proof ")
  }, [])

  // const handleAudio = () => {
  //   if (soundRef.current) {
  //     soundRef.current.play();
  //   }
  // }

  return (
    <>
      <Model
        url="/assets_2/ina_tank_dt_v2_m.glb"
        position={[1.5, 1.8, -1]}
        scale={1}
        rotation={[0, 0, 0]}
      />
      <Model
        url="/assets_2/_1_engine_temperature_image.png.glb"
        position={[4, 3, -8]}
        scale={0.1}
        rotation={[0, 0, 0]}
      />
      <Environment
        files="/assets_2/goegap_2k.hdr"
        background
        ground={{
          height: 20,
          radius: 100,
          scale: 230
        }}
      />
        <VideoPlayer 
          scale={[0.6, 0.48, 1]} 
          src="/assets_2/Engine_Temperature_video_SOP.mp4" 
          position={[-8, 2.5, -2]} 
          rotation={[0, Math.PI / 4, 0]}
        />
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
