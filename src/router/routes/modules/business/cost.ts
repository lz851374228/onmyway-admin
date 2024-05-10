import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const cost: AppRouteModule = {
  path: '/cost',
  name: 'Cost',
  component: LAYOUT,
  redirect: '/cost/planCostManagement',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.business.cost.moduleName'),
  },
  children: [
    {
      path: 'planCostManagement',
      name: 'PlanCostManagement',
      meta: {
        title: t('routes.business.cost.planCostManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'estimatedCost',
      name: 'EstimatedCost',
      meta: {
        title: t('routes.business.cost.estimatedCost'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'budgeting',
      name: 'Budgeting',
      meta: {
        title: t('routes.business.cost.budgeting'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'controlCost',
      name: 'ControlCost',
      meta: {
        title: t('routes.business.cost.controlCost'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
  ],
};

export default cost;
