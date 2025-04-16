import { Environment } from "@react-three/drei";
// import { Root, Text, Container } from "@react-three/uikit";
import { LevelProps } from '../interfaces';
import Model from '../Model';
import { Card } from '../components/apfel/card'
import Box from '../Box'

import { useEffect } from "react";
import { Root, Text} from "@react-three/uikit"




export default function ParsaLevel({ setCurrentLevel, setNotification }: LevelProps) {
  // const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Welcome to P.E.K.B Module \n Click on the video to play and pause");
  }, [setNotification]);

  const boxData = [
    // { position: [-5.3, 1.8, -1], level: 1, label: 'Precheck', opacity: 1 },
    { position: [-7, 4.5, -4], level: 8, label: 'Desert', opacity: 1 },
    { position: [-7, 2.8, -4], level: 9, label: 'Urban', opacity: 1 },
    { position: [-7, 1.1, -4], level: 10, label: 'Mountain/Valley', opacity: 1 },
    // { position: [-2.5, 1.8, -10], level: 44, label: 'Bunkering', opacity: 1 },
    // { position: [-6.8, 1.8, -1], level: 53, label: 'ACH', opacity: 1 },

  ];




  return (
    <>
      {boxData.map((box, index) => (
        <group key={index}>
          <Box position={[box.position[0], box.position[1], box.position[2]]} setCurrentLevel={setCurrentLevel} level={box.level} opacity={box.opacity} />
          <group position={[box.position[0], box.position[1] + 0.6, box.position[2]]}>
            <Root depthTest={false} sizeX={2.5} sizeY={0.5} flexDirection="row" justifyContent="center" alignItems="center">
              <Card paddingX={14} paddingY={2} borderWidth={2}>
                <Text fontWeight="bold" fontSize={25} letterSpacing={0}>
                  {box.label}
                </Text>
              </Card>
            </Root>
          </group>
        </group>
      ))}
   
      <Environment
        files="/assets_2/autumn_field_puresky_2k.hdr"
        background
        ground={{
          height: 20,
          radius: 100,
          scale: 230
        }}
      />
      <Model
        url="/assets_2/Tank-new.glb"
        position={[1.5, -5, -8]}
        scale={2}
        rotation={[0, -Math.PI/5, 0]}
      />
    </>
  );
}
