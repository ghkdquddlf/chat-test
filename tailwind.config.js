/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      height: {
        'screen-safe': 'var(--viewport-height)', // iOS 사파리 대응
      },
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)', // 안전 영역을 위한 padding/margin
        inherit: 'inherit', // `h-inherit`, `w-inherit` 등을 위한 설정
      },
      screens: {
        '2xl': '1400px',
        'h-815': { raw: '(max-height: 815px)' }, // 높이 기준 브레이크포인트 추가
        'w-380': { raw: '(max-width: 380px)' },
        'w-420': { raw: '(max-width: 420px)' },
        'w-320': { raw: '(max-width: 320px)' },
        'custom-md': { raw: '(min-height: 900px)' }, // 높이 900px 이상일 때
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        '-0.75': '-0.047rem', // -0.75px (16px 기준 rem 값)
      }
    },
  },
  plugins: [],
};
