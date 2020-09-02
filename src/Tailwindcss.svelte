<style global>
  /* https://dev.to/sarioglu/using-svelte-with-tailwindcss-a-better-approach-47ph */

  @tailwind base;

  @font-face {
    font-family: 'franklin-gothic-urw';
    font-display: fallback;
    src: url('/fonts/FranklinGothicURW-Hea.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'franklin-gothic-urw';
    font-display: fallback;
    src: url('/fonts/FranklinGothicURW-Dem.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'franklin-gothic-urw';
    font-display: fallback;
    src: url('/fonts/FranklinGothicURW-Med.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'franklin-gothic-urw';
    font-display: fallback;
    src: url('/fonts/FranklinGothicURW-Boo.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
  }
  h1 {
    font-weight: 700;
    @apply font-heading text-5xl my-4;
  }
  h2 {
    @apply font-heading text-4xl text-dd-blue my-3;
  }
  h3 {
    @apply font-heading text-2xl text-dd-blue my-2;
  }
  h4 {
    @apply font-heading text-xl text-dd-blue my-2;
  }
  p {
    font-family: 'franklin-gothic-urw';
    font-weight: 300;
  }

  @tailwind components;
  /* My custom component styles: eg .btn .card */

  .btn {
    @apply inline-flex items-center uppercase text-sm px-4 py-2 my-2 transition duration-150 ease-in-out rounded-sm font-sans tracking-wider;
  }

  .btn-orange {
    @apply bg-dd-orange text-white;
  }

  .btn-blue {
    @apply bg-dd-blue text-gray-100;
  }

  .btn-gray {
    @apply bg-gray-300 text-gray-900;
  }

  .btn:hover {
    @apply bg-gray-500;
  }

  .btn:focus {
    @apply border-dd-blue;
  }

  /* Start purging... */
  @tailwind utilities;
  /* Stop purging. */

  /* My custom utilities: eg .text-shadow-sm */
  html {
    font-size: 15px;
  }
</style>
