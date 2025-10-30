---
title: "Live Transcribe (by Mighty Fine Apps) for iOS/iPadOS, Fall 2025"
date: 2025-10-29T21:49-04:00
tags: [captions, post, mfa-live-transcribe]
---

We now return with the latest installment of [the Auto Captions project]({{ '/captions' }}) with a review of [Live Transcribe by Mighty Fine Apps](https://apps.apple.com/us/app/live-transcribe/id1471473738).

**Bottom line up front**: _Great_ app, and the captioning tool I use most on a day to day basis. Depends on internet access to a cloud server for best results. This results in some costs and downsides inherent to how it works. This has some advantages too - you can witness the firepower of a fully armed and operational data center doing audio processing. This makes it _ridiculously_ resilient against background noise, and gives it a nearly freakish ability to lock onto the conversation you want.

I should start off by saying that as much as I love this app, I wish they named it _literally anything else_ because Google has had their own captioning app with the same name (_spoiler alert: future review incoming!_). I start seemingly every conversation about it with some variation of "Live Transcribe, no, for iOS, not the Google one." On the other hand, I originally found this by searching for "live transcribe" in the App Store so... maybe their marketing worked out pretty well!

To save keystrokes, bytes, and my sanity, I'm referring to the application in this review as Live Transcribe.

# What can it do?

According to my App Store order history in GMail, I've used Live Transcribe for 2 1/2 years, testing in any and every scenario I can imagine short of air travel:

- I've used it around the dinner table with my family.
- I've used it in the car to chat with other people in the vehicle (to clarify: I was _not_ driving).
- I've used it via CarPlay so the microphones in back pick up what those passengers say.
- I've used it in the car to caption both sides of a phone call held via CarPlay on the car's audio system (again: not driving).
- I've used it at the doctor's office.
- I've used it in the grocery store while talking to the staff.
- I've used it for random conversations outside with the neighbors.
- I've used it to talk to the service tech at the car dealership's noisy service counter.
- I've used it for small family holiday gatherings to follow conversations around the room.
- I've used it at _large_ family gatherings for the same reason.
- I've used it at technical conferences like Codemash and Stir Trek, actually understanding the presentation I'm attending.
- I've used it (occasionally) to caption video calls through a combination of witchcraft and a TRRS cable.

I've never used it on an airplane, although in the basic offline mode, I could... though that would have downsides, which we'll get to.

## An important note

I started writing this review in early September, 2025, and I've been collecting notes for it for six months or more. In between when I started working on this and when I published it, Apple released macOS 26 Tahoe, iOS 26, and iPadOS 26 and (spoiler alert!) I think they are going to significantly shake up this niche market. I'll get into that further later, including a planned follow-up review of Apple Live Captions.

## What's good?

It's difficult to go deep on all these scenarios; there's a lot of them. What impresses me most with Live Transcribe is what I alluded to above - it possesses a truly freakish ability to lock in on the specific conversation that you want it to, with little effort on your part. Sometimes when I'm talking with someone on my left and the conversation shifts to someone on my right, I'll slide my phone over, and it switches to prioritizing captioning that person instead. This works even when the person to my left continues talking to someone else. This helps in noisy environments like that car dealership service counter: the service tech helping me asked me to wait while they entered data into the computer. With captioning running, Live Transcribe started to caption the local side of the person a few places down along the counter talking on the phone. At some point while that conversation continued, the first tech started talking to me, and Live Transcribe _immediately_  switched to captioning what they said to me even with someone nearby talking loudly on the phone. I don't know how they do it, and it's uncanny.

I attended two technology conferences in 2024: Codemash in January for the first time in over ten years, and Stir Trek in May after a few years' break. These were my first two conferences in what I now think of as the "post captioning" era - one in which decent assistive tools like automatic captions are ubiquitous and easily available. My trip to Codemash was the best technical conference experience I've had in my lifetime, solely due to Live Transcribe. Whether hallway chats with friends between sessions, mealtime conversations with my peers, actual presentations, or chats with the presenter afterward, it didn't matter. Everything was perfectly covered. Between the Wednesday night opening lightning talks and the conversations I mentioned, I _easily_ burned 20+ hours of captioning time in two days. 100% worth it.

The best thing: for particularly challenging situations, I have a [Hollyland Lark M1](https://store.hollyland.com/products/lark-m1) wireless microphone system. This comes with excellent built-in noise cancellation and 200 meters of range, so it's great for a conference environment. Turned out, this was totally unnecessary. The conference center Codemash uses wires their rooms with speaker systems so I could just sit down, prop my phone on my leg, and get perfect captions without doing the "oh do you mind the extra microphone" dance. This helps at Codemash, particularly, because of a culture of "if the talk's not working for you, just go to another" and this way I needn't interrupt a speaker to ask for my microphone back.

Also: Unlike 13-15 years ago, Codemash now has good wireless throughout the conference venue, and good cellular coverage. Even with hundreds of fellow geeks on site, I never struggled getting my laptop or phone connected.

## What's less good?

Stir Trek 2024... was a somewhat different story than Codemash. Unlike the conference venue Codemash uses, Stir Trek holds their event at a movie theater. They don't have wifi (nor the budget to set it up for a single-day event), and the theater it's held in is a black hole for cell signal (happily, cell service is better this year). This left me, in most cases, with _no_ internet service, falling back solely to what I could use on-device. Unfortunately at the time - this meant using Apple Live Captions (very meh at the time - I believe this was 2023), or falling back to Live Transcribe's "basic" captions mode which works offline (uses Apple's onboard live captioning). There was also the option of falling back to a few alternate tools that use Whisper, but I don't love Whisper-based live captioning. It's a _fantastic_ tool for captioning prerecorded audio, but every approach I've seen to use it with live audio is a hack and doesn't yield good results.

Unfortunately, this is a fundamental problem in live captioning. If your approach depends on pushing a lot of bits up to the server so it can do processing magic on them, what happens when the server isn't accessible or working? To its credit, Live Transcribe does try to give you a sense of how well this is going to work. Once you bring up the captioning screen, it will try to evaluate your connection and tell you if it is one of: poor, average, or good. If you get average or good, everything should work fine. Poor, as you might expect, is a crap shoot. It will _sometimes_ work, but you can't depend on it and it may end up buffering a lot of audio or running very noticeably slow.

It's difficult for me to say this is really a knock on Live Transcribe, specifically.
