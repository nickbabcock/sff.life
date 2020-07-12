---
title: HDPLEX 200W NanoATX Combo - Almost Perfect
date: "2019-11-12"
thumbnail: dc-atx.jpg
description: "Over the years, HDPLEX has been iterating on creating on their 19v plugin, distro board, and ac-dc converter. The latest iteration of their DC-ATX plugin, is both the biggest in terms of power output and size. Combined with the 200w AC-DC, they are almost perfect as HDPLEX is known for their small form factor expertise, customer support, and quality products."
---

In the last article I covered [J-HACK's 12v ONE2 plugin and distro](/a-look-at-jhack-one2-plugin-and-distro/). This time it's a cousin: [HDPLEX's 19v 200w NanoATX combo](https://hdplex.com/hdplex-200w-dc-atx-power-supply-16v-24v-wide-range-voltage-input.html).

{{< sfffig src="200w-nanoatx-combo.jpg" caption="HDPLEX 200w NanoATX combo. Image from hdplex.com" >}}

Quick intro for those new to these types of power supplies. This combo in particular splits the traditional ATX power supply into two components:

- The AC-DC converter ([HDPLEX 200W AC-DC](https://hdplex.com/hdplex-internal-200w-ac-dc-adapter-with-active-pfc-and-19vdc-output.html)) converts AC from the wall into 19v DC.
- The DC-ATX plugin unit ([HDPLEX 200W DC-ATX](https://hdplex.com/hdplex-200w-dc-atx-power-supply-16v-24v-wide-range-voltage-input.html)) plugs right into the motherboard 24pin connector, takes the 19v DC as input, and steps it down to various voltages

The benefit of these power supplies is that they can be smaller and fit in multiple locations. Compared to a SFX psu at (125mm x 63.5mm x 100mm = 0.79L), which are already much smaller than an ATX psu at (150mm x 86mm x 140mm = 1.8L), the HDPLEX 200w AC-DC is the smallest of the bunch at (149.5mm x 52mm x 40 mm = 0.31L) and it has no fan.

{{< sfffig src="size-comparison.png" caption="HDPLEX 200w AC-DC compared to SFX and ATX PSUs. From comparesizes.com" >}}

While the 200w won't power top tier graphic cards, you could pair it with a Ryzen 3600 and a GTX 1660 super for a good gaming computer most couldn't complain about. With a little help from undervolting ([guide for cpu](/how-to-undervolt-ryzen-cpu/) / [guide for gpu](/how-to-undervolt-gpu/)) you can even upgrade to the RTX 2060 super.

HDPLEX is an established company that been around the [small form factor space since 2007](https://hdplex.com/hdplex-history) specializing in fanless cases and fanless power supplies. And to dispell a myth, just because HDPLEX offers "low" wattage solutions, doesn't mean quality suffers. They have a team of electrical engineers designing their products (instead of rebranding off the shelf), and their power supplies are CE/FCC/RoHS certified. Tons of people swear by HDPLEX, including [Josh from NFC who called the 400w AC-DC a gamechanger](https://www.youtube.com/watch?v=B5flCWzjR1A), and [smallformfactor.net gave a positive review of earlier versions](https://smallformfactor.net/reviews/powersupplies/hdplex-160w-dc-atx-direct-plug-review/)

Other than quality products, HDPLEX also has a reputation of giving overly optimistic estimates when products will be available. Pre-order dates often come and pass with a similar response "next month". It's not uncommon for delays to reach up to six months. This fact irks those chomping at the bit, as HDPLEX product launches always have a hype train.

## The build

{{< sfffig src="s4m-build.jpg" caption="HDPLEX 200w NanoATX combo in a Skyreach 4 Mini" >}}

The 200w combo fits nicely inside the [Skyreach 4 Mini](https://nfc-systems.com/skyreach-4-mini) -- powering a Ryzen 1600 and a GTX 1650. With such a low power setup like this, the 200w combo is nearly overkill. Anyways, pre-orders for the combo went live on August 13th (after a few months of missed estimates and me pestering HDPLEX for updates, of which they were gracious enough to provide), shipped the 28th and was at my doorstep on the 30th. A short pre-order time makes me think that HDPLEX only opens pre-orders once they have all kinks worked out and just need to get an estimate for the factory, which seems preferable to the long lead times and prototype quality when funding via kickstarter.

Building with the units was a breeze. Just about as plug and play as one can get. Despite plugin units often lauded as having zero footprint, HDPLEX's beefy DC-ATX unit has some caveats.

### The Size Issue

There was one thing I didn't notice about the unit until the very end when I went to shut the case: the plugin unit is tall.

{{< sfffig src="close-lip.jpg" caption="HDPLEX 200w DC-ATX barely fits in the S4M as it's so tall" >}}

Thankfully the case closes, but the plugin unit touches the side panels. With the plugin unit's PCB at 32mm tall (total of 45mm with the atx connection), it can be unexpectedly limiting. Since it is taller than [Noctua's 37mm NH-L9i](https://noctua.at/en/products/cpu-cooler-retail/nh-l9i), the unit won't be able to fit in cases that have a hard sub-45mm CPU cooler clearance like the sandwich style [Velkase 3](https://www.velkase.com/products/velka-3). One also has be to be careful when pairing this plugin unit with components that get close to the ram slots, such as CPU coolers like Noctua's [NH-L12S](https://noctua.at/en/products/cpu-cooler-retail/nh-L12s) and [NH-C14S](https://noctua.at/en/products/cpu-cooler-retail/nh-c14s). Both coolers expect at least sub-45mm RAM in low profile mode, which the plugin unit exceeds. So depending on your setup, be prepared to have a backup cooler like [Scythe's Big Shuriken 3](https://www.tweaktown.com/reviews/9058/scythe-big-shuriken-3-cpu-cooler-review/index.html) instead of the NH-L12S.

If the depth of the plugin unit is too much, one can remove the two heat sinks by unscrewing three screws each:

{{< sfffig src="bare-front.jpg" caption="HDPLEX 200w DC-ATX with front heat sink removed" >}}

Removing the heat sinks shrinks the depth of the plugin unit to around 20mm total, a decrease of around 11-12mm. 

{{< sfffig src="bare-back.jpg" caption="HDPLEX 200w DC-ATX with back heat sink removed" >}}

While I've elected to use the plugin unit with the heat sinks attached, it's not required. Keep in mind, HDPLEX makes fanless cases and the plugin unit is prepared for use cases where there's zero airflow. The surrounding airflow from a nearby air cooler is often sufficient. In cases where there is direct airflow, like [Lone's L5](https://loneindustries.com/products/5), removing the heat sinks [is even an endorsed option](https://smallformfactor.net/forum/threads/lone-industries-l5-4-6l-mini-itx.9637/page-27#post-165339).

Taking a look at the heat sink themselves, they are ~5mm in thickness with thermal padding

{{< sfffig src="thermal-pad.jpg" caption="HDPLEX 200w DC-ATX heat sink thermal pads" >}}

Something I find almost comical is that the plugin unit is so beefy, it needs a button to apply pressure to the latch onto the ATX connection on the motherboard to disconnect it from the socket:

{{< sfffig src="disconnect.jpg" caption="HDPLEX 200w DC-ATX disconnect button highlighted" >}}

It works well, press down and rock the plugin lengthwise until it detaches.

All this size is for something though. The plugin unit is one of the highest rated commercially available, and it looks like the 200W rating may even have been conservative as [HDPLEX had this to say](https://smallformfactor.net/forum/threads/lone-industries-l5-4-6l-mini-itx.9637/page-27#post-165357):

> We test using 250W load in passive mode. I am pretty sure it can sustain 250W with active cooling. However 300W will trigger protection

So while one may like to poke fun at the size of the plugin unit, it is undeniable that it's a workhorse of a plugin unit.

### The Power Issue

One stumbling block with HDPLEX is the power connection:

{{< sfffig src="ground-plug.jpg" caption="HDPLEX 200w C8 connector with ground ring exposed" >}}

The HDPLEX bundles a C14 power inlet and an ungrounded C8 inlet with a ground ring terminal (pictured above). I'm disappointed that the AC-DC unit lacks a [C6 inlet](https://en.wikipedia.org/wiki/IEC_60320#Appliance_couplers), especially because the 2019 S4M, which is pictured throughout, [enlarged the power entry cutout to fit a C6 AC inlet](https://nfc-systems.com/shop-all/c6-ac-inlet). To fix this, one would need to acquire and wire a C6 inlet to a [JST ELP-03V](https://www.arrow.com/en/products/elp-03v/jst-manufacturing) connector, use a different case that has a C14 cutout, use the C14 inlet in a pigtail fashion outside the case, cannibalize the C14 wires to a C6, or live with this safety issue. Since my wiring skills are slim to nonexistent and I'm married to the S4M, am I putting myself in harms way without a grounded computer?

The answer is, yes the components and I are less safe than if I had used a C14 connection, but I would not consider it dangerous. **NOTE**: I'm not an electrical engineer so be wary if reading for certainty. There is nothing inherently unsafe about appliances with a C8 inlet if found on a 
[doubly insulated (Class II) appliance](https://en.wikipedia.org/wiki/Appliance_classes#Class_II). Since the HDPLEX 200w AC-DC converter includes a ring terminal for ground with the C8 inlet, I'm assuming it is not doubly insulated with a metal shell.  In the event where a live wire inside the HDPLex comes loose due to age, defect, etc and touches the metal shell, the S4M should not carry a lethal shock, as the S4M is encased in [mostly non-conductive anodized aluminium](https://smallformfactor.net/forum/threads/hdplex-400w-ac-dc-adapter.7069/page-9#post-103911). Even when placed inside a conductive case, the HDPLEX is equipped with [short circuit protection (SCP)](https://www.tomshardware.com/reviews/power-supplies-101,4193-21.html#scp-short-circuit-protection) which shuts off the power supply when a short is detected. These two assurances help mitigate the risk -- but use the grounded connection (C14 or C6) if possible.


### The Noise Issue

The is one thing that stops me from giving a warmer recommendation is noise. Seems ironic to complain about noise from a fanless psu, but it's true. There is an unmistakeable electric noise coming from the AC-DC converter. The funny thing is, the noise only occurs while the computer is off or sleeping. There are good days (quiet) and bad days. I've attached clip for your hearing pleasure.

{{< sffaudio src="psu-noise.wav" caption="HDPLEX 200w AC-DC electrical noise when powered off" >}}

It's subtle, but constant. I find it distracting when concentrating next to the computer and it's sleeping. I'm thankful I sleep in a separate room, else I may need to unplug the computer. I emailed HDPLEX about the issue (always receiving responses within the hour -- HDPLEX is incredibly attentive) and was told the noise originates from a mosfet charging and discharging and that this behavior can be expected.

I'm not an isolated incident. In both the links posted earlier praising HDPLEX products, both mentioned audible electrical noise. In discord channels, reddit, and forums, people also complain about the whine. Some have contacted HDPLEX for a resolution (ie: receive a new model), but sometimes, like in my case, the electrical noise is expected. Some have reported putting the AC-DC unit behind a [power conditioner](https://en.wikipedia.org/wiki/Power_conditioner) improves the situation, but I'd rather not spend more money and space for the psu, and I assume that most feel the same way too. In the end, I tolerate it through a concoction of waking the computer and headphones. The noise may be softening over months of use, or maybe I've become conditioned to it.

The good news is that others have reported no noise whatsoever, and with constant iteration that HDPLEX is known for, one can only hope the number of flawed units decrease. The flip side of iteration is that sometimes backwards incompatibility is introduced. For instance, the [400w DC distributor](https://hdplex.com/hdplex-400w-hi-fi-dc-atx-power-supply-16v-24v-wide-range-voltage-input.html) saw an unannounced breaking pinout change from 1.x to 2.0 [prompting headache](https://www.youtube.com/watch?v=n6gQ5ie2Dw0) for those with custom cables. To be clear, this has not effected the 200w combo in any way, but it serves as a reminder that those looking into cabling their devices need to be extra careful.

### The Labelling Issue

{{< sfffig src="mislabel.jpg" caption="HDPLEX 200w AC-DC mislabeled as 4pin output on case" >}}

Not going to spend too much time on this, but the AC-DC unit is labelled as having a 4pin 19V DC output, whereas it's actually 6pin. HDPLEX's website correctly identifies it as a 6pin, but since at least [one user made the mistake](https://smallformfactor.net/forum/threads/hdplex-200w-ac-dc-im-surprised-nobody-is-talking-about-this.10684/page-4#post-171815), I figured I'd mention it here in case someone else is confused. 

## Additional Thoughts

Let's talk 19v vs 12v. Everything HDPLEX makes is 19v. This makes it easier to take advantage of the vast [19v brick ecosystem provided by laptops](https://electronics.stackexchange.com/a/31621). The downside of 19v is that internal components run mostly on 12v, so there needs to be a step down converter to 12v. This conversion consumes space and costs efficiency. Compare this to 12v plugin units like [J-HACK's](/a-look-at-jhack-one2-plugin-and-distro/), which are much slimmer and shorter because they don't need to step down to 12v.

To me, having a 19v internal AC-DC doesn't make a whole lot of sense as it's creating more work for the plugin unit. I would love for HDPLEX to come out with a 12v internal AC-DC unit and a plugin unit to complement. I believe it would be a smash hit among SFF enthusiasts if it can deliver the same quality in a smaller package. Unfortunately, designing, creating, and maintaining two separate voltage portfolios is not free. And being a "smash hit" among SFF enthusiasts would cannibalize 19v sales and still relegate HDPLEX to niche status. I'm sure this idea has crossed HDPLEX's drawing board but was determined not economical.

In addition to shown components, HDPLEX includes other accessories:

{{< sfffig src="accessories.jpg" caption="HDPLEX 200w NanoATX accessories" >}}

The accessories are all described on HDPLEX's website but to save a click:

- 6+2 PCIe (red) power connector for the GPU
- DC jack input (if not using the AC-DC converter)
- 2 SATA connections
- C14 power inlet

One thing I find amusing about HDPLEX's DC-ATX plugin unit is that it comes with 4+4 CPU EPS connector. [An 8pin connection is rated up to ~300w](http://www.playtool.com/pages/psuconnectors/connectors.html#eps8). HDPLEX can supply a max of 240w on the 12v rail, so not quiet all the way. Still, this leads me to believe that one can overclock CPUs like the 9900k in an iGPU build with the plugin unit. This is bit of a stark contrast to J-HACK and their Distro 400 (an apples to oranges comparison, but hang tight) where the Distro 400 has two PCIe outputs (~300w) and one 4pin CPU connection (~150w). So for the HDPLEX DC-ATX plugin, it can supply more power to the CPU than GPU, and J-HACK Distro supplies more power to the GPU than CPU. Just an interesting tidbit regarding their philosophy.

## The Recommendation

Despite them being available as a combo, I recommend the DC-ATX plugin unit more than the AC-DC unit. The potential for noise from the AC-DC converter is too great, and can dampen the excitement of any build. The exclusion of a C6 inlet may put users / components more at risk than desired. I understand that HDPLEX is unable to cater their product to fit every niche, but I believe it is equally important for consumers to be aware of potential caveats.

The DC-ATX unit I can recommend with very little reservations. At the moment, it's probably the highest quality DC-ATX plugin unit that is commercially available. The only reason to avoid the unit is if there is a clearance issue with either a CPU cooler that's not 100% RAM compatible or slim cases with a sub-45mm cooler height. For builds, I'd pair the DC-ATX unit with a [240W slim 19v brick](https://www.dell.com/en-us/work/shop/dell-240-watt-ac-adapter-for-precision-7730/apd/450-ahhe/pc-accessories?ref=p13n_ena_pdp_vv&c=us&cs=04&l=en&s=bsd) for a nice gaming machine (Ryzen 5 3600 + 1660 Super / 2060 Super + mod free S4M) or workstation (Ryzen 9 3900x + Scythe Big Shuriken 3 + Lone L5 or even a [NH-U9S](https://noctua.at/en/nh-u9s) in a [LZ7](https://www.lazer3d.com/2017/10/31/dc-dc-panels-now-available-for-the-lz7/)).

If only HDPLEX had two SKUs: a 12v AC-DC + DC-ATX plugin combo, and a 19v plugin unit + slim brick -- then we'd be living in a perfect world.
