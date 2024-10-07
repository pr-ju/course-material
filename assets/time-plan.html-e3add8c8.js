import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_TimePlan = resolveComponent("TimePlan");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode(
      "h1",
      {
        id: "time-plan",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#time-plan",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Time Plan")
      ],
      -1
      /* HOISTED */
    )),
    _cache[1] || (_cache[1] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("The "),
        createBaseVNode("span", { style: { "background-color": "lime", "display": "inline-block", "padding": "0 8px", "font-weight": "bold" } }, "Lab Work"),
        createTextVNode(" and "),
        createBaseVNode("span", { style: { "background-color": "aqua", "display": "inline-block", "padding": "0 8px", "font-weight": "bold" } }, "Project Work"),
        createTextVNode(" column indicates what you are expected to work on each day.")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_TimePlan, {
      startDate: new Date(2022, 7, 29),
      columns: [
        { key: "t", name: "Tutorial", color: "orange" },
        { key: "s", name: "Lab session", color: "yellow" },
        { key: "l", name: "Lab Work", color: "lime" },
        { key: "p", name: "Project Work", color: "aqua" },
        { key: "i", name: "Important", color: "red" }
      ],
      rows: [
        // 35
        { t: "Introduction Lecture", l: "Part 1", p: "Part 1" },
        { t: "Tutorial 1: Vue", l: "Part 1", p: "Part 1" },
        { s: "Group 1", l: "Part 1", p: "Part 1", i: "Last day to email the course coordinator if you cannot find a project partner on your own" },
        { s: "Group 2", l: "Part 1", p: "Part 2" },
        { l: "Part 1", p: "Part 2" },
        {},
        {},
        // 36
        { l: "Part 2", p: "Part 2" },
        { t: "Tutorial 2: Vue + Async", l: "Part 2", p: "Part 2" },
        { s: "Group 1", l: "Part 2", p: "Part 2" },
        { s: "Group 2", l: "Part 2", p: "Part 2" },
        { l: "Part 2", p: "Part 2" },
        {},
        {},
        // 37
        { p: "Part 3" },
        { t: "Tutorial 3: REST in Express", p: "Part 3" },
        { s: "Group 1", p: "Part 3" },
        { s: "Group 2", p: "Part 4" },
        { p: "Part 4" },
        {},
        {},
        // 38
        { p: "Part 4", i: "Registration for the Written Examination opens" },
        { t: "Tutorial 4: SPA Requests", p: "Part 4" },
        { s: "Group 1", p: "Part 4" },
        { s: "Group 2", p: "Part 4" },
        { p: "Part 5" },
        {},
        {},
        // 39
        { p: "Part 5" },
        { t: "Tutorial 5: Security", p: "Part 5" },
        { s: "Group 1", p: "Part 5" },
        { s: "Group 2", p: "Part 5" },
        { p: "Part 6" },
        {},
        {},
        // 40
        { p: "Part 6" },
        { t: "Tutorial 6: Repetition", p: "Part 6" },
        { s: "Group 1", p: "Part 7" },
        { s: "Group 2", p: "Part 7" },
        { p: "Part 7" },
        { i: "Registration for the Written Examination closes around now" },
        {},
        // 41
        { p: "Part 8" },
        { t: "Sample Exam", p: "Part 8" },
        { s: "Group 1", p: "Part 8" },
        { s: "Group 2", p: "Part 8" },
        { p: "Part 8" },
        {},
        {},
        // 42
        { p: "Part 9, 10" },
        { p: "Part 9, 10" },
        { p: "Part 9, 10", i: "Written Exam" },
        { p: "Part 9, 10" },
        { p: "Part 9, 10" },
        {},
        { p: "Part 11", i: "Deadline to submit project for grading" }
      ]
    }, null, 8, ["startDate"])
  ]);
}
const timePlan_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "time-plan.html.vue"]]);
export {
  timePlan_html as default
};
