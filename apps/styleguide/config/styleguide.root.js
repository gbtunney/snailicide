import store from "@snailicide/g-shopify-orm";

export default (previewComponent) => {
  // https://vuejs.org/v2/guide/render-function.html
  return {
    store,
    render(createElement) {
      return createElement(previewComponent);
    },
  };
};
