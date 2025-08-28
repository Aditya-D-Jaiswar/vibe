# 🚀 Vibe - AI-Powered Website Builder

A complete AI-powered SaaS website builder foundation built with modern technologies and best practices. This is a Lovable-style AI app builder with cutting-edge tech stack.

![Homepage](https://github.com/user-attachments/assets/1e5c8f2e-11fb-4670-a1ad-fc0c7d6564b8)

## ✨ Features

- **Modern UI**: Beautiful gradient homepage with responsive design
- **AI-Powered Interface**: Interactive demo page with AI assistant chat
- **Full-Stack TypeScript**: End-to-end type safety with tRPC
- **Database Ready**: Prisma ORM with PostgreSQL (Neon) integration
- **Component Library**: shadcn/ui components with Tailwind CSS
- **Production Ready**: Optimized build process and deployment ready

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icons

### Backend
- **tRPC** - End-to-end typesafe APIs
- **Prisma** - Next-generation ORM
- **PostgreSQL** - Robust database (Neon)
- **Zod** - TypeScript-first schema validation

### Development
- **TypeScript** - Static type checking
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
vibe/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── demo/
│   │   │   └── page.tsx       # Demo page
│   │   └── api/
│   │       └── trpc/
│   │           └── [trpc]/
│   │               └── route.ts # tRPC API routes
│   ├── components/
│   │   └── ui/                 # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   ├── db.ts              # Database client
│   │   └── trpc.ts            # tRPC client
│   └── server/
│       ├── api/
│       │   ├── routers/        # tRPC routers
│       │   │   ├── user.ts
│       │   │   └── project.ts
│       │   ├── root.ts        # Root router
│       │   └── trpc.ts        # tRPC server config
│       └── db.ts              # Database connection
├── prisma/
│   └── schema.prisma          # Database schema
└── ...config files
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vibe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database URL and other secrets
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The application includes three main models:

- **User**: User accounts with projects
- **Project**: Website projects created by users  
- **Message**: Chat messages within projects

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  projects  Project[]
}

model Project {
  id          String   @id @default(cuid())
  name        String
  description String?
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  messages    Message[]
}

model Message {
  id        String   @id @default(cuid())
  content   String
  role      String
  projectId String
  project   Project  @relation(fields: [projectId], references: [id])
}
```

## 🎨 Pages

### Homepage
![Homepage](https://github.com/user-attachments/assets/1e5c8f2e-11fb-4670-a1ad-fc0c7d6564b8)

Beautiful gradient homepage featuring:
- Hero section with compelling messaging
- Feature showcase with icons
- Call-to-action sections
- Responsive navigation

### Demo Page  
![Demo Page](https://github.com/user-attachments/assets/9058f5e5-2d57-4e02-9a58-7f4291e124b2)

Interactive demo interface including:
- AI website builder input form
- Project details configuration
- Live preview panel
- AI assistant chat interface

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:generate` - Generate Prisma client

## 📝 Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Database
DATABASE_URL="your-postgresql-connection-string"

# Authentication (optional)
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## 🚢 Deployment

The application is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway** 
- **Digital Ocean App Platform**

Make sure to:
1. Set up environment variables in your deployment platform
2. Run database migrations: `npx prisma migrate deploy`
3. Configure your domain and SSL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Database powered by [Neon](https://neon.tech/)

---

**Ready to build amazing websites with AI? Start with Vibe! 🚀**
