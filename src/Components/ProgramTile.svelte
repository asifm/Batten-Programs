<script>
  // todo: find and add appropriate icons for the program types
  export let name;
  export let quickDescription;
  export let programTypeColor;
  export let programType;
  export let completed;
</script>

<style>
  .program-tile:hover {
    transform: rotate(-2deg);
  }
</style>

<div
  class="flex mt-2 mb-2 transition duration-500 ease-in-out transform group program-tile hover:shadow-xl"
  on:click>
  <div
    class="flex justify-center flex-shrink-0 w-4 pt-4 leading-5 opacity-25"
    style="background-color: {programTypeColor}">
    <!-- Add icon -->
  </div>
  <div
    class="rounded-r-md flex justify-between flex-1 text-black cursor-pointer {completed ? 'opacity-50' : 'opacity-100'}"
    style="background-color: {programTypeColor}">
    <div class="flex-1 px-2.5 py-2 leading-5">
      <p class="pb-1 text-lg font-medium tracking-tight">{name}</p>
      <p class="pb-2 text-base">{quickDescription}</p>
      <span
        class="inline-block px-1 py-0 text-xs font-black tracking-wider text-gray-800 uppercase rounded bg-gray-50">
        {programType}
      </span>
    </div>
  </div>
</div>
