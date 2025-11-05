# Personal Knowledge Management App  

My project idea is to organize skills into structured categories. These categories represent different topics related to the field of software development.

The category structure is divided into three levels: main topic → subtopic → sub-subtopic (skill).

Below is a preview of some of the categories included in the system:

![Categories Preview](./assets/categories-overview.png)

Users can only create and manage third-level topics (sub-subtopics), which represent specific skills they want to build or track over time.

For each skill, users can create lesson entries to record what they’ve learned. Each lesson represents new knowledge or an experience gained while developing that skill.

Over time, these lessons build up to show the user’s progress and growth within each skill.

The system integrates AI features that automatically classify lessons and categories within the correct structure. It also evaluates the user’s skill level based on lesson content and displays the resulting scores and progress on a personalized dashboard.

## Technology Used  

- **React (Frontend Framework)**   
- **Routing (React Router)**   
- **Icons (Lucide React)**   
- **Vite (Environment)**   

## Project Links  
- **[Backend Repo](https://github.com/MaherGarni/Personal-Knowledge-Management-Backend)**  
- **[Site link](http://localhost:5173/)** 

## 🔹 Installation Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm (version 9 or higher) or yarn
- Git (for cloning the repository)
- Backend API running (see Backend README for setup)

---

### Frontend Setup (Standard)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mahaalghuraibi/MTRIX_Frontend.git
   cd MTRIX_Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   # Create .env file in the root directory
   # Add the following:
   VITE_API_BASE=http://localhost:8000
   ```
   
   For production, update the API base URL:
   ```bash
   VITE_API_BASE=https://your-backend-api-url.com
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Access the application:**
   - Frontend will be available at: `http://localhost:5173`
   - The app will automatically reload when you make changes

---

### Frontend Setup (Docker - Optional)

If you prefer to run the frontend in a Docker container:

1. **Create a Dockerfile** (if not already present):
   ```dockerfile
   FROM node
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   EXPOSE 5173
   CMD ["npm", "run", "dev", "--", "--host"]
   ```

2. **Create docker-compose.yml** (if not already present):
   ```yaml
   services:
     frontend:
       build: .
       container_name: mtrix_frontend
       ports:
         - "5173:5173"
       volumes:
         - .:/app
         - /app/node_modules
       env_file:
         - .env
       environment:
         - VITE_API_BASE=http://localhost:8000
   ```

3. **Build and run:**
   ```bash
   docker compose up -d
   ```

4. **Access the application:**
   - Frontend will be available at: `http://localhost:5173`

---

###  Build for Production

1. **Build the production bundle:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

3. **Deploy:**
   - The `dist/` folder contains the production-ready static files
   - Deploy to Vercel, Netlify, or any static hosting service
   - Update `VITE_API_BASE` environment variable in your hosting platform

---

###  Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

---

###  Troubleshooting

**Port already in use:**
```bash
# Kill process on port 5173 (macOS/Linux)
lsof -ti:5173 | xargs kill -9

# Or change port in vite.config.js
```

**API connection issues:**
- Ensure backend is running on the port specified in `VITE_API_BASE`
- Check CORS settings in backend if getting CORS errors
- Verify JWT token is being stored correctly in localStorage

**Module not found errors:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---
  
## Icebox Features  
- Lesson attachments (images, files, code snippets)  
- Additional learning domains (not only tech)
- Search functionality 
