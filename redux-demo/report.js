export default function patchStoreToAddCrashReporting(store) {
  // 保存传入的store的dispatch方法
  let next = store.dispatch;

  // 重新dispatch方法
  store.dispatch = function dispatchAndReportErrors(action) {
    try {
      return next(action);
    } catch(err) {
      console.error("Caught an exception!", err);
      throw err;
    }
  }
}
