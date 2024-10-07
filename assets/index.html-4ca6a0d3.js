import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createStaticVNode('<h1 id="welcome" tabindex="-1"><a class="header-anchor" href="#welcome" aria-hidden="true">#</a> Welcome!</h1><p>Welcome to <em>Introduction to Script Programming</em>! In this course you&#39;ll learn how to create small programs in Python your computer can execute.</p><p>This website will be used to host the course material. Canvas will primarily be used to:</p><ul><li>Send information to you through announcements (be sure to have your global notification settings or your course notification settings enabled on Canvas)</li><li>Organize you into lab groups (see the People page on Canvas)</li><li>Keep track of your progress in the course (passed lab assignments) (see the Assignments page and the Grades page on Canvas)</li></ul><h2 id="two-course-codes" tabindex="-1"><a class="header-anchor" href="#two-course-codes" aria-hidden="true">#</a> Two course codes!</h2><p>This course is primarily given for two programs, and they have different codes for this course, as shown in the table below.</p><table><thead><tr><th>Program</th><th>Course Code</th></tr></thead><tbody><tr><td>Sustainable Building Information Management</td><td>TSTG17</td></tr><tr><td>IT Infrastructure and Network Design</td><td rowspan="3">TSPG17</td></tr><tr><td>User Experience Design (electable)</td></tr><tr><td>All other students (electable)</td></tr></tbody></table><p>At the moment, the only difference between these two are some of the problems that should be solved in the laboratory work. Those problems have been pointed out in the laboratory work instructions.</p><h2 id="information-to-old-students" tabindex="-1"><a class="header-anchor" href="#information-to-old-students" aria-hidden="true">#</a> Information to old students</h2>', 9)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("If you're an old student that took this course a previous year but still have some examination tests left to pass you take those tests as they are described this year. The old old Canvas Room won't be used any more, so join this year's Canvas Room, so we can keep track of your progress in the course this year there. If you aren't registered for the course this year, ask the course manager to invite you to the Canvas Room by sending him an email message based on the template in ")),
      createVNode(_component_FigureNumber),
      _cache[1] || (_cache[1] = createTextVNode(" below with the topic ")),
      _cache[2] || (_cache[2] = createBaseVNode(
        "code",
        null,
        "Invitation to Canvas Room",
        -1
        /* HOISTED */
      )),
      _cache[3] || (_cache[3] = createTextVNode("."))
    ]),
    createVNode(_component_Figure, { caption: "Template for email message to be invited to a Canvas Room. Replace XXX with your own value, and only keep the course you want to be invited to." }, {
      default: withCtx(() => _cache[4] || (_cache[4] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Hi!\n\nI need to be invited to a Canvas Room.\n\nMy JU email address is:\nXXX@student.ju.se\n\nThe Canvas Room is:\nTSTG17/TSPG17 2022 Introduction to Script Programming\nhttps://ju.instructure.com/courses/6982\n\nThanks!\n")
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    })
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
