import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as renderSlot, a as createBaseVNode, t as toDisplayString } from "./app-dfab54cf.js";
const Figure_vue_vue_type_style_index_0_lang = "";
const Figure_vue_vue_type_style_index_1_scoped_82d3229c_lang = "";
const Figure_vue_vue_type_style_index_2_lang = "";
const _sfc_main = {
  props: {
    caption: String
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("figure", null, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true),
    createBaseVNode(
      "figcaption",
      null,
      toDisplayString($props.caption),
      1
      /* TEXT */
    ),
    _cache[0] || (_cache[0] = createBaseVNode(
      "span",
      { class: "incrementFigureNumber" },
      null,
      -1
      /* HOISTED */
    ))
  ]);
}
const Figure = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-82d3229c"], ["__file", "Figure.vue"]]);
export {
  Figure as default
};
