---
title: "A blog facelift, and introducing the AutoCaptions Project"
date: 2024-10-23T00:00:01-05:00
---

Since moving my blog to [11ty](https://11ty.dev) earlier this month when I published [my extended review of Apple's Live Captions]({{ '/post/2024/apple-captions-revisited' | url }}), I've inteded on more changes to modernize the site a bit<!-- more -->. In particular, I wanted something less cluttered, and with niceties missing in the previous migration, like cache-busting digests on the CSS and SVG assets. Also modularized and cleaned up my `.eleventy.js` config file, a minor but a pleasing quality of life improvement to an obsessive nerd like myself.

If you are a regular reader, you probably noticed the old "Globally Scoped" site branding and Base16-derived color scheme are no more. I was never fully happy with them and I like my website to be aggressively uncluttered - though, perhaps not _quite_ as uncluttered as, say, [Dan Luu's site](https://danluu.com). I like some margins on my pages for readability. 🙂 But - we're not too far off that, and it's pretty efficient; when I inspect the page size on this post, served off localhost as I write it, it's a bit under a megabyte, but most of that is the hot reload code that 11ty injects in dev mode. Even the font ([Victor Mono](https://rubjo.github.io/victor-mono/)) isn't unreasonably large.

I will note that I took _some_ inspiration from [Cory Dransfeldt's site](https://coryd.dev), in particular the approach of using SVG icons for the navigation. He's got _way_ more customization on his site than I intend to have on mine for a good while, but since he's also running 11ty and it's MIT licensed, there's some great information buried in the repo (and in his posts!) on working with the tools 11ty gives you.

## The AutoCaptions Project

Aside from that, I also want to announce a new thing I've started to expand on the [writing I've]({{ '/post/2024/apple-captions-revisited' | url }}) [been doing]({{ '/post/2023/10/captioning-tools-extravaganza' | url }}) around automatic captioning tools, which I'm calling [the AutoCaptions Project]({{ '/captions' | url }}). Beyond the extended review of Apple Live Captions I already wrote, I'm planning to write reviews of others, including Windows Live Captions, Scribe, AprilASR/Live Captions for Linux, and Live Transcribe by Mighty Fine Apps, among others. There's not a lot of information or reviews out there covering these tools, and my hope is to provide useful information to the millions of Deaf and Hard of Hearing people out there that it would benefit.

I hope you'll find it useful; you can hit the link above or find the closed captions icon (<img src="{{ '/assets/svg/closedcaptions.svg' | digest }}" alt="Closed Captions">) in the top navigation.
