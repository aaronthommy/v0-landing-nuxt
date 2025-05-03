# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview built site

## Code Style Guidelines
- **Framework**: Vue 3 with Nuxt.js, using Composition API (`<script setup>`)
- **Formatting**: 2-space indentation, semicolons, camelCase for variables/functions
- **Components**: Follow Vue SFC pattern, keep components reusable
- **Styling**: Use TailwindCSS utilities, scoped styles where needed
- **State**: Use Pinia stores (in stores/ directory)
- **Internationalization**: Use i18n plugin with locale files in locales/
- **Dark Mode**: Apply via class-based approach through themeStore
- **Comments**: Both English and German comments are acceptable
- **Imports**: Group by type (Vue, components, utilities, styles)
- **Error Handling**: Use try/catch blocks with user-friendly messages