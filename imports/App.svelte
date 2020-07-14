<script>
  import { beforeUpdate } from 'svelte'
  import jQuery from '../node_modules/jquery/dist/jquery.min';
  import gsap   from "../node_modules/gsap/dist/gsap.min";
  
  import Loader from './Loader.svelte'
  import Center from './Center.svelte'
  import Down   from './Down.svelte'
  import Up     from './Up.svelte'
  import Right  from './Right.svelte'
  import Left   from './Left.svelte'


  beforeUpdate(async () => {
    if (!window.jQuery) window.jQuery = jQuery;
    window.jQuery = jQuery;
    await import('../public/jquery.js');
    await import('../public/gsap.js');
  })
</script>

  <Loader/>
<main role="main">
  <Center/>
  <Up/>
  <Right/>
  <Left/>
  <Down/>
</main>