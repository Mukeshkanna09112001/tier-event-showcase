
# 🎉 Tier-Based Event Showcase

A tier-based event listing platform built with **Next.js**, **Supabase**, and **Clerk**. It supports role-based access to events and responsive UI built using Tailwind CSS.

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mukeshkanna09112001/tier-event-showcase.git
cd tier-event-showcase
```

### 2. Create `.env.local`

Create a `.env.local` file in the root of the project and add:

```env
# Clerk Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bWF0dXJlLWNvYnJhLTYwLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_h9HBzt2YudzHvaFaNT3eWlmYzk2tUCHJjOlO27lx0M

# Supabase Keys
NEXT_PUBLIC_SUPABASE_URL=https://hvzbwmwekvokpahwelra.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

> ⚠️ Mark your Clerk secret key as private/sensitive.

### 3. Install Dependencies

```bash
npm install
# or
yarn
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Clerk Setup (Authentication)

Clerk Dashboard: [Go to Clerk](https://dashboard.clerk.com/apps/app_30h2xUkHmINnPIgixx60EcD7rtb/instances/ins_30h2xazZcr1tcwjhQCHfR80SBHl)

### Test Users

Manually create and add the following test users and set `publicMetadata.tier` accordingly:

| Email             | Tier      |
|------------------|-----------|
| free@test.com     | `free`    |
| silver@test.com   | `silver`  |
| gold@test.com     | `gold`    |
| platinum@test.com | `platinum`|

---

## 🧾 Supabase Setup

Supabase Dashboard: [Go to Supabase](https://supabase.com/dashboard/org/yjjegvkqwkymsszjocpg)

### Sample Events Seed

```sql
insert into events (title, description, event_date, image_url, tier) values
('Free Event 1','Free desc','2025-08-02','','free'),
('Silver Event 1','Silver desc','2025-08-03','','silver'),
('Gold Event 1','Gold desc','2025-08-04','','gold'),
('Platinum Event 1','Platinum desc','2025-08-05','','platinum'),
('Free Event 2','Free desc2','2025-08-06','','free'),
('Silver Event 2','Silver desc2','2025-08-07','','silver');
```

---

## 🎨 Features

- 🔒 Clerk authentication
- 🎫 Tier-based event filtering via Supabase
- 💡 Responsive UI with Tailwind CSS
- 🆙 Tier upgrade simulation logic
- ✅ Optional Supabase RLS support

---

## 🚀 Deployment on Vercel

Vercel URL: [Deploy Now](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

### Steps to Deploy

1. Log in to [Vercel](https://vercel.com)
2. Click **"Add New" > "Project"**
3. Import your GitHub repo:  
   `https://github.com/Mukeshkanna09112001/tier-event-showcase`
4. Configure project:
   - **Framework**: Next.js
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`
   - **Output Directory**: `.next`
5. Add Environment Variables from `.env.local`
6. Deploy

📍 Live App: [tier-event-showcase](https://vercel.com/mukesh-kannas-projects/tier-event-showcase-jtyg)

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

---

## 🧑‍💻 Author

Made with ❤️ by [Mukesh Kanna](https://github.com/Mukeshkanna09112001)
