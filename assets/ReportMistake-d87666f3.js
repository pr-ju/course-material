import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, j as renderSlot, g as createCommentVNode } from "./app-dfab54cf.js";
const ReportMistake_vue_vue_type_style_index_0_scoped_9b38b4f9_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "mistake" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "problem" };
const _hoisted_5 = { class: "solution" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("fieldset", _hoisted_1, [
      _cache[1] || (_cache[1] = createBaseVNode(
        "legend",
        null,
        "Mistake",
        -1
        /* HOISTED */
      )),
      renderSlot(_ctx.$slots, "mistake", {}, void 0, true),
      _ctx.$slots["example-1-bad"] ? (openBlock(), createElementBlock("table", _hoisted_2, [
        _cache[0] || (_cache[0] = createBaseVNode(
          "thead",
          null,
          [
            createBaseVNode("tr", null, [
              createBaseVNode("th", { class: "dont" }, "Don't"),
              createBaseVNode("th", { class: "do" }, "Do")
            ])
          ],
          -1
          /* HOISTED */
        )),
        createBaseVNode("tbody", null, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", null, [
              renderSlot(_ctx.$slots, "example-1-bad", {}, void 0, true)
            ]),
            createBaseVNode("td", null, [
              renderSlot(_ctx.$slots, "example-1-good", {}, void 0, true)
            ])
          ]),
          _ctx.$slots["example-2-bad"] ? (openBlock(), createElementBlock("tr", _hoisted_3, [
            createBaseVNode("td", null, [
              renderSlot(_ctx.$slots, "example-2-bad", {}, void 0, true)
            ]),
            createBaseVNode("td", null, [
              renderSlot(_ctx.$slots, "example-2-good", {}, void 0, true)
            ])
          ])) : createCommentVNode("v-if", true)
        ])
      ])) : createCommentVNode("v-if", true)
    ]),
    createBaseVNode("fieldset", _hoisted_4, [
      _cache[2] || (_cache[2] = createBaseVNode(
        "legend",
        null,
        "Problem",
        -1
        /* HOISTED */
      )),
      renderSlot(_ctx.$slots, "problem", {}, void 0, true)
    ]),
    createBaseVNode("fieldset", _hoisted_5, [
      _cache[3] || (_cache[3] = createBaseVNode(
        "legend",
        null,
        "Solution",
        -1
        /* HOISTED */
      )),
      renderSlot(_ctx.$slots, "solution", {}, void 0, true)
    ])
  ]);
}
const ReportMistake = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9b38b4f9"], ["__file", "ReportMistake.vue"]]);
export {
  ReportMistake as default
};
