<script>
  // todo: find and add appropriate icons for the program types
  export let name;
  export let quickDescription;
  export let programTypeColor;
  export let programType;
  export let completed;
</script>

<div class="flex mb-4 duration-300 group program-tile hover:shadow-sm" on:click>
  <div
    class="flex justify-center flex-shrink-0 w-4 pt-4 leading-5 opacity-25"
    style="background-color: {programTypeColor}"
  />
  <div
    class="rounded-r-md flex justify-between flex-1 text-black cursor-pointer {completed
      ? 'opacity-50'
      : 'opacity-100'}"
    style="background-color: {programTypeColor}"
  >
    <div
      class="duration-300 flex-1 px-2.5 py-2 leading-5 group-hover:bg-gray-50"
    >
      <p class="pb-1 text-lg font-medium leading-tight tracking-tight">
        {name}
      </p>
      <p class="pb-2 text-base leading-tight">{quickDescription}</p>
      <span
        class="inline-block px-1 py-0 text-xs font-black tracking-wider text-gray-800 uppercase rounded bg-gray-50"
      >
        {programType}
      </span>
    </div>
  </div>
</div>
