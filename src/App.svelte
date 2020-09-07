<script>
  import { setContext } from "svelte";
  import RegisterForm from "./modules/RegisterForm.svelte";
  import { setFeatureContext } from "./context";

  setContext("featureContext", setFeatureContext());
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <RegisterForm />
</main>
