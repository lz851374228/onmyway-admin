import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type TemplateParams = {
  id?: number;
  name?: string;
  type?: string;
  schemas?: number;
  status?: string;
  remark?: array;
};
export type TemplateDataParams = {
  id?: number;
  form_data?: string;
  addition?: string;
};

export type TemplatePageParams = BasicPageParams & TemplateParams;
export type TemplateDataPageParams = BasicPageParams & TemplateDataParams;

export interface TemplateListItem {
  id: string;
  name: string;
  type: string;
  remark: string;
  status: number;
  remark: string;
}
export interface TemplateDataListItem {
  id: string;
  form_data: string;
  addition: string;
}

/**
 * @description: Request list return value
 */
export type TemplateListGetResultModel = BasicFetchResult<TemplateListItem>;
export type TemplateDataListGetResultModel = BasicFetchResult<TemplateDataListItem>;
