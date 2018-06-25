<template>
    <div id="soft-skills" class="ui pilled segment">
        <div class="ui divided items">
            <autonomy/>
            <communication/>
            <empathy/>
            <techwatching/>
        </div>
    </div>
</template>
<script>
    import AutonomyCard from './Autonomy/AutonomyCard';
    import CommunicationCard from './Communication/CommunicationCard';
    import EmpathyCard from './Empathy/EmpathyCard';
    import TechWatchingCard from './TechWatching/TechWatchingCard';

    export default {
        components: {
            'autonomy': AutonomyCard,
            'communication': CommunicationCard,
            'empathy': EmpathyCard,
            'techwatching': TechWatchingCard
        }
    }
</script>

