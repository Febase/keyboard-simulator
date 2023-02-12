import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { DirectionalLight, DirectionalLightHelper } from 'three'

export default () => {
  const frontLight = useRef<DirectionalLight>(null!)
  const backShadow = useRef<DirectionalLight>(null!)

  useHelper(frontLight, DirectionalLightHelper, 2, '#FFB2F5')
  useHelper(backShadow, DirectionalLightHelper, 2, '#990085')

  return (
    <>
      <ambientLight color="#FFFFFF" intensity={0.5} />
      <directionalLight
        ref={frontLight}
        color="#FFFFFF"
        intensity={0.5}
        position={[5, 10, 10]}
      />
      <directionalLight
        ref={backShadow}
        color="#CCCCCC"
        intensity={0.2}
        position={[-4, 3, -10]}
      />
    </>
  )
}
