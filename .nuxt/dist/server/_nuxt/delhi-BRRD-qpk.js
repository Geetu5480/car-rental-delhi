import { H as Head, T as Title, M as Meta, _ as __nuxt_component_3 } from "./LandingPage-D_CvFF6c.js";
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./v3-4J0IMvJa.js";
import "/home/gaurav/Documents/car rental/website/node_modules/@unhead/vue/dist/index.mjs";
import "../server.mjs";
import "/home/gaurav/Documents/car rental/website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/gaurav/Documents/car rental/website/node_modules/hookable/dist/index.mjs";
import "/home/gaurav/Documents/car rental/website/node_modules/unctx/dist/index.mjs";
import "/home/gaurav/Documents/car rental/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/gaurav/Documents/car rental/website/node_modules/defu/dist/defu.mjs";
import "/home/gaurav/Documents/car rental/website/node_modules/ufo/dist/index.mjs";
import "./nuxt-link-BP0DQEZi.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const intro = `Indira Gandhi International Airport handles thousands of travelers daily. Our Honda City with professional driver service provides reliable connectivity between all three terminals and every corner of Delhi NCR. Whether arriving on a domestic flight or landing from overseas, we ensure timely pickup and a comfortable ride to your destination. Available for booking today.`;
const pricing = `Airport transfers start from ₹2,999 one-way. The fare includes car, driver, and fuel. Tolls and parking charges are extra and paid directly as applicable. Contact us for exact fare to your destination.`;
const cta = `Book your airport transfer now. Call or WhatsApp with your flight details and destination for a quick quote.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "delhi",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "All terminals covered—T1 domestic, T3 international, and T2 arrivals",
      "Professional, experienced drivers who know Delhi NCR routes well",
      "Comfortable Honda City sedan with AC and ample luggage space",
      "Transparent pricing—car, driver, and fuel included in quoted fare",
      "24/7 availability including early morning and late-night flights"
    ];
    const relatedLinks = [
      { title: "Airport to Gurgaon", url: "/airport/to-gurgaon" },
      { title: "Airport to Noida", url: "/airport/to-noida" },
      { title: "Airport to South Delhi", url: "/airport/to-south-delhi" },
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
                  _push3(`Delhi Airport Car Rental with Driver | Honda City ₹2,999`);
                } else {
                  return [
                    createTextVNode("Delhi Airport Car Rental with Driver | Honda City ₹2,999")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Premium Honda City with professional driver for Delhi IGI Airport. Terminal 1, 2, 3 pickup & drop. 24/7 service. Airport transfer starting ₹2,999."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Delhi Airport Car Rental with Driver | Honda City ₹2,999")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Premium Honda City with professional driver for Delhi IGI Airport. Terminal 1, 2, 3 pickup & drop. 24/7 service. Airport transfer starting ₹2,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Delhi Airport Car Rental with Professional Driver – IGI Terminal 1, 2 & 3",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹2,999",
        serviceBadge: "Airport Transfer",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/airport/delhi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=delhi-BRRD-qpk.js.map
