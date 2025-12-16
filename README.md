# 🚀 RaYnk Labs — Full-Stack Web Platform (Next.js)

## Professional Freelancing & Software Showcase Platform

RaYnk Labs is a modern full-stack web platform built using **Next.js (App Router)**.  
The platform showcases **freelancing services, completed & upcoming projects, softwares, courses, and team information**, with a **secure admin dashboard** for dynamic content management.

---

## 📌 Project Purpose

- Showcase freelancing services offered by RaYnk Labs  
- Display completed and upcoming projects  
- Highlight in-house softwares and products  
- Present team members professionally  
- Allow admins to update content without code changes  
- Keep public pages SEO-friendly and fast  
- Maintain a secure, scalable backend architecture  

---

## 🧠 System Architecture

Frontend (Next.js Pages)
↓
Secure API Routes (JWT + Cookies)
↓
MongoDB (Data Storage)
↓
Cloudinary (Image Storage)

yaml
Copy code

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- shadcn/ui
- next-themes (Dark / Light Mode)

### Backend
- Next.js API Routes
- MongoDB + Mongoose
- JWT Authentication (Cookie-based)
- Cloudinary (Image Hosting)
- Middleware-based Route Protection

---

## 📁 Backend Folder Structure

src/
├── app/
│ ├── api/
│ │ ├── admin/
│ │ │ ├── login/route.ts
│ │ │ └── verify/route.ts
│ │ ├── services/route.ts
│ │ ├── projects/route.ts
│ │ ├── softwares/route.ts
│ │ ├── courses/route.ts
│ │ └── team/route.ts
│
├── lib/
│ ├── db.ts
│ ├── cloudinary.ts
│ ├── auth/
│ │ ├── jwt.ts
│ │ └── password.ts
│ ├── models/
│ │ ├── Admin.ts
│ │ ├── Service.ts
│ │ ├── Project.ts
│ │ ├── Software.ts
│ │ ├── Course.ts
│ │ └── TeamMember.ts
│
├── middleware.ts

yaml
Copy code

---

## 🔐 Admin Authentication & Security

### Admin Login Flow

1. Admin opens hidden admin URL  
   `/admin`
2. Admin enters email and password  
3. Backend validates credentials  
4. JWT is generated and stored in an **HTTP-only cookie**  
5. Admin remains logged in until token expires  

### Security Highlights

- No admin links visible on public website  
- JWT stored in HTTP-only cookies  
- Middleware blocks unauthorized access  
- All admin APIs are protected  

---

## 🗄️ Database Design (MongoDB)

Collections:
- Services
- Projects
- Softwares
- Courses
- Team Members

All data is dynamic and admin-controlled.

---

## 🖼️ Image Handling (Cloudinary)

Images are **not stored locally**.  
Images are uploaded to **Cloudinary**, and MongoDB stores only references.

image: {
url: "https://res.cloudinary.com/...",
publicId: "team/abc123"
}

yaml
Copy code

### Image Lifecycle

- Create → Upload image → Save URL  
- Update → Delete old image → Upload new image  
- Delete → Remove image from Cloudinary  

---

## 🔁 CRUD API Reference

### Services
GET /api/services
POST /api/services
PUT /api/services
DELETE /api/services

shell
Copy code

### Projects
GET /api/projects
POST /api/projects
PUT /api/projects
DELETE /api/projects

shell
Copy code

### Softwares
GET /api/softwares
POST /api/softwares
PUT /api/softwares
DELETE /api/softwares

shell
Copy code

### Courses
GET /api/courses
POST /api/courses
PUT /api/courses
DELETE /api/courses

shell
Copy code

### Team
GET /api/team
POST /api/team
PUT /api/team
DELETE /api/team

yaml
Copy code

---

## 🔌 Frontend Integration Guide

### Fetch Public Data

const res = await fetch("/api/services");
const services = await res.json();

pgsql
Copy code

### Admin Create with Image

const formData = new FormData();
formData.append("title", title);
formData.append("description", description);
formData.append("image", file);

await fetch("/api/projects", {
method: "POST",
body: formData,
credentials: "include",
});

yaml
Copy code

---

## ⚙️ Environment Variables

Create `.env.local`:

MONGODB_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

yaml
Copy code

Restart the server after setting variables.

---

## 🚀 Why This Backend Is Production-Ready

- Secure admin authentication  
- Cloud-based image handling  
- Clean API architecture  
- No hard-coded content  
- SEO-friendly public pages  
- Easy frontend integration  
- Scalable and maintainable  

---

## 📌 Repository Title

RaYnk Labs — Full-Stack Freelancing & Software Platform

---

## 📄 Repository Description

A secure, scalable full-stack web platform built with Next.js, MongoDB, and Cloudinary to showcase freelancing services, projects, softwares, courses, and team members with an admin-controlled dashboard.

---

Made with ❤️ by RaYnk Labs Team
