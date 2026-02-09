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
const intro = `Special occasions deserve reliable transportation. Our Honda City with professional driver provides comfortable, dependable vehicles for weddings, engagements, and family events across Delhi NCR. From venue-to-venue transfers to guest transportation, our drivers ensure timely service. Available for advance bookings.`;
const pricing = `Wedding packages start from ₹2,999 per day. Fare includes car, driver, and fuel. Tolls, parking, and permits are extra. Advance booking recommended for peak season (November–February).`;
const cta = `Plan wedding transportation. Call or WhatsApp with event dates and venue details.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wedding-car-rental",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Reliable venue-to-venue transportation",
      "Professional drivers",
      "Multi-day packages for wedding functions",
      "Comfortable Honda City with AC",
      "Transparent pricing—car, driver, and fuel included"
    ];
    const relatedLinks = [
      { title: "Guest Transportation", url: "/hire/guest-transportation" },
      { title: "Full-Day Hire", url: "/hire/south-delhi" },
      { title: "Delhi Airport General", url: "/airport/delhi" },
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
                  _push3(`Wedding Car Rental Delhi NCR | Honda City with Driver`);
                } else {
                  return [
                    createTextVNode("Wedding Car Rental Delhi NCR | Honda City with Driver")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Premium Honda City with professional driver for weddings in Delhi NCR. Multi-day packages from ₹2,999/day. Book in advance for peak season."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Wedding Car Rental Delhi NCR | Honda City with Driver")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Premium Honda City with professional driver for weddings in Delhi NCR. Multi-day packages from ₹2,999/day. Book in advance for peak season."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Wedding Car Rental with Professional Driver – Delhi NCR",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹2,999/day",
        serviceBadge: "Wedding & Events",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/wedding-car-rental.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=wedding-car-rental-ayimDhoS.js.map
