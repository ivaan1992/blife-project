import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
