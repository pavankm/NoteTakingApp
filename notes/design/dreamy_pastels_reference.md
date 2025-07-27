# ✨ Dreamy Pastels Design System

A playful yet minimal design language that balances whimsy with focus, creating interfaces that feel like drawing on clouds.

## 🎨 Core Color Palette

### Light Mode
- **Primary Purple**: `#7C6FD4` (Soft Purple)
- **Coral Pink**: `#FF9B9B` 
- **Sky Blue**: `#87CEEB`
- **Mint Green**: `#98D8C8`
- **Soft Yellow**: `#F7DC6F`
- **Plum**: `#DDA0DD`

### Dark Mode (colors brightened 15-20%)
- **Primary Purple**: `#9B8CE8`
- **Coral Pink**: `#FFB3B3`
- **Sky Blue**: `#A3D8F0`
- **Mint Green**: `#A8E6D7`
- **Soft Yellow**: `#F9E79F`
- **Plum**: `#E6B3E6`

### Background Strategy
- **Light**: Gradient from `#FAF7FF` to `#F0F8FF`
- **Dark**: Gradient from `#1A1B2E` to `#16213E`
- **Text Light**: `#5A4FCF`
- **Text Dark**: `#B8B5FF`

## 🏗️ Design Elements

### Border Radius
- Small elements: `1.5rem`
- Cards/sections: `2rem`
- Hero elements: `3rem`

### Glass Morphism
```css
background: rgba(255, 255, 255, 0.9); /* Light mode */
background: rgba(30, 32, 52, 0.6);    /* Dark mode */
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.3); /* Light */
border: 1px solid rgba(184, 181, 255, 0.1); /* Dark */
```

### Spacing Scale
- Small: `1rem`
- Medium: `1.5rem` 
- Large: `2rem`
- XL: `3rem`
- Hero: `4rem`

### Typography
- **Font**: Inter (fallback to system fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular (400) with 1.6 line-height
- **Hierarchy**: 3rem → 2rem → 1.3rem → 1rem → 0.8rem

## ✨ Interactions

### Hover Effects
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Scale */
transform: scale(1.05);

/* Lift */
transform: translateY(-5px);
box-shadow: 0 10px 25px rgba(color, 0.3);

/* Glow */
box-shadow: 0 0 25px rgba(color, 0.5);
```

### Button Styles
- **Primary**: Use main purple with white text
- **Secondary**: Use coral pink with white text  
- **Accent**: Use mint green with white text
- **Ghost**: Transparent background with colored border and text

## 🎯 Core Principles

1. **Dreamy & Soft**: Pastel colors and generous rounded corners
2. **Playfully Minimal**: Whimsical touches with clean layouts
3. **Subtly Interactive**: Gentle micro-interactions (300ms transitions)
4. **Cohesively Colorful**: Each element gets its pastel identity
5. **Adaptive**: Seamless light/dark mode transitions
6. **Generous Spacing**: Ample whitespace for breathing room

## 🌙 Dark Mode Philosophy

- Deepen backgrounds to navy/midnight blue gradients
- Brighten pastels by 15-20% for visibility
- Use darker glass transparency (30-60%)
- Enhance glow effects for magical feel
- Maintain soft, ethereal quality (never harsh or neon)

## 🔄 Implementation Notes

- Always use smooth transitions (300ms)
- Layer transparency thoughtfully 
- Maintain readable contrast ratios
- Add subtle floating animations where appropriate
- Use backdrop-filter blur for depth
- Keep content-focused despite whimsical elements