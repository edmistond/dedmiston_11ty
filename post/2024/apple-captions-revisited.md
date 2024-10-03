---
title: "Apple Live Captions, October 2024 Update"
date: 2024-10-02T00:00:01-05:00
tags: [captions, post]
---

Apple released macOS Sequioa last month, as well as iOS 18 and iPadOS 18, which means there's a new version of Live Captions in town. Let's see if it's improved.
<!-- more -->

When I wrote up my [original captioning tool review]({{ '/post/2023/10/captioning-tools-extravaganza' | url }}) last year, I was of two minds about Apple Live Captions (henceforth referred to as "Live Captions" in this article). On the one hand, I'm grateful it exists, and use it frequently for captioning audio on my iPhone and iPad. On the other hand, I described it as "the weakest of the available options." And on the gripping hand, there are scenarios where it wouldn't work at all. Has any of this changed?

Most of this article is from the perspective of Live Captions in macOS, because that's where I use them most.

## But first, a digression

In my original post, I criticized Live Captions a bit. In this post, I'm (spoiler alert, sorry) going to criticize it more extensively. But before I do that, there's something I'd like to note, and remind readers: _real people_ worked on this feature and put a lot of their time, effort, and attention into it, doing the best job they could. I acknowledge that and I'm grateful for it; despite the criticisms I'm about to have, it's a valuable feature that improves accessibility for thousands to potentially millions of people[^1].

The better part of 15 years ago, I flippantly tweeted out a slightly nasty remark about how I didn't care for the redesign of a particular nerd-focused ecommerce site, and felt bad when I got a reply from the manager of the team that built it, asking if I had any helpful suggestions for improvement. Ever since, I've tried to remember that our words have power and, you know, not be a jerk. A friend of mine has quoted Rumi's "three gates of speech" - before saying something, we should ask ourselves three questions. Is it true? Is it necessary? Is it kind?

As far as I can tell, since this is directly based on testing, all of this is true. From an accessibility standpoint, I think it's necessary. And, well, I'll try to be kind. I'm criticizing because I care.

That's not ominous at all, is it?

## The good

But first, let's look at what's improved: the actual captioning. From a quality standpoint, it is _much_ better than before. Compared to the first two years of its existence (during which time I didn't see any really significant improvements), it's more resilient to background noise, it handles technical vocabulary better, and it's _far_ more accurate than previous versions.

I've tested it a fair amount on my M1 MacBook Pro and iPhone 15 Pro Max, and I'm generally satisfied with the quality. It's not on the level of Windows Live Captions, but if I'm honest, WLC kind of sits on its own plane of existence above all other on-device solutions.

Boy, do I wish this section was longer. If I'm reviewing the _actual captions_ in isolation, I'm putting them just above the [open source live captions based on AprilASR](https://github.com/abb128/LiveCaptions) that I compiled to run on macOS, and somewhat below Windows Live Captions. They've made genuine, noticeable, and welcome improvements in the accuracy.

## The bad

I have some relatively minor technical nitpicks.

First, there's one fairly major regression I've noticed, which is that on longer (20+ minute) YouTube videos, the captions tend to fall behind. Which is to say: I'll start a video, turn on the YouTube captions, then turn on Live Captions. By the end of the video, Live Captions is noticeably (a minute or more) behind, and will continue to "catch up" even after I pause the video and no sound is playing. This was not an issue on previous macOS versions on my M1 MBP, so hopefully it's a minor glitch they'll fix in macOS 15.1.

Second, getting captions to actually caption demands too much fiddling. I keep the Live Captions icon in my menu bar so I can quickly pause/unpause them, but if they've been paused for an extended period of time they often don't work. I find myself frequently going into System Settings, searching for Live Captions, and toggling them off and back on. About 25% of the time it'll start displaying captions, and the other 75% of the time I need to go back to the menu bar and pause/unpause them _again_ before they'll start working. The second pause/unpause step is a regression from previous macOS versions, but needing to toggle them off/on has always been a persistent theme.

I'm assuming the off/on toggle is resetting the speech recognition engine after it gets into a confused state, and I've seen ASR engines in other captioning apps exhibit similar behavior, and even Windows Live Captions needs an occasional reset. However, I really wish pausing/unpausing from the menu bar icon was sufficient to do this; digging into the settings app several times a week is more than a bit annoying.

## The (legally?) ugly

So... we have the biggest limitation, and the elephant in the room, which is that Live Captions won't work when screen recording is active. Have they addressed this? Friends, they have not. Let's talk about it.

For some context: I have a 2023 13" M1 MBP, the OG ARM MacBook Pro, purchased before the 14" and 16" machines were released thanks to my MBP's keyboard falling victim to the Keyboard of Doom and a bad battery. It's been a great little machine except for one weakness: I have three monitors on my desk, and this machine only drives one external display. I can get around this with DisplayLink (I have an OWC dual-HDMI adapter) which performs surprisingly well, but when Live Captions finally released I was _very annoyed_ to discover that they don't run when screen sharing is active. Guess how DisplayLink on the Mac works its black magic?

So, yeah, they don't run. Or more accurately, they _do_ run, except they get covered up by a gray box and you might get an occasional glimpse of them under the gray box. This isn't new, and hasn't changed with Sequoia.

I decided to do some testing to determine just what the limits are, and it seems they are pretty strict. First, I took DisplayLink out of the equation: I opened my laptop and connected one monitor via regular HDMI, through a non-DisplayLink adapter.

--- update here ---
I decided to do informal testing to figure out what the limits are. Turns out, they're pretty strict. First, I set up my MBP so I was only running the internal display and one external monitor, via regular HDMI. No DisplayLink involved. Second, I started up a [Jitsi Meet](https://meet.jit.si/) session between my desktop and MacBook, set a Youtube video playing ([Microservices](https://www.youtube.com/watch?v=y8OnoxKotPQ) being my classic choice of audio-check video), and set Live Captions running, all on the main display. Third, I threw Visual Studio Code on the secondary display, then shared that entire screen in Jitsi. The instant screen sharing went active... gray box, even with the captions not being on the display that was shared.

I tried the same scenario a second time, but this time, only sharing VS Code. Same issue - gray box.

Also, they flat out will not work with Keynote. I tried popping open a Keynote presentation and playing it while the captions were running, and they didn't get gray-boxed; they just don't show up. Keynote apparently supercedes all. Worked fine in Powerpoint, so I guess score one for the folks in Redmond in this case.

Originally, I thought this was maybe for privacy reasons - that they were concerned about bad actors using screen recording and Live Captions to eavesdrop on conversations. After a bit of digging though... I don't think this is the reason. I found this little tidbit in Apple's [macOS Sequoia license agreement](https://www.apple.com/legal/sla/docs/macOSSequoia.pdf) (emphasis mine):

> F. Voices; Live Captions. Subject to the terms and conditions of this License, you may: (i) use the system voices included in the Apple Software (“System Voices”) (1) while running the Apple Software and (2) to create your own original content and projects for your personal, non-commercial use; (ii) use the Live Captions automatically generated on-device in real time by the Apple Software (“Live Captions”), whether generated during a FaceTime call or otherwise, only for your personal, non-commercial use; and (iii) use the Personal Voice feature to create a voice on device that sounds like you (“Personal Voice”) using your own personal voice for your personal, non-commercial use. _No other creation or use of the System Voices, Live Captions or Personal Voice is permitted by this License, including but not limited to the use, reproduction, **display, performance, recording,** publishing or redistribution of any of the System Voices, Live Captions or Personal Voice in a profit, non-profit, public sharing or commercial context._

So, it's only a hypothesis, but I think Apple is enforcing their "no display or performance of captions except for you alone" license language in a heavy-handed way. From that perspective, I sort of understand why, but I don't really understand _why_. Legal liability concerns?

Regardless of the _why_, I think it's terrible for accessibility; beyond "my machine doesn't support multiple external monitors and I need DisplayLink" there's valid reasons why you'd want to use captions while the screen is being recorded. Maybe you're using a video conference tool like Jitsi that doesn't support captions. Maybe you're like me and almost always run _two_ captioning systems side by side, because the server-based ones like Teams uses sometimes miss something the other doesn't (or vice versa), or just didn't feel like working correctly that day. Maybe you're the one driving while pair-programming, and like to have captioning in an easily visible place so you can see what your coworker is saying (and they can see if it's garbling). Either way, there's valid reasons to have captions on while screen recording is running, and it's frustrating that they appear to be taking a heavy-handed approach.

As it stands currently... I've used Macs off and on for over 20 years, and full-time since the second generation of Intel MacBooks. My current work laptop is a Dell Precision and as much as it pains me to say it, _I'm glad my work laptop isn't a Mac_, because it runs Windows 11 and doesn't block me from getting captioning for weird reasons. If anyone on the Apple Accessibility team is reading this, please feel free to connect by email (david @ this domain) or by Twitter/Mastodon/BlueSky if you'd like to offer any clarifications - I'm happy to amend the post.

Apart from that, I have one other nitpick with Live Captions in macOS Sequoia: they fall behind. I can leave a long YouTube video running, with YT captions on, and after 40 minutes or so the Live Captions are noticeably (and sometimes several minutes) out of sync with the video. This is on macOS Sequoia 15.0, so I'm hoping that gets fixed in a point release.

Overall: my original verdict remains. I'm glad the tool exists, I really appreciate that Apple put in the work they did on it. There's still some room for improvement, and there's still frustrating limitations. And, unfortunately, it's still the weakest of the available options.

[^1]: Estimates vary, but a quick Google search suggests that there's at least ten million people just in the United States with some degree of hearing loss. Some percentage of those folks are Mac and iOS users; I know a bunch of them.
