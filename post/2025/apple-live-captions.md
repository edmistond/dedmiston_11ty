---
title: "Apple Live Captions: A Quantum Leap? (Fall 2025 Update)"
date: 2025-11-01 00:49:55-04:00
tags: [captions, post, apple]
---

As I mentioned in [my previous post]({{ '/post/2025/live-transcribe-iphone' }}), I wanted to come back and write about Apple Captions again. I last reviewed it a year ago, and Apple made significant updates since then.

I use Apple Live Captions - henceforth referred to in this article as "Live Captions" for brevity - _primarily_ on my Mac, but also frequently on iOS. On both platforms, I use it for captioning live in-person audio, and on-device audio like YouTube videos. You know, the usual stuff you'd want to caption. This review focuses a little more on macOS 26 (except where noted explicitly) but the actual captioning performance is nearly identical across all platforms.

A few quick disclaimers:

- This review is my subjective opinion, but I've talked with some other [D/d]eaf friends about this, and they agreed with my basic take as to how it's changed from previous versions.
- Also, an important thing I want to remind readers of: Live Captions run privately _on device_, they are not processed by a cloud server. You can be in a signal black hole and still get captioning. In fact, you could get captioning in an _actual_ black hole since you don't need to punch a wireless signal out of it, though you'd need more than a quantum leap to get back out.
- English is my native language and the only one I speak/read/write. Accordingly, I've only tested this in US English. Live Captions supports [a number of other languages](https://www.cnet.com/tech/mobile/apple-expands-accessibility-features-like-live-captions-magnifier-and-sound-recognition/) but I cannot vouch for them.

## Where we were

Regular readers - all three of you, thanks! - will recall that I was exceptionally critical of Apple's Live Captions in previous articles. Let's replay one of the greatest hits from my [Windows Live Captions review]({{ '/post/windows-live-captions' }}) _and_ my previous Apple Live Captions review:

> If you're a power user and live captioning sits high on your priority list, I have a hard time recommending you buy a MacBook when Windows Live Captions a) exists, b) is so much better, and c) [likely to improve as Copilot+ PCs begin rolling out](https://www.microsoft.com/en-us/windows/copilot-plus-pcs?r=1) in the next few months. I'm in this boat (live captions are #1 or #2 on my list), and I'll be strongly considering a Copilot+ laptop from Microsoft or Dell for my next personal laptop.

As I noted, I did not follow my own advice and ended up getting an M4 Pro MBP in late 2024, mainly due to a decade+ of ecosystem lock-in and ingrained habits. As you might've surmised in that review, I've regretted this a little bit over the past year or so, just from a captioning perspective.

## Where we are now

I am no longer partaking of the bitter taste of regret, having exchanged it for the gamey taste of crow. Live Captions in macOS 26 is enormously improved over its predecessor versions, and stacks up favorably against Windows Live Captions. Dare I say... for high quality, noise-free audio, I think it's better. I no longer find myself longing to switch to my Windows 11 desktop whenever I must cross swords with an uncaptioned video, and I've occasionally found myself actually wanting to switch over to the Mac for a video, instead.

I'm actually shocked by how much this is the case; from Live Captions' introduction in macOS Ventura in 2022 and subsequent updates across each macOS version, it improved, but slowly. Those updates felt like quantum leaps in the pedantic sense of the term: the smallest possible discrete measure of progress. On the other hand, _this_ update, to Tahoe, feels like a quantum leap in the actual colloquial sense people use it in - a big step forward. Captions are much more accurate, and I rarely see them stumble. I still need to reset the captioning engine occasionally (less frequently than before). Now, however, you can add a Live Captions quick toggle to the macOS control center, making it quicker and less annoying when you need to reset it. If you have it set to show the Live Captions icon in the menu bar when it's active, the "Restore Default Position" option works as you'd expect and even puts it on the correct screen about 50% of the time[^4].

## Side quest: SpeechAnalyzer is awesome

Let us take a moment to rip the beating heart of Live Captions out of the chest of macOS, _Temple of Doom_ style.[^3] As far as I can tell - Live Captions is based on the same [SpeechAnalyzer](https://developer.apple.com/documentation/speech/speechanalyzer) class introduced in macOS 26 that any developer can access. I was very curious to see how similar - or different - the results would be from the SpeechAnalyzer API directly versus what Live Captions was giving me. The fly in the ointment there: I've done virtually no macOS development, and I don't know Swift well.

[Fortunately for me, Claude Code does.](https://github.com/edmistond/SwiftCaptionTesting) This was the result of about 30-45 minutes of direct "wall time" thinking about what I wanted it to do, prompting Claude Code and watching it do it, then opening it up in XCode to poke at and tweak it. I learned some interesting things about the API and got a few hints about the choices Apple probably made with Live Captions - that's why I think this little side quest is interesting.

It took a little bit of time playing around with the API to get a sense of how it works - the documentation is relatively sparse. I'm also "cheating," in that I didn't need to deal with lower-level audio APIs to get a monitor on system audio. I used Rogue Amoeba's [Loopback](https://rogueamoeba.com/loopback/) to create a virtual device that takes all the system audio output and routes it to a virtual input, while also sending it to designated monitor device (my BT-enabled hearing aid). This gives us access to a convenient stream of system audio that we can open up like any other microphone. I'm not 100% certain as to how, but Audio MIDI Setup is supposedly able to do this, too.

Anyway, we've got a captioning API, and we've got audio. What's interesting about it? Well, for one thing, unlike Whisper and Parakeet... SpeechAnalyzer is actually built to handle live audio _in addition_ to pre-recorded audio. It's not as fast as Nvidia Parakeet, which can transcribe an hour's worth of audio in ~30 seconds or less. However, it's much faster than Whisper Large v3 Turbo, which was the previous gold standard for on-device captioning of pre-recorded audio files[^1]. This is one of the first OS-level, on-device APIs I know of explicitly built to support both use cases; I'm not sure if there's anything in Windows corresponding to it.

Anyway, it's the real-time streaming results that are interesting here. You have options impacting how quickly you get results - specifically, you can specify both "volatile results" and "fast results". Volatile returns transcription results which aren't completely finalized (fully processed), and fast biases towards responsiveness at the cost of accuracy. Without access to Apple's code I couldn't say what they use. I can say using both setting options together returned nearly word-for-word results matching what Live Captions did once I nailed down the buffer size appropriately.

A few other interesting things I noticed:

- The result's finalization timestamp changes to indicate the result is now finalized and won't change again. This is slightly annoying to handle.
- SpeechAnalyzer also has a voice activity detection module, and it's recommended to use it for power-saving when possible. My experience with VAD-enabled captioning tools is they are a touch less accurate someone starts talking, but it's nice to have the option.
- It appears you can write your own SpeechAnalyzer modules. I have not explored this to any extent, but I _think_ it's theoretically possible to, say, write modules to do beamforming or noise reduction prior to speech analysis... it could be interesting to try it.

## What's better

Okay. So we've discussed some of the technical background here. I'll start with something I've noticed - which from my side quest above, I think actually makes a big difference in accuracy - and then talk about how I've been using Live Captions and what I'm seeing.

My big observaton: Live Captions in Tahoe is, in a sense, _slower_ than in previous macOS versions. What I mean is it updates the captions less frequently - running a stopwatch next to it, it looks like it's about once per second or so - than previous versions did. So maybe you're thinking... they made it slower, that seems like it would kind of suck, right? Surprisingly, no! I think this is part of why it's more accurate: it's taking larger chunks of audio at once and has more data to work with. I've noticed it's much less prone to "back up and rewrite" large chunks of as-yet-unfinalized text than previous versions.

I noticed something similar in my test app, which is one of the reasons why I think a larger buffer is part of the improved accuracy. I initially started with a 256 frame buffer, then 512; in both cases, I got captions that were... "readable" if not great. Once I pushed the buffer size up to 768 or 1024 frames, accuracy improved markedly at the cost of longer update intervals. I don't really notice the update interval, and as much as I loved the human transcriptionists I've worked with, they're still slower; good writers still tend to be 5-8 seconds behind[^8].

I suspect there's a lot of other technical improvements under the hood. This API is new in macOS/iOS/iPadOS 26, and I doubt some processing tweaks are _solely_ responsible for all the improvements... but it's interesting to see how much of a difference buffer size makes in the result accuracy.

And by the way - no, it doesn't feel annoyingly slow. After a couple of minutes, I didn't really notice it anymore, and updates every second are plenty fast enough even for live conversations.

Anyway, let's talk about how I'm using it. I watch a fair amount of YouTube videos, usually covering technical or scientific domains. I've had good luck all-around with Live Captions here; it _generally_ doesn't choke on, say, programming or meteorological terminology. As an example: most of the weather live-streamers don't provide closed captioning on their streams. Live Captions handles it with aplomb, aside from mangling city names - though, the streamers themselves tend to mangle city names, to the point it's a running joke on their streams.

I'll occasionally listen to music and if I have live captions active, it attempts to caption the lyrics. The results aren't _great_ and I think Windows Live Captions does it better, but it's improved from last year. I haven't tested it _extensively_ in a video conferencing context, but I have taken several corporate all-hands meetings on it. It's handled them well, and didn't get as confused with multiple speakers as it used to.

A big change for me, which I didn't mention in my MFA Live Transcribe review: I now prefer Live Captions for conversations around the house. It does well with captioning both my wife and my 8 year old daughter (on all platforms), and it's convenient (on iOS) having the action button configured so holding it down for a few seconds immediately starts Live Captions. It's not a 100% of the time thing, and for busy conversations with a lot of people in the room I still tend to reach for Live Transcribe. However, for the three of us around the dinner table, or a quick conversation with my father in law? It works fine. Ironically, I haven't gotten around to writing my Google Live Transcribe review yet and it's already supplanted what I used Live Transcribe for[^2].

An actual, genuinely thoughtful touch on iOS: you can still swap manually between captioning from the microphone or whatever audio is playing, but it seems to do it for you automatically now. Activate the captions, start playing a video or podcast or whatever, it captions it. Pause the audio playback and it swaps to the microphone. I appreciate this a lot because it means I spend less time futzing with it when I want captioning quickly.

Out and about in public is about the same. I've mentioned it's not as noise resilient as it _could_ be - and to be fair I haven't exactly gone and put together extensive scientifically based studies on this (these reviews are all about the vibes). That said, it has surprised me. A friend and I visited another friend recently in the hospital in Cleveland's University Circle neighborhood, which provided an absolute smorgasbord of audio situations. In the relative quiet of the hospital, it worked great, as you'd hope. It also did better than I anticipated in other situations; for example, it caught a good amount of what my friend was saying as we were walking up a busy street to lunch, despite the breezy day and traffic noise. I'll discuss noise resilience briefly in the next section.

On the Mac, I sometimes caption room audio with it if I happen to have my MBP open in front of me at the time. I get significantly better captioning quality, especially at medium distance, if my hearing aid is the currently selected input source, versus the MBP's on-board microphones. I haven't tested this extensively on the iPhone. This isn't due to Live Captions specifically, but rather a quirk of how my hearing aid[^7] behaves when something is using the microphone input. It goes into streaming mode where it expects it might also _receive_ audio data, and reduces the volume of the external mic in anticipation. It makes everything sound faint and vaguely washed out and it drives me mad. _Interestingly_, while Live Transcribe on the iPhone runs into the issue a lot, I don't notice it on Live Captions; I need to test a bit more. It's possible they're doing the same thing Android does and defaulting to the phone's microphones in this situation. I've tended to turn Bluetooth off on my phone often because of this; I need to go back and test this scenario explicitly.

## What's lacking

I mentioned songs, which is a great example of an area it's weaker in - noise resilience. It does not do as well as Windows Live Captions at picking speech out of certain types of noisy backgrounds. It also doesn't do as well as Mighty Fine Apps' Live Transcribe, but it's an unfair comparison since Live Transcribe is server-based. It would be like complaining your Raspberry Pi doesn't compile an application as fast as my Apple Silicon M4 Pro.

Honestly, outside of noise resilience? It's not lacking a lot and has gone from middle of the road to shockingly good.

I would like if it had an option to open full-screen as a separate application on iOS, rather than the weird pop-over you get instead. The full-screen popover has occasionally hidden notifications I didn't want it to, though I only notice this after the fact when I find an important missed notification. I hope they've fixed this in iOS 26, and will update this once I have a definite answer.

I'd like to see an AppleTV update adding support for Live Captions there, too.

## Oh boy

In last year's review, and in a few other articles, I complained _bitterly_ about Live Captions on the Mac blanking itself out when screen recording is active. Unfortunately, I can't report they've made a quantum leap - in either sense of the word - on this issue, because they haven't done a thing. I started captions, loaded up a Jitsi meeting in Brave, shared my screen, and got the Gray Box of Utter Uselessness. From what I can tell, the _only_ way you're going to get away with sharing anything and having live captions running at the same time is if you share individual browser tabs, as some video conference tools let you do. Everything else? Forget it, not allowed.

Please, Apple, _stop._ I don't know if this is a legal issue around public performance, or what. I don't personally think it should be a huge concern (and Microsoft certainly doesn't). Still, if a college kid in a dorm room can build an AI interview cheating app invisible to all known screen sharing tools, _surely_ one of the most valuable companies in the world can achieve the same thing. The really fun thing is if I built my own captioning app _on top of the API they use for their own solution_... I could record it 🤦‍♂️[^6].

And so we find ourselves leaping from major update to major update, enjoying steady improvements in our captioning quality, hoping each time that the next leap... will be the one fixing this annoying choice.[^5]

## Verdict

It's (mostly) good. If you like captioning and you like Apple hardware, you should use it. It's supplanting Mighty Fine Apps Live Transcribe as the tool I most use outside of room-scale scenarios like technical conferences. I wish I could use it with screen sharing active, and I wish it had an option to be a separate, individual app. Then again, with SpeechAnalyzer, you could probably make one yourself... and I'm thinking about it. But if I do, it'll be built on top of the same framework Live Captions is, because... it's kinda awesome now.

I need to test this more extensively on some long conversations on my phone still to see what kind of battery impact it has. Generally, I've found on-device captioning is less intensive than the incessant network activity demanded by server-based tools, which is my experience here so far. You'll notice some battery drain but it won't hurt as much as cloud-based alternatives.

Cost: Free if you enjoy paying Apple prices on hardware. It requires Apple Silicon. I am not 100% certain if there's a lower limit on which Apple Silicon CPUs it will support, but I have used it successfully (with no visible performance impact) on an M1 iPad. I will ask my wife to test it sometime on her M1 Mac, just to see if it works.

[^1]: Honestly, I think Parakeet is better anyway. The accuracy is about as good as Whisper, but it's far quicker.
[^2]: I snagged a used Pixel 8 off Swappa about six months ago in anticipation of Stir Trek 2025 having terrible cellular access. I also wanted to see if I was missing something awesome. I kinda was, at least until Apple removed the main reason I had for using it. Oops. Now it gets used about once a week by my daughter for supervised YouTube videos without having to hand my actual phone over to her.
[^3]: It's hard to express how much that scene freaked me out when I saw it as a kid.
[^4]: IMO, it should appear on the screen you invoked the menu bar command on.
[^5]: Given how the series ended, maybe this isn't the most auspicious conclusion to the section.
[^6]: Yes, I actually tested this - I can take screenshots of it.
[^7]: It's a Phonak Naida Lumity Q90 UP. I like it, but the way it handles Bluetooth is sometimes frustrating.
[^8]: I'll write a whole post on this soon, but it's one of the reasons I'm such a big advocate for automatic captioning, even though it's somewhat controversial in the Deaf community. Yes, you trade off accuracy, but you get the benefit of _staying in the flow of the conversation_ instead of always being a few seconds behind.
