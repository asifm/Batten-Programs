<script>
  export let name;
  export let description;
  export let link;
  export let theme;
  // export let color;
  // export let contact;
  export let audience;
  export let start;
  export let end;

  import { getProgramDate } from '../../helpers';
</script>

<style>

</style>

<main>

  <li class="col-span-1 bg-white rounded-lg shadow">
    <div class="flex items-center justify-between w-full space-x-6">
      <div class="flex-1 ">
        <div
          class="flex items-center space-x-3 px-8 py-2 bg-{theme.toLowerCase()}">
          <h4 class="leading-6 text-gray-900 ">{name}</h4>
          <span
            class="flex-shrink-0 inline-block px-2 text-xs font-medium leading-4 text-teal-800 bg-teal-100 rounded-lg">
            {theme}
          </span>
        </div>
        <div
          class="flex items-center px-8 py-2 space-x-3 font-sans text-xs text-gray-900 uppercase bg-gray-100 border-b-2 border-gray-300">
          <span>{getProgramDate(start)} to {getProgramDate(end)}</span>
        </div>
        <div class="px-8 py-2 mt-1 leading-6">
          <p class="text-gray-800 ">{description}</p>
          <p
            class="pt-1 font-sans text-xs tracking-wide text-gray-800 uppercase">
            {audience}
          </p>
        </div>
        <div
          class="mb-6 -ml-1 text-xs bg-gray-300 border-gray-500 shadow-sm btn">
          <a href={link} target="_blank">Program Schedule and Other Details</a>
        </div>
      </div>

    </div>

  </li>

</main>
