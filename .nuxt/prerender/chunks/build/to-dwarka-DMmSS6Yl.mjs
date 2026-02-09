import { H as Head, T as Title, M as Meta, _ as __nuxt_component_3 } from './LandingPage-D_CvFF6c.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///home/gaurav/Documents/car%20rental/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/gaurav/Documents/car%20rental/website/node_modules/vue/server-renderer/index.mjs';
import './v3-4J0IMvJa.mjs';
import './server.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/h3/dist/index.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/destr/dist/index.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/hookable/dist/index.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/unstorage/dist/index.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/ohash/dist/index.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/klona/dist/index.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/defu/dist/defu.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/scule/dist/index.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/unctx/dist/index.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/pathe/dist/index.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/unhead/dist/server.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/devalue/index.js';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/unhead/dist/utils.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/gaurav/Documents/car%20rental/website/node_modules/vue-router/vue-router.node.mjs';
import './nuxt-link-BP0DQEZi.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const intro = `Dwarka is the closest major residential hub to Delhi Airport\u2014just 10-15 minutes away. Our Honda City with professional driver provides quick, comfortable transfers from IGI Terminal to all Dwarka sectors. Whether you live in Sector 9, Sector 23, or along Dwarka Expressway, skip the taxi queue and ride home in comfort. Available for booking today.`;
const pricing = `Airport to Dwarka transfer starts from \u20B91,999 given the short distance. Fare includes car, driver, and fuel. Tolls are extra if applicable.`;
const cta = `Book your Dwarka transfer. Call or WhatsApp with your flight and sector.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "to-dwarka",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Quick airport connectivity\u2014Dwarka is under 15 minutes from IGI Terminal",
      "All sectors covered\u2014Sector 9 to Sector 23, Palam Vihar, Mahavir Enclave",
      "Professional drivers familiar with Dwarka roads",
      "Comfortable Honda City with AC and luggage space",
      "Available round the clock"
    ];
    const relatedLinks = [
      { title: "Delhi Airport General", url: "/airport/delhi" },
      { title: "Full-Day Dwarka", url: "/hire/dwarka" },
      { title: "Airport to Gurgaon", url: "/airport/to-gurgaon" },
      { title: "Corporate Travel", url: "/corporate/gurgaon" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_LandingPage = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Delhi Airport to Dwarka Car Service | Honda City Driver`);
                } else {
                  return [
                    createTextVNode("Delhi Airport to Dwarka Car Service | Honda City Driver")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Honda City with professional driver from IGI Airport to Dwarka. Sectors 9-23, Palam, Dwarka Expressway. Quick transfer from \u20B91,999."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Delhi Airport to Dwarka Car Service | Honda City Driver")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Honda City with professional driver from IGI Airport to Dwarka. Sectors 9-23, Palam, Dwarka Expressway. Quick transfer from \u20B91,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Delhi Airport to Dwarka Transfer \u2013 Honda City with Professional Driver",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "\u20B91,999",
        serviceBadge: "Airport to Dwarka",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/airport/to-dwarka.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=to-dwarka-DMmSS6Yl.mjs.map
