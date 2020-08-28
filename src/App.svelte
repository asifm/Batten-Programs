<script>
  import Tailwindcss from './Tailwindcss.svelte';
  import Roadmap from './Components/Roadmap/Roadmap.svelte';
</script>

<Tailwindcss />
<main>
  <div class="rounded-lg">
    <div class="ml-5">
      <h2 class="title">
        <span class="px-3 shadow-sm rnded-sm bg-learn">Learn</span>
        <span class="px-3 rounded-sm shadow-sm bg-experience">Experience</span>
        <span class="px-3 rounded-sm shadow-sm bg-connect">Connect</span>
      </h2>
    </div>
    <Roadmap />
  </div>

</main>
