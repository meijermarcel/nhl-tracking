<script lang="ts">
	import type { Standings } from "$lib/types";
    import { slide } from "svelte/transition";
    import StandingsTable from "$lib/components/standings-table/StandingsTable.svelte";

    export let data: Standings;
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    h3 {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }

    .position {
        font-weight: bold;
        color: gray;
    }

    .member {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-bottom: 2px solid lightgray;
        padding: 1rem 0;
    }

    .member:first-child {
        border-top: 2px solid lightgray;
    }

    .member > * {
        flex: 1;
    }

    .member-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .team-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: whitesmoke;
        border-radius: 7px;
        padding: 1rem;
    }

    h3 {
        margin: 0;
    }

    .split {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .games-behind {
        font-weight: bold;
        color: white;
        background-color: var(--primary-color);
        padding: 3px 6px;
        border-radius: 7px;
    }

    .record {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        color: gray;
    }
</style>

<div class="container">
    {#each data.members as member, i}
        <div class="member">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="member-info" on:click={() => member.collapsed = !member.collapsed}>
                <div class="split">
                    <h3>
                        <span class="position">{ i + 1 }</span>
                        { member.name }
                    </h3>
                    <div class="record">
                        <div>{ member.wins }-{ member.losses }-{ member.ties }</div>
                        <div class="games-behind">{member.gamesBehind } GB</div>
                    </div>
                </div>
            </div>
            { #if !member.collapsed }
                <div class="team-container" transition:slide|local={{ duration: 150 }}>
                    <StandingsTable {member} />
                </div>
            { /if }
        </div>
    {/each}
</div>