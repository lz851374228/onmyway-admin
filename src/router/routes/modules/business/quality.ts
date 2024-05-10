import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const quality: AppRouteModule = {
  path: '/quality',
  name: 'Quality',
  component: LAYOUT,
  redirect: '/quality/planningQualityManagement',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.business.quality.moduleName'),
  },
  children: [
    {
      path: 'planningQualityManagement',
      name: 'PlanningQualityManagement',
      meta: {
        title: t('routes.business.quality.planningQualityManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'managementQuality',
      name: 'ManagementQuality',
      meta: {
        title: t('routes.business.quality.managementQuality'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'controllingQuality',
      name: 'ControllingQuality',
      meta: {
        title: t('routes.business.quality.controllingQuality'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
  ],
};

export default quality;
