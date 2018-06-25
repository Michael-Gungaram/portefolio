<template>
    <div class="ui raised segment">
        <h2>SIC</h2>
        <h4>Présentation</h4>
        <p>
            Single Invoice Cover, une API qui permet d'avoir différentes données sur diverses 
            entreprises afin d'établir une assurance sur une ou plusieurs factures. C'est un produit 
            qui, à l'heure actuelle a pris beaucoup d'ampleur et a permis l'assurance de plusieurs 
            millions de factures. 
        </p>
        <h4>Mon rôle et problématique de base</h4>
        <p>
            SIC, en tant qu'API, manquait de tests fonctionnels et les diverses peurs liées à 
            la mise en production de plusieurs versions de l'API, c'est comme cela qu'il a été décidé 
            d'écrire une infrastructures de tests afin d'être sereins à chaque déploiement en production 
            d'une nouvelle version du produit, puisque les tests seraient effectués.
            J'ai pu travailler <router-link to="/skills/soft/communication">avec 3 développeurs Back-End, ainsi qu'un chef de projet</router-link> afin d'écrire 
            des tests fonctionnels ciblés. Pour le moment, je les exécute manuellement afin de vérifier 
            si tout fonctionne correctement.

        </p>
        <h4>Quel recul avoir ?</h4>
        <p>
            J'ai pu réaliser de A à Z une architecture, dans un premier temps écrite en 
            <router-link to="/skills/technical/js">Vanilla JavaScipt</router-link>, puis dans un second temps, j'ai opté pour une réécriture totale 
            en <router-link to="/skills/technical/ts">Vanilla TypeScript</router-link>. Cela m'a permis d'avoir une architecture plus adaptée à ce que 
            je voulais créer. 
        </p>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .ui.raised.segment {
        font-size: large;
    }
</style>