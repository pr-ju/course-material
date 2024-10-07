import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://eloquentjavascript.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://how-i-experience-web-today.com/detail.html#",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createBaseVNode(
      "h1",
      {
        id: "document-object-model",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#document-object-model",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Document Object Model")
      ],
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("In the Browser Object Model there exists a special variable called "),
        createBaseVNode("code", null, "document"),
        createTextVNode(" that represents the webpage rendered on the screen (you can almost think of it as the HTML code). Through this variable we can listen for when the user interacts with the webpage (clicks on links, submit forms, etc.) and change the webpage dynamically (add/remove HTML elements).")
      ],
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/0J28CIRwdqM",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="document-object-model.pdf">document-object-model.pdf</a></li><li><a href="document-object-model.pptx">document-object-model.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("The following chapters from the course book ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Eloquent JavaScript")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createTextVNode(": ")),
        _cache[3] || (_cache[3] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Chapter 14: The Document Object Model"),
            createBaseVNode("li", null, "Chapter 15: Handling Events")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        _cache[5] || (_cache[5] = createTextVNode("Client-Side JavaScript should only be used to improve the user experience, never to make it worse! The following webpage is an excellent example of wrong usage of client-side JavaScript: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_2, [
              _cache[4] || (_cache[4] = createTextVNode("An article I want to read")),
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
