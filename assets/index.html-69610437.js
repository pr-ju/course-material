import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://jakearchibald.com/2021/cors/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://www.w3.org/TR/cors/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode(
      "h1",
      {
        id: "sop-and-cors",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sop-and-cors",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" SOP and CORS")
      ],
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("So, in your client-side JavaScript code you want to send HTTP requests to another website/a REST API? To bad that the Same-Origin Policy tries to prevent you from doing that. But don't worry, Cross-Origin Resource Sharing gives you the tools you need to trump it. And here you'll also learn how you can use the "),
        createBaseVNode("code", null, "XMLHttpRequest"),
        createTextVNode(" object to send the requests.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createBaseVNode(
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
    _cache[8] || (_cache[8] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="sop-and-cors.pdf">sop-and-cors.pdf</a></li><li><a href="sop-and-cors.pptx">sop-and-cors.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("How to win at CORS")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[1] || (_cache[1] = createTextVNode("Cross-Origin Resource Sharing (CORS)")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "This is a bit more technical to read, but it explains all the details.")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[3] || (_cache[3] = createTextVNode("CORS Specification")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[4] || (_cache[4] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "This is very technical but it describes how every little detail works (probably not that interesting to you, but do be aware of its existence).")
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
