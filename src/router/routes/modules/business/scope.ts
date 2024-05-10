import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const scope: AppRouteModule = {
  path: '/scope',
  name: 'Scope',
  component: LAYOUT,
  redirect: '/scope/planScopeManagement',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.business.scope.moduleName'),
  },
  children: [
    {
      path: 'planScopeManagement',
      name: 'PlanScopeManagement',
      meta: {
        title: t('routes.business.scope.planScopeManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'collectRequirements',
      name: 'CollectRequirements',
      meta: {
        title: t('routes.business.scope.collectRequirements'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'defineScope',
      name: 'DefineScope',
      meta: {
        title: t('routes.business.scope.defineScope'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'createWBS',
      name: 'CreateWBS',
      meta: {
        title: t('routes.business.scope.createWBS'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'confirmScope',
      name: 'ConfirmScope',
      meta: {
        title: t('routes.business.scope.confirmScope'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'controlScope',
      name: 'ControlScope',
      meta: {
        title: t('routes.business.scope.controlScope'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
  ],
};

export default scope;
