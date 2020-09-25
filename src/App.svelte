<script>
  import router from 'page';
  import Upcoming from './Components/Upcoming.svelte';
  import All from './Components/All.svelte';

  let page;
  router('/upcoming', () => (page = Upcoming));
  router('/all', () => (page = All));
  router.start();
</script>

<svelte:component this={page} />
