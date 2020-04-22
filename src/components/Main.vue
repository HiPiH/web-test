

<template>
  <Layout>
    <h2 slot="body"> by Rajat S</h2>
    <h3 slot="footer">Technical Content Writer</h3>
  </Layout>
</template>


<script>

import Layout from './Layout';
import world1 from './reports/World1';

export default {
  name:'Main',
  components: {Layout},
 

  routes: [
        { path: '/world1', name:'main', component: world1}
    ]
  }

</script>
