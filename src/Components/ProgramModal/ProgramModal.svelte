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

<section class="flex items-center justify-between bg-white program-modal">
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
      <h4 class="text-2xl leading-tight text-dd-blue">{name}</h4>
    </div>
    <div
      class="flex items-center px-8 py-2 space-x-3 font-sans text-xs text-gray-200 uppercase bg-dd-blue">
      <span>
        <!-- {getFormattedDateFromEpoch(start)} to {getFormattedDateFromEpoch(end)} -->
        {programType}
      </span>
    </div>
    <div class="px-8 py-2 space-y-2 text-sm text-gray-800 bg-white lg:text-lg">
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
    </div>
    <button
      class="mb-6 -ml-1 text-xs border-gray-800 shadow-sm bg-dd-blue-100 btn">
      <a href={link} target="_blank">Program Schedule and Other Details</a>
    </button>
  </div>
</section>
