import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox, useSphere } from '@react-three/cannon'
import { Helmet } from 'react-helmet'

function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [ -Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref} receiveShadow >
      <planeBufferGeometry args={[20, 20] } />
      <meshBasicMaterial color="#171717" />
    </mesh>
  )
}

function Wall(props) {
  const [right] = usePlane(() => ({ rotation: [0, -Math.PI / 2, 0], position: [10, 0, 0] }))
  const [left] = usePlane(() => ({ rotation: [0, Math.PI / 2, 0], position: [-10, 0, 0] }))
  const [far] = usePlane(() => ({ rotation: [0, 0, 0], position: [0, 0, -10] }))
  return (
    <>
      <mesh ref={left} recieveShadow>
        <axesHelper args={2} />
        <planeBufferGeometry args={[20,2]} rotateY={-Math.PI / 2} translate={[10, 1, 0]} />
        <meshBasicMaterial color="green" transparent opacity={.5} />
      </mesh>
      <mesh ref={right} recieveShadow>
        <axesHelper args={2} />
        <planeBufferGeometry args={[20,2]} rotateY={Math.PI / 2} translate={[-10, 1, 0]} />
        <meshBasicMaterial color="green" transparent opacity={.5} />
      </mesh>
      <mesh ref={far} receiveShadow>
        <axesHelper args={2} />
        <planeBufferGeometry args={[20,2]} translate={[0, 1, -10]} />
        <meshBasicMaterial color="green" transparent opacity={.5} />
      </mesh>
    </>
  )
}

function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props }))
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function Ball(props) {
  const [ref] = useSphere(() => ({ mass: 1, position: [0, 10, 0], ...props }))
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <axesHelper args={2} />
      <sphereBufferGeometry args={[1, 30, 30]}/>
      <meshPhongMaterial color="tomato" transparent opacity={.8}/>
    </mesh>
  )
}

const ReactThreeFiberPlayground = () => {
  return (
    <div style={{ height: '100vh'}}>
      <Helmet>
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
      </Helmet>
      <Canvas shadowMap sRGB gl={{ alpha: false }} camera={{ position: [1, 10, 20], fov: 50, isOrthographicCamera: false }} >
        <color attach="background" args={['midnightblue']} />
        <hemisphereLight intensity={0.35} />
        {/* <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow /> */}
        <spotLight position={[0, 20, 0]} angle={1} penumbra={1} intensity={2} castShadow />
        <fog attach="fog" args={["#041830", 0, 100]}  />
        <axesHelper args={5}/>
        <gridHelper args={[20, 20]} />
        <Physics gravity={[0, -10, -1]}>
          <Ground />
          <Wall />
          {/* <Wall position={[10, 1, 0]} rotation={[ 0, -Math.PI / 2, 0]} args={[30, 1, 1]} />
          <Wall position={[-10, 1, 0]} rotation={[ 0, Math.PI / 2, 0]} args={[30, 1, 1]} />
          <Wall position={[0, 1, 10]} rotation={[ 0, 0, 0]} args={[20, 1, 1]} />
          <Wall position={[0, 1, -10]} rotation={[ 0, 0, 0]} args={[20, 1, 1]} /> */}
          <Ball scale={10} />
          <Cube position={[0, 10, -2]} />
          <Cube position={[0, 20, -2]} />
          <Cube position={[5, 20, 5]} />
        </Physics>
      </Canvas>
    </div>
  )
}

export default ReactThreeFiberPlayground
