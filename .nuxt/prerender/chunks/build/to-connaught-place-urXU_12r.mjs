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

const intro = `Heading to Central Delhi from the airport? Our Honda City with professional driver connects IGI Terminal to Connaught Place, Barakhamba Road, Janpath, and surrounding areas in 45-60 minutes. Ideal for business travelers staying at CP hotels or attending meetings. Available for booking today.`;
const pricing = `Airport to Central Delhi transfer starts from \u20B92,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly.`;
const cta = `Book your Central Delhi transfer. Call or WhatsApp with flight and drop location.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "to-connaught-place",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Direct drop to CP inner and outer circles, ITO, and Mandi House area",
      "Professional drivers who know Central Delhi roads well",
      "Comfortable Honda City with AC and luggage space",
      "Transparent pricing\u2014car, driver, and fuel included",
      "24/7 availability"
    ];
    const relatedLinks = [
      { title: "Delhi Airport General", url: "/airport/delhi" },
      { title: "Corporate CP", url: "/corporate/connaught-place" },
      { title: "Airport to Gurgaon", url: "/airport/to-gurgaon" },
      { title: "Corporate Aerocity", url: "/corporate/aerocity" }
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
                  _push3(`Delhi Airport to Connaught Place | Honda City Driver`);
                } else {
                  return [
                    createTextVNode("Delhi Airport to Connaught Place | Honda City Driver")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Book Honda City with professional driver from Delhi Airport to Connaught Place. Central Delhi hotels and offices. Starting \u20B92,999."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Delhi Airport to Connaught Place | Honda City Driver")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Book Honda City with professional driver from Delhi Airport to Connaught Place. Central Delhi hotels and offices. Starting \u20B92,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Delhi Airport to Connaught Place Transfer \u2013 Honda City with Professional Driver",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "\u20B92,999",
        serviceBadge: "Airport to Central Delhi",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/airport/to-connaught-place.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=to-connaught-place-urXU_12r.mjs.map
