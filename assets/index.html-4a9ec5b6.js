import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode(
      "h1",
      {
        id: "python-introduction",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#python-introduction",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Python Introduction")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("In this lecture we take our first look at the programming language Python (without too many details) and go through how we can write Python code in files and then ask the ")),
      _cache[2] || (_cache[2] = createBaseVNode(
        "code",
        null,
        "python",
        -1
        /* HOISTED */
      )),
      _cache[3] || (_cache[3] = createTextVNode(" program to execute the Python code in a file for us. We also go through how we can write and run Python code using the Integrated Development Environment ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("Visual Studio Code")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[4] || (_cache[4] = createTextVNode("."))
    ]),
    _cache[6] || (_cache[6] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/JGb8JWf1QDg",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createBaseVNode(
      "h2",
      {
        id: "lecture-material",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#lecture-material",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Lecture material")
      ],
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, [
          createBaseVNode("a", { href: "python-introduction.pdf" }, "python-introduction.pdf")
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("a", { href: "python-introduction.pptx" }, "python-introduction.pptx")
        ])
      ],
      -1
      /* HOISTED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
