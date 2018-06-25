<template>
    <div id="home" class="ui piled segment">
      <img src="../../assets/identity.png" alt="">
      <div class="introduction">
        <h2 class="title">Michaël Gungaram : un programmeur qu'ils disent</h2>
        <p>
          Bonjour ! Et bienvenue sur mon portefolio. Si j'ai décidé de créer ce dernier, c'est tout simplement que 
          l'école m'a littéralement forcé.
        </p>
        <p>
          Non, je plaisante. Au delà de cet aspect scolaire, l'école n'a été qu'une opportunité de moyen d'en réaliser
          un.
        </p>
        <p>
          À travers mes écrits, je voudrais un peu vous présenter mon travail de ces dernières années à travers
          mon parcours, ainsi que les différentes prises de recul que j'ai pu avoir.
        </p>
        <p>
          Pour ma part, j'ai découvert la programmation assez tardivement, vers les 20 ans. Néanmoins, cela fait
          un moment que je suis attiré par l'informatique. Cela remonte il un petit moment désormais.
        </p>
        <p>
          C'était en 2003. J'avais pris la décision d'avoir une petite configuration personnalisée, voyez le monstre
          de puissance : Pentium IV, 512 Mo de RAM, 70Go d'espace disque... Ne riez pas, pour l'époque, c'était la 
          Rolls des machines.
          En vérité, j'étais tellement passionné que je me disais que tous ces programmes que j'utilisais à l'époque
          étaient magiques (oui, bon, j'étais jeune et <span style="text-decoration: line-through;">con</span> naïf).
          De ce fait, c'était une idée que j'avais admise. Il y a un moment. Jusqu'à ce que je devienne technicien 
          informatique.
        </p>
        <p>
          C'est à ce moment que j'ai découvert l'informatique fondamentale ainsi que les bases de la programmation.
        </p>
        <p>
          J'ai commencé à mettre les mains dans le cambouis avec le langage C et la programmation fonctionnelle,
          Scheme et LISP en tête.
          J'aurais donc vu les différents aspects de l'informatique : celle de gestion, et celle plus "fondamentale".
        </p>
        <p>
          Même si je côtoie principalement l'informatique fondamentale aujourd'hui, je n'ai bien évidemment choisi
          aucun camp. En effet, on a souvent tendance à opposer ces deux domaines. Bien qu'ils ne soient pas 
          complémentaires dans l'absolu, il n'y a à mon sens aucune raison de les mettre en opposition.
        </p>
        <p>Je suis passionné d'informatique, cette science si particulière. Tout simplement.</p>
        <p>
          Vous trouverez mon portefolio sûrement simple dans son aspect. C'est voulu. Je souhaitais un certain 
          aspect journal me reflétant le plus fidèlement possible : une personnalité simple. Avec l'essentiel :
          un peu de mon histoire racontée avec modestie, avec ce que je sais faire, et les outilsque j'ai pu 
          côtoyer et utliser au cours de ma modeste expérience.
        </p>
        <p>
          Quoiqu'on en dise, l'ingénierie logicielle est une affaire humaine ; négliger cet aspect, c'est 
          condamner ce qu'on a crée. Sans attention vis-à-vis de l'utilisateur ou même du potentiel développeur
          qui relira nos écrits numériques, cela est littéralement scier la branche sur laquelle on est assis.
        </p>
        <p>
          Pour tout vous dire, ce n'est pas moi qui suis venu au développement front-end, c'est plutôt le
          développement front-end qui est venu à moi. En fait, je n'avais même pas conscience de son existence.
          Son côté émergent de l'époque m'a séduit. Malgré mon incompétence totale dans le domaine - j'étais
          davantage pris dans d'étincelle pour <router-link to="/skills/technical/aspnet">ASP .NET et le C#</router-link>-,
          je me suis lancé. Je me disais que c'était l'opportunité de découvrir quelque chose.
        </p>
        <p>
          Petit à petit, je me spécialisai dans ce domaine. Tant de problématiques tout à fait 
          passionnantes (sécurité, performance...), tant de choses à fabriquer, à pratiquer dans ce domaine...
          Vous l'aurez compris, ces perspectives m'enchantent. Je ne souhaite pas évoluer vers des domaines tels que le 
          management ou la gestion de projet ; mes ambitions sont principalement techniques, même si l'humain est
          toujours sous-jacent, souvenez-vous de ce que je disais. Être lead développeur un jour, là, oui, pourquoi 
          pas ! Être architecte et participer activement au projet, voilà ce qui m'intéresse : c'est le terrain qui
          me passionne (entendons-nous bien, la recherche scientifique en informatique me fascine aussi).
          Je m'efforce de devenir un "bon" programmeur en étant le plus consciencieux possible en accordant 
          une grande place à la rigueur et la précision. 
        </p>
        <p>Bonne lecture !</p>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style scoped>
  img {
    width: 150px;
    height: 150px;
    float: left;
    margin-right: 16px;
  }

  .introduction {
    margin-left: 16px;
    text-align: justify;
    font-size: 17px;
  }
</style>
