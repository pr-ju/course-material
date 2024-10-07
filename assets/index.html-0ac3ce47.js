import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://commonsware.com/Jetpack/pages/chap-nav-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.android.com/guide/navigation",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode(
      "h1",
      {
        id: "android-bottom-navigation-view-and-drawer-layout",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-bottom-navigation-view-and-drawer-layout",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android Bottom Navigation View and Drawer Layout")
      ],
      -1
      /* HOISTED */
    )),
    _cache[5] || (_cache[5] = createBaseVNode(
      "p",
      null,
      "Let's go through how the two main views for top level destinations works in Android.",
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/44xpcWD10uQ",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createBaseVNode(
      "h2",
      {
        id: "recommended-reading",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#recommended-reading",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Recommended reading")
      ],
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("The following chapters from the course book "),
        createBaseVNode("em", null, "Elements of Android Jetpack"),
        createTextVNode(":")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Navigating Your App")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode("The ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[1] || (_cache[1] = createTextVNode("Android Developers Guide's page about Navigation Components")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[3] || (_cache[3] = createTextVNode("."))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
