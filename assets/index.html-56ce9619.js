import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://wares.commonsware.com/app/internal/book/Android/page/chap-preface-001.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://developer.android.com/guide/topics/sensors/sensors_overview",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[7] || (_cache[7] = createStaticVNode('<h1 id="android-sensors" tabindex="-1"><a class="header-anchor" href="#android-sensors" aria-hidden="true">#</a> Android Sensors</h1><p>Android supports a bunch of sensors we can use to observe the world outside the device our application runs on (if the device supports it). Let&#39;s learn how!</p><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-sensors.pdf">android-sensors.pdf</a></li><li><a href="android-sensors.pptx">android-sensors.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 5)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("The following chapters from the course book ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("The Busy Coder's Guide to Android Development")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[2] || (_cache[2] = createTextVNode(": ")),
        _cache[3] || (_cache[3] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Basic Use of Sensors")
          ],
          -1
          /* HOISTED */
        ))
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[5] || (_cache[5] = createTextVNode("The Android Developers Guide's pages on ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[4] || (_cache[4] = createTextVNode("Sensors")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[6] || (_cache[6] = createTextVNode("."))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
