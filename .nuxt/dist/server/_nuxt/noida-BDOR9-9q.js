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
const intro = `Noida's tech corridors and expanding business parks need dependable corporate transportation. Our Honda City with professional driver connects Sector 62, Film City, Noida Expressway offices, and Greater Noida tech hubs. Move between meetings across the city without worrying about parking or traffic. Available for booking today.`;
const pricing = `Noida corporate packages start from ₹2,999 for full-day service. Fare includes car, driver, and fuel. Tolls are extra. Monthly retainer discounts available.`;
const cta = `Set up your Noida corporate travel. Call or WhatsApp for a quote.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "noida",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Coverage across Sector 62, Sector 18, Film City, and Greater Noida",
      "Professional drivers who know Noida well",
      "Comfortable Honda City with AC",
      "Transparent pricing—car, driver, and fuel included",
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
              content: "Professional Honda City with driver for Noida corporate travel. Sector 62, Film City, Greater Noida. Daily and monthly packages from ₹2,999."
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
                content: "Professional Honda City with driver for Noida corporate travel. Sector 62, Film City, Greater Noida. Daily and monthly packages from ₹2,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Honda City Corporate Car Service with Driver – Noida & Greater Noida",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹2,999",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=noida-BDOR9-9q.js.map
