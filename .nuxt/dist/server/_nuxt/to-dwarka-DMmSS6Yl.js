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
const intro = `Dwarka is the closest major residential hub to Delhi Airport—just 10-15 minutes away. Our Honda City with professional driver provides quick, comfortable transfers from IGI Terminal to all Dwarka sectors. Whether you live in Sector 9, Sector 23, or along Dwarka Expressway, skip the taxi queue and ride home in comfort. Available for booking today.`;
const pricing = `Airport to Dwarka transfer starts from ₹1,999 given the short distance. Fare includes car, driver, and fuel. Tolls are extra if applicable.`;
const cta = `Book your Dwarka transfer. Call or WhatsApp with your flight and sector.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "to-dwarka",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Quick airport connectivity—Dwarka is under 15 minutes from IGI Terminal",
      "All sectors covered—Sector 9 to Sector 23, Palam Vihar, Mahavir Enclave",
      "Professional drivers familiar with Dwarka roads",
      "Comfortable Honda City with AC and luggage space",
      "Available round the clock"
    ];
    const relatedLinks = [
      { title: "Delhi Airport General", url: "/airport/delhi" },
      { title: "Full-Day Dwarka", url: "/hire/dwarka" },
      { title: "Airport to Gurgaon", url: "/airport/to-gurgaon" },
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
                  _push3(`Delhi Airport to Dwarka Car Service | Honda City Driver`);
                } else {
                  return [
                    createTextVNode("Delhi Airport to Dwarka Car Service | Honda City Driver")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Honda City with professional driver from IGI Airport to Dwarka. Sectors 9-23, Palam, Dwarka Expressway. Quick transfer from ₹1,999."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Delhi Airport to Dwarka Car Service | Honda City Driver")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Honda City with professional driver from IGI Airport to Dwarka. Sectors 9-23, Palam, Dwarka Expressway. Quick transfer from ₹1,999."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Delhi Airport to Dwarka Transfer – Honda City with Professional Driver",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹1,999",
        serviceBadge: "Airport to Dwarka",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/airport/to-dwarka.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=to-dwarka-DMmSS6Yl.js.map
