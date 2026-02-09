import { defineComponent, inject, reactive, provide, getCurrentInstance, ref, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, unref, toDisplayString, resolveDynamicComponent, useSSRContext } from 'file:///home/gaurav/Documents/car%20rental/website/node_modules/vue/index.mjs';
import { u as useHead } from './v3-4J0IMvJa.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BP0DQEZi.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderVNode } from 'file:///home/gaurav/Documents/car%20rental/website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const HeadComponentCtxSymbol = /* @__PURE__ */ Symbol("head-component");
const TagPositionProps = {
  /**
   * @deprecated Use tagPosition
   */
  body: { type: Boolean, default: void 0 },
  tagPosition: { type: String }
};
function normalizeProps(_props, key) {
  const props = Object.fromEntries(
    Object.entries(_props).filter(([_, value]) => value !== void 0)
  );
  if (typeof props.body !== "undefined") {
    props.tagPosition = props.body ? "bodyClose" : "head";
  }
  if (typeof props.renderPriority !== "undefined") {
    props.tagPriority = props.renderPriority;
  }
  return {
    ...props,
    key
  };
}
function useVNodeStringKey() {
  var _a;
  const vnodeKey = (_a = getCurrentInstance()) == null ? void 0 : _a.vnode.key;
  return vnodeKey != null && typeof vnodeKey !== "symbol" ? String(vnodeKey) : void 0;
}
function useHeadComponentCtx() {
  return inject(HeadComponentCtxSymbol, createHeadComponentCtx, true);
}
function createHeadComponentCtx() {
  const prev = inject(HeadComponentCtxSymbol, null);
  if (prev) {
    return prev;
  }
  const input = reactive({});
  const entry = useHead(input);
  const ctx = { input, entry, update: () => entry.patch(input) };
  provide(HeadComponentCtxSymbol, ctx);
  return ctx;
}
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: { type: [String, Object, Array], default: void 0 },
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: { type: [String, Object, Array], default: void 0 },
  tabindex: String,
  title: String,
  translate: String,
  /**
   * @deprecated Use tagPriority
   */
  renderPriority: [String, Number],
  /**
   * Unhead prop to modify the priority of the tag.
   */
  tagPriority: { type: [String, Number] }
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    title: String
  },
  setup(props, { slots }) {
    const { input, update } = useHeadComponentCtx();
    input.noscript || (input.noscript = []);
    const idx = input.noscript.push({}) - 1;
    const key = useVNodeStringKey();
    return () => {
      var _a;
      const noscript = normalizeProps(props, key);
      const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const textContent = [];
      if (slotVnodes) {
        for (const vnode of slotVnodes) {
          if (vnode.children) {
            textContent.push(vnode.children);
          }
        }
      }
      if (textContent.length > 0) {
        noscript.innerHTML = textContent.join("");
      }
      input.noscript[idx] = noscript;
      update();
      return null;
    };
  }
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String
  },
  setup(props) {
    const { input, update } = useHeadComponentCtx();
    input.link || (input.link = []);
    const idx = input.link.push({}) - 1;
    const key = useVNodeStringKey();
    return () => {
      input.link[idx] = normalizeProps(props, key);
      update();
      return null;
    };
  }
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup(props) {
    const { input, update } = useHeadComponentCtx();
    const key = useVNodeStringKey();
    return () => {
      input.base = normalizeProps(props, key);
      update();
      return null;
    };
  }
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup(_, { slots }) {
    const { input, update } = useHeadComponentCtx();
    return () => {
      var _a, _b, _c;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      input.title = ((_b = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _b.children) ? String((_c = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _c.children) : void 0;
      update();
      return null;
    };
  }
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    property: String
  },
  setup(props) {
    const { input, update } = useHeadComponentCtx();
    const key = useVNodeStringKey();
    input.meta || (input.meta = []);
    const idx = input.meta.push({}) - 1;
    return () => {
      const meta = { "http-equiv": props.httpEquiv, ...normalizeProps(props, key) };
      if ("httpEquiv" in meta) {
        delete meta.httpEquiv;
      }
      input.meta[idx] = meta;
      update();
      return null;
    };
  }
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, { slots }) {
    const { input, update } = useHeadComponentCtx();
    const key = useVNodeStringKey();
    input.style || (input.style = []);
    const idx = input.style.push({}) - 1;
    return () => {
      var _a, _b, _c;
      const style = normalizeProps(props, key);
      const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
      if (textContent) {
        input.style[idx] = style;
        style.textContent = textContent;
      }
      update();
      return null;
    };
  }
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => {
    createHeadComponentCtx();
    return () => {
      var _a, _b;
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup(_props, ctx) {
    const { input, update } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.htmlAttrs = { ..._props, ...ctx.attrs };
      update();
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup(_props, ctx) {
    const { input, update } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.bodyAttrs = { ..._props, ...ctx.attrs };
      update();
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingPage",
  __ssrInlineRender: true,
  props: {
    h1: { type: String, required: true },
    intro: { type: String, required: true },
    whyChoose: { type: Array, required: true },
    pricing: { type: String, required: true },
    cta: { type: String, required: true },
    startingPrice: { type: String, default: "\u20B92,999" },
    serviceBadge: { type: String, default: "Premium Service" },
    phone: { type: String, default: "+918178070797" },
    relatedLinks: {
      type: Array,
      default: () => [
        { title: "Airport Transfers", url: "/airport/delhi" },
        { title: "Corporate Travel", url: "/corporate/gurgaon" },
        { title: "Full-Day Hire", url: "/hire/south-delhi" }
      ]
    }
  },
  setup(__props) {
    const props = __props;
    const mobileMenuOpen = ref(false);
    const displayPhone = computed(() => props.phone.replace("+91", "+91 "));
    const schemaMarkup = computed(() => JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Car Rental Delhi - Honda City with Driver",
      "description": "Premium car rental with professional driver in Delhi NCR",
      "telephone": props.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Delhi",
        "addressRegion": "Delhi NCR",
        "addressCountry": "IN"
      },
      "priceRange": "\u20B92,999 - \u20B945,000",
      "openingHours": "Mo-Su 00:00-23:59"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-dark-950" }, _attrs))} data-v-57dcf640><header class="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-lg border-b border-white/5" data-v-57dcf640><div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center" data-v-57dcf640>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 relative" data-v-57dcf640${_scopeId}><svg viewBox="0 0 40 40" fill="none" class="w-full h-full" data-v-57dcf640${_scopeId}><rect x="4" y="4" width="32" height="32" rx="8" fill="url(#logoGradient)" data-v-57dcf640${_scopeId}></rect><path d="M12 22C12 19 15 16 20 16C25 16 28 19 28 22" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" data-v-57dcf640${_scopeId}></path><circle cx="14" cy="24" r="2" fill="#1a1a1a" data-v-57dcf640${_scopeId}></circle><circle cx="26" cy="24" r="2" fill="#1a1a1a" data-v-57dcf640${_scopeId}></circle><defs data-v-57dcf640${_scopeId}><linearGradient id="logoGradient" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse" data-v-57dcf640${_scopeId}><stop stop-color="#c9a962" data-v-57dcf640${_scopeId}></stop><stop offset="1" stop-color="#a88c3f" data-v-57dcf640${_scopeId}></stop></linearGradient></defs></svg></div><div data-v-57dcf640${_scopeId}><span class="text-lg font-bold text-white" data-v-57dcf640${_scopeId}>Car Rental Delhi</span><span class="block text-xs text-accent -mt-1" data-v-57dcf640${_scopeId}>Book Premium Sedan</span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 relative" }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 40 40",
                  fill: "none",
                  class: "w-full h-full"
                }, [
                  createVNode("rect", {
                    x: "4",
                    y: "4",
                    width: "32",
                    height: "32",
                    rx: "8",
                    fill: "url(#logoGradient)"
                  }),
                  createVNode("path", {
                    d: "M12 22C12 19 15 16 20 16C25 16 28 19 28 22",
                    stroke: "#1a1a1a",
                    "stroke-width": "2.5",
                    "stroke-linecap": "round"
                  }),
                  createVNode("circle", {
                    cx: "14",
                    cy: "24",
                    r: "2",
                    fill: "#1a1a1a"
                  }),
                  createVNode("circle", {
                    cx: "26",
                    cy: "24",
                    r: "2",
                    fill: "#1a1a1a"
                  }),
                  createVNode("defs", null, [
                    createVNode("linearGradient", {
                      id: "logoGradient",
                      x1: "4",
                      y1: "4",
                      x2: "36",
                      y2: "36",
                      gradientUnits: "userSpaceOnUse"
                    }, [
                      createVNode("stop", { "stop-color": "#c9a962" }),
                      createVNode("stop", {
                        offset: "1",
                        "stop-color": "#a88c3f"
                      })
                    ])
                  ])
                ]))
              ]),
              createVNode("div", null, [
                createVNode("span", { class: "text-lg font-bold text-white" }, "Car Rental Delhi"),
                createVNode("span", { class: "block text-xs text-accent -mt-1" }, "Book Premium Sedan")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-6" data-v-57dcf640>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-sm text-white/60 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/airport/delhi",
        class: "text-sm text-white/60 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Airport`);
          } else {
            return [
              createTextVNode("Airport")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/corporate/gurgaon",
        class: "text-sm text-white/60 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Corporate`);
          } else {
            return [
              createTextVNode("Corporate")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="btn-primary text-sm py-2 px-4" data-v-57dcf640>Book Now</button></nav><button class="md:hidden text-white p-2" data-v-57dcf640><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-57dcf640><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-57dcf640></path></svg></button></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden bg-dark-900 border-t border-white/5 px-6 py-4" data-v-57dcf640><nav class="flex flex-col gap-4" data-v-57dcf640>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          onClick: ($event) => mobileMenuOpen.value = false,
          class: "text-white/60 hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/airport/delhi",
          onClick: ($event) => mobileMenuOpen.value = false,
          class: "text-white/60 hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Airport Transfers`);
            } else {
              return [
                createTextVNode("Airport Transfers")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/corporate/gurgaon",
          onClick: ($event) => mobileMenuOpen.value = false,
          class: "text-white/60 hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Corporate Travel`);
            } else {
              return [
                createTextVNode("Corporate Travel")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><section class="relative pt-32 pb-20 px-6" data-v-57dcf640><div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" data-v-57dcf640></div><div class="max-w-4xl mx-auto relative z-10" data-v-57dcf640><div class="text-center" data-v-57dcf640><span class="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6" data-v-57dcf640>${ssrInterpolate(__props.serviceBadge)}</span><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-v-57dcf640>${ssrInterpolate(__props.h1)}</h1><p class="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto" data-v-57dcf640>${ssrInterpolate(__props.intro)}</p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-v-57dcf640><button class="btn-primary py-4 px-8 text-lg flex items-center justify-center gap-3" data-v-57dcf640><svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" data-v-57dcf640><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-v-57dcf640></path></svg> Book via WhatsApp </button><a${ssrRenderAttr("href", "tel:" + __props.phone)} class="btn-secondary py-4 px-8 text-lg flex items-center justify-center gap-3" data-v-57dcf640><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-57dcf640><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-v-57dcf640></path></svg> Call ${ssrInterpolate(unref(displayPhone))}</a></div></div></div></section><section class="py-20 px-6 bg-dark-900" data-v-57dcf640><div class="max-w-5xl mx-auto" data-v-57dcf640><div class="text-center mb-12" data-v-57dcf640><span class="text-accent text-sm font-semibold uppercase tracking-wider" data-v-57dcf640>Why Choose Us</span><h2 class="text-3xl md:text-4xl font-bold text-white mt-2" data-v-57dcf640>Premium Service Guaranteed</h2></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-57dcf640><!--[-->`);
      ssrRenderList(__props.whyChoose, (point, index) => {
        _push(`<div class="glass-card p-6 group" data-v-57dcf640><div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" data-v-57dcf640><svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-57dcf640><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-57dcf640></path></svg></div><p class="text-white/80 leading-relaxed" data-v-57dcf640>${ssrInterpolate(point)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 px-6 bg-dark-950" data-v-57dcf640><div class="max-w-4xl mx-auto" data-v-57dcf640><div class="glass-card p-8 md:p-12 text-center" data-v-57dcf640><span class="text-accent text-sm font-semibold uppercase tracking-wider" data-v-57dcf640>Transparent Pricing</span><h2 class="text-3xl md:text-4xl font-bold text-white mt-2 mb-6" data-v-57dcf640>Pricing &amp; Availability</h2><p class="text-lg text-white/70 leading-relaxed mb-8" data-v-57dcf640>${ssrInterpolate(__props.pricing)}</p><div class="flex flex-wrap justify-center gap-4" data-v-57dcf640><div class="px-6 py-3 bg-white/5 rounded-lg border border-white/10" data-v-57dcf640><span class="text-white/50 text-sm block" data-v-57dcf640>Starting from</span><span class="text-2xl font-bold text-accent" data-v-57dcf640>${ssrInterpolate(__props.startingPrice)}</span></div><div class="px-6 py-3 bg-white/5 rounded-lg border border-white/10" data-v-57dcf640><span class="text-white/50 text-sm block" data-v-57dcf640>Available</span><span class="text-2xl font-bold text-white" data-v-57dcf640>24/7</span></div><div class="px-6 py-3 bg-white/5 rounded-lg border border-white/10" data-v-57dcf640><span class="text-white/50 text-sm block" data-v-57dcf640>Includes</span><span class="text-lg font-bold text-green-400" data-v-57dcf640>Car + Driver + Fuel</span></div></div></div></div></section><section class="py-20 px-6 bg-gradient-to-b from-dark-900 to-dark-950" data-v-57dcf640><div class="max-w-4xl mx-auto text-center" data-v-57dcf640><h2 class="text-3xl md:text-4xl font-bold text-white mb-6" data-v-57dcf640>Book Your Ride Now</h2><p class="text-lg text-white/70 mb-8 max-w-2xl mx-auto" data-v-57dcf640>${ssrInterpolate(__props.cta)}</p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-v-57dcf640><button class="btn-primary py-4 px-8 text-lg flex items-center justify-center gap-3" data-v-57dcf640><svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" data-v-57dcf640><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-v-57dcf640></path></svg> WhatsApp Now </button><a${ssrRenderAttr("href", "tel:" + __props.phone)} class="btn-secondary py-4 px-8 text-lg flex items-center justify-center gap-3" data-v-57dcf640><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-57dcf640><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-v-57dcf640></path></svg> Call Now </a></div></div></section><section class="py-16 px-6 bg-dark-900 border-t border-white/5" data-v-57dcf640><div class="max-w-5xl mx-auto" data-v-57dcf640><h3 class="text-xl font-semibold text-white mb-6 text-center" data-v-57dcf640>Related Services</h3><div class="flex flex-wrap justify-center gap-3" data-v-57dcf640><!--[-->`);
      ssrRenderList(__props.relatedLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.url,
          to: link.url,
          class: "px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm hover:bg-accent/10 hover:border-accent/30 hover:text-white transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><footer class="bg-dark-950 border-t border-white/5 py-12 px-6" data-v-57dcf640><div class="max-w-5xl mx-auto" data-v-57dcf640><div class="grid md:grid-cols-3 gap-8 mb-8" data-v-57dcf640><div data-v-57dcf640><div class="flex items-center gap-3 mb-4" data-v-57dcf640><div class="w-8 h-8" data-v-57dcf640><svg viewBox="0 0 40 40" fill="none" class="w-full h-full" data-v-57dcf640><rect x="4" y="4" width="32" height="32" rx="8" fill="url(#footerLogo)" data-v-57dcf640></rect><path d="M12 22C12 19 15 16 20 16C25 16 28 19 28 22" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" data-v-57dcf640></path><circle cx="14" cy="24" r="2" fill="#1a1a1a" data-v-57dcf640></circle><circle cx="26" cy="24" r="2" fill="#1a1a1a" data-v-57dcf640></circle><defs data-v-57dcf640><linearGradient id="footerLogo" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse" data-v-57dcf640><stop stop-color="#c9a962" data-v-57dcf640></stop><stop offset="1" stop-color="#a88c3f" data-v-57dcf640></stop></linearGradient></defs></svg></div><span class="font-bold text-white" data-v-57dcf640>Car Rental Delhi</span></div><p class="text-white/50 text-sm" data-v-57dcf640>Premium Honda City with professional driver in Delhi NCR.</p></div><div data-v-57dcf640><h4 class="font-semibold text-white mb-3" data-v-57dcf640>Quick Links</h4><ul class="space-y-2 text-sm" data-v-57dcf640><li data-v-57dcf640>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-white/50 hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-57dcf640>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/airport/delhi",
        class: "text-white/50 hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Airport Transfers`);
          } else {
            return [
              createTextVNode("Airport Transfers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-57dcf640>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/corporate/gurgaon",
        class: "text-white/50 hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Corporate Travel`);
          } else {
            return [
              createTextVNode("Corporate Travel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div data-v-57dcf640><h4 class="font-semibold text-white mb-3" data-v-57dcf640>Contact</h4><div class="space-y-2 text-sm" data-v-57dcf640><a${ssrRenderAttr("href", "tel:" + __props.phone)} class="flex items-center gap-2 text-white/50 hover:text-accent transition-colors" data-v-57dcf640><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-57dcf640><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-v-57dcf640></path></svg> ${ssrInterpolate(unref(displayPhone))}</a><button class="flex items-center gap-2 text-white/50 hover:text-accent transition-colors" data-v-57dcf640><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" data-v-57dcf640><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-v-57dcf640></path></svg> WhatsApp </button></div></div></div><div class="border-t border-white/5 pt-6 text-center" data-v-57dcf640><p class="text-white/40 text-sm" data-v-57dcf640>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Car Rental Delhi. All rights reserved.</p></div></div></footer><div class="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-4 bg-dark-950/90 backdrop-blur-lg border-t border-white/10" data-v-57dcf640><button class="btn-primary w-full flex items-center justify-center gap-2 py-4" data-v-57dcf640><svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" data-v-57dcf640><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-v-57dcf640></path></svg> Book via WhatsApp </button></div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), { type: "application/ld+json" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(schemaMarkup))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(schemaMarkup)), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LandingPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57dcf640"]]);

export { Head as H, Meta as M, Title as T, __nuxt_component_3 as _ };
//# sourceMappingURL=LandingPage-D_CvFF6c.mjs.map
