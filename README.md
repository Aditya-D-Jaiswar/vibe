# Vibe - AI Website Builder

A complete AI-powered SaaS website builder foundation built with modern technology stack.

![Vibe Homepage](https://github.com/user-attachments/assets/8e53a487-b13a-4189-b921-dcd41c94cc64)

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, Tailwind CSS v4
- **Database Ready**: Prisma ORM with PostgreSQL (Neon)
- **AI Integration Ready**: Prepared for OpenAI/Anthropic APIs
- **Design System**: shadcn/ui components with beautiful gradients
- **Type Safety**: Full TypeScript implementation
- **Production Ready**: Optimized build and deployment configuration

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Database**: Prisma, PostgreSQL (Neon)
- **AI Integration**: Ready for OpenAI/Anthropic
- **Build Tools**: PostCSS, ESLint

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Aditya-D-Jaiswar/vibe.git
cd vibe

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database URL and API keys

# Generate Prisma client and push database schema
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Database
DATABASE_URL="your_postgresql_database_url_here"

# AI APIs (optional)
OPENAI_API_KEY="your_openai_api_key_here"
ANTHROPIC_API_KEY="your_anthropic_api_key_here"
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:generate` - Generate Prisma client

## 🏗️ Project Structure

```
vibe/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/
│   ├── components/
│   │   └── ui/
│   ├── lib/
│   │   ├── utils.ts
│   │   └── db.ts
│   └── server/
├── prisma/
│   └── schema.prisma
├── .env.example
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── components.json
└── next.config.mjs
```

## 📊 Database Schema

The project includes a complete database schema with:

- **Users**: User management and authentication
- **Projects**: AI website building projects
- **Messages**: Chat history for AI interactions

## 🎨 UI Components

Built with shadcn/ui including:
- Button components with variants
- Card layouts
- Responsive design system
- Custom gradients and animations

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

## 📄 License

This project is open source and available under the MIT License.
