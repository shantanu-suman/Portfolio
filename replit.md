# Replit.md - Portfolio Website

## Overview

This is a full-stack portfolio website built with React and Express.js, featuring a modern dark theme design with smooth animations and responsive layout. The application serves as a personal portfolio for Shantanu Suman showcasing projects, skills, education, and leadership experience, with an integrated contact form system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage with fallback to persistent storage

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Animated landing section with gradient backgrounds
- **About**: Personal introduction with statistics grid
- **Education**: Timeline-style education history
- **Tech Stack**: Skills showcase with categorized technologies
- **Projects**: Portfolio projects with links and descriptions
- **Leadership**: Professional experience and achievements
- **Contact**: Interactive contact form with email integration

### Backend Components
- **Express Server**: RESTful API with middleware for logging and error handling
- **Route Handlers**: Contact form submission with email notifications
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Email Service**: Nodemailer integration for contact form notifications

## Data Flow

1. **Client-Side Rendering**: Vite serves the React application with hot module replacement in development
2. **API Communication**: Frontend uses React Query to manage API calls to Express backend
3. **Contact Form**: Form submissions are validated using Zod schemas and stored in database
4. **Email Notifications**: Contact form submissions trigger email notifications via Nodemailer
5. **Error Handling**: Comprehensive error handling on both client and server sides

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Framework**: Radix UI components, Tailwind CSS
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Email Service**: Nodemailer for contact form notifications
- **Validation**: Zod for schema validation
- **Development**: Vite, TypeScript, ESLint

### Third-Party Services
- **Database**: Neon Database (PostgreSQL-compatible serverless database)
- **Email**: Gmail SMTP for email notifications (configurable)
- **Hosting**: Designed for deployment on Replit with environment variable configuration

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with HMR
- **Database**: PostgreSQL connection via environment variables
- **Email**: Development email configuration with Gmail SMTP

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild compiles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command
- **Environment**: Production configuration via environment variables

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `EMAIL_USER`: Gmail account for sending notifications
- `EMAIL_PASS`: Gmail app password for SMTP authentication
- `NODE_ENV`: Environment mode (development/production)

### Database Schema
- **Users Table**: Basic user authentication structure (prepared for future use)
- **Contacts Table**: Contact form submissions with timestamp tracking
- **Migrations**: Drizzle Kit handles schema migrations and updates

The application is designed to be deployment-ready on Replit with automatic environment detection and optimized for both development and production environments.