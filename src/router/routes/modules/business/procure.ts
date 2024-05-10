import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const procure: AppRouteModule = {
  path: '/procure',
  name: 'Procure',
  component: LAYOUT,
  redirect: '/procure/planProcurementManagement',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.business.procure.moduleName'),
  },
  children: [
    {
      path: 'planProcurementManagement',
      name: 'PlanProcurementManagement',
      meta: {
        title: t('routes.business.procure.planProcurementManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'implementProcurement',
      name: 'ImplementProcurement',
      meta: {
        title: t('routes.business.procure.implementProcurement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'controlProcurement',
      name: 'ControlProcurement',
      meta: {
        title: t('routes.business.procure.controlProcurement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
  ],
};

export default procure;
