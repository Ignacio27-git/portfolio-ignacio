import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        heroui({
            themes: {
                light: {
                    extend: "light",
                    colors: {
                        background: "#FFFFFF",
                        foreground: "#000000",
                        primary: {
                            50: "#E6F1FE",
                            100: "#CCE3FD",
                            200: "#99C7FB",
                            300: "#66AAF9",
                            400: "#338EF7",
                            500: "#006FEE",
                            600: "#005BC4",
                            700: "#004493",
                            800: "#002E62",
                            900: "#001731",
                            DEFAULT: "#006FEE",
                            foreground: "#FFFFFF"
                        },
                        focus: "#006FEE",
                    },
                },
                dark: {
                    extend: "dark",
                    colors: {
                        background: "#000000",
                        foreground: "#FFFFFF",
                        primary: {
                            50: "#E6F1FE",
                            100: "#CCE3FD",
                            200: "#99C7FB",
                            300: "#66AAF9",
                            400: "#338EF7",
                            500: "#006FEE",
                            600: "#005BC4",
                            700: "#004493",
                            800: "#002E62",
                            900: "#001731",
                            DEFAULT: "#006FEE",
                            foreground: "#FFFFFF"
                        },
                        focus: "#006FEE",
                    },
                },
            },
        }),
    ],
};
