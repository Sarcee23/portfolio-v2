import React from 'react'

const MouseGradient = ({ mousePosition }) => (
  <div 
    className="fixed inset-0 pointer-events-none z-0"
    style={{
      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
    }}
  />
);

export default MouseGradient
