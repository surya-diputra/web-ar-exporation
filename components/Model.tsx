import "@google/model-viewer";

const Model = () => (
  <div>
    {/* @ts-ignore  */}
    <model-viewer
      src="/models/ar.usdz"
      ios-src="/models/ar.usdz"
      alt="A 3D model of an astronaut"
      poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
    />
  </div>
);

export default Model;
