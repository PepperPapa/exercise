export default function crashReporter(store) {
  // 保存传入的store的dispatch方法
  let next = store.dispatch;

  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndReportErrors(action) {
      try {
        return next(action);
      } catch(err) {
        console.error("Caught an exception!", err);
        throw err;
      }
    }
  }
}
