import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const communicate: AppRouteModule = {
  path: '/communicate',
  name: 'Communicate',
  component: LAYOUT,
  redirect: '/communicate/planningCommunicationManagement',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.business.communicate.moduleName'),
  },
  children: [
    {
      path: 'planningCommunicationManagement',
      name: 'PlanningCommunicationManagement',
      meta: {
        title: t('routes.business.communicate.planningCommunicationManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'managementCommunication',
      name: 'ManagementCommunication',
      meta: {
        title: t('routes.business.communicate.managementCommunication'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'superviseCommunication',
      name: 'SuperviseCommunication',
      meta: {
        title: t('routes.business.communicate.superviseCommunication'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
  ],
};

export default communicate;
