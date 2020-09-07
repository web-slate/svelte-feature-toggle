<script>
  export let type = "text";
  export let id;
  export let label;
</script>

<style>
  label {
    width: 160px;
    display: inline-block;
  }
</style>

<div><label for={id}>{#if label}{label}: {/if}</label> <input {type} {id} /> <br /> <br /></div>
