import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/jetpack/androidx",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createBaseVNode(
      "h1",
      {
        id: "android-backward-compatible",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-backward-compatible",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android Backward Compatible")
      ],
      -1
      /* HOISTED */
    )),
    _cache[3] || (_cache[3] = createBaseVNode(
      "p",
      null,
      "Each new version of Android adds new functionality we can use, but these new functionalities won't exist on older versions of Android. How do we deal with that?",
      -1
      /* HOISTED */
    )),
    _cache[4] || (_cache[4] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/m13sLcUy914",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-backward-compatible.pdf">android-backward-compatible.pdf</a></li><li><a href="android-backward-compatible.pptx">android-backward-compatible.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("AndroidX Overview")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[1] || (_cache[1] = createTextVNode("."))
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
