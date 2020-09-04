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

<section
  class="flex items-center justify-between space-x-6 bg-white program-modal">
  <div class="relative flex-1">
    <button
      id="close-button"
      class="absolute top-0 right-0 w-8 h-8 bg-gray-200 shadow-xs"
      on:click={() => dispatch('closeModal')}>X</button>
    <div class="flex items-center px-8 py-2 space-x-2 bg-{theme}">
      <h4 class="leading-6 text-gray-900">{name}</h4>

      <span
        class="flex-shrink-0 inline-block px-2 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-lg">
        {programType}
      </span>
    </div>
    <div
      class="flex items-center px-8 py-2 space-x-3 font-sans text-xs text-gray-200 uppercase border-b-2 border-gray-300 bg-dd-blue">
      <span>
        <!-- {getFormattedDateFromEpoch(start)} to {getFormattedDateFromEpoch(end)} -->
        placeholder
      </span>
    </div>
    <div class="px-8 py-2 mt-1 leading-6">
      <p class="text-gray-800">{description}</p>
      <p
        class="pt-1 font-sans text-xs font-medium tracking-wide text-gray-800 uppercase">
        {audience}
      </p>
    </div>
    <button
      class="mb-6 -ml-1 text-xs bg-gray-300 border-gray-500 shadow-sm btn">
      <a href={link} target="_blank">Program Schedule and Other Details</a>
    </button>
  </div>
</section>
