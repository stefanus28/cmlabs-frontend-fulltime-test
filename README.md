# 🍽️ MealExplorer — CMLABS Front-end Developer Pre-assessment Test

> **Pre-assessment Test ID:** FE-PT-02-2  
> **Position:** Full-time / Part-time / Internship  
> **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS  
> **API:** [TheMealDB](https://www.themealdb.com/api.php)

---

## 📸 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Ingredients | `/ingredients` | Grid of all ingredients with live search |
| Ingredients Detail | `/ingredients/[name]` | All meals using the selected ingredient, with search |
| Meals Detail | `/meals/[id]` | Full recipe: image, instructions, ingredients, YouTube embed |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone git clone https://github.com/stefanus28/cmlabs-frontend-fulltime-test.git
cd cmlabs-frontend-fulltime-test

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You will be automatically redirected to `/ingredients`.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   ├── page.tsx                  # Redirect → /ingredients
│   ├── error.tsx                 # Global error boundary
│   ├── not-found.tsx             # 404 page
│   ├── ingredients/
│   │   ├── page.tsx              # [SSR] List all ingredients
│   │   ├── loading.tsx           # Skeleton loader
│   │   └── [name]/
│   │       ├── page.tsx          # [SSR] Meals by ingredient
│   │       └── loading.tsx       # Skeleton loader
│   └── meals/
│       └── [id]/
│           ├── page.tsx          # [SSR] Meal detail
│           └── loading.tsx       # Skeleton loader
│
├── components/                   # Atomic Design structure
│   ├── atoms/                    # Smallest reusable units
│   │   ├── Badge.tsx
│   │   ├── BackButton.tsx
│   │   ├── EmptyState.tsx
│   │   ├── ErrorAlert.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── SearchInput.tsx
│   ├── molecules/                # Composed from atoms
│   │   ├── IngredientCard.tsx
│   │   ├── MealCard.tsx
│   │   ├── RecipeIngredientRow.tsx
│   │   └── SearchBar.tsx
│   ├── organisms/                # Complex sections
│   │   ├── IngredientList.tsx    # Search + grid (client component)
│   │   ├── MealDetailCard.tsx    # Full meal display
│   │   ├── MealList.tsx          # Search + grid (client component)
│   │   └── Navbar.tsx            # Responsive navigation
│   └── templates/                # Page-level layout wrappers
│       ├── IngredientsDetailTemplate.tsx
│       ├── IngredientsTemplate.tsx
│       └── MealDetailTemplate.tsx
│
├── services/
│   └── api.ts                    # All API calls + helpers
│
└── types/
    └── index.ts                  # TypeScript interfaces
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 14 | SSR framework (App Router) |
| **React** | 18 | UI library |
| **TypeScript** | 5 | Type safety |
| **Tailwind CSS** | 3 | Utility-first styling |
| **Heroicons** | 2 | SVG icon library |

---

## 🌐 API Endpoints Used

| Endpoint | URL |
|----------|-----|
| List Ingredients | `https://www.themealdb.com/api/json/v1/1/list.php?i=list` |
| Filter by Ingredient | `https://www.themealdb.com/api/json/v1/1/filter.php?i={name}` |
| Meal Detail | `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}` |

---

## ✅ Requirements Checklist

- [x] **Halaman Ingredients** — List all ingredients from API
- [x] **Search Ingredients by Name** — Real-time frontend filtering
- [x] **Redirect to Ingredients Detail** — On ingredient click
- [x] **Halaman Ingredients Detail** — Meals by selected ingredient
- [x] **Search Meal by Name** — Real-time frontend filtering
- [x] **Redirect to Meals Detail** — On meal click
- [x] **Halaman Meals Detail** *(Optional)* — Full detail, recipe, YouTube
- [x] **Next.js 14** *(Nilai lebih)* — App Router, SSR
- [x] **Tailwind CSS** — Responsive design
- [x] **Atomic Component Design** — atoms → molecules → organisms → templates
- [x] **Responsive** — Mobile, iPad, Desktop
- [x] **Loading Skeletons** — Smooth loading UX
- [x] **Error Handling** — Graceful API error states
- [x] **TypeScript** — Full type coverage

---

## 🔗 Live Demo

> *(Add your deployment link here after deploying to Vercel / Netlify)*

---

## 📄 License

Built for **PT CMLABS INDONESIA DIGITAL** pre-assessment purposes.
