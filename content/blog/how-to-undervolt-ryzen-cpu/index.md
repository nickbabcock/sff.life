---
title: How to undervolt your ryzen cpu
date: "2019-10-10"
thumbnail: ./bios-vcore-offset.png
description: "Undervolting your CPU can make your system run cooler, quieter, and more efficiently. Unfortunately, there are a myriad of different ways to undervolt. This guide will help make the best decision depending on what's available for each system. Along the way we'll record monitoring data and benchmark scores to quantity the effect of undervolting."
---

Undervolting your CPU can make your system run cooler, quieter, and more efficiently. Though compared to [how to undervolt your gpu](/how-to-undervolt-gpu/), undervolting your CPU can be daunting as the technique to achieve undervolting can change based on your CPU, motherboard vendor, motherboard model, and even motherboard BIOS version. This guide is sticking to undervolting AMD Ryzen chips to keep the scope somewhat in check. Even though there are lots of variables hopefully everyone can find a solution. 

In this guide, we'll **undervolt a Ryzen 2700 to a 2700E's TDP**. But this can also be used to undervolt a 3900X to 65W, if one can't get their hand on the [OEM-only part](https://www.anandtech.com/show/14961/amd-brings-ryzen-9-3900-and-ryzen-5-3500x-to-life).

Components we'll be using:

- [Cinebench R20](https://www.maxon.net/en-us/products/cinebench-r20-overview/): Free CPU benchmark for single thread and multi-threaded workloads. It will let us quantify any performance loss due to undervolting. We're using R20 rather than R15, so that the Ryzen chips take longer to complete to help get consistent readings.
- [HWiNFO64](https://www.hwinfo.com/): to measure our sensor readings (temperature, wattage, etc)
- Google sheets: A spreadsheet for tracking power usage, benchmarks, any modifications, etc
- (optional): [P4460 Kill a Watt](http://www.p3international.com/products/p4460.html) electricity usage monitor: to measure output from the wall. This is the only thing that costs money on the list -- you may be able to rent it from a local library or utility company. A wattmeter is not critical, but it'll give us a sense of total component draw that the PSU has to supply. I bought one from my local hardware store.

![kill-a-watt](../how-to-undervolt-gpu/kill-a-watt.png "P4460 Kill a Watt for monitoring electricity usage from the wall")

Feel free to swap components out for alternatives, but I'd like to stress two things:

- A benchmark that provides a multi-threaded and single threaded score. Undervolting may effect one more than the other and we need to capture that.
- The use of an external measurement tool (like the Kill a Watt). Undervolting can cause hardware sensor misreporting, which has tripped up even seasoned SFF enthusiast [Optimum Tech](https://www.youtube.com/watch?v=2wM3obN2pAE) ([Gamers Nexus's response](https://www.gamersnexus.net/guides/3494-amd-ryzen-3000-undervolting-offset-override)). So if we arm ourselves with multiple tools, we can do a sanity check to make sure everything lines up.

## Important HWiNFO sensors

I've highlighted all the sensors in HWiNFO that we'll be using during our benchmarking

![hwinfo-sensors](./hwinfo-sensors.png "HWiNFO important sensors highlighted")

A few notes:

- I've higlighted the Ryzen 7 2700: **Enhanced** category (there's another category called "Ryzen 7 2700" that doesn't have temperature or power consumption that we'll ignore)
- After a benchmark has concluded, we'll record the two numbers in the max column and then click the highlighted reset button to have a clean slate for our next benchmark run.
- The reason why we're interested in max values instead of something like averages, is due to undervolting wanting to achieve values below a threshold. For instance, we want to achieve temperatures below thermal throttling and power usage below the budget for the CPU.

## PSU and power draw example

Before we dive too deep into undervolting, let's break down what it really means when we're measuring the number of watts flowing through the wattmeter:

- Kill A Watt shows 200 watts
- The PSU ([SSP-300-SUG](https://seasonic.com/pub/media/pdf/industrial/datasheet/SSP-300-SUG.pdf)) is 300W 80 Plus Gold certified
- Since the PSU is gold certified, while between 20-100% load, it's able to to convert 87%-90% of inbound power to the components with the rest dispersed as heat
- Thus components are asking between 174-180 watts (else the PSU would be rated silver or platinum) 
- If the components are asking for max power (300 watts), the Kill A Watt should be reading 337-344 before shutdown

## Initial Benchmarks and Measurements

First we'll measure idle for completeness:

- Close all programs including those in the background using any cpu cycles
- Open HWiNFO
- Wait for the system to settle down (ie, the wattmeter converges to a reading)
- Record what's being pulled from the wall, and max sensor info from HWiNFO.

Then benchmark the cpu with cinebench. We'll need to first configure Cinebench show the single core benchmark like so:

![cinebench-r20-single](./cinebench-r20-single.png "Show single core benchmark in Cinebench R20")

The score you are interested in is both the CPU and CPU (single core). Use the process listed below

![cinebench-scores](./cinebench-scores.png "Cinebench R20 scores for CPU / CPU (Single Core)")

- Keep everything closed, except HWiNFO
- Reset HWiNFO sensors
- Run Cinebench R20 "CPU" benchmark (multi-threaded)
- Record score, max wattmeter reading, max watts / temp from the gpu
- Run Cinebench R20 "CPU (Single Core)"
- Record score (the single core benchmark shouldn't exceed the wattage or temperature recorded from the multi-threaded test, so we can omit those)
- Repeat three times

Here's an example of what I recorded for my initial measurements:

![google-sheets](./google-sheets.png "How I set up my spreadsheet for recording data")

- Average Timespy score: 3289
- Max wattmeter reading: 129W
- Max CPU watts: 75W
- Max CPU temperature: 75c

With our baseline set, it's time to start tweaking!

## CPU Undervolting

There are several knobs one can dial for Ryzen undervolting. Unfortunately, not all are available depending on the system. And if multiple techniques are available for one to use, they are not all considered equal. Some will wreck single threaded performance, which is why we run those single threaded benchmarks!

Without further ado, this is the basic flow chart you should be checking: select only the first box that's available to your system (if it's unavailable, doesn't work, or doesn't give the results you desire, go to the next box).

![undervolt-preference](./undervolting-preference.png "Techniques one should prefer to undervolt")

If a setting doesn't work, ensure you reset it to its default value so that it doesn't inhibit other settings.

### Power Package Tracking

First thing to try altering the max amount of power delivered to the socket. [From Gamers Nexus](https://www.gamersnexus.net/guides/3491-explaining-precision-boost-overdrive-benchmarks-auto-oc)

> **Package Power Tracking ("PPT"):** The PPT threshold is the allowed socket
> power consumption permitted across the voltage rails supplying the socket.
> Applications with high thread counts, and/or heavy threads, can encounter PPT
> limits that can be alleviated with a raised PPT limit.
>
> 1. Default for Socket AM4 is at least 142W on motherboards rated for 105W TDP processors.
> 2. Default for Socket AM4 is at least 88W on motherboards rated for 65W TDP processors.

Users have reported that adjusting PPT affords significant efficiency gains compared to other methods. A user compared PPT adjustments to vcore offsets (which we'll get to later), and found power savings of nearly 40W.

![ppt-limit](./ppt-limit.png "Benchmarking and graph done by @vpcf90")

In the event this option is available to you:

- start at a slight offset (140W or 85W)
- Run both our cinebench benchmarks. Record scores, temperature, and power usage. 
- Increase the offset until desired threshold.

One can try PPT adjustment coupled with a negative vcore offset for further gains, but mileage may vary.

### Configurable TDP

The next knob to try is definitely hit or miss, even if a BIOS presents the option -- it's changing the TDP of your desired wattage. Have a 95W CPU but want a 65W one? Set the cTDP to 65 (or 65000 depending on the BIOS).

![bios-tweak-ctdp](./bios-tweak-ctdp.png "Updating the cTDP value to a lower wattage")

But make sure you have your sensors and benchmarks readied. A single run of Cinebench should let you know if your cTDP has been exceeded and thus ineffective.

One user had fantastic success [setting the cTDP on their 2700X](https://www.reddit.com/r/Amd/comments/9mxs88/ryzen_7_2700x_ctdp_test_15w_vs_35w_vs_65w_vs_auto/), but others weren't so lucky (may have been different motherboards or BIOS versions).

While my 2700 ignored cTDP, I'm assuming that if a chip listed on WikiChip [like the 2400G](https://en.wikichip.org/wiki/amd/ryzen_5/2400g) contained a "cTDP down" section, I'm assuming cTDP will work.

### Vcore offset

Don't get discouraged if nothing has worked thus far, through setting a vcore offset one may be able to achieve the truest form of undervolting: lower powered consumption without a loss in performance. The best thing is that most motherboards should support this: asrock, [MSI](https://www.overclock.net/forum/13-amd-general/1718046-msi-finally-added-offset-mode.html), asus, biostar, and potentially some gigabytes.

Below is a screenshot of adjusting the value in millivolts.

![bios-vcore-offset](./bios-vcore-offset.png "Seting the CPU Vcore Voltage offset")

While I normally recommend setting the value in increments of 10mv, the BIOS can be finicky sometimes. I was only able to get "-50mv" and "-100mv" to stick, any other values would cause it to be reset to "Auto" or display an error if -100 was exceeded.

![bios-invalid-offset](./bios-invalid-offset.png "A BIOS error message when going sub -100mv offset")

We'll need to be vigilant here to ensure sensible benchmark scores and sensor readings.

#### Results

### Set frequency and voltage

Have you exhausted the other options? If so, time to get discouraged. There will be a sacrifice -- potentially a heavy sacrifice in single threaded performance.

Most if not all motherboards should be capable of accepting an arbitrary frequency and voltage.

![bios-tweak-voltage](./bios-tweak-voltage.png "Hard coding CPU voltage and frequency. 3GHz @ 0.875V")

Your starting frequency and voltage will depend on your setup:

- Start the frequency at your processor's default base clock (3.2GHz for my R2700).
- Start the voltage at the default value as well (1V)
- Decrease voltage by 0.025 until unstable in Cinebench (Cinbench reports an error, crashes, or blue screen) and then decrease frequency by 100MHz

Due note that just changing these two settings may not be enough. Your system may detect the voltage / frequency set, but see that it has plenty of power left in it's budget and turbo beyond that disregarding your intentions. The solution is to disable precision boost. For asrock motherboards this is called Core Performance Boost (CPB)

![bios-core-performance-boost](./bios-core-performance-boost.png "Disabling Core Performance Boost")

Disabling CPB means that cores can't exceed 3.0GHz. Considering the [turbo frequency of a R2700 is is 4.1GHz](https://en.wikichip.org/wiki/amd/ryzen_7/2700) that's a 1.1GHz decrease! 

#### Results

![google-sheets-underclock](./google-sheets-underclock.png "Results of underclocking and undervolting")

- Multi-threaded score dropped ~250 points (8%)
- Single threaded score dropped ~100 points (25%)
- CPU power draw dropped ~30W (so we've achieved 2700E levels of power usage)
- CPU temps dropped 15 degrees

Overall, I'd say this type of undervolting / underclocking isn't worth it. A 25% decrease in single threaded performance is tough to swallow. Unless you built a computer for purely multi-threaded workloads, 

While running the underclock, I noticed something bizarre when running HWiNFO. Even at idle, it was reporting core clocks to be at their max of 3GHz. Initially I thought that this meant the system wasn't idling, but looking at the power reported in HWiNFO told a different story -- that it was able to idle.

![hwinfo-clocks-misreporting](./hwinfo-clocks-misreporting.png "Inconsistency in hwinfo sensor reporting")

This is where our wattmeter comes into play. I saw that it was reporting idle power usage, so I determined that HWiNFO may have been misreporting detected clock speeds. This is why one must stay 

## Ryzen Master

Any guide on Ryzen undervolting would be remiss if it didn't at least mention AMD's [Ryzen Master](https://www.amd.com/en/technologies/ryzen-master). It's a useful tool for a couple of reasons:

- Tweak values at runtime without a restart (some values may require a restart)
- Create multiple profiles: one for gaming, one for rendering footage
- A second data point for determining what one can edit in the BIOS. For instance, if you are unable to edit PPT in the BIOS and unable to edit it in Ryzen Master (shown below) -- you'll have to skip PPT undervolting.

But I'm unable to fully utilize Ryzen Master, as I'm a developer that works on virtual machines, and Ryzen master doesn't can't work alongside CPU virtualization (enabled in the BIOS), and it'll throw some error about Ryzen Master only able to run with Virtualization Based Security disabled.

![ryzen-master-vm](./ryzen-master-vm.png "Error when trying to use Ryzen Master with Virtualization")

So for those on Windows who don't have virtual machines and don't mind installing Ryzen Master, it can be a helpful tool.

## Stress Tests

Potentially the most controversial aspect of this guide is the nonchalant nod I'll be giving stress tests. I can't omit them, as else this guide may feel inadequate, but I won't emphasize their necessity. People will disagree about which stress tests should be ran, how they should be ran, the durations of the tests, and anyone not following their formula is sacrificing stability. Instead, I believe one should craft their own stress scenario filled with realistic workloads. For me, that's compiling, video encoding, and gaming.

So after you've settled on your undervolt you can tease out instability issues by running your stress test, and you should already feel pretty confident about stability as Cinebench R20 should have completed multiple times at a given undervolt. If stability is desired even during unrealistic workloads, then stress test program like [Prime95](https://www.mersenne.org/download/#stresstest) can be used.

![prime-95](./prime-95.png "Running Prime95 tortue test")

The number of torture test threads to run will auto-detect the right number.

Run Prime95's torture test for the desired length of time (some people will measure in minutes while others measure in days).
