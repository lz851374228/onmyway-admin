import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export interface UploadApiResult {
  message: string;
  code: number;
  url: string;
}

export type FileParams = {
  id?: number;
  name?: string;
  code?: string;
  order?: number;
  status?: string;
  sys_role_menus?: array;
};

export type FilePageParams = BasicPageParams & FileParams;

export interface FileListItem {
  id: string;
  name: string;
  code: string;
  status: number;
  order: string;
  remark: string;
  created_at: string;
  sys_role_menus: array;
}

/**
 * @description: Request list return value
 */

export type FilePageListGetResultModel = BasicFetchResult<FileListItem>;
