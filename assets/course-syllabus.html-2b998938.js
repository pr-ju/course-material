import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = ["href"];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode(
      "h1",
      {
        id: "course-syllabus",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#course-syllabus",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Course Syllabus")
      ],
      -1
      /* HOISTED */
    )),
    _cache[1] || (_cache[1] = createBaseVNode(
      "p",
      null,
      "Curious students can take a look at the course syllabus, which kind of is the interface for the course. The implementation of the course is described in the study guide.",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/client-server-communication/files/course-syllabus-2022.html"),
          target: "_blank"
        }, "Course syllabus 2022 (HTML)", 8, _hoisted_1)
      ])
    ])
  ]);
}
const courseSyllabus_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "course-syllabus.html.vue"]]);
export {
  courseSyllabus_html as default
};
