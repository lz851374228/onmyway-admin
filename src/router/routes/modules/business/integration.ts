import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const integration: AppRouteModule = {
  path: '/integration',
  name: 'Integration',
  component: LAYOUT,
  redirect: '/integration/developProjectCharter',
  meta: {
    orderNo: 1000,
    icon: 'ion:settings-outline',
    title: t('routes.business.integration.moduleName'),
  },
  children: [
    {
      path: 'developProjectCharter',
      name: 'DevelopProjectCharter',
      meta: {
        title: t('routes.business.integration.developProjectCharter'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'developProjectManagementPlan',
      name: 'DevelopProjectManagementPlan',
      meta: {
        title: t('routes.business.integration.developProjectManagementPlan'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'guideAndManageProjectWork',
      name: 'GuideAndManageProjectWork',
      meta: {
        title: t('routes.business.integration.guideAndManageProjectWork'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'manageProjectKnowledge',
      name: 'ManageProjectKnowledge',
      meta: {
        title: t('routes.business.integration.manageProjectKnowledge'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'monitorAndControlProjectWork',
      name: 'MonitorAndControlProjectWork',
      meta: {
        title: t('routes.business.integration.monitorAndControlProjectWork'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'performIntegratedChangeControl',
      name: 'PerformIntegratedChangeControl',
      meta: {
        title: t('routes.business.integration.performIntegratedChangeControl'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'closeProjectOrPhase',
      name: 'CloseProjectOrPhase',
      meta: {
        title: t('routes.business.integration.closeProjectOrPhase'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
  ],
};

export default integration;
