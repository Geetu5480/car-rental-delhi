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
const intro = `Heading to Central Delhi from the airport? Our Honda City with professional driver connects IGI Terminal to Connaught Place, Barakhamba Road, Janpath, and surrounding areas in 45-60 minutes. Ideal for business travelers staying at CP hotels or attending meetings. Available for booking today.`;
const pricing = `Airport to Central Delhi transfer starts from ₹2,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly.`;
const cta = `Book your Central Delhi transfer. Call or WhatsApp with flight and drop location.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "to-connaught-place",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Direct drop to CP inner and outer circles, ITO, and Mandi House area",
      "Professional drivers who know Central Delhi roads well",
      "Comfortable Honda City with AC and luggage space",
      "Transparent pricing—car, driver, and fuel included",
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
              content: "Book Honda City with professional driver from Delhi Airport to Connaught Place. Central Delhi hotels and offices. Starting ₹2,999."
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
                content: "Book Honda City with professional driver from Delhi Airport to Connaught Place. Central Delhi hotels and offices. Starting ₹2,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Delhi Airport to Connaught Place Transfer – Honda City with Professional Driver",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹2,999",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=to-connaught-place-urXU_12r.js.map
