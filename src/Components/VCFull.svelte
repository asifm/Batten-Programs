<script>
	import Tailwindcss from './Tailwindcss.svelte';
	import { showMonths } from '../data/showMonths';
	import ProgramTypeDropdown from './ProgramTypeDropdown.svelte';
	import ProgramTile from './ProgramTile.svelte';
	import ProgramModal from './ProgramModal.svelte';

	import { dataPromise } from '../data/parseAirtableData';

	let programs = [];
	let programTypes = ['All Types'];
	let programMonths = [];
	let dataready = false;

	$: selectedPrograms = programs;

	let programTypeSelected = 'All Types';
	let dropdownOptsHidden = true;

	let alumniToggle = false;

	let tiles;

	let modalHidden = true;

	// Data of a single program for the modal window
	let modalData;

	dataPromise.then((resolvedData) => {
		programs = resolvedData[0].filter(el => el.showWhere.includes('VC Full'));
		// Concat because element 'All Types' exists in array
		programTypes = programTypes.concat(resolvedData[1]);
		programMonths = resolvedData[2];
		dataready = true;
	});

	function handleDropdownClick(e) {
		// Show or hide the dropdown options when button clicked
		if (e.target.closest('#dd-button')) {
			dropdownOptsHidden = !dropdownOptsHidden;
		} else if (e.target.closest('#dd-options')) {
			programTypeSelected = e.target.innerText;
			dropdownOptsHidden = true;

			// reset alumniToggle if it's been set to true
			alumniToggle = false;

			if (programTypeSelected === 'All Types') {
				selectedPrograms = programs;
			} else {
				selectedPrograms = programs.filter(
					(el) => el.programType == programTypeSelected,
				);
			}
		}
	}

	function handleClickOnTile(programData) {
		// To ensure modal is in view when seen through in iframe
		window.scrollTo({ top: 0, behavior: 'smooth' });

		modalData = programData;
		modalHidden = false;
		tiles = document.getElementById('program-tiles-container');
		tiles.classList.add('opacity-50');
	}
	function closeModal() {
		modalHidden = true;
		tiles.classList.remove('opacity-50');
	}

	function handleAlumniToggle() {
		// First reset to 'All Types' whether alumniToggle changes to true or false
		programTypeSelected = 'All Types';

		alumniToggle = !alumniToggle;

		if (alumniToggle) {
			selectedPrograms = programs.filter((el) => el.alumni);
		} else {
			selectedPrograms = programs;
		}
	}

	function handleKeydown(e) {
		if (e.key === 'Escape') {
			if (!modalHidden) closeModal();
			if (!dropdownOptsHidden) dropdownOptsHidden = true;
		}
	}

	function handleGlobalClick(e) {
		// Detect if target is outside open modal and if so, close modal
		if (
			!e.target.closest('#program-modal') &&
			!e.target.closest('.program-tile') &&
			!modalHidden
		) {
			closeModal();
		}
		if (!e.target.closest('#dropdown-container') && !dropdownOptsHidden) {
			dropdownOptsHidden = true;
		}
	}
</script>

<Tailwindcss />
<svelte:window on:keydown={handleKeydown} on:click={handleGlobalClick} />
<main>
	<div class="container px-3 mx-auto">
		{#if dataready}
			<div class="flex gap-6 mb-10">
				<!-- Dropdown -->
				<div class="z-20 flex flex-row gap-4" id="dropdown-container">
					<ProgramTypeDropdown
						{programTypes}
						{programTypeSelected}
						{dropdownOptsHidden}
						on:click={handleDropdownClick}
					/>
				</div>

				<!-- Toggle -->
				<div
					class="self-center col-span-1 text-right"
					id="alumnitoggle-container"
				>
					<span class="mr-1 text-sm text-gray-700"
						>Open to alumni</span
					>
					<span
						role="checkbox"
						tabindex="0"
						aria-checked="false"
						aria-label="Open to alumni"
						on:click={handleAlumniToggle}
						on:keydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								handleAlumniToggle();
							}
						}}
						class="align-middle relative inline-flex flex-shrink-0 h-5
							transition-colors duration-200 ease-in-out {alumniToggle
								? 'bg-dd-blue-200'
								: 'bg-dd-blue-100'}
							border-2 border-transparent rounded-full cursor-pointer w-12 focus:outline-none
							focus:ring"
					>
						<span
							aria-hidden="true"
							class="inline-block w-4 h-4 transition duration-200 ease-in-out
								transform {alumniToggle
									? 'translate-x-8'
									: 'translate-x-0'} bg-white
								rounded-full shadow"
						/>
					</span>
				</div>
				<!-- <div
          class="p-2 text-sm border-2 rounded-md border-dd-blue hover:shadow-sm"
        >
          See past programs
        </div> -->
			</div>

			<div
				class="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
				id="program-tiles-container"
			>
				{#each showMonths as month}
					<div class="col-span-1">
						<div
							class="sticky top-0 z-10 p-3 font-bold tracking-widest uppercase bg-white text-dd-blue"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								class="inline w-6 h-6"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							{month}
						</div>
						<div>
							{#each selectedPrograms as program}
								{#if program.months.includes(month)}
									<ProgramTile
										completed={program.completed}
										name={program.name}
										programType={program.programType}
										programTypeColor={program.programTypeColor}
										quickDescription={program.quickDescription}
										on:click={() =>
											handleClickOnTile(program)}
									/>
								{/if}
							{/each}
						</div>
					</div>
				{/each}
			</div>
			{#if !modalHidden}
				<div
					id="program-modal"
					class="fixed z-30 w-11/12 max-w-full max-h-full overflow-auto transform -translate-x-1/2 rounded shadow-lg left-1/2 top-16 sm:w-4/5 md:w-1/2 lg:w-1/3"
				>
					<ProgramModal
						audience={modalData.audience}
						description={modalData.description}
						endDate={modalData.endDate}
						link={modalData.link}
						name={modalData.name}
						programType={modalData.programType}
						programTypeColor={modalData.programTypeColor}
						startDate={modalData.startDate}
						on:closeModalEvent={closeModal}
					/>
				</div>
			{/if}
		{/if}
	</div>
</main>
