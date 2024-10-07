import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://tools.ietf.org/html/rfc7519",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://jwt.io/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode(
      "h1",
      {
        id: "json-web-tokens",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#json-web-tokens",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" JSON Web Tokens")
      ],
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "p",
      null,
      "So how do we implement access tokens? Well, we can implement them as JSON Web Tokens, let's take a look at how they work!",
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/mj8Ol51cmgg",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="json-web-tokens.pdf">json-web-tokens.pdf</a></li><li><a href="json-web-tokens.pptx">json-web-tokens.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("JSON Web Token Specification")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[1] || (_cache[1] = createTextVNode(", especially: ")),
        _cache[2] || (_cache[2] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createBaseVNode("ol", { start: "4" }, [
                createBaseVNode("li", null, "JWT Claims")
              ])
            ])
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[3] || (_cache[3] = createTextVNode("https://jwt.io")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[4] || (_cache[4] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Debugger (play around)"),
            createBaseVNode("li", null, "Introduction")
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
