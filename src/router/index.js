import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import TechnicalSkills from '@/components/Skills/TechnicalSkills';
import JavaScriptView from '@/components/Skills/JavaScript/JavaScriptView';
import TypeScriptView from '@/components/Skills/TypeScript/TypeScriptView';
import AngularView from '@/components/Skills/Angular/AngularView';
import AutonomyView from '@/components/Skills/Autonomy/AutonomyView';
import CommunicationView from '@/components/Skills/Communication/CommunicationView';
import EmpathyView from '@/components/Skills/Empathy/EmpathyView';
import TechWatchingView from '@/components/Skills/TechWatching/TechWatchingView';
import VueView from '@/components/Skills/Vue/VueView';
import AspView from '@/components/Skills/ASP/ASPView';
import SoftSkills from '@/components/Skills/SoftSkills';
import Work from '@/components/Work/Work';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/skills/technical',
      name: 'TechnicalSkills',
      component: TechnicalSkills
    },
    {
      path: '/skills/technical/js',
      name: 'JavaScript',
      component: JavaScriptView
    },
    {
      path: '/skills/technical/ts',
      name: 'TypeScript',
      component: TypeScriptView
    },
    {
      path: '/skills/technical/angular',
      name: 'Angular',
      component: AngularView
    },
    {
      path: '/skills/technical/vue',
      name: 'Vue',
      component: VueView
    },
    {
      path: '/skills/technical/aspnet',
      name: 'Aspnet',
      component: AspView
    },
    {
      path: '/skills/soft',
      name: 'SoftSkills',
      component: SoftSkills
    },
    {
      path: '/skills/soft/autonomy',
      name: 'autonomy',
      component: AutonomyView
    },
    {
      path: '/skills/soft/communication',
      name: 'communication',
      component: CommunicationView
    },
    {
      path: '/skills/soft/empathy',
      name: 'empathy',
      component: EmpathyView
    },
    {
      path: '/skills/soft/techwatching',
      name: 'techwatching',
      component: TechWatchingView
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    }
  ]
})
