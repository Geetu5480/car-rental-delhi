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

const intro = `South Delhi's premium neighborhoods are just 30-45 minutes from IGI Airport. Our Honda City with professional driver provides direct transfers to Greater Kailash, Defence Colony, Hauz Khas, Saket, Vasant Kunj, and surrounding areas. Travel in comfort with an experienced driver who knows the routes well. Available for booking today.`;
const pricing = `Airport to South Delhi transfer starts from \u20B92,999. Fare includes car, driver, and fuel. Tolls and parking charges are extra and paid directly.`;
const cta = `Book your South Delhi transfer. Call or WhatsApp with flight and destination details.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "to-south-delhi",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Direct service to all South Delhi colonies\u2014GK I, GK II, Nehru Place, Malviya Nagar",
      "Professional drivers familiar with South Delhi roads",
      "Comfortable Honda City with AC and luggage space",
      "Transparent pricing\u2014car, driver, and fuel included",
      "Available round the clock"
    ];
    const relatedLinks = [
      { title: "Delhi Airport General", url: "/airport/delhi" },
      { title: "Full-Day South Delhi", url: "/hire/south-delhi" },
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
                  _push3(`Delhi Airport to South Delhi Car Service | Honda City`);
                } else {
                  return [
                    createTextVNode("Delhi Airport to South Delhi Car Service | Honda City")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Honda City with professional driver from IGI Airport to South Delhi. GK, Defence Colony, Vasant Kunj, Saket drop. Starting \u20B92,999."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Delhi Airport to South Delhi Car Service | Honda City")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Honda City with professional driver from IGI Airport to South Delhi. GK, Defence Colony, Vasant Kunj, Saket drop. Starting \u20B92,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Delhi Airport to South Delhi Transfer \u2013 Honda City with Professional Driver",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "\u20B92,999",
        serviceBadge: "Airport to South Delhi",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/airport/to-south-delhi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=to-south-delhi-BRIl344g.mjs.map
