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
const intro = `The 280-kilometer drive from Delhi to Jaipur deserves a comfortable journey. Our Honda City with professional driver transforms highway travel into a relaxed experience. Whether heading for business or leisure, ride in a well-maintained sedan with an experienced driver. Available for booking today.`;
const pricing = `Delhi to Jaipur one-way starts from ₹5,999. Fare includes car, driver, and fuel. Tolls are extra and paid directly. Overnight trips may include driver allowance.`;
const cta = `Plan your Jaipur trip. Call or WhatsApp with your travel dates.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "delhi-to-jaipur",
  __ssrInlineRender: true,
  setup(__props) {
    const whyChoose = [
      "Experienced drivers familiar with Delhi-Jaipur route",
      "Multiple stops allowed en route",
      "One-way drops and round-trip packages available",
      "Comfortable Honda City with AC",
      "Transparent pricing—car, driver, and fuel included"
    ];
    const relatedLinks = [
      { title: "Delhi to Agra", url: "/outstation/delhi-to-agra" },
      { title: "Delhi Airport General", url: "/airport/delhi" },
      { title: "Full-Day Hire", url: "/hire/south-delhi" },
      { title: "Guest Transportation", url: "/hire/guest-transportation" }
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
                  _push3(`Delhi to Jaipur Honda City with Driver | Premium Service`);
                } else {
                  return [
                    createTextVNode("Delhi to Jaipur Honda City with Driver | Premium Service")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Book Honda City with professional driver for Delhi to Jaipur trip. One-way & round-trip from ₹5,999. Comfortable highway travel."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Delhi to Jaipur Honda City with Driver | Premium Service")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Book Honda City with professional driver for Delhi to Jaipur trip. One-way & round-trip from ₹5,999. Comfortable highway travel."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingPage, {
        h1: "Delhi to Jaipur Honda City Rental with Professional Driver",
        intro,
        whyChoose,
        pricing,
        cta,
        startingPrice: "₹5,999",
        serviceBadge: "Outstation Trip",
        relatedLinks
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/outstation/delhi-to-jaipur.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=delhi-to-jaipur-B-JGXrNW.js.map
