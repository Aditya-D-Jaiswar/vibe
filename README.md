# Vibe - AI Website Builder

> **Complete AI-powered SaaS website builder foundation following the AI Vibe Coding playbook**

Vibe is a modern AI-powered website builder inspired by Lovable, built with Next.js 15, React, Tailwind CSS, and tRPC. Create stunning websites by simply describing your vision to our AI.

![Vibe Homepage](https://github.com/user-attachments/assets/98b20a32-f746-40f8-99cb-3d551050408b)
*Homepage showcasing AI-powered features*

![Vibe Demo](https://github.com/user-attachments/assets/37864a1f-c4db-4e84-ab4a-e5b215e03509)
*Interactive demo page for testing AI generation*

## 🚀 Features

- **AI-Powered Design**: Describe your website and watch AI create beautiful, responsive designs
- **Lightning Fast**: Build and deploy websites in minutes, not days
- **Infinite Customization**: Fine-tune every aspect with intuitive visual controls
- **Clean Code Export**: Export production-ready React, Vue, or HTML/CSS code
- **Smart Components**: Pre-built components that adapt automatically
- **Modern Tech Stack**: Built with the latest technologies

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library with modern hooks
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icons

### Backend
- **tRPC** - End-to-end typesafe APIs
- **Prisma** - Next-generation ORM
- **PostgreSQL** - Robust relational database (Neon)
- **Zod** - TypeScript-first schema validation

### Development
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting
- **Prettier** - Code formatting (via Tailwind)

## 📁 Project Structure

```
vibe/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css         # Global styles with Tailwind
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Homepage
│   │   ├── demo/               # Demo page
│   │   └── api/trpc/           # tRPC API routes
│   ├── components/ui/          # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── lib/                    # Utility functions
│   │   ├── utils.ts            # CN utility for classes
│   │   ├── db.ts               # Database connection
│   │   └── trpc.tsx            # tRPC client setup
│   └── server/                 # Backend logic
│       ├── api/routers/        # tRPC routers
│       └── db.ts               # Database utilities
├── prisma/
│   └── schema.prisma           # Database schema
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
└── components.json             # shadcn/ui configuration
```

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aditya-D-Jaiswar/vibe.git
   cd vibe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your database URL and other configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/vibe_db"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The project uses Prisma with PostgreSQL and includes three main models:

### User Model
- Stores user information (id, email, name)
- One-to-many relationship with projects

### Project Model  
- Represents user's website projects
- Contains project metadata (name, description)
- One-to-many relationship with messages

### Message Model
- Stores AI conversation history
- Tracks user prompts and AI responses
- Linked to specific projects

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database with initial data
```

## 🎨 UI Components

Built with **shadcn/ui** components that are:
- ✅ Fully customizable
- ✅ Accessible by default
- ✅ TypeScript-first
- ✅ Tailwind CSS styled

Available components:
- `Button` - Various styles and sizes
- `Card` - Content containers with headers/footers
- `Input` - Form input fields
- `Toast` - Notification system (ready for integration)

## 🔗 API Routes

### tRPC Endpoints

**User Routes** (`/api/trpc/user`)
- `getAll` - Fetch all users
- `getById` - Get user by ID
- `create` - Create new user
- `update` - Update user information
- `delete` - Delete user

**Project Routes** (`/api/trpc/project`)
- `getAll` - Fetch all projects
- `getById` - Get project by ID
- `getByUserId` - Get projects for specific user
- `create` - Create new project
- `update` - Update project
- `delete` - Delete project
- `addMessage` - Add message to project

## 🚀 Deployment

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (recommended: Neon)
- Vercel account (for deployment)

### Deploy to Vercel

1. **Connect your repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy with automatic builds**

The project is configured for seamless Vercel deployment with:
- Automatic builds on push
- Environment variable support
- PostgreSQL integration ready

## 🔮 Future Roadmap

- [ ] **AI Integration**: OpenAI/Anthropic API integration
- [ ] **Authentication**: NextAuth.js implementation
- [ ] **Real-time Collaboration**: WebSocket support
- [ ] **Component Library**: Expanded UI components
- [ ] **Template System**: Pre-built website templates
- [ ] **Export Functionality**: Code generation and export
- [ ] **Visual Editor**: Drag-and-drop interface
- [ ] **Multi-tenant Support**: Organization management

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [tRPC](https://trpc.io/) - TypeSafe APIs
- [Prisma](https://prisma.io/) - Next-generation ORM
- [Lovable](https://lovable.dev/) - Inspiration for the AI website builder

---

**Built with ❤️ and AI by the Vibe team**
