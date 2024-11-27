import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader.jsx";
import {Suspense} from "react";
import {Island} from "../models/Island.jsx";
import {Bird} from "../models/Bird.jsx";
import {Sky} from "../models/Sky.jsx";
import {Plane} from "../models/Plane.jsx";

const Home = () => {

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.7, -43];
        let rotetion = [0, 1, 4.7, 0]
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0, 9]
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotetion];
    }
    const [isLandScale, isLandPosition, isLandRotetion] = adjustIslandForScreenSize();
    return (
        <section className='w-full h-screen relative'>
            {/*<div className='absolute  top-28 left-0 relative z-10 flex items-start justify-center'>*/}
            {/*    POPUP*/}
            {/*</div>*/}

            <Canvas
                className='w-full h-screen bg-transparent'
                camera={{near: 0.1, far: 1000}}>
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[1, 1, 1]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight
                        skyColor="b1e1ff"
                        groundColor="000"
                        intensity={1}
                    />
                    <Bird/>
                    <Sky />
                    <Island
                        position={isLandPosition}
                        scale={isLandScale}
                        rotation={isLandRotetion}
                    />
                    <Plane/>
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;