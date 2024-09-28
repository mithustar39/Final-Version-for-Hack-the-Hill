declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VITE_CLERK_PUBLISHABLE_KEY: string;
            VITE_CLERK_API_URL: string;
        }
    }
}

export {}