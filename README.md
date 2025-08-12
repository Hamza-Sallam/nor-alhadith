# نور الحديث (Noor-Alhadith)

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## Overview

**نور الحديث** (Noor-Alhadith) is an AI-powered web application designed to provide authentic Hadith knowledge and Islamic teachings. The application serves as an intelligent assistant that helps users learn about authentic Hadiths, Islamic guidance, and the Sunnah through an interactive chat interface.

## Features

- 🤖 **AI Chat Interface**: Interactive conversation with an AI assistant specialized in Islamic knowledge
- 📚 **Authentic Hadith Knowledge**: Access to verified and authentic Hadith collections
- 🎨 **Beautiful UI/UX**: Modern, responsive design with Islamic aesthetic elements
- 🌙 **Theme Support**: Light and dark theme options for comfortable reading
- 📱 **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- 🔍 **Real-time Search**: Quick access to Islamic teachings and guidance

## Technology Stack

- **Frontend Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.1.9
- **Language**: TypeScript 5
- **UI Components**: Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Hamza-Sallam/nor-alhadith.git
cd nor-alhadith
```

2. Install dependencies:
```bash
pnpm install

```

3. Run the development server:
```bash
pnpm dev

```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
nor-alhadith/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── chat-interface.tsx # Main chat component
│   ├── chat-message.tsx   # Individual message component
│   ├── theme-provider.tsx # Theme context provider
│   ├── typing-indicator.tsx # Chat typing animation
│   └── ui/                # Reusable UI components
├── lib/                    # Utility functions
├── public/                 # Static assets
└── styles/                 # Additional stylesheets
```

## Contributing

We welcome contributions to improve نور الحديث! Please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design across devices
- Test thoroughly before submitting PRs
- Follow the existing code style and structure

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need support:

- Open an issue on GitHub
- Check the documentation
- Reach out to the maintainers

## Acknowledgments

- Built with Next.js and React
- UI components powered by Radix UI
- Styling with Tailwind CSS
- Icons from Lucide React

---

**نور الحديث** - Illuminating the path of authentic Islamic knowledge through technology.
