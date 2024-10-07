import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = { class: "custom-container warning" };
const _hoisted_2 = {
  href: "https://developer.android.com/jetpack/androidx/releases/room",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://developer.android.com/training/data-storage",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://developer.android.com/training/data-storage/room",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://commonsware.com/Room/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[13] || (_cache[13] = createBaseVNode(
      "h1",
      {
        id: "android-sqlite-database",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-sqlite-database",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android SQLite Database")
      ],
      -1
      /* HOISTED */
    )),
    _cache[14] || (_cache[14] = createBaseVNode(
      "p",
      null,
      "So, your application collects data from the user that you need to store somewhere? Why not in an SQlite database? Android has built-in support for that one, so why not?",
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_1, [
      _cache[3] || (_cache[3] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Room",
        -1
        /* HOISTED */
      )),
      createBaseVNode("p", null, [
        _cache[1] || (_cache[1] = createTextVNode("The lecture shows the old way we communicated with SQLite databases in Android. A few years back Google released ")),
        createBaseVNode("a", _hoisted_2, [
          _cache[0] || (_cache[0] = createTextVNode("the Room library")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createTextVNode(" (an Object Relational Mapping library) we can use to more easily communicate with the database. However, it's still good to have knowledge about the old way, since many old applications use it."))
      ])
    ]),
    _cache[15] || (_cache[15] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/tI-0IZOhvFk",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[16] || (_cache[16] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-sqlite-database.pdf">android-sqlite-database.pdf</a></li><li><a href="android-sqlite-database.pptx">android-sqlite-database.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[5] || (_cache[5] = createTextVNode("The Android Developers Guide ")),
        createBaseVNode("a", _hoisted_3, [
          _cache[4] || (_cache[4] = createTextVNode("App data & files")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[6] || (_cache[6] = createTextVNode("."))
      ]),
      createBaseVNode("li", null, [
        _cache[8] || (_cache[8] = createTextVNode("The Android Developers Guide ")),
        createBaseVNode("a", _hoisted_4, [
          _cache[7] || (_cache[7] = createTextVNode("Save data in a local database using Room")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[9] || (_cache[9] = createTextVNode("."))
      ]),
      createBaseVNode("li", null, [
        _cache[11] || (_cache[11] = createTextVNode("The course book ")),
        createBaseVNode("a", _hoisted_5, [
          _cache[10] || (_cache[10] = createTextVNode("Elements of Android Room")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[12] || (_cache[12] = createTextVNode("."))
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
