/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9DhuKB9oZhy
 */

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import githubLogo from "./assets/github.svg";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-2 sm:px-4 py-8 w-full">
      <div className="flex justify-center items-center space-x-2 sm:space-x-4">
        <img alt="Vite Logo" height="80" src={viteLogo} width="80" />
        <img alt="React Logo" height="80" src={reactLogo} width="80" />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mt-4">
        Vite + React Tailwind PWA Boilerplate
      </h1>
      <p className="max-w-sm sm:max-w-md md:max-w-2xl mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
        Kickstart your next Vite, React, Tailwind and PWA project with this
        boilerplate.
      </p>
      <a
        className="mt-8 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:bg-blue-400 flex items-center justify-center space-x-2 hover:shadow-lg rounded-lg"
        href="https://github.com/Salmandabbakuti/react-vite-boilerplate/generate"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="GitHub Logo"
          className="rounded-full mx-1"
          height="24"
          src={githubLogo}
          style={{
            aspectRatio: "24/24",
            objectFit: "cover"
          }}
          width="24"
        />
        Use This Boilerplate
      </a>
    </div>
  );
}
