import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../Components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../Components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import Target from "../Components/Target"
import ReactLogo from "../Components/ReactLogo"
import Rings from "../Components/Rings"
import Cube from "../Components/Cube"
import HeroCamera from "../Components/HeroCamera"
import Button from "../Components/Button"

const Hero = () => {

    const isSmall = useMediaQuery({ query: '(max-width: 440px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTablet = useMediaQuery({ query: '(minWidth: 768px) and max-width: 1024px)' })
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (

    <section className="min-h-screen flex flex-col w-full relative">

        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="text-white sm:text-3xl text-2xl font-medium text-center font-generalsans">
                Hi, I am Tshex <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient">
                Building Products & Brands
            </p>
        </div>
        <div className="w-full h-full absolute inset-0">
             {/* <Leva /> */}
             <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                            // scale={0.1} 
                            position={sizes.deskPosition} 
                            rotation={[0, Math.PI, 0]}
                            scale={sizes.deskScale} 
                        />
                    </HeroCamera>
                   
                    <group>
                        <Target position={sizes.targetPosition} />
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <Cube position={sizes.cubePosition} />
                        <Rings position={sizes.ringPosition} />                        
                    </group>

                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />    
                </Suspense>
             </Canvas>
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
            <a href="#about" className="w-fit">
              <Button name="Let's work together" isBeam 
              containerClass="sm:w-fit w-full sm:min-w-96" 
            />
            </a>
        </div>

    </section>
    
  )
}

export default Hero
