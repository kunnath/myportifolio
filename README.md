# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. This portfolio showcases professional experience, projects, and skills with beautiful animations and a responsive design.

## 🚀 Features

- **Modern Design**: Sleek, professional interface with smooth animations
- **Responsive Layout**: Works perfectly on all device sizes
- **Dynamic Sections**: 
  - Hero section with profile
  - Project Portfolio
  - Automation Solutions
  - Skills & Experience
  - Contact Information
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Animations**: Smooth transitions and effects using Framer Motion
- **Styling**: Tailwind CSS for modern, responsive design

## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd Myportifolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deploying to Vercel

### Method 1: Direct from GitHub

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Sign up or login with your GitHub account
4. Click "Import Project"
5. Select "Import Git Repository"
6. Choose your repository
7. Vercel will automatically detect Next.js and configure the build settings
8. Click "Deploy"

### Method 2: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## 🔧 Environment Variables

No environment variables are required for basic deployment. Add any environment variables in your Vercel project settings if needed for future integrations.

## 📱 Customization

1. Update personal information:
   - Edit `src/components/Hero.tsx` for the main header section
   - Modify `src/components/Projects.tsx` for project details
   - Update `src/components/Skills.tsx` for skills and experience
   - Adjust `src/components/Contact.tsx` for contact information

2. Customize styling:
   - Modify `tailwind.config.js` for theme customization
   - Edit `src/app/globals.css` for global styles

3. Add new components:
   - Create new components in `src/components/`
   - Import and add them to `src/app/page.tsx`

## ⭐ Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For support, please open an issue in the repository or contact me through the portfolio's contact form.
