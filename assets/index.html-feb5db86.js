import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://tools.ietf.org/html/rfc6265",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://www.cookiebot.com/en/gdpr-cookies/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[11] || (_cache[11] = createBaseVNode(
      "h1",
      {
        id: "cookies-and-sessions",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#cookies-and-sessions",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Cookies and Sessions")
      ],
      -1
      /* HOISTED */
    )),
    _cache[12] || (_cache[12] = createBaseVNode(
      "p",
      null,
      "HTTP is a stateless protocol, how can the server remember information about clients (such as if they have logged in?)? Cookies and sessions to the rescue!",
      -1
      /* HOISTED */
    )),
    _cache[13] || (_cache[13] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/JtAy9OZAZ7k",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[14] || (_cache[14] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="cookies-and-sessions.pdf">cookies-and-sessions.pdf</a></li><li><a href="cookies-and-sessions.pptx">cookies-and-sessions.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("HTTP State Management Mechanism")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[1] || (_cache[1] = createTextVNode(": ")),
        _cache[2] || (_cache[2] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Read this if you want to learn the details about cookies.")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[3] || (_cache[3] = createTextVNode("HTTP cookies")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[4] || (_cache[4] = createTextVNode(": ")),
        _cache[5] || (_cache[5] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Until (including) Scope of cookies")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        _cache[10] || (_cache[10] = createTextVNode("About users' cookies consent: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _cache[7] || (_cache[7] = createTextVNode("EU's ")),
            createBaseVNode("a", _hoisted_3, [
              _cache[6] || (_cache[6] = createTextVNode("ePrivacy Directive")),
              createVNode(_component_ExternalLinkIcon)
            ]),
            _cache[8] || (_cache[8] = createTextVNode(' ("The Cookie Law")'))
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_4, [
              _cache[9] || (_cache[9] = createTextVNode("GDPR and cookies | What do I need to know? | Is my use of cookies compliant?")),
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
