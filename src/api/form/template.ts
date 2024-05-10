import {
  TemplateParams,
  TemplatePageParams,
  TemplateListGetResultModel,
  TemplateDataParams,
  TemplateDataPageParams,
  TemplateDataListGetResultModel,
} from './model/formModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CreateTemplate = '/form/template/create',
  UpdateTemplate = '/form/template/update',
  ReadTemplate = '/form/template/read',
  DelTemplate = '/form/template/del',
  TemplateList = '/form/template/getList',

  CreateTemplateData = '/form/templateData/create',
  UpdateTemplateData = '/form/templateData/update',
  ReadTemplateData = '/form/templateData/read',
  DelTemplateData = '/form/templateData/del',
  TemplateDataList = '/form/templateData/getList',
}
// 表单模板
export const createTemplate = (params?: TemplateParams) =>
  defHttp.post<TemplateListGetResultModel>({ url: Api.CreateTemplate, data: params });

export const updateTemplate = (params?: TemplateParams) =>
  defHttp.post<TemplateListGetResultModel>({ url: Api.UpdateTemplate, data: params });

export const getTemplate = (params?: TemplateParams) =>
  defHttp.get<TemplateListGetResultModel>({ url: Api.ReadTemplate, params });

export const delTemplate = (params?: TemplateParams) =>
  defHttp.get<TemplateListGetResultModel>({ url: Api.DelTemplate, params });

export const getTemplateList = (params?: TemplatePageParams) =>
  defHttp.post<TemplateListGetResultModel>({ url: Api.TemplateList, data: params });

// 表单模板数据
export const createTemplateData = (params?: TemplateDataParams) =>
  defHttp.post<TemplateDataListGetResultModel>({ url: Api.CreateTemplateData, data: params });

export const updateTemplateData = (params?: TemplateDataParams) =>
  defHttp.post<TemplateDataListGetResultModel>({ url: Api.UpdateTemplateData, data: params });

export const getTemplateData = (params?: TemplateDataParams) =>
  defHttp.get<TemplateDataListGetResultModel>({ url: Api.ReadTemplateData, params });

export const delTemplateData = (params?: TemplateDataParams) =>
  defHttp.get<TemplateDataListGetResultModel>({ url: Api.DelTemplateData, params });

export const getTemplateDataList = (params?: TemplateDataPageParams) =>
  defHttp.post<TemplateDataListGetResultModel>({ url: Api.TemplateDataList, data: params });
