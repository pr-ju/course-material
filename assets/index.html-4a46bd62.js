import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "http://left-pad.io/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode(
      "h1",
      {
        id: "npm",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#npm",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" npm")
      ],
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "p",
      null,
      "Use npm to install libraries/packages you can use in your Node.js application.",
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/nTI5XlD9jOk",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="npm.pdf">npm.pdf</a></li><li><a href="npm.pptx">npm.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Getting packages from the registry")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[1] || (_cache[1] = createTextVNode(" on npm's website"))
      ]),
      createBaseVNode("li", null, [
        _cache[4] || (_cache[4] = createTextVNode("In many cases it is better to write your own code instead of using many small npm packages. The following two pages gives an example of why: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_2, [
              _cache[2] || (_cache[2] = createTextVNode("How one programmer broke the internet by deleting a tiny piece of code")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_3, [
              _cache[3] || (_cache[3] = createTextVNode("left-pad.io")),
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
