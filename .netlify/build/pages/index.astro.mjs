import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cv32LPW7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Heading, a as $$MainWrapper } from '../chunks/Heading_DQVHPiD8.mjs';
export { renderers } from '../renderers.mjs';

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
