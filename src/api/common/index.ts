import {
  UploadApiResult,
  FileParams,
  FilePageParams,
  FilePageListGetResultModel,
} from './model/commonModel';
import { defHttp } from '/@/utils/http/axios';
import { UploadFileParams } from '/#/axios';

enum Api {
  Upload = '/basic-api/file/upload',
  Download = '/file/role/update',
  ReadRole = '/file/role/read',
  DelRole = '/file/role/del',
  ListByPage = '/file/getList',
}

/**
 * @description: Upload interface
 */
export function uploadApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void,
) {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: Api.Upload,
      onUploadProgress,
    },
    params,
  );
}

export const createFile = (params?: FileParams) =>
  defHttp.post<FileParams>(
    { url: Api.CreateRole, data: params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const updateFile = (params?: FileParams) =>
  defHttp.post<FileParams>(
    { url: Api.UpdateRole, data: params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const getFile = (params?: FileParams) =>
  defHttp.get<FileParams>({ url: Api.ReadRole, params });

export const delFile = (params?: FileParams) =>
  defHttp.get<FileParams>(
    { url: Api.DelRole, params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );

export const getFileListByPage = (params?: FilePageParams) =>
  defHttp.get<FilePageListGetResultModel>({ url: Api.ListByPage, params });
