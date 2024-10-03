---
title: "Apple Live Captions, October 2024 Update"
date: 2024-10-02T00:00:01-05:00
tags: [captions, post]
---

Apple released macOS Sequioa last month, as well as iOS 18 and iPadOS 18, which means there's a new version of Live Captions in town. Let's see if it's improved.
<!-- more -->

When I wrote up my [original captioning tool review]({{ '/post/2023/10/captioning-tools-extravaganza' | url }}) last year, I was of two minds about Apple Live Captions (henceforth referred to as "Live Captions"). On the one hand, I'm grateful it exists, and use it frequently for captioning audio on my iPhone and iPad. On the other hand, I described it as "the weakest of the available options." And on the gripping hand, there are scenarios where it wouldn't work at all. Has any of this changed?

Well... yes. Purely from a captioning quality standpoint, it's better than before. It seems more resilient to background noise, it handles technical vocabulary better, and it's _far_ more accurate than in iOS 16 and 17. Testing on my M1 MacBook Pro and iPhone 15 Pro Max, I'm satisfied with the quality. No, it's not on the level of Windows Live Captions, but let's be honest here - none of the on-device options I've used are.

**But** (you knew there was a 'but' coming)... have they addressed the biggest limitations? They have not. Let's talk about it.

I have a 2020 13" M1 MacBook Pro; the OG model they released, purchased before the release of the 14" and 16" designs when my 2016 15" Intel MBP's keyboard suffered a major case of dead, combined with a bad battery. It's a fantastic little machine, except for one weakness: I have three monitors on my desk, and this machine can drive run one of them in its default configuration. Now, I can get around this using DisplayLink (I have a fantastic OWC Dual-HDMI adapter), which performs rather well. However... DisplayLink works on macOS through some kind of screen sharing setup. And Live Captions don't run when sharing the screen. Actually, that's not completely accurate - they'll _run_, but they're masked over by a gray box and you may get glimpses of them under the gray box. That's not new, and it hasn't changed with Sequoia.

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
