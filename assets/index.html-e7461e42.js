import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://expressjs.com/en/guide/routing.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createBaseVNode(
      "h1",
      {
        id: "express-basics",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#express-basics",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Express Basics")
      ],
      -1
      /* HOISTED */
    )),
    _cache[3] || (_cache[3] = createBaseVNode(
      "p",
      null,
      "Why write a lot of code in Node.js when we can write a little using Express?",
      -1
      /* HOISTED */
    )),
    _cache[4] || (_cache[4] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/SsiYfy3yrbw",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="express-basics.pdf">express-basics.pdf</a></li><li><a href="express-basics.pptx">express-basics.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Express' website")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[1] || (_cache[1] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("Guide "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Routing")
              ])
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
