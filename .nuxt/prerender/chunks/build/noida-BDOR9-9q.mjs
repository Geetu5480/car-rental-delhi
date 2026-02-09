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

const intro = `Noida's tech corridors and expanding business parks need dependable corporate transportation. Our Honda City with professional driver connects Sector 62, Film City, Noida Expressway offices, and Greater Noida tech hubs. Move between meetings across the city without worrying about parking or traffic. Available for booking today.`;
const pricing = `Noida corporate packages start from \u20B92,999 for full-day service. Fare includes car, driver, and fuel. Tolls are extra. Monthly retainer discounts available.`;
const cta = `Set up your Noida corporate travel. Call or WhatsApp for a quote.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "noida",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Coverage across Sector 62, Sector 18, Film City, and Greater Noida",
      "Professional drivers who know Noida well",
      "Comfortable Honda City with AC",
      "Transparent pricing\u2014car, driver, and fuel included",
      "GST-compliant invoicing for business bookings"
    ];
    const relatedLinks = [
      { title: "Airport to Noida", url: "/airport/to-noida" },
      { title: "Corporate Gurgaon", url: "/corporate/gurgaon" },
      { title: "Noida to Airport", url: "/airport/from-noida" },
      { title: "Full-Day Hire", url: "/hire/south-delhi" }
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
                  _push3(`Corporate Car Rental Noida | Honda City Driver Service`);
                } else {
                  return [
                    createTextVNode("Corporate Car Rental Noida | Honda City Driver Service")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Professional Honda City with driver for Noida corporate travel. Sector 62, Film City, Greater Noida. Daily and monthly packages from \u20B92,999."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Corporate Car Rental Noida | Honda City Driver Service")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Professional Honda City with driver for Noida corporate travel. Sector 62, Film City, Greater Noida. Daily and monthly packages from \u20B92,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Honda City Corporate Car Service with Driver \u2013 Noida & Greater Noida",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "\u20B92,999",
        serviceBadge: "Corporate Noida",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/corporate/noida.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=noida-BDOR9-9q.mjs.map
