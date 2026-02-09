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
const intro = `South Delhi's sprawling neighborhoods require reliable transportation. Our full-day Honda City with professional driver covers Greater Kailash, Defence Colony, Hauz Khas, Saket, and Vasant Kunj. Whether you have multiple appointments or shopping trips, enjoy flexible mobility with a dedicated driver. Available for booking today.`;
const pricing = `Full-day packages start from ₹2,999 for 8 hours/80 km. Fare includes car, driver, and fuel. Extra hours and kilometers billed separately. Tolls and parking are extra.`;
const cta = `Book your full-day vehicle. Call or WhatsApp with your schedule.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "south-delhi",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Complete coverage of South Delhi—GK I, GK II, Nehru Place, Malviya Nagar",
      "8-hour and 12-hour packages with flexible start times",
      "Same driver for full duration",
      "Comfortable Honda City with AC",
      "Transparent pricing—car, driver, and fuel included"
    ];
    const relatedLinks = [
      { title: "Airport to South Delhi", url: "/airport/to-south-delhi" },
      { title: "Full-Day Dwarka", url: "/hire/dwarka" },
      { title: "Guest Transportation", url: "/hire/guest-transportation" },
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
                  _push3(`Full Day Car Hire South Delhi | Honda City with Driver`);
                } else {
                  return [
                    createTextVNode("Full Day Car Hire South Delhi | Honda City with Driver")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Hire Honda City with professional driver for full day in South Delhi. GK, Defence Colony, Vasant Kunj coverage. 8-12 hour packages from ₹2,999."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Full Day Car Hire South Delhi | Honda City with Driver")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Hire Honda City with professional driver for full day in South Delhi. GK, Defence Colony, Vasant Kunj coverage. 8-12 hour packages from ₹2,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Full-Day Honda City Hire with Driver – South Delhi",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹2,999",
        serviceBadge: "Full-Day Hire",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hire/south-delhi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=south-delhi-BjszXLmA.js.map
