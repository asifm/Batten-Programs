<script>
  import { getFormattedDateFromEpoch } from '../helpers';
  export let name;
  export let description;
  export let link;
  export let programType;
  export let programTypeColor;
  export let audience;
  export let start;
  export let end;

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<section class="bg-white border-1 border-dd-blue-light program-modal">
  <div class="flex-1">
    <div
      class="relative flex items-center px-6 py-1"
      style="background-color: {programTypeColor}">
      <button
        id="close-button"
        on:click={() => dispatch('closeModalEvent')}
        class="absolute top-0 right-0 w-8 m-1 border border-black opacity-50 hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h4
        class="text-xl font-black leading-tight md:text-2xl text-dd-blue-light">
        {name}
      </h4>
    </div>
    <div
      class="flex items-center px-6 py-2 space-x-3 text-xs tracking-widest text-gray-100 uppercase bg-dd-blue-light">
      <span class="px-1 font-thin rounded-sm bg-dd-orange">{programType}</span>
      <span>
        {getFormattedDateFromEpoch(start)}
        –
        {getFormattedDateFromEpoch(end)}
      </span>
    </div>
    <div class="px-6 pt-2 pb-5 space-y-2 text-sm bg-white lg:text-lg">
      <p>{description}</p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat.
      </p>
      <p class="pt-1 font-sans text-xs font-medium tracking-wide uppercase">
        {audience}
      </p>
      <button
        class="px-2 py-1 -ml-2 text-sm font-black text-left uppercase duration-300 shadow-solid text-dd-blue-light bg-dd-orange-300 hover:bg-dd-orange">
        <a href={link} target="_blank">
          <span>See program schedule and other details</span>&nbsp;<svg
            class="inline-block w-5 h-5 text-gray-500"
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
