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
import NxTView from '@/components/Work/NxT/NxTView';
import InvBackView from '@/components/Work/InvBack/InvBackView';
import SicView from '@/components/Work/SIC/SicView';
import BmBView from '@/components/Work/BMB/BmBView';
import RocView from '@/components/Work/ROC/RocView';
import Work from '@/components/Work/Work';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/skills/technical',
      name: 'technicalSkills',
      component: TechnicalSkills
    },
    {
      path: '/skills/technical/js',
      name: 'javascript',
      component: JavaScriptView
    },
    {
      path: '/skills/technical/ts',
      name: 'typescript',
      component: TypeScriptView
    },
    {
      path: '/skills/technical/angular',
      name: 'angular',
      component: AngularView
    },
    {
      path: '/skills/technical/vue',
      name: 'vue',
      component: VueView
    },
    {
      path: '/skills/technical/aspnet',
      name: 'aspnet',
      component: AspView
    },
    {
      path: '/skills/soft',
      name: 'softSkills',
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
    },
    {
      path: '/work/nxt',
      name: 'nxt',
      component: NxTView
    },
    {
      path: '/work/invback', 
      name: 'invback',
      component: InvBackView
    },
    {
      path: '/work/roc',
      name: 'roc',
      component: RocView
    },
    {
      path: '/work/bmb',
      name: 'bmb',
      component: BmBView
    },
    {
      path: '/work/sic',
      name: 'sic',
      component: SicView
    }
  ]
})
