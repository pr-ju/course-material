import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://ju.instructure.com/courses/6797",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = { class: "custom-container warning" };
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  return openBlock(), createElementBlock("div", null, [
    _cache[11] || (_cache[11] = createBaseVNode(
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
    _cache[12] || (_cache[12] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Welcome to the course "),
        createBaseVNode("em", null, "Client-Server Communication"),
        createTextVNode("! In this course you'll learn how to create software systems consisting of two parts: a client application and a server application. It will be quite similar to how traditional web applications works, but in this course we will focus on implementing an API on the server any type of client can use to communicate with it (such as a smartphone application), and not only web browsers. And to practice on using APIs you'll also learn how to create Single-Page Applications using a frontend framework.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("This website will be used to host the course material only. If you take this course, you must also join ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("the course's Canvas room")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[2] || (_cache[2] = createTextVNode(". Students registered for this course should have been added to that page automatically. The Canvas room will be used to keep track of your progress in the course, to distribute you among the lab session groups, to handle submission of your project work, etc. You should only need to use Canvas when you are instructed to do that on this website (e.g. when submitting your project work). You will also receive information through announcements posted on Canvas, so you probably want to make sure notifications (through email or push notifications to the Canvas Android/iOS app) for those events are enable on Canvas."))
    ]),
    createBaseVNode("div", _hoisted_2, [
      _cache[10] || (_cache[10] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Note to old students",
        -1
        /* HOISTED */
      )),
      createBaseVNode("p", null, [
        _cache[3] || (_cache[3] = createTextVNode("If you're an old student that took this course a previous year but still have some examination tests left to pass you take those tests as they are described this year. The old Canvas Course won't be used any more, so join this year's Canvas Course, so we can keep track of your progress in the course this year there. If you aren't registered for the course this year, ask the course coordinator to invite you to the Canvas Course by sending an email message with the topic ")),
        _cache[4] || (_cache[4] = createBaseVNode(
          "code",
          null,
          "Invitation to Canvas Course",
          -1
          /* HOISTED */
        )),
        _cache[5] || (_cache[5] = createTextVNode(" to ")),
        _cache[6] || (_cache[6] = createBaseVNode(
          "code",
          null,
          "peter.larsson-green@ju.se",
          -1
          /* HOISTED */
        )),
        _cache[7] || (_cache[7] = createTextVNode(" with the content based on the template in ")),
        createVNode(_component_FigureNumber),
        _cache[8] || (_cache[8] = createTextVNode(" below."))
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
                createBaseVNode("code", null, "Hi!\n\nI need to be invited to a Canvas Course.\n\nMy JU email address:\nXXX@student.ju.se\n\nThe course name:\nClient-Server Communication\n\nThe Canvas course page:\nhttps://ju.instructure.com/courses/6797\n\nThanks!\n")
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
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
