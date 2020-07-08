<script>
  import { onMount } from 'svelte'
  import jQuery from '../node_modules/jquery/dist/jquery.min';
  import gsap from "gsap";
  
  import Center from './Center.svelte'
  import Down   from './Down.svelte'
  import Up     from './Up.svelte'
  import Right  from './Right.svelte'
  import Left   from './Left.svelte'

  onMount(async () => {
    if (!window.jQuery) window.jQuery = jQuery
    window.jQuery = jQuery;
    await import('../public/navigation.js')
  })
</script>

<main role="main">

    <Center/>
    <Up/>
    <Right/>
    <Left/>
    <Down/>

</main>