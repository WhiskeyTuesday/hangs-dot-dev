<script>
  // This data will be imported (in the server file or whatever) from the api
  // (in rescript code hopefully) and then processed into the format
  // used here (mostly strings, condensing some fields, etc.)
  let data = { // TODO temporary hard-coded data
    title: 'NYE 1970',
    location: '', // TODO format?
    isVirtual: false,
    mapLink: '', // TODO format?
    hostAvatar: '', // TODO format?
    hostName: '',
    startTime: 0, // unix timestamp
    duration: 3600, // seconds
    timezone_code: 'CST',
    dressCode: 'Black-tie optional',
    effortLevel: 'Casual',
  };
</script>

<article>
  <header><h3>{data.title}</h3></header>
  <div class="card">
    <!-- TODO dynamic image? -->
    <img src="https://images.unsplash.com/photo-1691818410389-a4fba9594975?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <br>
    <br>
    {"{location}"}  {"{or_virtual}"}  {"{map_link_icon}"}'
    <br>
    <br>
    {"{host_avatar}"}
    {"{host_name}"}
    <br>
    <br>
    {"{description}"}
    {"{date}"}{"{time}"}{"{timezone}"}
    <br>
    <br>
    {"{description}"}
    {data.dressCode}
    {data.effortLevel}
  </div>
  <footer>
    <select>
      <option value="" disabled selected>RSVP</option>
      <option value="attending">Attending</option>
      <option value="maybe">Maybe</option>
      <option value="not_attending">Not Attending</option>
    </select>
  </footer>
</article>

<style>
  .card {
    border: 0.125rem solid var(--secondary);
    border-radius: 1rem;
    padding: 1rem;
  }

  .card > img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    border: 0.125rem solid var(--secondary);
  }
</style>
