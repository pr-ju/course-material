import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "http://eloquentjavascript.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://github.com/lydiahallie/javascript-questions#javascript-questions",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://github.com/denysdovhan/wtfjs#-motivation",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://www.ecma-international.org/publications/standards/Ecma-262.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createBaseVNode(
      "h1",
      {
        id: "javascript-basics",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#javascript-basics",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" JavaScript Basics")
      ],
      -1
      /* HOISTED */
    )),
    _cache[9] || (_cache[9] = createBaseVNode(
      "p",
      null,
      "Learn the basics in JavaScript.",
      -1
      /* HOISTED */
    )),
    _cache[10] || (_cache[10] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/Zezsy9FTGjw",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[11] || (_cache[11] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="javascript-basics.pdf">javascript-basics.pdf</a></li><li><a href="javascript-basics.pptx">javascript-basics.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Eloquent JavaScript 3rd edition")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[1] || (_cache[1] = createTextVNode(": ")),
        _cache[2] || (_cache[2] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Chapter 1: Values, Types, and Operators"),
            createBaseVNode("li", null, "Chapter 2: Program Structure"),
            createBaseVNode("li", null, "Chapter 3: Functions"),
            createBaseVNode("li", null, "Chapter 4: Data structures: Objects and Arrays"),
            createBaseVNode("li", null, "Chapter 5: Higher-Order Functions")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        _cache[5] || (_cache[5] = createTextVNode("If you like learning (the weird parts of) JavaScript through examples, the following resources could be good for you, but probably not the best resources to learn the entire language: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_2, [
              _cache[3] || (_cache[3] = createTextVNode("JavaScript Questions")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_3, [
              _cache[4] || (_cache[4] = createTextVNode("What the f*ck JavaScript?")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_4, [
          _cache[6] || (_cache[6] = createTextVNode("ECMAScript specification")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[7] || (_cache[7] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "You are not expected to read it, but do be aware of that they do exist, and if you ever is uncertain about something related to JS, this is the best place to look it up.")
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
