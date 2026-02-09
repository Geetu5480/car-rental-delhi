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
const intro = `Central Delhi's business corridors demand reliable transportation. Our Honda City with professional driver covers Connaught Place, Barakhamba Road, Kasturba Gandhi Marg, and ITO. Navigate between corporate offices and meetings with a dedicated driver who knows Central Delhi well. Available for booking today.`;
const pricing = `Central Delhi corporate packages start from ₹2,999 for 8 hours/80 km. Fare includes car, driver, and fuel. Tolls and parking are extra. Monthly retainers available.`;
const cta = `Book your Central Delhi travel. Call or WhatsApp with your requirements.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "connaught-place",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Professional drivers who know Central Delhi roads",
      "Coverage across CP inner/outer circles, Janpath, Mandi House",
      "Waiting service during meetings—no rebooking hassle",
      "Comfortable Honda City with AC",
      "Transparent pricing—car, driver, and fuel included"
    ];
    const relatedLinks = [
      { title: "Airport to CP", url: "/airport/to-connaught-place" },
      { title: "Corporate Gurgaon", url: "/corporate/gurgaon" },
      { title: "Corporate Aerocity", url: "/corporate/aerocity" },
      { title: "Delhi Airport General", url: "/airport/delhi" }
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
                  _push3(`Corporate Car Rental Connaught Place | Honda City Driver`);
                } else {
                  return [
                    createTextVNode("Corporate Car Rental Connaught Place | Honda City Driver")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Professional Honda City with driver for Central Delhi corporate travel. CP, Barakhamba Road, Janpath coverage. Daily packages from ₹2,999."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Corporate Car Rental Connaught Place | Honda City Driver")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Professional Honda City with driver for Central Delhi corporate travel. CP, Barakhamba Road, Janpath coverage. Daily packages from ₹2,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Honda City Corporate Car Service with Driver – Connaught Place & Central Delhi",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹2,999",
        serviceBadge: "Corporate Central Delhi",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/corporate/connaught-place.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=connaught-place-BsUgmNu8.js.map
