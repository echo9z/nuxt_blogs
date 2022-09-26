import { Config } from 'tailwindcss'
export default <Config> {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    extend: {},
    container: { // 使容器在默认情况下居中
      center: true,
    },
  },
  plugins: [],
}
