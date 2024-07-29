import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, b as createAstro, m as maybeRenderHead, e as renderComponent, f as renderSlot } from '../chunks/astro/server_C_VpMbno.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
 -->${maybeRenderHead()}<div class="primary-layout"> <header class="full-width site-header"> <div> <a href="" class="hsc-logo">Hampden Sydney College</a> <div>search |
<a href="">visit</a> <a href="">apply</a> <a href="">give</a>
| Burger
</div> </div> </header> </div>`;
}, "/Users/rtm9/Documents/Marteal/MWW/sites/HSC/hsc-2/src/layouts/SiteHeader.astro", void 0);

const $$MainWrapper = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, {})}${maybeRenderHead()}<body> <div id="skip-to-nav" class="primary-layout full-width skip-nav"> <!-- <div > --> <a href="">Main nav</a><a href="">Content</a> <!-- </div> --> </div> ${renderComponent($$result, "SiteHeader", $$SiteHeader, {})} <main class="primary-layout"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CrestFeature1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- single crest feature -->", '<div class="articleHero"> <div class="text"> ', ` <p class="align-center inline-center"> <a href="">Why Hampden Sydney?</a> </p> </div> <img src="/images/baseball-field.jpg" alt=""> </div> <!-- <script is:inline src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"><\/script>
<section class="full-width bg-black crest">
	wrapper for crest bg
	<div class=" carousel full-bleed">
		{
			crestFeature1Data.map(slide => 
				<div class="slide feature-1">
					<div class="text">
						<p class="eyebrow align-center inline-center">{slide.eyebrow}</p>
						<Heading tagName="h2" size="base5" weight="black" family="serif"  classes="align-center" id="top">{slide.title}</Heading>	
						<p class="align-center inline-center">
							{
								slide.link.map( link => 
									<a href={link.url}>{link.text}</a>
								)
							}
						</p>
					</div>
					<img src="/images/Football-player.jpg" alt="" />
				</div>
			)
		}	
   </div>
</section> --> <!-- <script>
var flkty = new Flickity( '.carousel', {
  // options
});
<\/script> -->`])), maybeRenderHead(), renderComponent($$result, "Heading", $$Heading, { "tagName": "h2", "size": "base5", "weight": "regular", "family": "serif", "classes": "align-center textShadow", "id": "top" }, { "default": ($$result2) => renderTemplate`Forming good men &
good citizens since 1775.` }));
}, "/Users/rtm9/Documents/Marteal/MWW/sites/HSC/hsc-2/src/components/carousels/CrestFeature1.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainWrapper", $$MainWrapper, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CrestFeature1", $$CrestFeature1, {})} ` })}`;
}, "/Users/rtm9/Documents/Marteal/MWW/sites/HSC/hsc-2/src/pages/index.astro", void 0);

const $$file = "/Users/rtm9/Documents/Marteal/MWW/sites/HSC/hsc-2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
