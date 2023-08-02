<script>
    import router from "page";
    import Upcoming from "./Components/Upcoming.svelte";
    import All from "./Components/All.svelte";
    // New imports
    import BattenFull from "./Components/BattenFull.svelte";
    import BattenFeatured from "./Components/BattenFeatured.svelte";
    import MayoFull from "./Components/MayoFull.svelte";
    import MayoFeatured from "./Components/MayoFeatured.svelte";
    import VCFull from "./Components/VCFull.svelte";

    let page;
    router("/upcoming", () => (page = Upcoming));
    router("/all", () => (page = All));
    // New endpoints
    router("/batten-full", () => (page = BattenFull));
    router("/batten-featured", () => (page = BattenFeatured));
    router("/mayo-full", () => (page = MayoFull));
    router("/mayo-featured", () => (page = MayoFeatured));
    router("/vc-full", () => (page = VCFull));
    router.start();
</script>

<svelte:component this={page} />
