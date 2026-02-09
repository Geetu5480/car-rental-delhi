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
const intro = `Catching a flight from Delhi Airport? Our Honda City with professional driver picks you up from any Gurgaon location—Cyber City offices, DLF residences, Golf Course Road, or Sohna Road—and delivers you to Terminal 1, 2, or 3 on time. Experienced drivers know the best routes to get you there comfortably. Available for booking today.`;
const pricing = `Gurgaon to Airport one-way transfer starts from ₹2,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly.`;
const cta = `Book your airport drop. Call or WhatsApp with pickup address and flight time.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "from-gurgaon",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Pickup from any Gurgaon location—MG Road, Sector 29, Udyog Vihar, Manesar",
      "Professional drivers who know the airport routes well",
      "Comfortable Honda City with AC and space for luggage",
      "Transparent pricing—car, driver, and fuel included",
      "Early morning and late-night service available"
    ];
    const relatedLinks = [
      { title: "Airport to Gurgaon", url: "/airport/to-gurgaon" },
      { title: "Delhi Airport General", url: "/airport/delhi" },
      { title: "Corporate Gurgaon", url: "/corporate/gurgaon" },
      { title: "Daily Commute", url: "/corporate/delhi-gurgaon-commute" }
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
                  _push3(`Gurgaon to Delhi Airport Transfer | Honda City ₹2,999`);
                } else {
                  return [
                    createTextVNode("Gurgaon to Delhi Airport Transfer | Honda City ₹2,999")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Book Honda City with professional driver from Gurgaon to Delhi Airport. Cyber City, DLF, Golf Course Road pickup. Starting ₹2,999. 24/7 service."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Gurgaon to Delhi Airport Transfer | Honda City ₹2,999")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Book Honda City with professional driver from Gurgaon to Delhi Airport. Cyber City, DLF, Golf Course Road pickup. Starting ₹2,999. 24/7 service."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Gurgaon to Delhi Airport Transfer – Honda City with Professional Driver",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹2,999",
        serviceBadge: "Gurgaon to Airport",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/airport/from-gurgaon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=from-gurgaon-D9-AAKnc.js.map
