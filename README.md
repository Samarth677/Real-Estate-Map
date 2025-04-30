# 🏘️ Real Estate Prospecting Map App

An interactive real estate prospecting tool built with **Next.js**, **Mapbox**, **GraphQL**, and **Google APIs**. This web app enables brokers to search properties, explore street views, and visualize data on a modern, responsive map UI.

🚀 **Live Demo**: [View on Vercel](https://real-estate-map-pi.vercel.app/)

---

## 📸 Preview

![Map View Screenshot](./public/screenshots/map.png)
![Street View Screenshot](./public/screenshots/streetview.png)

---

## 📌 Features

- 🔎 **Search**: Enter a property address using Google Geocoding API.
- 🗺️ **Map View**: View property locations on a Mapbox vector tile map.
- 🧾 **Parcel Info**: Click on parcels to fetch and display property details via GraphQL.
- 🏠 **Street View**: Visualize the selected property's street-level view using Google Street View Embed API.
- 💡 **Sidebar Navigation**: Switch between Search, Map, and Street View.
- 📱 Fully responsive and mobile-friendly UI.

---

## ⚙️ Technologies Used

| Technology      | Purpose                                         |
|-----------------|--------------------------------------------------|
| **Next.js**     | Frontend framework for SSR and routing           |
| **Mapbox GL JS**| Render vector-based interactive maps             |
| **GraphQL**     | Fetch parcel and property data                   |
| **Apollo Client** | Manage GraphQL queries in frontend              |
| **Google Maps API** | Address geocoding and Street View             |
| **Material UI** | UI components for consistent styling             |

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Samarth677/Real-Estate-Map.git
cd Real-Estate-Map
