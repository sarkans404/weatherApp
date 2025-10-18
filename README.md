# Weather App 🌤️

A modern weather application built with Vue 3, TypeScript, and Vite. The application provides real-time weather information using the OpenWeatherMap API.

## 🌟 Features

- ⚡ Fast and responsive interface
- 🎨 Dark/Light theme
- 📱 Responsive design
- 🌡️ Detailed weather information
- 🔄 Automatic data updates
- 💻 Built with modern tech stack

## 🛠️ Technologies

- Vue 3
- TypeScript
- Vite
- TailwindCSS
- OpenWeatherMap API

## 📋 Prerequisites

Before installation, ensure you have:

- Node.js (version 16.0.0 or higher)
- npm or yarn
- OpenWeatherMap API key

## 🚀 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sarkans404/weatherApp.git
   cd weatherApp
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:

   - Copy `.env.example` file and rename it to `.env`
   - Open the `.env` file
   - Replace `enter_your_api_key_here` with your OpenWeatherMap API key

   ```bash
   cp .env.example .env
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to: `http://localhost:5173`

## 🏗️ Production Build

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## 📝 How to Get OpenWeatherMap API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Sign up or log in to your account
3. Navigate to the "API keys" section
4. Create a new key or use an existing one
5. Copy the key to your `.env` file

> Note: Make sure to rename `.env.exemple` to `.env` and insert your API key there.

## 🔧 Configuration

- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript configuration
- `.env` - Environment variables

## 📦 Project Structure

```
weatherApp/
├── src/
│   ├── assets/      # Images and icons
│   ├── components/  # Vue components
│   ├── services/    # API services
│   ├── App.vue      # Root component
│   └── main.ts      # Entry point
├── .env             # Environment variables
└── package.json     # Dependencies and scripts
```

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the API
- [Vue.js](https://vuejs.org/) for the excellent framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool

Personal first-time project experience using Git and GitHub
