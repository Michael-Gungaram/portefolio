<template>
    <div class="ui green segment">
        <h2>Vue.js</h2>
        <h4>Vous avez Vue ?</h4>
        <p>
            Vue.js est un framework léger et facile à appréhender. Il permet de construire rapidement une application Web de manière souple.
        </p>
        <h4>Ma première expérience en tant que développeur front-end</h4>
        <p>
            Vue fut le premier framework que j'ai pu découvrir en tant que développeur front-end. Les librairies de cette catégorie, j'en ai 
            toujours eu peu à l'époque où je ne faisais que du C# avec ASP .NET. Et pourtant, malgré mon premier poste en entreprise qui était censé être du développement Back-End, j'ai finalement fait du front-End et j'ai dû me confronter à l'apprentissage de ce framework ; l'apprentissage fut un peu long car ce n'était plus le HTML que j'avais connu. 
            Nous n'étions plus dans la simple page HTML brute ; c'est à ce moment que je suis entré dans l'ère des composants Web. 
            <router-link to="/work/invback">InvBack</router-link>, application Web qui est un CMS fut écrit en Vue.js. J'en étais à l'initiative. 
        </p>
        <h4>Quel retour d'expérience avec cet outil ?</h4>
        <p>
            Vue.js est un framework très léger et de ce fait, facile à appréhender pour qui n'avait jamais réalisé du développement 
            logiciel front-end. Ce fut mon cas. Et je ne regrette pas d'avoir commencé à étudier ce framework en premier. C'est le meilleur moyen 
            pour se mettre le pied à l'étrier. 
            Je pense qu'il est toujours bien d'avoir un formateur pour ces différents concepts, notamment sur la notion de Web components, 
            et sur la façon de les abstraire. En tant que débutant, je n'avais pas suffisamment le recul et les formateurs sont là pour le donner. 
            Et c'est une chose que l'on acquiert avec l'expérience car il faut en avoir l'équilibre et ne pas abstraire à l'extrême. 
            Il faut bien avoir en tête ce que deviendra le projet à long terme en termes de taille, car Vue.js est très souple. C'est une question qui m'est 
            venue avec <router-link to="/work/nxt">NxT Office</router-link>, devenu conséquent en termes de fonctionnalité et de taille.
        </p>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
    .ui.green.segment {
        font-size: large;
    }
</style>
