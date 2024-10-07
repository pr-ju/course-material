import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = { class: "custom-container warning" };
const _hoisted_2 = {
  href: "https://www.sqlite.org/foreignkeys.html#fk_enable",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://github.com/mapbox/node-sqlite3/wiki",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[8] || (_cache[8] = createBaseVNode(
      "h1",
      {
        id: "using-sqlite-in-node-js",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#using-sqlite-in-node-js",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Using SQlite in Node.js")
      ],
      -1
      /* HOISTED */
    )),
    _cache[9] || (_cache[9] = createBaseVNode(
      "p",
      null,
      "So, how do we use SQLite in a Node.js application? Let's find out!",
      -1
      /* HOISTED */
    )),
    _cache[10] || (_cache[10] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/65f7Fl0AEi8",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_1, [
      _cache[3] || (_cache[3] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Note!",
        -1
        /* HOISTED */
      )),
      _cache[4] || (_cache[4] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("When communicating with an SQLite 3 database, foreign key constraints are disabled by default! To enable them, you must send the query "),
          createBaseVNode("code", null, "PRAGMA foreign_keys = ON"),
          createTextVNode(" to the database after you have established a connection with it.")
        ],
        -1
        /* HOISTED */
      )),
      createBaseVNode("p", null, [
        _cache[1] || (_cache[1] = createTextVNode("Learn more about this in ")),
        createBaseVNode("a", _hoisted_2, [
          _cache[0] || (_cache[0] = createTextVNode("the documentation for enabling foreign key constraints in SQLite")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createTextVNode("."))
      ])
    ]),
    _cache[11] || (_cache[11] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="using-sqlite-in-node-js.pdf">using-sqlite-in-node-js.pdf</a></li><li><a href="using-sqlite-in-node-js.pptx">using-sqlite-in-node-js.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[5] || (_cache[5] = createTextVNode("sqlite3 Documentation")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[6] || (_cache[6] = createTextVNode(": ")),
        _cache[7] || (_cache[7] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, [
              createTextVNode("API Documentation "),
              createBaseVNode("br"),
              createTextVNode(" (read if you need to learn some details)")
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
