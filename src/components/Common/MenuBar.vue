<template>
    <sui-menu>
      <sui-menu-item>
        <router-link to="/">Accueil</router-link>
      </sui-menu-item>
      <sui-dropdown item icon="dropdown" text="Compétences">
        <sui-dropdown-menu>
          <sui-dropdown-item>
            <router-link to="/skills">Techniques</router-link>
          </sui-dropdown-item>
          <sui-dropdown-item>
            Humaines
          </sui-dropdown-item>
        </sui-dropdown-menu>
      </sui-dropdown>
      <sui-menu-item>
        <router-link to="/work">Réalisations</router-link>
      </sui-menu-item>
      <sui-menu-item>
        <router-link to="/">CV</router-link>
      </sui-menu-item>
    </sui-menu>
</template>
<script>
export default {
  name: 'MenuBar'
}
</script>
<style scoped>
  .item {
    font-family: "Times new Roman";
    font-size: 16px;
  }
</style>
