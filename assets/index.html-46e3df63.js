import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://github.com/ericf/express-handlebars",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode(
      "h1",
      {
        id: "web-applications-in-express",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#web-applications-in-express",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Web Applications in Express")
      ],
      -1
      /* HOISTED */
    )),
    _cache[5] || (_cache[5] = createBaseVNode(
      "p",
      null,
      "Learn how to use the MVC pattern in Express to dynamically generate HTML code.",
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/u_HR0FcAs7c",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="web-applications-in-express.pdf">web-applications-in-express.pdf</a></li><li><a href="web-applications-in-express.pptx">web-applications-in-express.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Wikipedia's article on the MVC design pattern")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[1] || (_cache[1] = createTextVNode("Documentation for the npm package ")),
          _cache[2] || (_cache[2] = createBaseVNode(
            "code",
            null,
            "express-handlebars",
            -1
            /* HOISTED */
          )),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[3] || (_cache[3] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Don't learn it by heart, look up things when you need.")
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
