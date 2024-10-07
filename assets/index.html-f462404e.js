import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _cache[10] || (_cache[10] = createBaseVNode(
      "h1",
      {
        id: "welcome",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#welcome",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Welcome!")
      ],
      -1
      /* HOISTED */
    )),
    _cache[11] || (_cache[11] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Welcome to the course "),
        createBaseVNode("em", null, "Android Development"),
        createTextVNode("! In this course you'll learn how to create Android applications.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[12] || (_cache[12] = createBaseVNode(
      "p",
      null,
      "This website will be used to host the course material only. Canvas will primarily be used to:",
      -1
      /* HOISTED */
    )),
    _cache[13] || (_cache[13] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "Send info to you through announcements (be sure to have your global notification settings or your course notification settings enabled)"),
        createBaseVNode("li", null, "Organize you into lab groups (see the People page on Canvas)"),
        createBaseVNode("li", null, "Keep track of your progress in the course (passed lab assignments) (see the Assignments page and the Grades page on Canvas)")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("Read the ")),
      createVNode(_component_RouterLink, { to: "/courses/android-development/study-guide/" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode("Study Guide")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[2] || (_cache[2] = createTextVNode(" for the details."))
    ]),
    _cache[14] || (_cache[14] = createBaseVNode(
      "h2",
      {
        id: "information-to-old-students",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#information-to-old-students",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Information to old students")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode("If you're an old student that took this course a previous year but still have some examination tests left to pass you take those tests as they are described this year. The old Canvas course won't be used any more, so join this year's Canvas course, so we can keep track of your progress in the course this year there. If you aren't registered for the course this year, ask the course coordinator to invite you to the Canvas course by sending him an email message based on the template in ")),
      createVNode(_component_FigureNumber),
      _cache[4] || (_cache[4] = createTextVNode(" below with the topic ")),
      _cache[5] || (_cache[5] = createBaseVNode(
        "code",
        null,
        "Invitation to Canvas Course",
        -1
        /* HOISTED */
      )),
      _cache[6] || (_cache[6] = createTextVNode(" to ")),
      _cache[7] || (_cache[7] = createBaseVNode(
        "code",
        null,
        "peter.larsson-green@ju.se",
        -1
        /* HOISTED */
      )),
      _cache[8] || (_cache[8] = createTextVNode("."))
    ]),
    createVNode(_component_Figure, { caption: "Template for email message to be invited to a Canvas Course. Replace XXX with your own value." }, {
      default: withCtx(() => _cache[9] || (_cache[9] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Hi!\n\nI need to be invited to a Canvas Course.\n\nMy JU email:\nXXX@student.ju.se\n\nThe course:\nTAGK19 Android Development https://ju.instructure.com/courses/6658/users\n\nThanks!\n")
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
