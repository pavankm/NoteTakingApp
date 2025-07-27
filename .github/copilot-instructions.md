---
applyTo: "**"
---

# NoteTakingApp – Design Principles & Coding Guidelines

## Project Context

NoteTakingApp is an open source, cross-platform note-taking application inspired by the need for user freedom, transparency, and longevity in software. Born from the realization that users should not rely on proprietary software after experiencing changes in licensing models with existing note-taking apps.

The project is built with Expo, React Native, and TypeScript, targeting iOS, Android, and web platforms. The codebase is modular, with a focus on reusability, simplicity, and clean interfaces.

### Technology Stack

- **Framework**: Expo with React Native
- **Language**: TypeScript
- **Navigation**: Expo Router with file-based routing
- **Testing**: Jest with React Test Renderer
- **Storage**: AsyncStorage for persistence
- **UI**: React Native components with custom theming

## Core Principles

- **Open Source**: All code should be open, modifiable, and distributable. Prioritize transparency and community contribution.
- **Cross-Platform**: Features and UI should work consistently across iOS, Android, and web.
- **Simplicity & Elegance**: Avoid unnecessary complexity. Favor simple, composable solutions.
- **Modularity**: Write small, focused components and functions with clear interfaces.
- **Composability**: Design code to be easily connected and extended.
- **Parsimony**: Only add features or complexity when clearly justified by user needs.

## Coding Guidelines

- **File Structure**: Organize code by feature and responsibility:
  - `app/`: Main application code with layouts and file-based routing
  - `components/`: Reusable UI components (ThemedText, Collapsible, etc.)
  - `constants/`: App-wide constants (Colors, etc.)
  - `hooks/`: Custom React hooks for theming and utilities
  - `assets/`: Fonts, images, and other static resources
- **Components**: Prefer functional components and hooks. Keep components focused and reusable.
- **TypeScript**: Use strong typing. Avoid `any` unless absolutely necessary.
- **Naming**: Use clear, descriptive names for files, variables, and functions.
- **Testing**: Write tests for components and utilities. Use Jest and React Test Renderer.
- **UI Consistency**: Use shared components and constants for theming and layout.
- **Documentation**: Comment code where intent is not obvious. Update documentation as features evolve.
- **Accessibility**: Consider accessibility in UI components and navigation.
- **Cross-Platform**: Ensure features work consistently across iOS, Android, and web.

## Design Inspirations

- **Art of Unix Programming**:
  - _Rule of Modularity_: Simple parts, clean interfaces.
  - _Rule of Composition_: Programs/components should connect easily.
  - _Rule of Parsimony_: Only build what is necessary.

## Development Notes

- This is a work in progress - code, design, and implementation may evolve.
- The project emphasizes learning and continuous improvement.
- Open to community contributions and suggestions via issues and pull requests.
- Inspired by the philosophy: "Free software is a matter of liberty, not price".

## Contribution

- Be kind and constructive in code reviews and discussions.
- Follow these principles and guidelines for all code, documentation, and design contributions.
- If unsure, prefer simplicity and clarity.

---

This file guides all code generation, review, and design decisions for the project.
