export default function patchStoreToAddLogging(store) {
  // 保存store.dispatch的原始dispatch函数
  let next = store.dispatch;

  // 重写dispatch方法
  store.dispatch = function dispatchAndLog(action) {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
  }  
}