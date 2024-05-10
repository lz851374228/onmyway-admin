import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const risk: AppRouteModule = {
  path: '/risk',
  name: 'Risk',
  component: LAYOUT,
  redirect: '/risk/planRiskManagement',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.business.risk.moduleName'),
  },
  children: [
    {
      path: 'planRiskManagement',
      name: 'PlanRiskManagement',
      meta: {
        title: t('routes.business.risk.planRiskManagement'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'identifyRisks',
      name: 'IdentifyRisks',
      meta: {
        title: t('routes.business.risk.identifyRisks'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'implementQualitativeRiskAnalysis',
      name: 'ImplementQualitativeRiskAnalysis',
      meta: {
        title: t('routes.business.risk.implementQualitativeRiskAnalysis'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'implementQuantitativeRiskAnalysis',
      name: 'ImplementQuantitativeRiskAnalysis',
      meta: {
        title: t('routes.business.risk.implementQuantitativeRiskAnalysis'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'planRiskResponse',
      name: 'PlanRiskResponse',
      meta: {
        title: t('routes.business.risk.planRiskResponse'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'implementRiskResponse',
      name: 'ImplementRiskResponse',
      meta: {
        title: t('routes.business.risk.implementRiskResponse'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
    {
      path: 'supervisionRisk',
      name: 'SupervisionRisk',
      meta: {
        title: t('routes.business.risk.supervisionRisk'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/business/integration/developProjectCharter/index.vue'),
    },
  ],
};

export default risk;
