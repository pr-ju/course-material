import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://git-scm.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://git-scm.com/book/en/v2",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "http://git-school.github.io/visualizing-git/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://learngitbranching.js.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://rogerdudler.github.io/git-guide/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[15] || (_cache[15] = createBaseVNode(
      "h1",
      {
        id: "git",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#git",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Git")
      ],
      -1
      /* HOISTED */
    )),
    _cache[16] || (_cache[16] = createBaseVNode(
      "p",
      null,
      "This is not an actual course given at Jönköping University. Instead, it's an improvised mini course teaching you the basics in Git, something that every programmer should know these days. Git is very useful when you are multiple programmers working on the same project at the same time.",
      -1
      /* HOISTED */
    )),
    _cache[17] || (_cache[17] = createBaseVNode(
      "h2",
      {
        id: "learning-resources",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#learning-resources",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Learning Resources")
      ],
      -1
      /* HOISTED */
    )),
    _cache[18] || (_cache[18] = createBaseVNode(
      "p",
      null,
      "Here is a list of the resources used in this mini course. They will be introduced to you in the lectures.",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("The program ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("git")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[3] || (_cache[3] = createTextVNode("The book ")),
        createBaseVNode("a", _hoisted_2, [
          _cache[2] || (_cache[2] = createTextVNode("Pro Git")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[4] || (_cache[4] = createTextVNode(" by ")),
        _cache[5] || (_cache[5] = createBaseVNode(
          "em",
          null,
          "Scott Chacon",
          -1
          /* HOISTED */
        )),
        _cache[6] || (_cache[6] = createTextVNode(" and ")),
        _cache[7] || (_cache[7] = createBaseVNode(
          "em",
          null,
          "Ben Straub",
          -1
          /* HOISTED */
        )),
        _cache[8] || (_cache[8] = createTextVNode(" (available for free online in multiple different formats)"))
      ]),
      createBaseVNode("li", null, [
        _cache[10] || (_cache[10] = createTextVNode("The website ")),
        createBaseVNode("a", _hoisted_3, [
          _cache[9] || (_cache[9] = createTextVNode("Visualizing Git")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[12] || (_cache[12] = createTextVNode("The website ")),
        createBaseVNode("a", _hoisted_4, [
          _cache[11] || (_cache[11] = createTextVNode("Learn Git Branching")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[14] || (_cache[14] = createTextVNode("The website ")),
        createBaseVNode("a", _hoisted_5, [
          _cache[13] || (_cache[13] = createTextVNode("git - the simple guide")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _cache[19] || (_cache[19] = createStaticVNode('<h2 id="lectures" tabindex="-1"><a class="header-anchor" href="#lectures" aria-hidden="true">#</a> Lectures</h2><p>There is a progression in the lectures, so you are recommended to take them in order.</p><ol><li><a href="../../lectures/git-basics">Git Basics</a><br> Introduces you to what Git is and teaches you how to create and use a local Git repository that exists only on your own computer.</li><li><a href="../../lectures/git-branches">Git Branches</a><br> Explains what branches are and how you can create and work with them in a local Git repository that exists only on your own computer.</li><li><a href="../../lectures/git-synching">Git Synching</a><br> Explains how you can share your work with others by synching commits in your local Git repository with repositories that exist on other computers.</li></ol>', 3))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
