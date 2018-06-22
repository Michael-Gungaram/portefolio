<template>
    <div id="work" class="ui piled segment">
        <sui-card-group :items-per-row="3">
            <sui-card>
                <sui-dimmer-dimmable>
                <img src="../../assets/eh-logo.png" />
                    <sui-dimmer blurring :active="false">
                        <sui-button inverted>Voir la suite...</sui-button>
                    </sui-dimmer>
                </sui-dimmer-dimmable>
                <sui-card-content>
                    <sui-card-header>Le projet d'une vie</sui-card-header>
                        <sui-card-meta>Un bon projet...</sui-card-meta>
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-dimmer-dimmable>
                <img src="../../assets/eh-logo.png" />
                    <sui-dimmer blurring :active="false">
                        <sui-button inverted>Voir la suite...</sui-button>
                    </sui-dimmer>
                </sui-dimmer-dimmable>
                <sui-card-content>
                    <sui-card-header>Le projet d'une vie</sui-card-header>
                        <sui-card-meta>Un bon projet...</sui-card-meta>
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-dimmer-dimmable>
                <img src="../../assets/eh-logo.png" />
                    <sui-dimmer blurring :active="false">
                        <sui-button inverted>Voir la suite...</sui-button>
                    </sui-dimmer>
                </sui-dimmer-dimmable>
                <sui-card-content>
                    <sui-card-header>Le projet d'une vie</sui-card-header>
                        <sui-card-meta>Un bon projet...</sui-card-meta>
                </sui-card-content>
            </sui-card>
        </sui-card-group>
    </div>
</template>
<script>
export default {
  name: 'work'
}
</script>
<style scoped>

</style>
