# Neuron Animation Demo

## Overview
এই folder এ neuron animation এর complete demo code রয়েছে যা ninja image এর head এর উপরে brain activity simulate করে।

## Files Description

### 1. index.html
- Main HTML structure
- Neuron animation container
- Interactive controls
- Demo showcase layout

### 2. style.css
- Complete CSS animations for neurons
- Neural connection styling
- Pulse and signal effects
- Color variants
- Responsive design

### 3. script.js
- Interactive controls (play/pause, color change)
- Enhanced mouse effects
- Keyboard shortcuts
- Dynamic connection creation
- Neural activity simulator

## Animation Features

### Neurons (6 total)
- Pulsing glow effects
- Staggered animation delays
- Color variants (cyan, red, teal, blue)
- Interactive click effects
- Mouse proximity speedup

### Neural Connections (5 base + dynamic)
- Signal travel animation
- Golden gradient effects
- Random positioning for dynamic ones
- Rotation variations
- Timed lifecycle

### Controls
- **Spacebar**: Toggle animation
- **C**: Change neuron colors
- **R**: Reset demo
- **Mouse**: Proximity effects
- **Click neurons**: Burst effects

## Integration Notes

### Angular Integration
```typescript
// Component file
ngAfterViewInit() {
  // Add neuron logic here
}
```

### CSS Classes Used
- `.neuron-container`: Main container
- `.neural-network`: Animation wrapper
- `.neuron`: Individual neurons
- `.neural-connection`: Signal lines

### Key Animations
- `neuronPulse`: 2s pulse with glow
- `neuralSignal`: 3s signal travel
- Staggered delays for realistic effect

## Usage Instructions

1. Open `index.html` in browser
2. View neuron animation over ninja image
3. Use controls to interact
4. Study code for Angular integration

## Positioning
- Positioned over ninja's head area
- Covers sunglasses region
- Z-index layered above image
- Responsive to container size

## Performance Notes
- Uses CSS animations (hardware accelerated)
- RequestAnimationFrame for smooth playback
- Optimized glow effects
- Memory-friendly dynamic elements

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS3 animation support required
- ES6 JavaScript features used

---
*Created for Angular Portfolio Project*
*Brain Activity Simulation Effect*
