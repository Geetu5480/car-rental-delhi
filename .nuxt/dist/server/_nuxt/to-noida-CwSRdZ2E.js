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
const intro = `Traveling from Delhi Airport to Noida's tech corridors? Our Honda City with professional driver connects IGI Terminal directly to Sector 62, Film City, Noida Expressway offices, and Greater Noida. Drivers know the best routes via DND Flyway or Ring Road to get you there comfortably. Available for booking today.`;
const pricing = `Airport to Noida transfer starts from ₹2,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly. Greater Noida drops available at adjusted rates.`;
const cta = `Book your Noida transfer. Call or WhatsApp with your flight and sector details for a quote.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "to-noida",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Coverage across all Noida sectors and Greater Noida",
      "Professional drivers who know Noida roads and routes well",
      "Comfortable Honda City with AC and luggage space",
      "Transparent pricing—car, driver, and fuel included",
      "24/7 service for all flight schedules"
    ];
    const relatedLinks = [
      { title: "Delhi Airport General", url: "/airport/delhi" },
      { title: "Noida to Airport", url: "/airport/from-noida" },
      { title: "Corporate Noida", url: "/corporate/noida" },
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
                  _push3(`Delhi Airport to Noida Car Service | Honda City ₹2,999`);
                } else {
                  return [
                    createTextVNode("Delhi Airport to Noida Car Service | Honda City ₹2,999")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Premium Honda City with professional driver from IGI Airport to Noida. Sector 62, Film City, Greater Noida drop. Starting ₹2,999. Book today."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Delhi Airport to Noida Car Service | Honda City ₹2,999")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Premium Honda City with professional driver from IGI Airport to Noida. Sector 62, Film City, Greater Noida drop. Starting ₹2,999. Book today."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Delhi Airport to Noida Transfer – Honda City with Professional Driver",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹2,999",
        serviceBadge: "Airport to Noida",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/airport/to-noida.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=to-noida-CwSRdZ2E.js.map
