import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://en.wikipedia.org/wiki/Browser_Object_Model",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://eloquentjavascript.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://www.w3schools.com/js/js_window.asp",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createBaseVNode(
      "h1",
      {
        id: "client-side-javascript-bom",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#client-side-javascript-bom",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Client-side JavaScript & BOM")
      ],
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Web browsers can not only render HTML code styled with CSS, they can also execute JavaScript code. JavaScript is a really simple language that on its own can only be used for computations, so it does for example not contain any input/output functionality. But when our JavaScript code is executed by a web browser it will be executed in an environment where the web browser has added some extra goodies we can use. This environment is known as the "),
        createBaseVNode("em", null, "Browser Object Model"),
        createTextVNode(" (BOM).")
      ],
      -1
      /* HOISTED */
    )),
    _cache[9] || (_cache[9] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/j1AsL46MkN0",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[10] || (_cache[10] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="client-side-javascript-and-bom.pdf">client-side-javascript-and-bom.pdf</a></li><li><a href="client-side-javascript-and-bom.pptx">client-side-javascript-and-bom.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Browser Object Model")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[2] || (_cache[2] = createTextVNode("The following chapter from the course book ")),
        createBaseVNode("a", _hoisted_2, [
          _cache[1] || (_cache[1] = createTextVNode("Eloquent JavaScript")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[3] || (_cache[3] = createTextVNode(": ")),
        _cache[4] || (_cache[4] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Chapter 13: JavaScript and the Browser")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[5] || (_cache[5] = createTextVNode("JS Browser BOM")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[6] || (_cache[6] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("Do not only read about "),
              createBaseVNode("code", null, "JS Window"),
              createTextVNode(", but all "),
              createBaseVNode("code", null, "JS ****"),
              createTextVNode(" in the "),
              createBaseVNode("code", null, "JS Browser BOM"),
              createTextVNode(" sub-menu.")
            ])
          ],
          -1
          /* HOISTED */
        ))
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
