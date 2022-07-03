import "@google/model-viewer";

const Model = () => (
  <div id="card">
    {/* @ts-ignore  */}
    <model-viewer
      src="/models/ar.usdz"
      ios-src="/models/ar.usdz"
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
    />
  </div>
);

export default Model;
