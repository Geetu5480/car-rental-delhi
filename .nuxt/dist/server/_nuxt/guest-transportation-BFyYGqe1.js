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
const intro = `Hosting out-of-town guests or business visitors? Our Honda City with professional driver provides reliable transportation throughout their Delhi NCR stay. From airport pickup to city travel and meetings—ensure your guests travel in comfort. Available for booking today.`;
const pricing = `Guest transportation packages start from ₹2,999 per day. Fare includes car, driver, and fuel. Tolls, parking, and permits are extra. Multi-day discounts available.`;
const cta = `Arrange guest transportation. Call or WhatsApp with arrival details.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "guest-transportation",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Airport pickup and city transfers",
      "Professional drivers",
      "Flexible scheduling for guest itineraries",
      "Multi-day packages for extended stays",
      "Transparent pricing—car, driver, and fuel included"
    ];
    const relatedLinks = [
      { title: "Delhi Airport General", url: "/airport/delhi" },
      { title: "Full-Day South Delhi", url: "/hire/south-delhi" },
      { title: "Corporate Travel", url: "/corporate/gurgaon" },
      { title: "Wedding Car Rental", url: "/events/wedding-car-rental" }
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
                  _push3(`Guest Transportation Delhi NCR | Honda City with Driver`);
                } else {
                  return [
                    createTextVNode("Guest Transportation Delhi NCR | Honda City with Driver")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Premium Honda City with professional driver for guest transportation in Delhi NCR. Airport pickup, city travel. Full-day packages from ₹2,999."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Guest Transportation Delhi NCR | Honda City with Driver")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Premium Honda City with professional driver for guest transportation in Delhi NCR. Airport pickup, city travel. Full-day packages from ₹2,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Guest Transportation Service – Honda City with Professional Driver",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹2,999",
        serviceBadge: "Guest Transportation",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hire/guest-transportation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=guest-transportation-BFyYGqe1.js.map
