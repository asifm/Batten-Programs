# Routes and Components

A Svelte component is created for each view. The component is then imported into the 'App.svelte' file and the route is defined in the 'App.svelte' file.

The routes currently are:
- /batten-full
- /batten-featured
- /mayo-full
- /mayo-featured
- /vc-full

The corresponding components are:
- BattenFull.svelte
- BattenFeatured.svelte
- MayoFull.svelte
- MayoFeatured.svelte
- VcFull.svelte

The routes are used to show different views on the Darden website via iframe.

# Branches

## Review branch

Netlify is configured to deploy all branches to a unique URL. For example, a branch named 'review' will be deployed to: <https://review--batten-programs.netlify.app/>

Append the route to see the corresponding page. For example, to see the 'batten-full' page, go to: <https://review--batten-programs.netlify.app/batten-full>

## Main branch (live/production)

Deployed to: <https://batten-programs.netlify.app/>

# Changing Months in Frontend

Currently changed manually once or twice a year.

To change what months to show, comment out other months in the 'data/showMonths' file. 
