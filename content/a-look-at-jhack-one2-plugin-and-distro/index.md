---
title: A look at J-HACK's ONE2 plugin and distro
date: "2019-10-30"
thumbnail: one2-plugin-spotlight.jpg
description: "J-HACK, the company behind an increasingly rich portfolio of small cases and 12v solutions, produces the ONE2 plugin (DC-ATX power) and ONE2 distro 400 (DC-DC distributor). I picked up these in a kit designed specifically for the Skyreach 4 Mini, and have been running them for a couple months, and believe these could be the future."
---

Today we'll be examining J-HACK's ONE2 plugin unit and DC-DC distributor that is at the heart of a [12v psu kit tailored to the Skyreach 4 Mini](https://j-hackcompany.com/?product=one2-distro-250w-skyreach-4-mini-edition).

{{< sfffig src="distro-400.jpg" caption="J-HACK's ONE2 plugin and distro. Image from j-hackcompany.com" >}}

This kit breaks the traditional ATX power supply into three components:

- The AC-DC conversion supplied via a brick (Meanwell GST280A12-C6P)
- The DC-DC distributor that [filters](https://en.wikipedia.org/wiki/Filter_capacitor) and powers the GPU, CPU, and plugin unit (ONE2 Distro 400)
- The DC-ATX plugin unit that powers the motherboard, RAM, and hard drives (ONE2 Plugin 160)

Be warned: this'll be a pretty niche article, and small form factor builds are already a niche inside the niche of pc building, but I want to start shedding light on sff creations I'm proud to own.

Splitting the components of a psu into dedicated pieces is unconvential, but nothing new. This power delivery method is how laptops work. Even in the desktop space, the PicoPSU plugin unit + brick has been around for at least a decade.

{{< sfffig src="PicoPSU-160-ACDC-192w-b.jpg" caption="The ever popular PicoPSU + brick. Image from mini-box.com" >}}

But we're not here to look at laptops or the PicoPSU brand. We're here for [J-HACK](https://j-hackcompany.com/), the company behind an increasingly rich portfolio of small cases and 12v solutions.

## The build

I purchased the ONE2 plugin and distro back in August for use inside the Skyreach 4 Mini, which [J-HACK makes a kit especially for](https://j-hackcompany.com/?product=one2-distro-250w-skyreach-4-mini-edition). Six days after ordering, the kit was shipped and soon at my doorstep (this was intra-US shipping). I find this short turn around impressive and worth mentioning in a world of boutique sff vendors. Without further ado, here is the kit in action; powering an [undervolted GTX 1070](/how-to-undervolt-gpu/) and an [undervolted Ryzen 2700](/how-to-undervolt-ryzen-cpu/) (see the guides for more info on how to undervolt).

{{< sfffig src="distro-s4m.jpg" caption="J-HACK ONE2 plugin and distro kit for the S4M" >}}

There was a small hiccup in shipping. While assembling in the S4M there appeared to be a piece missing, which after assuring myself it wasn't anything to do with my lackluster problem solving skills, I sent a message to J-HACK through [smallformfactor.net](https://smallformfactor.net) (the user `Thehack`). Within 3 minutes (no joke!) I received a reply identifying the missing piece as the 6 to 8 pin adapter between the included brick (more on that later) and distro 400. The missing piece was shipped free of charge and I received it a few days later. Definitely top notch support.

{{< sfffig src="power-entry.jpg" caption="The missing 6 to 8 pin adapter with 3d printed entry attachment" >}}

The only other area that gave me problems is that there are multiple CPU EPS connectors included in the kit. One is for the plugin unit and the other one for the distro unit. I made the mistake of powering the CPU from the plugin unit. While the PC would operate normally, if I would put it to sleep, waking would cause a restart with CMOS cleared and BIOS reset. Not ideal. Eventually with a bit of help from J-HACK, I figured out the distro 400 should be powering the cpu (pictured below). If instructions clarifying this were included in the package or online, this may have been a non-issue.

{{< sfffig src="cpu-eps-connection.jpg" caption="Connect cpu power from the distro 400 (route outlined), not the plugin unit" >}}

To be fair though, connecting power to the cpu from the distro unit is shown in [J-HACK's ONE2 distro 400 youtube video](https://www.youtube.com/watch?v=IyIMXIN_xtY) and the [Installing Distro 400 in the S4M video](https://www.youtube.com/watch?v=J0YQKhOB0Ew), but I feel that unless one searched for those videos one wouldn't know they exist. My recommendation would be to include a link to these resources in the order confirmation email or on the product page.

No more problems after that, but something to be aware of is the wire that synchronizes the on and off functions of the mosfets between the plugin and distro unit. I've highlighted it down below. In the actual build, the included extension is needed, and there doesn't seem to be strong retention mechanism, so the line often disconnects when moving things around. The line hasn't disconnected on it's own, as far as I know. If it does become a problem, one can ignore the line by moving a jumper on the distro unit so that it is always outputting 12v.

{{< sfffig src="one2-plugin-distro.jpg" caption="SYNC line highlighted" >}}

The SYNC line is not needed when only using one part of the combo: the distro unit **or** the plugin unit. For instance, the plugin unit can be used standalone for APU / iGPU builds, and the distro unit can be used standalone for motherboards that accept a 12v input directly (eg: some server motherboards).

After getting the missing piece and doing some light problem solving, this system has been rock solid and has been my daily driver ever since for now nearly three months. Both the ONE2 Plugin 160 and Distro 400 are quality units that have been through their paces: torture tests, undervolting, overclocking, etc. I have no reservation about recommending these.

## The brick in the room

While the distro is compatible with any 12v DC source, the AC-DC converter that ships with the S4M kit is the [Meanwell GST280A12-C6P brick](https://www.mouser.com/ProductDetail/MEAN-WELL/GST280A12-C6P?qs=XfZQyRplo5S6bkFXOs4q7w%3D%3D) and it's a big one -- about a liter in size and same width and thickness as the case.

{{< sfffig src="big-brick.jpg" caption="The big boi: Meanwell GST280A12-C6P" >}}

I used to be a brickless adherent. I wouldn't even think twice about cases that required an external brick, but over the last couple months this brick has grown on me for one big reason: silence. I migrated from a flexATX PSU with a modded noctua fan, which was audible even at idle. So even though some may find this a downgrade in terms of volume, I have the brick mounted underneath my desk so the setup looks as clean as a brickless build and it's inaudible. Unlike other power solutions that I'll touch upon in a future article, there is not even electrical noise.

Some quick facts about the GST280A12-C6P

- The "280" part of the name may be a bit misleading as the max rated power is 252W
- Typical conversion efficiency measured at 89.5%. Slightly lackluster compared to its internal brethren at 93% ([UHP-200-12](https://www.mouser.com/ProductDetail/MEAN-WELL/UHP-200-12?qs=YCa%2FAAYMW02wbY6zs%252B73Lg%3D%3D) and [RPS-200-12](https://www.mouser.com/ProductDetail/MEAN-WELL/RPS-200-12-C?qs=jRFAGhNBpj9vanBsj8iTeA%3D%3D)). Not great, but not terrible.
- Max ripple is within the ATX spec (something that UHP-200-12 exceeds)

Overall the brick is large but quiet and in spec (safe).

## The extras

Not everything that was packaged was necessary for the build. Here are the components leftover:

{{< sfffig src="the-extras.jpg" caption="Unused components in the ONE2 distro S4M kit" >}}

From left to right:

- SATA power cables. I'm a staunchly M.2 only. But these cables would tie into the ONE2 plugin unit. In case you are tempted to wire this for a NAS, the plugin unit may [lack enough juice for more than two 3.5" HDD spinning up](https://smallformfactor.net/forum/threads/one2-distro-400-a-12v-power-distribution-board.7687/page-15#post-141248).
- DC jack for use with other bricks. Though I believe one would need a 4 to 8 pin adapter to connect it the distro unit. One *should* also be able to connect the plugin unit directly to this DC jack for scenarios where the distro 400 is unneeded (APU / iGPU builds).
- ONE2 plugin to CPU 4pin connector. From my experience, this should only be used in situations where the distro 400 is unused (APU / iGPU builds)

## The why

So far we've seen what the ONE2 distro kit for the S4M contains and how to build with it, but I haven't divulged into the reasoning why I bought this originally. In truth, I'm a big fan of dc-atx plugins (also known as plugin DC boards and informally: pico PSUs (but that's more a brand))

{{< sfffig src="one2-plugin-spotlight.jpg" caption="Consolidate 24 wires with a plugin unit" >}}

If I'm not mistaken, J-HACK sources the manufacturing of the ONE2 plugin and distro from [PicoBox](http://www.pico-box.com/en/), but has the units customized to stand out with aesthetics (black pcb, 3d printed covering for the distro) and other features such that the plugin unit [properly supports 75w cpu + 75w gpu](https://smallformfactor.net/forum/threads/news-about-pico-psu.11225/#post-158472).

The plugin and distro units operate at 12v. Computer components are mostly powered by 12v (since ATX12V 2.0 in 2003), so the plugin and distro don't need to allocate space and cost for a step down converter to 12v. This allows them to be slim and minimal compared to wide input DC units (à la 16-24v wide HDPlex), which are much beefier in size and tend to cost more. Of course, the 12v ecosystem isn't all rosy, the reason why there exists wide input DC units is that it allows them to be compatible with a wide range of bricks. Since there are a lot more laptops sold (specifically 19v laptops -- [see why](https://electronics.stackexchange.com/a/31621)) than SFF power supplies, it is understandable why one would want to leverage those bricks. And with the downsizing of bricks that's been happening over the last couple years, the bulk of a 19v input DC unit is reclaimed with a [slim 19v brick](https://www.dell.com/en-us/work/shop/dell-240-watt-ac-adapter-for-precision-7730/apd/450-ahhe/pc-accessories?ref=p13n_ena_pdp_vv&c=us&cs=04&l=en&s=bsd).

I'm bullish on 12v, though. See [A Guide to 12V PSU](https://smallformfactor.net/forum/threads/a-guide-to-12v-psu.1270/) that J-HACK wrote for some of the reasons why 12v is the future; basically a 12v future is more power and space efficient than alternatives. My philosophy is that the end goal is brickless and choosing the smallest internal DC components is the step in the right direction.

{{< sfffig src="distro-400-only.jpg" caption="J-HACK ONE2 Distro 400 -- small and flexible" >}}

The ONE2 Distro 400 is small, sleek, and sexy. Compared to [other 12v](https://www.amazon.com/RGEEK-Switch-24pin-Supply-Computer/dp/B071P3HMNK/ref=sr_1_2?keywords=RGEEK+1106+DC+to+DC+ATX+PSU&qid=1572007329&s=electronics&sr=1-2) dc [distro boards](https://www.amazon.com/250w-DC-ATX-Power-Supply-Supplies/dp/B00NB6U3TS), it's infitely better looking. And if you are less shallow than I am, the Distro is more than just better looking:

- One can hook up a GPU with up to two additional PCIe power connectors. 12v dc distro boards with PCIe power are incredibly sparse. The only other board I found was the [PICOBOX X200](http://www.pico-box.com/en/products/658/X200#) which only offers one connection and calls for forced air when operating at or above 120 watts.
- Powers up to 400w (is which more than enough unless it's an 9900k + [an excessive 2080ti](https://www.newegg.com/msi-geforce-rtx-2080-ti-rtx-2080-ti-gaming-x-trio/p/N82E16814137338)).
- Accepts any 12v DC input on 18-12 gauge wires via the WAGO terminal connector or one can use the 8pin
- [Filters](https://en.wikipedia.org/wiki/Filter_capacitor) the DC power for downstream components

Due note that the CPU EPS connector on both the distro and plugin unit is 4pin only. If your motherboard has an 8pin connection, you can still slot the 4pin connector into half of it. Don't fret too much that the 4pin can "only" power 144w. This should be sufficient for CPUs intended for SFF builds. It may not be advisable for the distro 400 to power a Threadripper, 9900k, or 8700k as these all exceeded 144w at full load [according to Anandtech](https://www.anandtech.com/show/14605/the-and-ryzen-3700x-3900x-review-raising-the-bar/19).

{{< sfffig src="cpu-power-usage.png" caption="CPUs power usage. Image from www.anandtech.com" >}}

On the bright side, the graph shows the distro 400 would be able to power a 2700x and 3900x. Realistically before running into a power issue, you'd run into a cooling issue as SFF cases aren't known for supporting beefy cooling solutions. And keep in mind these power recordings may have been done in an unrealistic torture test without undervolting, so one can be adventurous and push the limits. Before you get too excited, the 4pin CPU EPS connector from the distro unit can't be combined with the 4pin connector from the plugin unit to form a pseudo-8pin connector.

## The alternatives

I don't necessarily want to launch into a this vs that with other solutions because I like certain aspects of all of them, but I think it is important view my thought process towards SFF power supplies:

- FlexATX: (not compatibile with S4M) I have not encountered a FlexATX psu with a satisfactory noise profile (even with a noctua fan mod), but their power density and ease of use is hard to argue against. If desired, [some](https://www.reddit.com/r/sffpc/comments/bpnjxg/flexatx_psus_jet_engines/envk3zj?utm_source=share&utm_medium=web2x) have [reported](https://www.reddit.com/r/sffpc/comments/dortql/the_velka_3_build/f5pqzj9?utm_source=share&utm_medium=web2x) that the ENP-7660B 600W is quiet at low loads.
- Dynamo mini and 360 is the 19v cousin to J-HACK's 12v ONE2 combo. Unfortunately, [KMPKT has stalled production](https://smallformfactor.net/forum/threads/dynamo-mini-availability.11063/#post-153595) so long term viability seemed in doubt.
- [HDPlex 200W DC-ATX](https://hdplex.com/hdplex-200w-dc-atx-power-supply-16v-24v-wide-range-voltage-input.html): An absolute massive plugin unit compared to the ONE2 plugin, which makes it a lot less nimble (I'll have an article forthcoming on this unit). If this had been released earlier in the year, I would have considered picking this up in combination with a [slim 19v brick](https://www.dell.com/en-us/work/shop/dell-240-watt-ac-adapter-for-precision-7730/apd/450-ahhe/pc-accessories?ref=p13n_ena_pdp_vv&c=us&cs=04&l=en&s=bsd).
- [HDPlex 400W DC-ATX](https://hdplex.com/hdplex-400w-hi-fi-dc-atx-power-supply-16v-24v-wide-range-voltage-input.html): This DC-ATX needs a 24pin connector, which most people [recommend getting customized](https://nfc-systems.com/shop-all/skywire) for the S4M, but a recent pinout change [prompted headache](https://www.youtube.com/watch?v=n6gQ5ie2Dw0) for a lot of people. I would have only considered this if my gpu, the 1070 Aero ITX, fit brickless with the 400w AC-DC. Since it doesn't, using the AC-DC converter, which has a fan as an external brick didn't sit right with me.
- [G-Unique](https://smallformfactor.net/forum/threads/more-g-unique-bto-psus-are-now-available-direct-order.1983/): The most impressive sff psu modder. They make plugin units up to 500W (effectively merging the ONE2 distro 400 and plugin unit in one). While most are happy G-Unique customers, others [haven't had as](https://smallformfactor.net/forum/threads/news-about-pico-psu.11225/#post-160177) nice [as an experience](https://smallformfactor.net/forum/threads/custom_mod-case-sx-sxm.1786/page-41#post-132923). So as lame as a reason as this is, I felt more comfortable with J-HACK, but if you're considering G-Unique, get G-Unique.
- SFX: (not compatible with S4M). A solid form factor that I'd recommend to most people. With J-HACK releasing their [M2427](https://j-hackcompany.com/?product=j-hack-m2427-for-corsair-sf-series) one can now reduce up to 30 wires down to just 7.

{{< sfffig src="distro-400-front.jpg" caption="Distro 400 can be placed in a multitude of areas due to its size" >}}

There are even more options than listed here but other plugin units either were without a 8pin PCIe power connector, had extremely poor efficiency rating, or greatly inflated power ratings. Don't want to brick $1k worth of components due to a $15 plugin unit from AliExpress.

## The future

If a brick is fine for you in theory, but you just wish it was smaller than the Meanwell, then I have good news for you. Recent advancements in [GaN technology](https://en.wikipedia.org/wiki/Gallium_nitride#Transistors_2) has allowed for [2.5x smaller bricks to appear on the horizon](http://www.adaptertech.com.tw/200W-GaN-FET-Power-Supply.html?CID=1). KMPKT has [drummed up some interest](https://smallformfactor.net/forum/threads/price-check-small-200w-ac-dc-brick.10611/) in small 200w bricks. Even TheHack had [some promising news](https://smallformfactor.net/forum/threads/j-hack-mod-shop.6240/page-6#post-162357):

> We will be sampling 300W external kits that are 1/3 the size of today's available brick next year. It'll be quite a premium though!

I'm excited as smaller bricks may remove some of stigma that bricks carry in the community, and allow for more creative case designs.

I'm also excited for boards to phase out the 24pin connection all together or offer multiple power input connections. While mostly relegated to workstation and server motherboards, some (like this [X11SDV-8C+-TLN2F](https://www.supermicro.com/en/products/motherboard/X11SDV-8C+-TLN2F)) are able to receive a 12v DC input directly. Builds like with those can be seriously clean as they don't even need a plugin unit or dc distro board. For example, one user on the sff forums [hooked his Meanwell PSU directly to the board](https://smallformfactor.net/forum/threads/project-pure-3l-apu-case-meanwell-support.8588/page-16#post-148224), so the only cables needed are the power button, 3 wires for power entry to the psu, and the a few wires from psu to the board.

## Conclusion

- The ONE2 plugin and distro are good looking, compact, and high quality
- The included 12v brick in the kit is bulky, but also good quality
- One can replace the brick with an internal 12v AC-DC PSU and reuse the plugin and distro
- The distro kit for the S4M allows for those with non-existant wiring skills (like yours truly) to dip their toes into the 12v ecosystem
- J-HACK has excellent customer support
- Remember, when the distro and plugin are used together, power the CPU from the distro.
- Neither the distro 400 or the plugin unit can power a cpu that pulls more than 144W

Definitely gets recommendation from me. If you are more comfortable with wiring or a have a custom layout, you can buy the distro 400 and plugin unit standalone.

## Discussion

This article has been discussed at the following external sites

- [Reddit](https://www.reddit.com/r/sffpc/comments/dp5o2y/a_look_at_jhacks_one2_plugin_and_distro/)
