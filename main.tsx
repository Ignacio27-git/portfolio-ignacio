import React from "react";
import ReactDOM from "react-dom/client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";
import emailjs from "emailjs-com";

import App from "./App.tsx";

import "./index.css";

// emailjs.init("OEMfpyI7HgOHLXmfg");
console.log(import.meta.env.VITE_API_EMAILJS_TOKEN)
emailjs.init(import.meta.env.VITE_API_EMAILJS_TOKEN);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HeroUIProvider>
            <ToastProvider />
            <main className="text-foreground bg-background">
                <App />
            </main>
        </HeroUIProvider>
    </React.StrictMode>,
);
