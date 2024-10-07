import { _ as _export_sfc, o as openBlock, c as createElementBlock, g as createCommentVNode, a as createBaseVNode } from "./app-dfab54cf.js";
const FigureNumber_vue_vue_type_style_index_0_scoped_b8e13602_lang = "";
const _sfc_main = {
  props: {
    previous: {
      type: Boolean,
      default: false
    }
  }
};
const _hoisted_1 = { class: "whole" };
const _hoisted_2 = {
  key: 0,
  class: "decrementFigureNumber"
};
const _hoisted_3 = {
  key: 1,
  class: "incrementFigureNumber"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", _hoisted_1, [
    $props.previous ? (openBlock(), createElementBlock("span", _hoisted_2)) : createCommentVNode("v-if", true),
    _cache[0] || (_cache[0] = createBaseVNode(
      "span",
      { class: "figureNumber" },
      null,
      -1
      /* HOISTED */
    )),
    $props.previous ? (openBlock(), createElementBlock("span", _hoisted_3)) : createCommentVNode("v-if", true)
  ]);
}
const FigureNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b8e13602"], ["__file", "FigureNumber.vue"]]);
export {
  FigureNumber as default
};
