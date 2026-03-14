# Lobna Adel - Professional Portfolio

A modern, responsive, and professional portfolio website built with **React 19**, **Tailwind CSS 4**, and **TypeScript**. Showcasing backend development expertise, projects, and professional achievements.

## 🎯 Features

- **Modern Design**: Professional UI with gradient effects and smooth animations
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Fast Performance**: Optimized with Tailwind CSS and React best practices
- **Professional Sections**:
  - Hero section with profile image
  - About Me with professional summary
  - Technical Skills with categorized expertise
  - Featured Projects with descriptions and tech stack
  - Achievements and certifications
  - Services offered
  - Contact information with social links

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS 4 with custom animations
- **Language**: TypeScript
- **Icons**: Lucide React
- **Routing**: Wouter
- **UI Components**: shadcn/ui
- **Build Tool**: Vite

## 📋 Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # Main portfolio page
│   │   └── NotFound.tsx      # 404 page
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   ├── contexts/
│   │   └── ThemeContext.tsx  # Theme management
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles & animations
├── public/
│   ├── favicon.ico
│   └── robots.txt
└── index.html

server/
└── index.ts                  # Express server (static only)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LobnaAdel-star/lobnaadel-portfolio.git
cd lobnaadel-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📦 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

## 🎨 Design Highlights

### Typography
- **Headings**: Playfair Display (serif) - elegant and professional
- **Body**: Poppins (sans-serif) - clean and readable

### Color Scheme
- **Primary**: Deep Blue (`oklch(0.623 0.214 259.815)`)
- **Accent**: Purple gradient (`oklch(0.577 0.245 27.325)`)
- **Background**: Light (`oklch(0.985 0.001 286.375)`)
- **Foreground**: Dark Gray (`oklch(0.235 0.015 65)`)

### Animations
- Fade In Up/Down
- Slide In Left/Right
- Pulse Glow effects
- Smooth scroll behavior
- Hover transitions

## 📱 Sections

### Hero Section
Professional introduction with profile image, headline, and call-to-action buttons.

### About Me
Comprehensive background about professional experience and expertise in backend development.

### Skills
Organized into four categories:
- Backend Languages (PHP, JavaScript, SQL)
- Frameworks & Tools (Laravel, Git, GitHub, APIs)
- Databases (MySQL, SQL, Database Design)
- Soft Skills (Leadership, Problem Solving, Communication)

### Projects
Four featured projects with:
- Project title and description
- Technology stack
- Key highlights
- Links to LinkedIn posts

### Achievements
Professional milestones and certifications:
- Best Freelancer of the Month (Upwork, 2024)
- 5+ Projects with 5-star ratings
- Laravel Certified Developer (2023)
- 3+ Years Backend Development Experience

### Services
Core services offered:
- Custom Web Development with PHP/Laravel
- Database Design & Optimization
- API Development & Integration
- Website Maintenance & Deployment

### Contact
Multiple ways to get in touch:
- Email: lobnaadle652@gmail.com
- Phone: +20 128 970 2406
- Location: Beni Suef, Egypt
- LinkedIn Profile Link

## 🌐 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Option 3: GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Run: `pnpm build`
3. Deploy the `dist` folder to GitHub Pages

## 🔧 Customization

### Update Personal Information
Edit `client/src/pages/Home.tsx`:
- Change name, title, and description
- Update project details
- Modify contact information
- Add/remove skills and achievements

### Change Colors
Edit `client/src/index.css`:
- Update CSS variables in `:root` section
- Modify gradient colors
- Adjust theme colors

### Update Images
Replace image URLs in `Home.tsx`:
- Hero profile image
- Project thumbnails
- Background images

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Lobna Adel**
- Email: lobnaadle652@gmail.com
- Phone: +20 128 970 2406
- LinkedIn: [View Profile](https://www.linkedin.com/in/lobna-adle-ab737025a)
- Location: Beni Suef, Egypt

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

For any questions or inquiries, please reach out through:
- Email: lobnaadle652@gmail.com
- LinkedIn: [Lobna Adel](https://www.linkedin.com/in/lobna-adle-ab737025a)

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies**
