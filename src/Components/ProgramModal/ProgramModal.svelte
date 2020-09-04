<script>
  export let name;
  export let description;
  export let link;
  export let theme;
  export let programType;
  // export let contactnames;
  // export let contactemails
  export let audience;
  // export let start;
  // export let end;

  import { onMount, onDestroy, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  onDestroy(() => {
    console.log('Modal is being destroyed');
  });
  onMount(() => {
    console.log('Modal is being mounted');
  });
  // import { getFormattedDateFromEpoch } from '../../helpers';
</script>

<section class="flex items-center justify-between bg-white program-modal">
  <div class="flex-1">
    <div class="relative flex items-center px-8 py-2 bg-{theme}">
      <button
        id="close-button"
        class="absolute top-0 right-0 w-8 h-8 bg-gray-200 rounded"
        on:click={() => dispatch('closeModal')}>X</button>
      <h4 class="leading-6 text-gray-900">{name}</h4>
      <span
        class="flex-shrink-0 inline-block px-2 py-1 m-2 text-xs font-medium bg-gray-200 bg-opacity-75 rounded text-dd-blue">
        {programType}
      </span>
    </div>
    <div
      class="flex items-center px-8 py-2 space-x-3 font-sans text-xs text-gray-200 uppercase bg-dd-blue">
      <span>
        <!-- {getFormattedDateFromEpoch(start)} to {getFormattedDateFromEpoch(end)} -->
        placeholder
      </span>
    </div>
    <div class="px-6 py-2 space-y-2 leading-6 text-gray-800">
      <p>{description}</p>
      <!-- todo: for demo; remove later -->
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
      class="mb-6 -ml-1 text-xs bg-gray-300 border-gray-500 shadow-sm btn">
      <a href={link} target="_blank">Program Schedule and Other Details</a>
    </button>
  </div>
</section>
