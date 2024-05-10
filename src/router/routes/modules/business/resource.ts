import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const resource: AppRouteModule = {
  path: '/resource',
  name: 'Resource',
  component: LAYOUT,
  redirect: '/resource/planningResourceManagement',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.business.resource.moduleName'),
  },
  children: [
    {
      path: 'planningResourceManagement',
      name: 'PlanningResourceManagement',
      meta: {
        title: t('routes.business.resource.planningResourceManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'estimatingActivityResources',
      name: 'EstimatingActivityResources',
      meta: {
        title: t('routes.business.resource.estimatingActivityResources'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'accessingResources',
      name: 'AccessingResources',
      meta: {
        title: t('routes.business.resource.accessingResources'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'buildingTeam',
      name: 'BuildingTeam',
      meta: {
        title: t('routes.business.resource.buildingTeam'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'managementTeam',
      name: 'ManagementTeam',
      meta: {
        title: t('routes.business.resource.managementTeam'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'controlResources',
      name: 'ControlResources',
      meta: {
        title: t('routes.business.resource.controlResources'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
  ],
};

export default resource;
