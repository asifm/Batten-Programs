<script>
    import router from "page";
    import Upcoming from "./Components/Upcoming.svelte";
    import All from "./Components/All.svelte";
    // New imports
    import Batten from "./Components/Batten.svelte";
    import BattenFeatured from "./Components/BattenFeatured.svelte";
    import Mayo from "./Components/Mayo.svelte";
    import MayoFeatured from "./Components/MayoFeatured.svelte";
    import VC from "./Components/VC.svelte";

    let page;
    router("/upcoming", () => (page = Upcoming));
    router("/all", () => (page = All));
    // New endpoints
    router("/batten", () => (page = Batten));
    router("/batten-featured", () => (page = BattenFeatured));
    router("/mayo", () => (page = Mayo));
    router("/mayo-featured", () => (page = MayoFeatured));
    router("/vc", () => (page = VC));
    router.start();
</script>

<svelte:component this={page} />
