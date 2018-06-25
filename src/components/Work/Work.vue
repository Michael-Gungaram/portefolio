<template>
    <div id="work" class="ui piled segment">
        <sui-card-group :items-per-row="3">
            <sui-card>
                <sui-dimmer-dimmable>
                    <img src="../../assets/nxt.jpg" />
                    <sui-dimmer blurring :active="false">
                        <sui-button inverted>Voir la suite...</sui-button>
                    </sui-dimmer>
                </sui-dimmer-dimmable>
                <sui-card-content>
                    <router-link to="/work/nxt">
                        <sui-card-header>Nxt Office</sui-card-header>
                    </router-link>
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
                    <router-link to="/work/roc">
                        <sui-card-header>ROC</sui-card-header>
                    </router-link>
                        <sui-card-meta>Un bon projet...</sui-card-meta>
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-dimmer-dimmable>
                <img src="../../assets/bmb.jpg" />
                    <sui-dimmer blurring :active="false">
                        <sui-button inverted>Voir la suite...</sui-button>
                    </sui-dimmer>
                </sui-dimmer-dimmable>
                <sui-card-content>
                    <router-link to="/work/bmb">
                        <sui-card-header>Be My Bee</sui-card-header>
                    </router-link>
                        <sui-card-meta>Un bon projet...</sui-card-meta>
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-dimmer-dimmable>
                <img src="../../assets/sic.jpg" />
                    <sui-dimmer blurring :active="false">
                        <sui-button inverted>Voir la suite...</sui-button>
                    </sui-dimmer>
                </sui-dimmer-dimmable>
                <sui-card-content>
                    <router-link to="/work/sic">
                        <sui-card-header>Single Invoice Cover</sui-card-header>
                    </router-link>
                        <sui-card-meta>Un bon projet...</sui-card-meta>
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-dimmer-dimmable>
                <img src="../../assets/inv.png" />
                    <sui-dimmer blurring :active="false">
                        <sui-button inverted>Voir la suite...</sui-button>
                    </sui-dimmer>
                </sui-dimmer-dimmable>
                <sui-card-content>
                    <router-link to="/work/invback">
                        <sui-card-header>InvBack</sui-card-header>
                    </router-link>
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
    img {
        border-style: none;
        width: 235px;
        height: 235px;
        padding: 12px;
    }
    .header {
        cursor: pointer;
    }
</style>
