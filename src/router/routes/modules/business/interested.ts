import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const interested: AppRouteModule = {
  path: '/interested',
  name: 'Interested',
  component: LAYOUT,
  redirect: '/interested/identifyRelevantParties',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.business.interested.moduleName'),
  },
  children: [
    {
      path: 'identifyRelevantParties',
      name: 'IdentifyRelevantParties',
      meta: {
        title: t('routes.business.interested.identifyRelevantParties'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'involvementOfPlanningStakeholders',
      name: 'InvolvementOfPlanningStakeholders',
      meta: {
        title: t('routes.business.interested.involvementOfPlanningStakeholders'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'manageStakeholderEngagement',
      name: 'ManageStakeholderEngagement',
      meta: {
        title: t('routes.business.interested.manageStakeholderEngagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'superviseTheParticipationOfRelevantParties',
      name: 'SuperviseTheParticipationOfRelevantParties',
      meta: {
        title: t('routes.business.interested.superviseTheParticipationOfRelevantParties'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
  ],
};

export default interested;
