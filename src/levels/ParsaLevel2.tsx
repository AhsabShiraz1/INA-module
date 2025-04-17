import { Environment } from "@react-three/drei"
import { Root, Container } from "@react-three/uikit"
import { LevelProps } from '../interfaces'
import Model from '../Model'
import { useEffect } from "react"
import { Button } from "../components/apfel/button"

import { HomeIcon } from "@react-three/uikit-lucide"


export default function ParsaLevel2({ setNotification, setCurrentLevel }: LevelProps) {


  useEffect(() => {
    setNotification("Click on the video to play \n Please move around and view the slides and read the instructions on your right carefully")
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
        url="/assets_2/_1_transmission_lubrication_diagram.png.glb"
        position={[1.5, 5, -5]}
        scale={0.1}
        rotation={[0, 0, 0]}
      />
      <Environment
        files="/assets_2/urban.hdr"
        background
        ground={{
          height: 10,
          radius: 100,
          scale: 230
        }}
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