import { defineConfig } from "vite";

export default defineConfig({
    root: './perezAlexProyectoTickets',
    server: {
        watch: {
            usePolling: true
        }
    }
}
)