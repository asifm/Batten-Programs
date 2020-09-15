<script>
  // todo: find and add appropriate icons for the program types
  export let name;
  export let quickDescription;
  export let programTypeColor;
  export let programType;
</script>

<style>
  .program-tile:hover {
    /* A tile when scaled up on hover needs to be over the adjacent tiles */
    z-index: 20;
  }
</style>

<div
  class="flex mb-4 transition duration-500 ease-in-out transform shadow-sm program-tile hover:shadow-lg group hover:-translate-y-2"
  on:click>
  <div
    class="flex justify-center flex-shrink-0 w-6 pt-4 leading-5 opacity-50 rounded-l-md"
    style="background-color: {programTypeColor}">
    <!-- Add icon -->
  </div>
  <div
    class="flex justify-between flex-1 p-1 text-black cursor-pointer rounded-r-md"
    style="background-color: {programTypeColor}">
    <!-- add something later to indicate completed or not. e.g. {completed ? 'opacity-75' : 'opacity-100'} -->
    <div class="flex-1 px-4 py-2 leading-5">
      <p class="pb-1 text-lg font-medium">{name}</p>
      <p class="pb-2 text-base">{quickDescription}</p>
      <div
        class="transition duration-500 ease-in-out text-xs inline-block px-1.5
          bg-gray-50 py-0.5 border-b border-dd-orange text-dd-blue
          group-hover:bg-dd-blue-200 rounded group-hover:shadow-sm">
        <span class="tracking-wider uppercase"> {programType} </span>
      </div>
    </div>
  </div>
</div>
