import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, b as createAstro, m as maybeRenderHead, d as renderComponent, f as renderSlot } from './astro/server_Cv32LPW7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Head;
  const { title, description } = Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head>`;
}, "/Users/rtm9/Documents/Marteal/MWW/sites/HSC/hsc-2/src/layouts/Head.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="site-footer full-width"> <footer class="breakout">
footer stuff
</footer> </div>`;
}, "/Users/rtm9/Documents/Marteal/MWW/sites/HSC/hsc-2/src/layouts/SiteFooter.astro", void 0);

const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 
    siteHeader.astro
    - CTA/Black bar at top
        - cta links
        - search
    - header 
        - logo
        - main nav
 -->${maybeRenderHead()}<div id="skip-to-nav" class="primary-layout full-width skip-nav"> <a href="">Main nav</a><a href="">Content</a> </div> <div class="primary-layout"> <header class="full-width site-header"> <div> <a href="" class="hsc-logo">Hampden Sydney College</a> <div class="actions"> <button id="searchToggle" class="searchToggle" arial-label="show search field"></button> <span></span> <div class="cta"> <a href="">visit</a> <a href="">apply</a> <a href="">give</a> </div> <span></span> <a href="#" class="menuTrigger">Menu<span></span></a> </div> </div> </header> </div>`;
}, "/Users/rtm9/Documents/Marteal/MWW/sites/HSC/hsc-2/src/layouts/SiteHeader.astro", void 0);

const $$Astro$1 = createAstro();
const $$MainWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainWrapper;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, { ...Astro2.props })}${maybeRenderHead()}<body> ${renderComponent($$result, "SiteHeader", $$SiteHeader, {})} <main class="primary-layout"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/rtm9/Documents/Marteal/MWW/sites/HSC/hsc-2/src/layouts/MainWrapper.astro", void 0);

const $$Astro = createAstro();
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heading;
  const { tagName = "h2", classes, size = "base0", family = "sans", weight = "regular", ...rest } = Astro2.props;
  const headingTags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6"
  };
  const Tag = headingTags[tagName];
  const headingSizes = {
    xs: "fs--2",
    s: "fs--1",
    base0: "fs-0",
    base1: "fs-1",
    base2: "fs-2",
    base3: "fs-3",
    base4: "fs-4",
    base5: "fs-5",
    base6: "fs-6",
    base7: "fs-7"
  };
  const headingWeights = {
    light: "fw-light",
    regular: "fw-regular",
    bold: "fw-bold",
    black: "fw-black"
  };
  const headingFamilies = {
    sans: "ff-sans",
    serif: "ff-serif"
  };
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [headingSizes[size], headingWeights[weight], headingFamilies[family], classes], ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/rtm9/Documents/Marteal/MWW/sites/HSC/hsc-2/src/components/ui/Heading.astro", void 0);

export { $$Heading as $, $$MainWrapper as a };
