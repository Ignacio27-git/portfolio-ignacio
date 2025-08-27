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
                            500: "#5ce1e6",
                            600: "#005BC4",
                            700: "#004493",
                            800: "#002E62",
                            900: "#001731",
                            DEFAULT: "#5ce1e6",
                            foreground: "#FFFFFF"
                        },
                        focus: "#5ce1e6",
                    },
                },
                dark: {
                    extend: "dark",
                    colors: {
                        background: "#1e1c27",
                        foreground: "#FFFFFF",
                        primary: {
                            50: "#E6F1FE",
                            100: "#CCE3FD",
                            200: "#99C7FB",
                            300: "#66AAF9",
                            400: "#338EF7",
                            500: "#5ce1e6",
                            600: "#005BC4",
                            700: "#004493",
                            800: "#002E62",
                            900: "#001731",
                            DEFAULT: "#5ce1e6",
                            foreground: "#1e1c27"
                        },
                        focus: "#5ce1e6",
                    },
                },
            },
        }),
    ],
};
