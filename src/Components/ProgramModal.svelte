<script>
  export let name;
  export let description;
  export let link;
  export let programType;
  export let programTypeColor;
  export let audience;

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<section class="bg-white border-2 border-dd-blue-light program-modal">
  <div class="flex-1">
    <div
      class="relative flex items-center px-8 py-2"
      style="background-color: {programTypeColor}">
      <button
        id="close-button"
        on:click={() => dispatch('closeModalEvent')}
        class="absolute top-0 right-0 w-8 m-1 opacity-50 hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h4
        class="text-xl leading-tight md:text-2xl whitespace-nowrap text-dd-blue-light">
        {name}
      </h4>
    </div>
    <div
      class="flex items-center px-8 py-2 space-x-3 text-xs tracking-wider text-gray-200 uppercase bg-dd-blue-light">
      <!-- {getFormattedDateFromEpoch(start)} to {getFormattedDateFromEpoch(end)} -->
      {programType}
    </div>
    <div class="px-8 pt-2 pb-5 space-y-2 text-sm bg-white lg:text-lg">
      <p>{description}</p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <p class="pt-1 font-sans text-xs font-medium tracking-wide uppercase">
        {audience}
      </p>
      <button
        class="px-2 py-1 -ml-2 space-y-4 text-sm tracking-wider text-left uppercase duration-300 border-t border-b border-gray-800 shadow-sm text-dd-blue-light bg-dd-orange-200 hover:shadow-lg">
        <a href={link} target="_blank">
          <span>See program schedule and other details</span>
          <svg
            class="inline-block w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"><path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
        </a>
      </button>
    </div>
  </div>
</section>
