import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, g as createCommentVNode } from "./app-dfab54cf.js";
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
        createBaseVNode("span", { style: { "background-color": "#00ffff75", "display": "inline-block", "padding": "0 8px", "font-weight": "bold" } }, "self study Exercises"),
        createTextVNode(" and "),
        createBaseVNode("span", { style: { "background-color": "#ffff0070", "display": "inline-block", "padding": "0 8px", "font-weight": "bold" } }, "Lab"),
        createTextVNode(" columns indicate what you are expected to work on each day.")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_TimePlan, {
      startDate: new Date(2023, 9, 23),
      columns: [
        { key: "t", name: "Lecture", color: "#ffa5009c" },
        //{key: "v", name: "Videos", color: "#00a4ff9c"},
        { key: "e", name: "Exercises", color: "#00ffff75" },
        { key: "l", name: "Due lab work", color: "#ffff0070" },
        { key: "g", name: "Lab session", color: "#80008082" }
        // {key: "i", name: "Important", color: "#ff000094"},#00a4ff9c
      ],
      rows: [
        // 1
        { t: "Kickoff", e: "Exercise 0" },
        // M
        { e: "Exercise 0", g: "Group 3" },
        // Tu
        { e: "Exercise 1", g: "Group 1, 2, 4" },
        // W
        { e: "Exercise 1" },
        { e: "Exercise 1" },
        {},
        {},
        // 2
        { l: "Lab 1" },
        // M
        { l: "Lab 1", g: "Group 1, 2, 3, 4" },
        //Tu
        { l: "Lab 1" },
        //W
        { e: "Exercise 2", t: "Q&A" },
        { e: "Exercise 2" },
        {},
        {},
        // 3
        { l: "Lab 2" },
        // M
        { l: "Lab 2", g: "Group 1, 2, 3, 4" },
        //Tu
        { l: "Lab 2" },
        //W
        { e: "Exercise 2", t: "Q&A" },
        { e: "Exercise 2" },
        {},
        {},
        // 4
        { l: "Lab 3" },
        // M
        { l: "Lab 3", g: "Group 1, 2, 3" },
        //Tu
        { l: "Lab 3" },
        //W
        { e: "Exercise 2", g: "Group 4", t: "Q&A" },
        { e: "Exercise 2" },
        {},
        {},
        // 5
        { l: "Lab 4" },
        // M
        { l: "Lab 4", g: "Group 1, 2, 3, 4" },
        //Tu
        { l: "Lab 4" },
        //W
        { e: "Exercise 2", t: "Q&A" },
        { e: "Exercise 2" },
        {},
        {},
        // 6
        { l: "Lab 5", g: "Group 4" },
        // M
        { l: "Lab 5", g: "Group 1, 2, 3" },
        //Tu
        { l: "Lab 5" },
        //W
        { e: "Exercise 2", t: "Q&A" },
        { e: "Exercise 2" },
        {},
        {},
        // 7
        { l: "Lab 6" },
        // M
        { l: "Lab 6", g: "Group 1, 2, 3, 4" },
        //Tu
        { l: "Lab 6" },
        //W
        { e: "Exercise 2", t: "Q&A" },
        { e: "Exercise 2" },
        {},
        {},
        // 8
        {},
        {},
        {},
        { t: "Written Exam" },
        {},
        {},
        {}
      ]
    }, null, 8, ["startDate"]),
    createCommentVNode(" There will also be an extra lab session in the first half of January where you can come and present your labs to a teacher (more details will be announced later). In addition to that, the course also includes two re-exam periods (not shown in the table above). ")
  ]);
}
const timePlan_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "time-plan.html.vue"]]);
export {
  timePlan_html as default
};
