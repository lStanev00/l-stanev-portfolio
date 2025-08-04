import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"
import { Vector3 } from "three"

type TravelingGeoProps = {
    position: Vector3
    speed: number
}

function TravelingGeo({ position, speed }: TravelingGeoProps) {
    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.z += speed
            if (meshRef.current.position.z > 10) {
                meshRef.current.position.z = -40
            }
        }
    })

    return (<group ref={meshRef} position={position} >
    <mesh>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial
            color={"#94a3b8"}
            // transparent
            opacity={0.2}
            emissive={"#cbd5e1"}
            emissiveIntensity={0.4}
        />

    </mesh>
    
    
    </group>)
}


function TripGroup() {
    const items = useMemo(() => {
        const aspectRatio = window.innerWidth / window.innerHeight
        const rangeX = aspectRatio * 20
        const rangeY = 20

        return new Array(30).fill(null).map(() => ({
            position: new THREE.Vector3(
                THREE.MathUtils.randFloatSpread(rangeX * 2),
                THREE.MathUtils.randFloatSpread(rangeY * 2),
                -Math.random() * 50 - 5
            ),
            speed: Math.random() * 0.05 + 0.005
        }))
    }, [])

    return (
        <>
            {items.map((item, idx) => (
                <TravelingGeo key={idx} position={item.position} speed={item.speed} />
            ))}
        </>
    )
}

export default function BackgroundTrip() {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "none",
            backgroundColor: "rgba(15, 23, 42, 0.05)", // Tailwind slate-900 at 5% opacity
            backdropFilter: "blur(2px)"
        }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <TripGroup />
                <ambientLight intensity={0.6} />

            </Canvas>
        </div>
    )
}
