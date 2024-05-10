import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const schedule: AppRouteModule = {
  path: '/schedule',
  name: 'Schedule',
  component: LAYOUT,
  redirect: '/schedule/planningProgressManagement',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.business.schedule.moduleName'),
  },
  children: [
    {
      path: 'planningProgressManagement',
      name: 'PlanningProgressManagement',
      meta: {
        title: t('routes.business.schedule.planningProgressManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'defineActivity',
      name: 'DefineActivity',
      meta: {
        title: t('routes.business.schedule.defineActivity'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'arrangeActivityOrder',
      name: 'ArrangeActivityOrder',
      meta: {
        title: t('routes.business.schedule.arrangeActivityOrder'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'estimateActivityDuration',
      name: 'EstimateActivityDuration',
      meta: {
        title: t('routes.business.schedule.estimateActivityDuration'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'developSchedule',
      name: 'DevelopSchedule',
      meta: {
        title: t('routes.business.schedule.developSchedule'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'controlSchedule',
      name: 'ControlSchedule',
      meta: {
        title: t('routes.business.schedule.controlSchedule'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
  ],
};

export default schedule;
