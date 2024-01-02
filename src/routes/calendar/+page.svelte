<script>
  let selected;
</script>

<article>
  <header><h3>Calendar</h3></header>
  <p>TODO:</p>
  <select bind:value={selected}>
    <option value="" disabled selected>Area</option>
    <option value="austin">Austin</option>
    <option value="sf_bay">SF Bay</option>
    <option value="vancouver">Vancouver</option>
    <option value="all">All</option>
  </select>

  {#if !selected}
    <p>Please select an area</p>
  {:else}
    <h1>{selected}</h1>
    <p>TODO: calendar for {selected}</p>
    <ul>
      <li>Sidebar (for filers etc) -- below on mobile? hamburger?</li>
      <li>Calendar (https://github.com/vkurko/calendar)</li>
      <li>List view</li>
      <li>Location picker</li>
      <li>Filters:</li>
      <ul>
        <li>Time of day</li>
        <li>Dress code</li>
        <li>Effort level</li>
        <li>Location category (houseparty, restaurant, etc.)</li>
      </ul>
    </ul>
  {/if}

  <footer>TODO</footer>
</article>
