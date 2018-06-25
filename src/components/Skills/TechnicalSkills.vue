<template>
    <div id="skills" class="ui piled segment">
        <div class="ui divided items">
            <javascript/>
            <typescript/>
            <vue/>
            <angular/>
            <aspnet/>
        </div>
    </div>
</template>
<script>
    import JavaScriptCard from './JavaScript/JavaScriptCard';
    import TypeScriptCard from './TypeScript/TypeScriptCard';
    import VueCard from './Vue/VueCard';
    import AngularCard from './Angular/AngularCard';
    import ASPCard from './ASP/ASPCard';

    export default {
        name: 'skills',
        components: {
            'javascript': JavaScriptCard,
            'typescript': TypeScriptCard,
            'vue': VueCard, 
            'angular': AngularCard,
            'aspnet': ASPCard
        }
    }
</script>
<style scoped>

</style>
