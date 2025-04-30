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
 ### 2. Install dependencies
bash
Copy
Edit
npm install
### 3. Create .env.local file

NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key
NEXT_PUBLIC_GRAPHQL_URL=https://graphql.eng.meridiancapital.com/graphql
Replace the keys with actual values. Make sure your Google API key is unrestricted or properly scoped to localhost and your Vercel domain.

### 4. Run the app locally

npm run dev
## 🧪 Testing

Although this project does not currently include automated tests, you can manually verify its core functionality using the following checklist:

### ✅ Manual Testing Checklist

| Feature                | Steps to Test                                                                 |
|------------------------|------------------------------------------------------------------------------|
| **Address Search**     | Enter an address in the search bar and click **Search**. Ensure the map centers correctly. |
| **Map Interaction**    | Click on a parcel (highlighted region) on the map. The sidebar should show parcel data fetched via GraphQL. |
| **Street View**        | After a search, verify that the Street View modal opens and displays the correct location. |
| **Sidebar Navigation** | Use the sidebar to switch between **Search**, **Map**, and **Street View** views. Confirm smooth navigation. |
| **Responsiveness**     | Resize the browser window or open on a mobile device. UI should adapt cleanly to all sizes. |

### 🔧 Suggested Future Improvements

- Add **unit tests** for GraphQL query components using `Jest` and `React Testing Library`.
- Validate map events using browser automation tools like **Playwright** or **Cypress**.
- Mock APIs to ensure consistent testing without rate-limiting from Mapbox or Google.

## 🚀 Deployment

This project is deployed using **Vercel**, which offers seamless integration with GitHub and optimized performance for Next.js applications.

### 🔗 Live URL

Visit the live application here: [https://real-estate-map-final.vercel.app](https://real-estate-map-final.vercel.app)  
*(Make sure to replace with your actual Vercel URL if it's different.)*

### 📦 Deployment Steps

To deploy this project on Vercel:

1. **Push to GitHub**: Ensure your full working code is committed and pushed to your GitHub repository.
2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click on **"New Project"** and select your GitHub repo.
3. **Configure Settings**:
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Set Environment Variable:  
     - `NEXT_PUBLIC_GOOGLE_API_KEY=your-google-api-key`
4. **Click Deploy** – Vercel will automatically build and deploy your app.

### 🔄 Automatic Deployments

Any push to your GitHub repository will trigger a new deployment to Vercel, ensuring your live site is always up-to-date.

### 🛠️ Tips

- ✅ Use a `.env.local` file for local development:
  ```env
  NEXT_PUBLIC_GOOGLE_API_KEY=your-google-api-key
## 📂 Folder Structure

The project follows a modular folder structure, making it easy to maintain and scale:


### Key Pages

- `pages/index.jsx` – Home page with search and embedded map
- `pages/map.jsx` – Mapbox GL-powered interactive map
- `pages/street-view.jsx` – Google Street View modal page

### Key Components

- `MapView.jsx` – Interactive map with markers
- `SearchBox.jsx` – Address input and search logic
- `StreetViewModal.jsx` – Street View rendering in a modal
- `Layout.jsx` – Global layout with navigation and styling

This structure ensures **clear separation of concerns** and easy **feature-based development**.

## 🙌 Acknowledgements

This project would not have been possible without the incredible tools and services provided by the following platforms and libraries:

- [**Next.js**](https://nextjs.org/) – React framework for production-grade web apps
- [**Mapbox GL JS**](https://docs.mapbox.com/mapbox-gl-js/) – Powerful vector-based interactive maps
- [**Apollo Client**](https://www.apollographql.com/docs/react/) – Seamless GraphQL integration in the frontend
- [**GraphQL API** (Meridian Capital)](https://graphql.eng.meridiancapital.com/graphql) – Property and parcel data backend
- [**Google Maps API**](https://developers.google.com/maps/documentation) – Geocoding and Street View functionality
- [**Material UI (MUI)**](https://mui.com/) – Responsive and accessible component library
- [**Vercel**](https://vercel.com/) – Effortless hosting and CI/CD for Next.js apps
- [**Unsplash**](https://unsplash.com/) – Free high-quality images (if used for backgrounds or preview)

A huge thank you to the open-source community and the Meridian Capital team for providing the microinternship opportunity and GraphQL endpoint.

## 📫 Contact

This project was developed by **Samarth Rajput** as part of a microinternship focused on real estate data visualization and map integration.

- 📧 Email: [samarthr22@gmail.com](mailto:samarthr22@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/samarthrajput](https://www.linkedin.com/in/samarthrajput)
- 💻 GitHub: [github.com/Samarth677](https://github.com/Samarth677)

Feel free to reach out for collaboration, feedback, or hiring inquiries.
