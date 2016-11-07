/**
 * 获取所有store.js中的状态
 * @param state
 * @returns {number}
 */

export function getCount (state) {
  console.log(state);
  return state.count
}

export const getCount1 = (state) => state.count;

export const getBucketName = (state) => state.bucket_name;

export const getBucketLists = (state) => state.bucket_lists;

export const getModalStatus = (state) => state.show_modal;

export const getRouterParams = (state) => state.router_params;

export const getRouterParamsEmptyFlag = (state) => state.isEmpty_router_params;

export const getCurrentRouter = (state) => state.currentRouter;
