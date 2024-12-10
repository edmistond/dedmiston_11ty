---
title: "Windows Live Captions"
date: 2024-12-10T00:00:01-05:00
tags: [captions, post]
---

We've talked about [Apple Live Captions]({{ '/post/2024/apple-captions-revisited' | url }}), now let's talk about the Big Dog. Yup, today we're talking about Windows Live Captions. It was officially introduced in Windows 11 22H2, and unofficially introduced in Windows 11 Insiders edition sometime in late 2021... and is the sole reason why I ran Insiders builds for the better part of a year.

I'm not entirely being hyperbolic when I say that the introduction of Windows Live Captions was _absolutely life-changing_ for me. When it was introduced to Insiders, automatic captioning was still fairly new, and not entirely reliable, especially if you wanted on-device or didn't have reliable internet. The main options I recall being available then were Ava, Otter.ai, Google Live Transcribe on Android and Live Captions in Google Chrome. Otter was the best all-around, but you had to go through contortions to caption system audio, Using software like Loopback on the Mac, or VoiceMeeter on Windows, to loop your audio back around to a virtual input to feed it into the web version of Otter. This worked, but required internet access and a certain amount of technical know-how and isn't something I'd consider user-friendly. Ava did this automatically, but suffered from teething issues with their desktop apps, a requirement to have internet service, and time limits due to their cost models. 

Live Transcribe on Android by most accounts worked pretty well, but I've never been on that platform for more than week or two at a time, and can't say I've used it extensively. Live Captions in Chrome were good, but only useful if you wanted captions on a YouTube video. You could theoretically use VoiceMeeter or Loopback to capture system audio to a virtual microphone in Chrome, then loop to a server and play it back to get captions... but that's janky and a hassle, and I _hate_ depending on janky hassles for my accessibility.

At introduction, Windows Live Captions had (and still has) huge advantages: it is neither janky nor a hassle, and it captions all audio, systemwide.

Let me repeat that: **It captions all audio, systemwide.**

Jitsi Meet? Captioned. Zoom? Captioned, even if the host didn't enable them in the meeting. Random videos, on YouTube or otherwise, that don't have captions? Captioned. Game dialogue? Captioned. **Voice communication in games? Also captioned.** I have played HellDivers 2 extensively, and Windows Live Captions is good enough to pick out and caption what people are saying on Discord voice chat or in-game voice chat, _even with the game audio turned on too._ This is, uh, freaking amazing.

Did I mention it does all of this entirely on your device, with no time limits and no costs beyond your Windows license, which probably came with your PC?

It also captions microphone input, which means that you can pop it open during an actual in-person meeting and use it. An actual solution I have used a few times when Teams captioning wasn't working well is to run an audio cable from one of my older work laptops (multiple laptops, long story) to my newer one running W11 22H2, and captioning the microphone input that way. It works amazingly well and in some instances is more accurate (and almost always _faster_) than Teams captioning is.

I've already mentioned that it's very noise resilient (given that it works well while playing games); it also handles multiple speakers well making it ideal for meetings. No, it doesn't do speaker identication or handle cross-talk well (nothing does, really). I've seen some captioning tools get very confused when the audio garbles a bit or people talk over each other; Windows Live Captions handles it with aplomb. Sometimes I'll need to stop and restart it or even reboot the machine, but I can't remember the last time I had to do it.

