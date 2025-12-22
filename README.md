# Blood Donation Client Site

## Project Overview
This is a **Blood Donation Client Site** built with **React, TailwindCSS, DaisyUI, and Firebase**. The application allows users to register as donors, search for donors, make donation requests, and manage donation requests. Admins can manage all users and donation requests, while volunteers have limited management permissions.

---

## Features

### Public Features
- **Home Page**
  - Responsive Navbar with logo, donation requests, login links
  - Banner with **"Join as a Donor"** and **"Search Donors"** buttons
  - Featured section
  - Contact form
  - Footer with useful links

- **Search Donors**
  - Search form with blood group, district, and upazila filters
  - Shows matching donors after search

- **Blood Donation Requests**
  - Displays all pending donation requests
  - View details button (redirects to private page for logged-in users)

### Private Features (Dashboard)
- **Donor Dashboard**
  - Welcome section
  - Recent donation requests (table for desktop, card for mobile)
  - Create, edit, delete, and update donation requests
  - Pagination and filtering of requests

- **Admin Dashboard**
  - Welcome section
  - Featured stats: Total Users, Total Funding, Total Blood Donation Requests
  - Manage all users: block/unblock, make volunteer/admin
  - Manage all donation requests with full control

- **Volunteer Dashboard**
  - View all donation requests
  - Update donation status only

- **Funding Page**
  - Users can donate funds for organizations
  - Admins and volunteers can see total funds

---

## Tech Stack

- **Frontend:**
  - React v19.2.0
  - React Router v7.10.1
  - TailwindCSS v4.1.18
  - DaisyUI v5.5.14
  - Axios v1.13.2
  - React Icons & Lucide-React
  - React Toastify for notifications
- **Backend (assumed for integration)**
  - Node.js, Express.js
  - MongoDB
  - Firebase for authentication
  - JWT for secure API access

---

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
