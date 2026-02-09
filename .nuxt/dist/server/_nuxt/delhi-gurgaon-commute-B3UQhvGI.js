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
const intro = `The daily Delhi to Gurgaon commute is demanding—traffic, tolls, and parking hassles. Our Honda City with professional driver service eliminates these frustrations. Start your day in comfort as an experienced driver navigates NH48 or Dwarka Expressway while you prepare for the day. Available for trial bookings.`;
const pricing = `Monthly commute packages start from ₹45,000 for 22-24 working days. Fare includes car, driver, and fuel. Tolls are extra. Weekly trials available.`;
const cta = `Upgrade your daily commute. Call or WhatsApp to discuss your schedule.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "delhi-gurgaon-commute",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Dedicated driver for your daily schedule",
      "Flexible pickup and drop timings",
      "Professional drivers who know the Delhi-Gurgaon corridor",
      "Same Honda City for your subscription period",
      "Monthly packages with significant savings"
    ];
    const relatedLinks = [
      { title: "Corporate Gurgaon", url: "/corporate/gurgaon" },
      { title: "Airport to Gurgaon", url: "/airport/to-gurgaon" },
      { title: "Gurgaon to Airport", url: "/airport/from-gurgaon" },
      { title: "Corporate Noida", url: "/corporate/noida" }
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
                  _push3(`Delhi to Gurgaon Daily Car Service | Honda City Driver`);
                } else {
                  return [
                    createTextVNode("Delhi to Gurgaon Daily Car Service | Honda City Driver")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Daily Honda City with professional driver for Delhi to Gurgaon office commute. Reliable service, monthly packages from ₹45,000."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Delhi to Gurgaon Daily Car Service | Honda City Driver")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Daily Honda City with professional driver for Delhi to Gurgaon office commute. Reliable service, monthly packages from ₹45,000."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Delhi to Gurgaon Daily Commute – Honda City with Professional Driver",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹45,000/month",
        serviceBadge: "Daily Commute",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/corporate/delhi-gurgaon-commute.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=delhi-gurgaon-commute-B3UQhvGI.js.map
