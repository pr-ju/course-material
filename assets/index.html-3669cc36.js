import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://jakearchibald.com/2021/cors/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://www.netsparker.com/whitepaper-same-origin-policy/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/#",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://www.w3.org/TR/cors/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createBaseVNode(
      "h1",
      {
        id: "same-origin-policy-and-cross-origin-resource-sharing",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#same-origin-policy-and-cross-origin-resource-sharing",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Same-Origin Policy and Cross-Origin Resource Sharing")
      ],
      -1
      /* HOISTED */
    )),
    _cache[9] || (_cache[9] = createBaseVNode(
      "p",
      null,
      "AJAX brings great potentials to websites, but having client-side JavaScript code being able to send whichever HTTP requests it wants might not be a good idea. Let's take a look at why, and how web browsers limits which requests client-side JavaScript may send and which responses it may receive.",
      -1
      /* HOISTED */
    )),
    _cache[10] || (_cache[10] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/Pv6P8B_iJTc",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[11] || (_cache[11] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="sop-and-cors.pdf">sop-and-cors.pdf</a></li><li><a href="sop-and-cors.pptx">sop-and-cors.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("How to win at CORS")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[1] || (_cache[1] = createTextVNode("Whitepaper: The Definitive Guide to Same-origin Policy")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[2] || (_cache[2] = createTextVNode("Authoritative guide to CORS (Cross-Origin Resource Sharing) for REST APIs ")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[3] || (_cache[3] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "This is an easy to read introduction to CORS.")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_4, [
          _cache[4] || (_cache[4] = createTextVNode("Cross-Origin Resource Sharing (CORS)")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[5] || (_cache[5] = createTextVNode(" by Mozilla"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_5, [
          _cache[6] || (_cache[6] = createTextVNode("CORS Specification")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[7] || (_cache[7] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "(only if you want o learn all the details)")
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
