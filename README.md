# RBAC-UI
Role-Based Access Control (RBAC) UI React App

# Role and Users Management App

## Overview

The **Role and Users Management App** is a comprehensive and robust solution for managing users, roles, and permissions in an organization.
---

## Features

### **Core Functionality**
1. **User Management**:
   - Add, edit, delete, or view users.
   - Assign specific roles and manage user statuses (Active/Inactive).
   - Prevent duplicate users when adding or updating.
   - User-friendly error messages for quick issue resolution.

2. **Role Management**:
   - Add, edit, or delete roles with dynamic permissions.
   - Edit or delete roles one at a time for precise control.
   - Protect critical roles, such as `Admin`, from accidental deletion.

3. **Dynamic Permissions**:
   - Assign permissions such as Read, Write, and Delete to roles.
   - Define custom permissions for roles and reuse them across other roles.

4. **Data Tables**:
   - Implemented custom **React-Paginate** for manual pagination.
   - Added filtering for ease of searching.
   
---

## Performance Optimizations

### **Optimized Builds**
- Used **Vite** for:
  - Modern JavaScript bundling.
  - Faster development server startup.
  - Efficient Hot Module Replacement (HMR).
  - Enhanced build speed for production.

### **Code Quality**
- Integrated **ESLint** for:
  - Enforcing lint rules.
  - Preventing common errors and maintaining consistent code quality.

### **Rendering Efficiency**
- **Lazy Loading**: Components and data are dynamically loaded to reduce the initial load time.
- **Separate Styling and Functionality**: Divided logic and styling into distinct files to enhance readability and maintainability.

---

## User Experience (UX) Enhancements

1. **Skeletons**: Placeholder loaders improve user feedback during data fetching.
2. **Error Handling**: Clear and concise error messages enhance user understanding and navigation.
3. **Responsive Design**:
   - Implemented using **react-responsive** for media queries.
   - Used **Flexbox** and **Grid** layouts for responsive and adaptive designs.
4. **Popup Windows**: Incorporated for modal functionalities, such as adding or editing users or roles.

---

## Styling Features

1. **Tailored Styling**:
   - Combo box from **Vaadin Multi-Select Box** for advanced user input.
   - Auto-prefixed CSS using **PostCSS** for better cross-browser compatibility.
2. **Image Handling**:
   - Supported formats include **SVGs** and **PNG** for icons and visuals.

---

## Technical Stack

### **Frontend**
- **React.js**: The core framework for the application.
- **React Router**: For navigation and routing between pages.
- **Zustand**: Lightweight and efficient state management library.

### **Styling**
- **Tailwind CSS**: Utility-first CSS framework.
- **Vaadin Multi-Select Box**: For custom combo box functionality.
- **PostCSS with AutoPrefixer**: Enhances cross-browser CSS compatibility.

### **Development Tools**
- **Vite**: For fast and optimized builds.
- **ESLint**: Ensures consistent coding practices and reduces errors.

---

## Application Architecture

### **Folder Structure**
```plaintext
src/
│
├── assets/           // Static assets like images and SVGs
├── components/       // Main Components
├── hooks/            // Custom React hooks
├── shared/            // Reusable UI components
├── zustand/            // Zustand state management
└── vite.config.js    // Vite configuration for optimized builds
