import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://launchschool.com/books/working_with_apis",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://twobithistory.org/2020/06/28/rest.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://twobithistory.org/2017/09/21/the-rise-and-rise-of-json.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[19] || (_cache[19] = createBaseVNode(
      "h1",
      {
        id: "rest-api-basics",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#rest-api-basics",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" REST API Basics")
      ],
      -1
      /* HOISTED */
    )),
    _cache[20] || (_cache[20] = createBaseVNode(
      "p",
      null,
      "So, what's a REST API and what do we use them for?",
      -1
      /* HOISTED */
    )),
    _cache[21] || (_cache[21] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/MKknVV-_e4k",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[22] || (_cache[22] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="rest-api-basics.pdf">rest-api-basics.pdf</a></li><li><a href="rest-api-basics.pptx">rest-api-basics.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Working with Web APIs")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[1] || (_cache[1] = createTextVNode(" by Launch School: ")),
        _cache[2] || (_cache[2] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("Getting Started "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "(you do not need to install HTTPie)")
              ])
            ]),
            createBaseVNode("li", null, "API basics"),
            createBaseVNode("li", null, "Working with an API")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[3] || (_cache[3] = createTextVNode("Web API Design - Crafting Interfaces that Developers Love")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[4] || (_cache[4] = createTextVNode(" from Apigee: ")),
        _cache[5] || (_cache[5] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Until (including) page 22")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[6] || (_cache[6] = createTextVNode("Architectural Styles and the Design of Network-based Software Architectures")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[7] || (_cache[7] = createTextVNode(" by Roy Thomas Fielding: ")),
        _cache[8] || (_cache[8] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("CHAPTER 5: Representational State Transfer (REST) "),
              createBaseVNode("br"),
              createTextVNode(" (feel free to read the other chapters as well)")
            ])
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_4, [
          _cache[9] || (_cache[9] = createTextVNode("Roy Fielding's Misappropriated REST Dissertation")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[10] || (_cache[10] = createTextVNode()),
        _cache[11] || (_cache[11] = createBaseVNode(
          "br",
          null,
          null,
          -1
          /* HOISTED */
        )),
        _cache[12] || (_cache[12] = createTextVNode(" (optional reading for those who think Roy's dissertation is too hard to read)"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_5, [
          _cache[13] || (_cache[13] = createTextVNode("The Rise and Rise of JSON")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[14] || (_cache[14] = createTextVNode(" from ")),
        _cache[15] || (_cache[15] = createBaseVNode(
          "em",
          null,
          "Two-Bit History",
          -1
          /* HOISTED */
        )),
        _cache[16] || (_cache[16] = createTextVNode()),
        _cache[17] || (_cache[17] = createBaseVNode(
          "br",
          null,
          null,
          -1
          /* HOISTED */
        )),
        _cache[18] || (_cache[18] = createTextVNode(" (optional reading for those who want to learn the history of JSON)"))
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
