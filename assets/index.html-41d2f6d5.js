import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://ju.se/en/personinfo.html?sign=LarPet",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://ju.se/en.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://vuepress.vuejs.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://git-scm.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://github.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[13] || (_cache[13] = createBaseVNode(
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
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode("This is a website that ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("Peter Larsson-Green")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[3] || (_cache[3] = createTextVNode(" started for course material at ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[1] || (_cache[1] = createTextVNode("Jönköping University")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[4] || (_cache[4] = createTextVNode("."))
    ]),
    _cache[14] || (_cache[14] = createBaseVNode(
      "h2",
      {
        id: "acknowledgements-❤️",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#acknowledgements-❤️",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Acknowledgements ❤️")
      ],
      -1
      /* HOISTED */
    )),
    _cache[15] || (_cache[15] = createBaseVNode(
      "p",
      null,
      "Thank you everyone that have contributed to the technologies making this website possible:",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[5] || (_cache[5] = createTextVNode("VuePress")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[6] || (_cache[6] = createTextVNode(" - The Static Site Generator this website is implemented in"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_4, [
          _cache[7] || (_cache[7] = createTextVNode("Git")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[8] || (_cache[8] = createTextVNode(" - The Version Control System used to manage the source code"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_5, [
          _cache[9] || (_cache[9] = createTextVNode("GitHub")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[10] || (_cache[10] = createTextVNode(" - The Software Development Platform hosting the source code for this website and the website itself"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_6, [
          _cache[11] || (_cache[11] = createTextVNode("Visual Studio Code")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[12] || (_cache[12] = createTextVNode(" - The Code Editor I use"))
      ])
    ]),
    _cache[16] || (_cache[16] = createBaseVNode(
      "p",
      null,
      "All of these technologies are available for free (to some extent), just as this website. Thank you!",
      -1
      /* HOISTED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
