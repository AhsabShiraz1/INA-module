import { useEffect} from "react";
import { Root, Container, Text } from "@react-three/uikit";
import { LevelProps } from "../interfaces";
import Model from "../Model";
import { Environment} from "@react-three/drei";
import * as THREE from "three";
// import { Button } from '../components/apfel/button';
// import { Volume2 } from "@react-three/uikit-lucide"
import { Image } from "@react-three/drei";



export default function Instructions({ setNotification }: LevelProps) {
  useEffect(() => {
    setNotification("These are VR instructions for the Quest 3");
  }, [setNotification]);

 

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
        position={[1.5, 3.8, -4]}
        scale={1.5}
        rotation={[0, Math.PI/8, 0]}
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
        url="/assets_2/mit-logo.png"
        position={[9.8, 6.5, -8]}
        toneMapped={false}
        scale={[4, 3.9]}
        rotation={[0, -Math.PI / 10, 0]}
        castShadow
        receiveShadow
        material={
          new THREE.ShaderMaterial({
            uniforms: {
              map: { value: new THREE.TextureLoader().load('/assets_2/mit-logo.png') }
            },
            vertexShader: `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform sampler2D map;
              varying vec2 vUv;
              void main() {
                vec2 center = vec2(0.5, 0.5);
                float dist = distance(vUv, center);
                if (dist > 0.5) discard;
                vec4 texel = texture2D(map, vUv);
                gl_FragColor = texel;
              }
            `,
            transparent: true
          })
        }
      />
      <group position={[-6, 6, -3]} rotation={[0, Math.PI/8, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="flex-start">
              <Text fontSize={25} fontWeight="bold">
                Predictive maintenance through Digital Twins
              </Text>
              <Text fontSize={15} fontWeight="medium">
                1. The application is a digital twin of the T90 tank.
              </Text>
              <Text fontSize={15} fontWeight="medium">
                2. The application includes a 3D model of a vehicle.
              </Text>
              <Text fontSize={15} fontWeight="medium">
                3.  The vehicle will have 3 live data points pertinent to the operation of the vechile.
              </Text>
              <Text fontSize={15} fontWeight="medium">
                4. Based on the threshold set, the application will trigger an SOP for error resolution.
              </Text>
              <Text fontSize={15} fontWeight="medium">
                5. Additionally,we have VR enabled to provide an immersive experience.
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <group position={[-9, 3, -1]} rotation={[0, Math.PI/12, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="flex-start">
              <Text fontSize={25} fontWeight="bold">
                Predictive maintenance for T-90 service tanks
              </Text>
              <Text fontSize={15} fontWeight="medium">
                Today's T-90 battle tanks have a service lifespan of 30 years
              </Text>
              <Text fontSize={15} fontWeight="medium">
                With predictive maintenance, this service lifespan can be extended by at least 10 more years.
              </Text>
              <Text fontSize={15} fontWeight="medium">
                This proof-of-concept showcases the ease of creating digital
              </Text>
              <Text fontSize={15} fontWeight="medium">
                twins for predictive maintenance of T-90 tanks in-service. The goal of this
              </Text>
              <Text fontSize={15} fontWeight="medium">
                POC is to monitor various systems for performance, predict potential faults
              </Text>
              <Text fontSize={15} fontWeight="medium">
                and guide users for corrective actions.
              </Text>
              <Text fontSize={15} fontWeight="medium">
                .........
              </Text>
              <Text fontSize={15} fontWeight="medium">
                - by Mohit K Manoj & Snehash Sinha.
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      {/* <PositionalAudio
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
      </group> */}
    </>
  );
}
