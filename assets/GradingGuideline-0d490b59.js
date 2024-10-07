import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, t as toDisplayString } from "./app-dfab54cf.js";
const GradingGuideline_vue_vue_type_style_index_0_scoped_16159c4d_lang = "";
const _sfc_main = {
  props: {
    gradeU: String,
    grade3: String,
    grade4: String,
    grade5: String
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", null, [
    createBaseVNode("tbody", null, [
      createBaseVNode("tr", null, [
        createBaseVNode("td", null, [
          _cache[0] || (_cache[0] = createBaseVNode(
            "b",
            null,
            "Grade U",
            -1
            /* HOISTED */
          )),
          _cache[1] || (_cache[1] = createBaseVNode(
            "br",
            null,
            null,
            -1
            /* HOISTED */
          )),
          createTextVNode(
            " " + toDisplayString($props.gradeU),
            1
            /* TEXT */
          )
        ]),
        createBaseVNode("td", null, [
          _cache[2] || (_cache[2] = createBaseVNode(
            "b",
            null,
            "Grade 3",
            -1
            /* HOISTED */
          )),
          _cache[3] || (_cache[3] = createBaseVNode(
            "br",
            null,
            null,
            -1
            /* HOISTED */
          )),
          createTextVNode(
            " " + toDisplayString($props.grade3),
            1
            /* TEXT */
          )
        ]),
        createBaseVNode("td", null, [
          _cache[4] || (_cache[4] = createBaseVNode(
            "b",
            null,
            "Grade 4",
            -1
            /* HOISTED */
          )),
          _cache[5] || (_cache[5] = createBaseVNode(
            "br",
            null,
            null,
            -1
            /* HOISTED */
          )),
          createTextVNode(
            " " + toDisplayString($props.grade4),
            1
            /* TEXT */
          )
        ]),
        createBaseVNode("td", null, [
          _cache[6] || (_cache[6] = createBaseVNode(
            "b",
            null,
            "Grade 5",
            -1
            /* HOISTED */
          )),
          _cache[7] || (_cache[7] = createBaseVNode(
            "br",
            null,
            null,
            -1
            /* HOISTED */
          )),
          createTextVNode(
            " " + toDisplayString($props.grade5),
            1
            /* TEXT */
          )
        ])
      ])
    ])
  ]);
}
const GradingGuideline = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-16159c4d"], ["__file", "GradingGuideline.vue"]]);
export {
  GradingGuideline as default
};
