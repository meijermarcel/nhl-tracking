<script lang="ts">
	import type { MemberStanding } from "$lib/types";

    export let member: MemberStanding;
</script>

<style>

    table {
        width: 100%;
        text-align: center;
        font-size: 14px;
    }

    thead {
        color: gray;
    }

    td {
        padding: 5px;
    }

    .text-left {
        text-align: left;
    }

    .totals {
        font-weight: 600;
        border-top: 1px solid gray;
    }

    .name {
        font-weight: 600;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }
</style>

{#if member}
    <table>
        <thead>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            {#each member.teams as team}
                <tr>
                    <td>
                        <div class="name">
                            <img height="25px" src="{team.img}" alt="" />
                            <div>{ team.name }</div>
                        </div>
                    </td>
                    <td>{ team.wins } - { team.losses } - { team.ties }</td>
                </tr>
            {/each}
            <tr class="totals">
                <td class="text-left">{ member.wins + member.losses } GP</td>
                <td>{ member.wins } - { member.losses } - { member.ties }</td>
            </tr>
        </tbody>
    </table>
{/if}