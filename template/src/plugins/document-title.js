const isIosWechatClient = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && navigator.userAgent.match(/MicroMessenger/i);
const setTile = title => {
  document.title = title;
  // 对于IOS微信
  // http://blog.csdn.net/xuexiiphone/article/details/51966342
  if (isIosWechatClient) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.addEventListener("load", () => document.body.removeChild(iframe));
    iframe.src = "/favicon.ico";
    document.body.appendChild(iframe);
  }
};

export default {
  install (Vue, router, options = {}) {
    let filter = options.filter;
    let defTitle = options.defTitle || "";
    router.afterEach(route => {
      let title = route.meta.title;
      (title && filter) && (title = filter(title));
      setTile(title || defTitle);
    });
    class Doc {
      get title () {
        return document.title;
      }
      set title (value) {
        (value && filter) && (value = filter(value));
        setTile(value || defTitle);
      }
    }
    Vue.doc = Vue.prototype.$doc = new Doc();
  }
};

