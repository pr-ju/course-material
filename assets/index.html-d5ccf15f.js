import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/reference/android/widget/ListView",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.android.com/guide/topics/ui/layout/recyclerview",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createBaseVNode(
      "h1",
      {
        id: "android-listview",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-listview",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android ListView")
      ],
      -1
      /* HOISTED */
    )),
    _cache[10] || (_cache[10] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("It's very common for an application to display a list of items. But if there are many items in the list, how can we do that in a resource and speed efficient way? Android's solution to that was initially the "),
        createBaseVNode("code", null, "ListView"),
        createTextVNode(", which we'll take a closer look at in this lecture. Nowadays the Android Jetpack libraries also has a "),
        createBaseVNode("code", null, "RecyclerView"),
        createTextVNode(" we can use to achieve similar functionality. That one is a bit more configurable, but also a bit harder to use.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[11] || (_cache[11] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/-MbqBglbbIk",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[12] || (_cache[12] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-list-view.pdf">android-list-view.pdf</a></li><li><a href="android-list-view.pptx">android-list-view.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("The documentation for the ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("ListView")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createTextVNode(" class."))
      ]),
      createBaseVNode("li", null, [
        _cache[6] || (_cache[6] = createTextVNode("If you want to use the more modern (but harder to start with) ")),
        _cache[7] || (_cache[7] = createBaseVNode(
          "code",
          null,
          "RecyclerView",
          -1
          /* HOISTED */
        )),
        _cache[8] || (_cache[8] = createTextVNode(", read: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _cache[4] || (_cache[4] = createTextVNode("Android Developers Guide's page ")),
            createBaseVNode("a", _hoisted_2, [
              _cache[3] || (_cache[3] = createTextVNode("Create a List with RecyclerView")),
              createVNode(_component_ExternalLinkIcon)
            ]),
            _cache[5] || (_cache[5] = createTextVNode("."))
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
