---
title: "Be My Ears: February 2025 Review"
date: 2025-02-26T00:00:01-05:00
tags: [captions, post]
---

The Auto-Captions Project is back with a new update! Between work, family, home improvements, and my HellDivers 2 obsession I've been on a bit of a hiatus, but the project remains very much alive. 🙂 Today I'll be going over a not-commonly-known application I came across a few months ago called [Be My Ears](https://apps.apple.com/us/app/be-my-ears-live-caption/id1577662679?mt=12) for the Mac.
<!-- more -->

As I've [previously alluded to]({{ '/post/2024/apple-captions-revisited' | url }}), Apple's Live Captions have improved, but still have frustrating limitations. This leaves me looking for alternatives, and I don't even remember where I came across Be My Ears. It looked interesting, I've worked with it off and on the past few months, and the bottom line... for now, it has a place in my toolbox.

Looking at the App Store page, or indeed, the application's interface, you're immediately aware that English is not the developer's native language... which, just to be clear, is fine. Given the world's geopolitical situation these days and how sensitive or personal the audio on our computers can be, some users might be concerned that the developer appears to be based in China[^1]. Just out of curiosity, I used [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) to see what kind of network activity it generates. When I did set up in December 2024, network monitoring showed minimal connections: only the necessary speech model download, and some standard analytics calls to Mixpanel and Revenuecat. To be clear, I'd _prefer_ it wasn't capturing even basic usage data[^3] but it doesn't make the continuous calls to a random endpoint I'd associate with ongoing data exfiltration.

Be My Ears is an actively maintained app; the developer updated it several times over the months I've been testing it. There are some bugs and rough edges, but at this point they mostly don't pertain to the captioning itself. Onboarding, in particular, was a bit rough; this may have changed a bit since I installed the app. At the time I installed, it was not fully clear that you need to go into preferences and download a model - if I recall correctly, this was a couple hundred megabytes, about par for the course. Once this was done, it worked fine. Also, you can do simple transcription without a subscription, but it was showing "translation requires a subscription" continuously in the lower half of the captions window; hitting 'close translation' would make it go away for a few seconds before it came back. This _may_ be a bug and since I haven't reinstalled since going through the install while setting up my new M4 MBP, I can't say if it's changed since then.

## Okay, but how are the captions?

All of that is, of course, fine; but what we _actually_ care about here is the captioning, right?

Well, overall, they are pretty good! I would put them about on par with [April ASR](https://github.com/abb128/april-asr) for which I still need to write up a review. They are better in some ways, worse in others, but about the same. I'd also put them slightly ahead of the native Apple live captions. Unfortunately, that's a low bar to clear, but that's more of a complaint about Apple's captions than any sort of knock on Be My Ears.

Be My Ears uses Apple's CoreML, but as noted, you must download a speech model, so as far as I can tell it's not using Apple's on-board speech recognition. There is a very active `localspeechrecognition` process consuming approximately 22-25% of a CPU when Be My Ears is actively doing its thing. My current Mac is an M4 Pro MBP with the 14 core CPU (10 performance, 4 efficiency); there isn't an easy way to tell which core it's using but based on observing individual CPU usage in [`btop`](https://github.com/aristocratos/btop) I'm assuming it's primarily on a P core.

For accuracy, I've tested it against YouTube channels covering a variety of topics:

- Max Velocity Weather
- Sam the Cooking Guy
- Merge Conflict (James Montemagno and Frank Krueger) - software development and technology

All of these involve their own technical jargons and I didn't notice major issues or inaccuracies with any of them. As with any auto-captioning tool, it _will_ stumble over or misinterpret certain words. I don't consider this a major downside, unless it does it a lot, and it's more accurate than Apple's so we're already ahead here.

Also, unlike Apple's, you can actually take screenshots of it, or more usefully, run it while screen recording is active, such as if you're sharing screen during a meeting. Unfortunately, I've found this is one area where Be My Ears falls down a little bit; I sometimes pipe meeting audio from a laptop that's still running Windows 10 into my desktop (Win11) or laptop to run on-device live transcription against them as a backstop to Microsoft Teams. Apple live captions will... eh, it "works" for this, in that it will get probably about 65-75% of what is said. Be My Ears seems to freeze up entirely in this scenario; I don't know if it's the jumps between different speakers, but I barely get any output from Be My Ears when using microphone input.

Another point worth mentioning: heavy users of captioning tools (like me) sometimes run _multiple_ apps at once trying to cover any gaps or hiccups between the different options. With Be My Ears, you're not able to run Apple live captions simultaneously with this: it uses the system recording functions to monitor audio, meaning Apple's captions will give you the dreaded gray box if you try to use them alongside.

## So what's the verdict?

### The good

- Works with screen recording active (in fact, it requires it)
- As good or better than Apple's live captions under some scenarios, on-par with April ASR
- Highlights as-yet-unfinalized words

### The bad

- Occasionally drops words (to be fair, they almost all do this)
- Application bugs
- Poor performance with microphone audio and multiple speakers

**Overall**: So long as you - or perhaps, your organization - aren't concerned with the developer being from China[^2], I think it's worth giving this a try. I subscribed to it since it's pretty inexpensive, and there's been scenarios where I've found it useful.

[^1]: This is not a "China bad" argument by any means. I'm only pointing out that some people and organizations are more concerned by this than others, and evaluate risk differently. Just to pick an extreme opposite, my risk evaluation isn't the same as an intelligence agency's, and I expect that almost _any_ automatic captioning tool - which by definition has to capture audio! - would make their information security people break out in hives.

[^2]: See previous footnote re: China.

[^3]: This sort of thing falls under "why do you even need to know" for me, but I'm more privacy conscious than most.
