import NProgress from "nprogress";
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false });

export function onStart() {
  NProgress.start();
}

export function onComplete() {
  NProgress.done();
}
