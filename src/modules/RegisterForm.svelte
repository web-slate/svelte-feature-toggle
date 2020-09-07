<script>
  import { getContext } from "svelte";
  import Field from "../components/Field.svelte";
  import CovidInfo from "../components/CovidInfo.svelte";

  // Extensions.
  import CoreFields from "./extensions/CoreFields.svelte";
  import USCustomFields from "./extensions/US/CustomFields.svelte";
  import SGCustomFields from "./extensions/SG/CustomFields.svelte";
  import INCustomFields from "./extensions/IN/CustomFields.svelte";

  const country = process.env.COUNTRY;
  const feature = getContext('featureContext');
  const getCovidInfo = feature && feature.getCovidInfo;

  let CustomFields = USCustomFields;

  if (country === "SG") {
    CustomFields = SGCustomFields;
  } else if (country === "IN") {
    CustomFields = INCustomFields;
  }
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<div id="register-form">
  <h1>Register Form</h1>
  <CoreFields />
  <CustomFields />
  {#if getCovidInfo}
    <CovidInfo />
  {/if}
  <Field id="submit" type="submit" />
</div>
