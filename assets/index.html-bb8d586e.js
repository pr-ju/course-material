import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "http://interactivepython.org/courselib/static/thinkcspy/index.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://runestone.academy/runestone/books/published/thinkcspy/PythonModules/toctree.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode(
      "h1",
      {
        id: "python-modules",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#python-modules",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Python Modules")
      ],
      -1
      /* HOISTED */
    )),
    _cache[5] || (_cache[5] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("In Python we have global functions like "),
        createBaseVNode("code", null, "print()"),
        createTextVNode(" and "),
        createBaseVNode("code", null, "input()"),
        createTextVNode(" that we can use directly in our own code, but many other useful functions in Python are not global, but have instead been put into modules. In this lecture we take a look at what a module is and how we can use the functions in them.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "iframe",
      {
        width: "640",
        height: "360",
        src: "https://www.youtube.com/embed/f5RMgwgR988",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="python-modules.pdf">python-modules.pdf</a></li><li><a href="python-modules.pptx">python-modules.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[2] || (_cache[2] = createTextVNode("The following chapters in the book ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("How to Think Like a Computer Scientist: Interactive Edition")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[3] || (_cache[3] = createTextVNode(": ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_2, [
              _cache[1] || (_cache[1] = createTextVNode("5. Python Modules")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
