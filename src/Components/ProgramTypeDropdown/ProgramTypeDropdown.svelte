<script>
  export let programTypes = [];
  export let programTypeSelected = 'prog type frm ins comp';

  export let dropdownOptsHidden = true;
</script>

<!-- Dropdown button -->
<div class="flex flex-row flex-wrap gap-2" on:click>
  <div class="self-center">
    <p class="text-sm font-medium text-gray-700">Select program type</p>
  </div>
  <div class="relative">
    <div class="rounded-md shadow-sm">
      <button
        type="button"
        class="inline-flex px-4 py-2 text-sm leading-5 transition duration-150 ease-in-out rounded-md bg-dd-blue-100 hover:text-gray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-dd-blue-50"
        id="dd-button"
        aria-haspopup="true"
        aria-expanded="true">
        {programTypeSelected}
        <svg
          class="w-5 h-5 ml-2 -mr-1"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <!-- on:click={handleDropdownButtonClick} -->
    </div>

    <!-- Dropdown options -->
    <div class="absolute rounded-md shadow-lg">
      <div class="bg-white rounded-md">
        <div
          class="py-1 cursor-pointer"
          role="menu"
          id="dd-options"
          hidden={dropdownOptsHidden}
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          {#each programTypes as programType}
            <span
              class="block px-4 py-2 text-sm leading-5 text-gray-900 hover:bg-dd-blue-100 focus:outline-none focus:bg-dd-blue-100 focus:text-gray-900"
              role="menuitem">{programType}</span>
          {/each}
          <!-- on:click -->
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <div class="self-center px-1 border-b-4 border-gray-400">
  <span
    class="text-sm tracking-wider text-gray-700 uppercase">{programTypeSelected}</span>
</div> -->
