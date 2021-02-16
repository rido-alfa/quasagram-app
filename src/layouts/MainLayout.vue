<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-grey-10 bg-white" bordered>
      <q-toolbar class="constrain">
        <q-btn flat round to="/camera" icon="las la-camera" size="18px" dense class="large-screen-only q-mr-sm" />
        <q-separator vertical inset spaced class="large-screen-only" />
        <q-toolbar-title class="text-bold text-grand-hotel"
          >Quasagram</q-toolbar-title
        >
        <q-btn flat round to="/" icon="las la-home" size="18px" dense class="large-screen-only" />

      </q-toolbar>
    </q-header>

    <q-footer class="bg-white small-screen-only" bordered>
      <q-tabs
        class="text-grey-10"
        active-color="grey-5"
        indicator-color="transparent"
      >
        <q-route-tab to="/" name="home" icon="las la-home" />
        <q-route-tab to="/camera" name="camera" icon="las la-camera" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  }
};
</script>

<style lang="sass">
.q-toolbar
  @media (min-width: $breakpoint-sm-min)
    height: 77px
.q-toolbar__title
  font-size: 30px
  @media (max-width: $breakpoint-xs-max)
    text-align: center
.q-footer
  .q-tab__icon
    font-size: 30px
</style>
