import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = ["href"];
const _hoisted_2 = ["href"];
const _hoisted_3 = ["href"];
const _hoisted_4 = ["href"];
const _hoisted_5 = ["href"];
const _hoisted_6 = ["href"];
const _hoisted_7 = ["href"];
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode(
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
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("Curious students can take a look at the course syllabus, which kind of is the interface for the course. The implementation of the course is described in the ")),
      createVNode(_component_RouterLink, { to: "/courses/introduction-to-script-programming/study-guide/" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode("Study Guide")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[2] || (_cache[2] = createTextVNode("."))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2022-tspg17.html"),
          target: "_blank"
        }, "Course syllabus 2022 TSPG17", 8, _hoisted_1)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2022-tstg17.html"),
          target: "_blank"
        }, "Course syllabus 2022 TSTG17", 8, _hoisted_2)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2021-tspg17.html"),
          target: "_blank"
        }, "Course syllabus 2021 TSPG17", 8, _hoisted_3)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2021-tstg17.html"),
          target: "_blank"
        }, "Course syllabus 2021 TSTG17", 8, _hoisted_4)
      ]),
      _cache[3] || (_cache[3] = createBaseVNode(
        "li",
        null,
        "Course not given 2020 for TSPG17",
        -1
        /* HOISTED */
      )),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2020-tstg17.html"),
          target: "_blank"
        }, "Course syllabus 2020 TSTG17", 8, _hoisted_5)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2019-tspg17.html"),
          target: "_blank"
        }, "Course syllabus 2019 TSPG17", 8, _hoisted_6)
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: _ctx.$withBase("courses/introduction-to-script-programming/files/course-syllabus-2019-tstg17.html"),
          target: "_blank"
        }, "Course syllabus 2019 TSTG17", 8, _hoisted_7)
      ])
    ])
  ]);
}
const courseSyllabus_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "course-syllabus.html.vue"]]);
export {
  courseSyllabus_html as default
};
