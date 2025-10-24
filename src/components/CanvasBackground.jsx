import useCanvasBackground from '../hooks/useCanvasBackground';
const CanvasBackground = ({ canvasRef }) => {
  useCanvasBackground(canvasRef);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};
export default CanvasBackground
