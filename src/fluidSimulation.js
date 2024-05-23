import Fluid from 'webgl-fluid'; // Import the library

export const initializeFluidSimulation = (canvas) => {
    const config = {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1.25,
        VELOCITY_DISSIPATION: 0.2,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: 0.25,
        SHADING: true,
        COLORFUL: true,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: false,
        BLOOM: false,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: false,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.0,
    };

    const fluidSimulation = new Fluid(canvas, config);

    return fluidSimulation;
};
