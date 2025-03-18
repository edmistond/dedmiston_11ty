---
title: "Windows Live Captions"
date: 2025-03-17T22:45:01-05:00
tags: [captions, post]
---

We've talked about [Apple Live Captions]({{ '/post/2024/apple-captions-revisited' | url }}), now let's talk about its biggest competition: Microsoft's Windows Live Captions. It was officially introduced in Windows 11 22H2, and unofficially introduced in Windows 11 Insiders edition sometime in late 2021... and is the sole reason why I ran Insider builds for the better part of a year.

I'm not being hyperbolic when I say that the introduction of Windows Live Captions was _absolutely life-changing_ for me. When it was introduced to Insiders, automatic captioning was still fairly new, and somewhat unreliable, especially if you wanted on-device captions or didn't have a good internet connection. The main options I recall being available then were Ava, Otter.ai, Google Live Transcribe on Android and Live Captions in Google Chrome.

Otter was the best all-around, but getting hold of an audio stream on your system involved contortions and technical know-how; you could do it on-device using audio loopback software like VoiceMeeter on Windows or LoopBack on the Mac. They're both good pieces of software but require a certain amount of technical know-how to set up. Also, internet access. If you wanted to deal with physical cabling, you could run your system audio into an iPad and feed audio to Otter on that as an external microphone (this is _slightly_ harder now that Apple's eliminated headphone jacks).

Live Transcribe on Android by most accounts worked pretty well, but I've never been on that platform for more than week or two at a time, and can't say I've used it extensively. Live Captions in Chrome are good, but only useful if you want captions on a web video or wanted to run your calls through the web version of Teams. You could theoretically use VoiceMeeter or Loopback to capture system audio to a virtual microphone in Chrome, then loop to a server and play it back to get captions... but that's janky and a hassle, and I _hate_ depending on janky hassles for accessibility. Also, while they may have corrected this by now, I've noticed Chrome Live Captions can develop lag when they've been running for a while.

## So what's so great about Windows Live Captions then?

At introduction, Windows Live Captions had (and still has) huge advantages: it is neither janky nor a hassle, and it captions all audio, systemwide.

Let me repeat that, with emphasis: **It captions all audio, systemwide.**

Jitsi Meet? Captioned. Zoom? Captioned, even if the host doesn't enable them in the meeting. Random videos on the web that didn't supply captions? Captioned. Random videos on the web that have crappy captions delayed 20 seconds from the audio track? Captioned. Game dialogue? Captioned. **Voice communication in games? Also captioned.** I play a lot of HellDivers 2, and Windows Live Captions is good enough to pick out and caption what people are saying on Discord voice chat or in-game voice chat, _even with the game audio turned on._[^1] This is, bluntly, f-ing amazing.

Did I mention it does all of this entirely on your device, with no time limits and no costs beyond a Windows license, which probably came with your PC anyway? And it works on a relative potato of a CPU? I ran it for ~2 years on a Ryzen 7 2700, which, while not awful, is pretty slow by current standards. Never noticed any problems even when playing Helldivers 2, which is a very CPU-heavy game. I've since upgraded to a Ryzen 5 5600x, and the performance is just as good. Live Captions rarely shows as using more than about 10-15% CPU in activity monitor and it's never a problem for me; I can quite comfortably run HD2 on acceptable 1440p settings, captioning, and OBS to record the game with no perf impacts.

Like many other solutions, it captions microphone input, which means you can pop it open during an actual in-person meeting and use it. In fact, you can use a [Hollyland Lark M1](https://www.hollyland.com/product/lark-m1) wireless microphone into your microphone jack to get high quality captions in an environment like that. Moreover, an actual solution I've used on a pinch when Teams captions are failing is to run an audio cable to my desktop's line in jack, set that as the microphone input, and caption meetings I was taking on a Windows 10 laptop that didn't support live captioning. It works well, is generally as accurate as Teams captioning... and almost always _faster_, to boot.

## Two Mac fails, two Windows Live Captions wins

Now, I don't want to get off on a rant here[^2], but another thing I'd like to note is that unlike the last few Macs I've used, most Windows machines do not arbitrarily hide audio inputs, and allow you to select the one you want to use without having to fight with it. On both my previous M1 MBP and on my current M4 Pro, I wind up fighting with it at least twice a month when it insists the audio input I plugged in didn't _really_ exist, and relents only after repeated unplugging/replugging of the device. I've observed this behavior with both the headset jack and USB devices. It is immensely frustrating, and it absolutely does not "just work." It's even _more_ annoying on iOS/iPadOS, but that's way out of scope for this review.

Also, if you're using this to live caption a meeting - as one does, this is an accessibility tool - you can _share your screen_ without having your captions rendered forcibly invisible, an advanced level of technological mastery Apple has yet to attain. They are visible to screen sharing tools; my coworkers have found that helpful in the past because they can see if it's captioning what they say accurately, and call out occasional miscues or even repeat/correct themselves before I have to ask. All live captioning tools should work like this and it's disappointing when they don't.

Of course, that's just my opinion, I could be wrong.

## What else is good?

Getting back out of rant territory, I've already noted that it's noise resilient given how well it works while playing games. This also means it handles multiple speakers well, making it great for meetings. No, it won't do speaker identification (I'm unaware of any local speech to text solution that supports real time speaker diarization), and it won't magically deal with cross-talk. Then again, nothing short of Teams captioning does, and even that struggles a bit. Still, I've seen these tools get very confused with audio garbles or people talking over each other, but Windows Live Captions handles this with aplomb. Sometimes the process crashes and needs to be restarted, but it's rare.

The window is flexible in resizing, font choices, and all of those other things you expect. It can be an independent always-on-top window, or docked to the screen as an always-visible toolbar (either way, it is always visible). It remains on top and on your current monitor even when you make a video full-screen. It gets its own taskbar icon, which can be used to focus it and you can then use the standard window management hotkeys to shift it from one monitor to another.

Allegedly, if you have a Copilot+ PC, you can (or will eventually be able) to do live translation as well. I don't have one and cannot verify this.

## Is anything bad?

I can name four things I dislike; none of them really take away from how well it works, several relate to window management.

1. For some reason, the window boundaries of the live captioning window are more difficult to grab than a standard window. Strangely, I run into this same problem with Apple Live Captions. No idea why this is, it does annoy me.
1. If nobody is talking at the moment it will often pop up a "captions are being missed" dialog that is ALSO on top of other windows. This is a little annoying when you are playing a game, as it means I can't position the captions window over my game screen. I wish they'd add a "don't bother me about this again" option.
1. If your monitors are running different resolutions you sometimes get strange caption window sizes when starting it back up depending on which monitor you closed it on. If I started it on my 4K display, sized it how I wanted it, and moved it to my 1440p display and closed it later, it would be significantly larger or smaller when I opened it again and did not remember the window size I had set.
1. I wish there was an option to make the captions window full screen. There are times, like captioning work meetings, that I'd use it; unfortunately there's a limit to how tall you can make the window. Also, while you can make the window very wide, there's a point at which it doesn't matter because the captions will wrap to a narrower column. I would prefer they removed the window size limitations and let you use the entire window.

## So what's the verdict?

It is the best live captioning tool that I've had the pleasure to use. If you intend to buy a new computer and good live captioning is your top priority, I don't think I can sum this up any better than I already did when I revisited Apple's live captions a few months ago:

> If you're a power user and live captioning sits high on your priority list, I have a hard time recommending you buy a MacBook when Windows Live Captions a) exists, b) is so much better, and c) [likely to improve as Copilot+ PCs begin rolling out](https://www.microsoft.com/en-us/windows/copilot-plus-pcs?r=1) in the next few months. I'm in this boat (live captions are #1 or #2 on my list), and I'll be strongly considering a Copilot+ laptop from Microsoft or Dell for my next personal laptop.

I did not follow my own advice here as I am deep in the Mac and Apple platforms rabbit hole and not quite ready to drop them entirely; I use and like a lot of Unix-based CLI stuff and I don't have the patience to deal with a Linux desktop. The closest and most hassle-free I've gotten is Project Bluefin - and all credit to them, they built something amazing - which is just far enough outside of the Linux norm to make life a bit too exciting.

Anyway, I bought another MBP last fall fully conscious of the tradeoffs. I hate that I had to make those tradeoffs, because Windows Live Captions is _just that good._ I will sometimes go out of my way to change machines to my Windows desktop to watch a live stream because the captions are just better, and... really, I think that says it all. Microsoft hit this out of the park.

[^1]: I started working on notes for this review back in December. Since then, I've enabled Discord's attentuation feature which reduces the audio of other applications when people are talking to make the voice chat more prominent, which seems to further improve accuracy.

[^2]: If you recognize this phrase, congratulations: you are old enough to remember when Dennis Miller was funny.
