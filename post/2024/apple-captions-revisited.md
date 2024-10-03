---
title: "Apple Live Captions, October 2024 Update"
date: 2024-10-03T00:00:01-05:00
tags: [captions, post]
---

Apple released macOS Sequioa last month, as well as iOS 18 and iPadOS 18, which means there's a new version of Live Captions in town. Let's see if it's improved.
<!-- more -->

When I wrote my [original captioning tool review]({{ '/post/2023/10/captioning-tools-extravaganza' | url }}) last year, I was of two minds about Apple Live Captions (henceforth referred to as "Live Captions" in this article). On the one hand, I'm grateful it exists, and use it frequently for captioning audio on my iPhone and iPad. On the other hand, I described it as "the weakest of the available options." And on the gripping hand, there are scenarios where it wouldn't work at all. Has any of this changed?

Most of this article is from the perspective of Live Captions in macOS, because that's where I use them most.

## But first, a digression

My original post wasn't exactly complimentary to Live Captions; in this post (spoiler alert) I'm going to criticize more extensively. This is not because I'm trying to be a jerk, but because I care.

But, I do want to acknowledge, and remind readers, that _real people_ worked on this feature and put a lot of time, effort, and attention into it, doing the best job that they could. I acknowledge this and am grateful for it; despite the criticisms, it's a valuable feature that improves accessibility for an enormous number of users[^1].

Years ago, I flippantly tweeted a nasty comment about an ecommerce site redesign, and felt bad when I got a personal reply from the manager of the team that built it asking if I had any constructive suggestions. Since then, I've tried to remember that words have power, and to apply Rumi's "three gates" of speech. Before saying something, we should ask ourselves three questions:

1. Is it true?
1. Is it necessary?
1. Is it kind?

This post is based on my personal testing, so it's true, or at least it's _my_ truth. From an accessibility standpoint, I think it's necessary. And, well, I'll try to be kind. I'm criticizing because I care.

That's at all not ominous, is it?

## The good

First, let's look at what's improved: the actual captioning. From a quality standpoint, it is _much_ better than before. Compared to the first two years of its existence (during which time I didn't see any really significant improvements), it's more resilient to background noise, it handles technical vocabulary better, and it's _far_ more accurate than previous versions.

I've tested it a fair amount on my M1 MacBook Pro and iPhone 15 Pro Max, and I'm generally satisfied with the quality. It's not on the level of Windows Live Captions, but if I'm honest, WLC kind of sits on its own plane of existence above all other on-device solutions.

Boy, do I wish this section was longer. If I'm reviewing the _actual captions_ in isolation, I'm putting them just above the [open source live captions based on AprilASR](https://github.com/abb128/LiveCaptions) that I compiled to run on macOS, and somewhat below Windows Live Captions. They've made genuine, noticeable, and welcome improvements to the accuracy.

## The less good

I have some relatively minor but annoying technical nitpicks.

First, on longer (20+ minute) YouTube videos, the captions tend to fall behind. Which is to say: I'll start a video, turn on the YouTube captions, then turn on Live Captions. By the end of the video, Live Captions is noticeably (a minute or more) behind, and continues "catching up" even after pausing the video and no sound is playing. This wasn't an issue on previous macOS versions, so hopefully it's a minor glitch they'll fix in macOS 15.1.

Second, getting captions to display demands too much fiddling. I keep the Live Captions icon in my menu bar so I can quickly pause/unpause them, but if they've been paused for an extended period of time they often won't work. I find myself frequently searching for Live Captions in System Settings, then toggling them off and back on. About 25% of the time it'll start displaying captions, and the other 75% of the time I need to go back to the menu bar and pause/unpause them _again_ before they'll start working. The second pause/unpause step is a regression from previous macOS versions, but needing to toggle them off/on was an issue in previous versions.

I'm assuming the off/on toggle resets the speech recognition engine after it gets into a confused state, and I've seen ASR engines in other captioning apps exhibit similar behavior. However, I really wish pausing and unpausing from the menu bar icon was sufficient to do this; digging into the settings app several times a week is annoying.

## Pause, and consider

Are you an average user who:

1. Doesn't push live captioning tools very hard?
1. Doesn't use them for more than short videos on sites that don't provide automatic captions?
1. Doesn't need them for professional situations or conference calls?
1. Doesn't have any interest in watching anything that doesn't already provide captions?

If this is you, Apple Live Captions are right up your alley and the version in macOS Sequoia is an improvement in accuracy. You can stop reading here, go touch grass, and proceed with your day, blissfully unencumbered.

## The (legally?) ugly

Still with me? Okay then. So... we have the biggest limitation, and the elephant in the room, which is that Live Captions won't work when screen recording is active. Have they addressed this? Friends, they have not. Let's talk about it.

### Context

My only Mac currently is a 2023 13" M1 MacBook Pro, the OG ARM MBP. It's been a great little machine except for one weakness: I have three monitors on my desk, and this machine only drives one external display. I get around this with an OWC dual-HDMI DisplayLink adapter which performs surprisingly well, but when Live Captions released I was _frustrated_ to discover that they don't run when screen sharing is active. Guess how DisplayLink on the Mac works its black magic?

So, yeah, they don't run. Or more accurately, they _do_ run, except they get covered up by a gray box and you might get an occasional glimpse of them under the gray box. This isn't new, and hasn't changed with Sequoia.

### Testing

I tested to determine where the limits are, and it seems they're pretty strict. First, I took DisplayLink out of the equation: I opened my laptop and connected one monitor via regular HDMI, through a non-DisplayLink adapter. Then, I set up a [Jitsi Meet](https://meet.jit.si/) session between my desktop and MacBook, started a YouTube video in a second tab on the MacBook (to represent someone else speaking), and fiddled around to get captions displaying, all on my primary monitor. I put VS Code up on my secondary monitor, to represent sharing a pair programming session with a coworker. Starting screen sharing - whether the entire secondary display or just the VS Code window - immediately covered up Live Captions with a gray box.

I also tested presentations with both Keynote and PowerPoint, using slide view on one monitor and presentation view on the other, as would be typical giving an in-person presentation. Keynote entirely covers up _everything_ on the screen, including Live Captions. They did work with PowerPoint, though if you have an internet connection, PowerPoint already has its own live captioning feature.

### Why?

I'm disappointed by this. Apple is known for its strong pro-privacy marketing, and I thought this might be an extension of that - that they're concerned about bad actors using screen recording and Live Captions to eavesdrop on conversations[^5]. After some digging, I don't think this is the case. I found an interesting clause in Apple's [macOS Sequoia license agreement](https://www.apple.com/legal/sla/docs/macOSSequoia.pdf) (emphasis mine):

> F. Voices; Live Captions. Subject to the terms and conditions of this License, you may: (i) use the system voices included in the Apple Software (“System Voices”) (1) while running the Apple Software and (2) to create your own original content and projects for your personal, non-commercial use; (ii) use the Live Captions automatically generated on-device in real time by the Apple Software (“Live Captions”), whether generated during a FaceTime call or otherwise, only for your personal, non-commercial use; and (iii) use the Personal Voice feature to create a voice on device that sounds like you (“Personal Voice”) using your own personal voice for your personal, non-commercial use. _No other creation or use of the System Voices, Live Captions or Personal Voice is permitted by this License, including but not limited to the use, reproduction, **display, performance, recording,** publishing or redistribution of any of the System Voices, Live Captions or Personal Voice in a profit, non-profit, public sharing or commercial context._

Similar language exists in the iOS/iPadOS license agreements.

This is only a hypothesis on my part, but I suspect the cause of this plague of gray boxes is that Apple's enforcing their "no display or performance of captions except for you" license language in an exceptionally heavy-handed way. From that perspective, I sort of understand why, but I don't really understand _why_. I'm really interested in the actual reason behind this - do they have concerns about legal liability?

### Is this really a problem?

In my opinion: it's a problem, and it's a negative for accessibility. This isn't about being cheap and not wanting to buy a MacBook Pro powerful enough to run multiple external displays[^2]. There are valid reasons why you need captioning and screen recording at the same time. Here's a few of them:

1. You're like me, and find the automatic captioning is a life changing (in a good way) feature, but it sometimes misses things, miscaptions, doesn't start correctly, or you don't like the way it displays captions[^3]. So, you run a second captioning tool alongside to reduce how much you miss.
1. You're using a video conferencing tool like Jitsi Meet that doesn't offer its own support for live captions.
1. You're remotely pair programming with a coworker, and are the person "driving." You position your live captions on your primary display that you're sharing, off to the side a bit, so you can see what they're saying while you're typing, and they can see if it's getting garbled and they need to repeat themselves.
1. You want to run live captions on your speaker view screen in Keynote to understand questions the audience is asking you.
1. You want to run live captions for your presentation to make it accessible for your audience. To be fair, this one is probably not kosher under Apple's licensing terms above, anyway.

## Don't hold back, tell me how you really feel

Bluntly: **These limitations make me glad my work laptop isn't a MacBook.** As a long-time Mac user, I hate saying this, but it's my truth. My work laptop runs Windows 11, through the DisplayLink dock my employer sent me, and doesn't give me any shit about live captions not working.

Apple's Live Captions in macOS are a good step forward in accuracy, noise resilience, and technical vocabulary, hindered by some minor regressions/bugs. If you aren't a power user (see above), you'll probably be happy with them. But if you're a professional or power user who needs them to work while doing anything that approaches screen sharing, you'll probably find them very frustrating. And therefore, my previous verdict remains: Apple Live Captions are still the weakest of the available options.

If you're a power user and live captioning sits high on your priority list, I have a hard time recommending you buy a MacBook when Windows Live Captions a) exists, b) is so much better, and c) [is only going to improve as Copilot+ PCs begin rolling out](https://www.microsoft.com/en-us/windows/copilot-plus-pcs?r=1)[^4] in the next few months. I'm in this boat (live captions are #1 or #2 on my list), and I'll be strongly considering a Copilot+ laptop from Microsoft or Dell for my next personal laptop.

Reader, if you're on Apple's accessibility team and can offer any feedback or clarifications on this, please feel free to get in touch. I'd genuinely love to know what the reasons for this limitation are, and I'm happy to update the post with that.

[^1]: Estimates vary, but a quick Google search suggests that there's at least ten million people just in the United States with some degree of hearing loss. Some percentage of those folks are Mac and iOS users; I know a bunch of them.

[^2]: Not everyone gets to pick their laptop, or what dock they're sent.

[^3]: Microsoft Teams, I'm looking at you.

[^4]: As of this writing in early October 2024, scroll down to "Copilot+ PC features" and watch the video for live captions: they're adding real-time translation between languages.

[^5]: Frankly, there's a million easier ways to do that.
