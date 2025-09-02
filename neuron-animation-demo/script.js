// Neuron Animation Control Script
document.addEventListener('DOMContentLoaded', function() {
    const neuralNetwork = document.querySelector('.neural-network');
    const toggleBtn = document.getElementById('toggleAnimation');
    const colorBtn = document.getElementById('changeColor');
    
    let isAnimationRunning = true;
    let currentColorVariant = 0;
    
    // Toggle Animation Function
    function toggleAnimation() {
        if (isAnimationRunning) {
            neuralNetwork.classList.add('animation-paused');
            toggleBtn.textContent = 'Start Animation';
            isAnimationRunning = false;
        } else {
            neuralNetwork.classList.remove('animation-paused');
            toggleBtn.textContent = 'Pause Animation';
            isAnimationRunning = true;
        }
    }
    
    // Change Neuron Colors
    function changeNeuronColor() {
        // Remove existing color variants
        neuralNetwork.classList.remove('color-variant-1', 'color-variant-2', 'color-variant-3');
        
        currentColorVariant = (currentColorVariant + 1) % 4;
        
        if (currentColorVariant > 0) {
            neuralNetwork.classList.add(`color-variant-${currentColorVariant}`);
        }
        
        // Update button text
        const colors = ['Default (Cyan)', 'Red Variant', 'Teal Variant', 'Blue Variant'];
        colorBtn.textContent = `Color: ${colors[currentColorVariant]}`;
    }
    
    // Event Listeners
    toggleBtn.addEventListener('click', toggleAnimation);
    colorBtn.addEventListener('click', changeNeuronColor);
    
    // Enhanced Neuron Effects
    function addEnhancedEffects() {
        const neurons = document.querySelectorAll('.neuron');
        
        neurons.forEach((neuron, index) => {
            // Add click effect
            neuron.addEventListener('click', function() {
                this.style.transform = 'scale(2)';
                this.style.boxShadow = '0 0 30px currentColor, 0 0 50px currentColor';
                
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                }, 500);
            });
            
            // Add hover effect
            neuron.addEventListener('mouseenter', function() {
                this.style.animationDuration = '0.5s';
            });
            
            neuron.addEventListener('mouseleave', function() {
                this.style.animationDuration = '2s';
            });
        });
    }
    
    // Dynamic Connection Creation
    function createDynamicConnection() {
        const neuralNetwork = document.querySelector('.neural-network');
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        
        // Random positioning
        const randomTop = Math.random() * 60 + 15;
        const randomLeft = Math.random() * 120 + 30;
        const randomWidth = Math.random() * 40 + 20;
        const randomRotation = Math.random() * 60 - 30;
        
        connection.style.top = randomTop + 'px';
        connection.style.left = randomLeft + 'px';
        connection.style.width = randomWidth + 'px';
        connection.style.transform = `rotate(${randomRotation}deg)`;
        connection.style.animationDelay = Math.random() * 2 + 's';
        
        neuralNetwork.appendChild(connection);
        
        // Remove after animation
        setTimeout(() => {
            if (connection.parentNode) {
                connection.remove();
            }
        }, 6000);
    }
    
    // Initialize enhanced effects
    addEnhancedEffects();
    
    // Create dynamic connections periodically
    setInterval(createDynamicConnection, 3000);
    
    // Keyboard Controls
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case ' ': // Spacebar
                e.preventDefault();
                toggleAnimation();
                break;
            case 'c':
            case 'C':
                changeNeuronColor();
                break;
            case 'r':
            case 'R':
                // Reset animation
                location.reload();
                break;
        }
    });
    
    // Mouse interaction effects
    document.addEventListener('mousemove', function(e) {
        const neurons = document.querySelectorAll('.neuron');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        neurons.forEach(neuron => {
            const rect = neuron.getBoundingClientRect();
            const neuronX = rect.left + rect.width / 2;
            const neuronY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(mouseX - neuronX, 2) + Math.pow(mouseY - neuronY, 2)
            );
            
            // If mouse is close to neuron, speed up animation
            if (distance < 100) {
                neuron.style.animationDuration = '0.8s';
            } else {
                neuron.style.animationDuration = '2s';
            }
        });
    });
    
    // Console information
    console.log('🧠 Neuron Animation Demo Loaded!');
    console.log('Controls:');
    console.log('- Spacebar: Toggle animation');
    console.log('- C: Change colors');
    console.log('- R: Reset');
    console.log('- Click neurons for burst effect');
    console.log('- Move mouse near neurons for speed boost');
});

// Neural Activity Simulator
class NeuralActivitySimulator {
    constructor() {
        this.neurons = document.querySelectorAll('.neuron');
        this.connections = document.querySelectorAll('.neural-connection');
        this.isActive = true;
    }
    
    simulateBrainWave() {
        if (!this.isActive) return;
        
        // Create a wave effect across neurons
        this.neurons.forEach((neuron, index) => {
            setTimeout(() => {
                neuron.style.animation = 'none';
                neuron.offsetHeight; // Trigger reflow
                neuron.style.animation = 'neuronPulse 0.5s ease-in-out';
            }, index * 200);
        });
        
        // Reset after wave
        setTimeout(() => {
            this.neurons.forEach(neuron => {
                neuron.style.animation = 'neuronPulse 2s infinite ease-in-out';
            });
        }, this.neurons.length * 200 + 500);
    }
    
    startBrainWaves() {
        // Simulate brain waves every 10 seconds
        setInterval(() => this.simulateBrainWave(), 10000);
    }
}

// Initialize neural activity simulator
const simulator = new NeuralActivitySimulator();
simulator.startBrainWaves();
