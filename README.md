# Anshchildcare Website

A responsive pediatric and neonatal care website for Anshchildcare and Dr. Kamesh Patel, built with Next.js, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Responsive Design** – Optimized for all devices (mobile, tablet, desktop).
- **Modern UI** – Built with shadcn/ui and Tailwind CSS for a clean and accessible design.
- **Pages**:

  - **Home Page** – Showcases the clinic’s main highlights.
  - **About Page** – Provides details about the clinic and its mission.
   - **Services Page** – Lists pediatric, neonatal, vaccination, and family wellness services.
  - **Contact Page** – Includes a contact form and clinic information.

- **Navigation** – Sticky, responsive navbar for smooth navigation.
- **Footer** – Clean footer with essential links and contact details.
- **Call to Action** – “Book Appointment” button prominently placed.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

```
src/app/
   ├── about/
   ├── services/
   ├── contact/
   ├── page.jsx        # Home page
src/components/
   ├── Header.jsx      # Navbar
   ├── Footer.jsx
   ├── ui/             # Shared UI components
```

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/parth5924/my-node-website.git
   cd my-node-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run development server**

   ```bash
   pnpm run dev
   ```

4. **Open in browser**
   Visit: `http://localhost:3000`

## 🌐 Deployment

### Deploy with GitHub and Render

1. Commit and push the project to the GitHub repository:

   ```bash
   git add .
   git commit -m "Prepare Anshchildcare site for deployment"
   git push origin main
   ```

2. Sign in to [Render](https://render.com/) and choose **New > Web Service**.
3. Connect the GitHub repository `parth5924/my-node-website`.
4. Render can use the included `render.yaml`, or enter these settings manually:
   - **Build Command:** `pnpm install --frozen-lockfile && pnpm run build`
   - **Start Command:** `pnpm start`
   - **Environment:** `Node`
   - **Plan:** `Free`
5. Click **Create Web Service**. Render will build and publish the site with a public `.onrender.com` URL.

The site does not require environment variables for its current static content.

## Contact

If you’d like a similar modern, responsive website for your clinic or business, feel free to connect:

- **Clinic**: Anshchildcare
- **Doctor**: Dr. Kamesh Patel
- **Phone**: [+91 82006 35101](tel:+918200635101)
