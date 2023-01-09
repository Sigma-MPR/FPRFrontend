import React from "react";
import { ThreeDots } from "react-loader-spinner";
    // FallingLines, Vortex, ProgressBar, ColorRing} 

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center">
        <ThreeDots  color="#00BFFF" height={80} width={80} />
        {/* <FallingLines color="#00BFFF" height={80} width={80} /> */}
        {/* <Vortex color="#00BFFF" height={80} width={80} /> */}
        {/* <ProgressBar color="#00BFFF" height={80} width={80} /> */}
        {/* <ColorRing color="#00BFFF" height={80} width={80} /> */}
        </div>
    );
}

export default Loader;