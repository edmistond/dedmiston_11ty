---
title: "CodeMash 2026: Year 19"
date: 2026-01-18T00:00:01-05:00
tags: [codemash, post]
---

I was fortunate to attend CodeMash 2026 (after missing 2025); it's a great conference that's now closed the books on their 19th year, and I hope I'll be there next year for the 20th anniversary. It's also exciting that they're introducing [CodeMash East](https://codemash.org/announcing-codemash-east/) next year with a summer date - my daughter is just about the right age for the KidzMash sessions they offer. Even with it being further to travel, it'd be nice to have the option for that without taking her out of school[^1]. I don't know if they'll be offering KidzMash there to start, but I'll be curious to see.

## Getting There Is Half the Fun and All the Stress

I attended the two main conference days, Thursday and Friday. Sandusky is normally about a 1:15 drive from my home in the eastern suburbs of Cleveland, and I was aware that we had some snow coming in. I left about half an hour earlier than planned, grabbed a quick dinner, and got on the highway about 5:30. I thought that would give me a little extra wiggle room to arrive and check in to the Kalahari before the lightning talks began at 7... or at worst, I wouldn't be too late for them. Unfortunately, the lake effect snow machine had other plans. By the time I hit the travel plaza near Oberlin, I had to stop and scrape a quarter inch of ice off my headlights, and once I got back on the highway I don't think I ever got over 40 mph. I spent the last ten miles or so crawling along at 25 mph with my hazards on, got off the turnpike, crawled the last five miles to the Kalahari, pulled in, and... just sat in my car for five minutes trying to decompress.

This is an occupational hazard of running a conference in northern Ohio in January; almost every repeat attendee has a war story about this, and at least one year I left early thanks to snow. CodeMash CEO Brian Prince apologized to everyone the next morning at breakfast: he'd taunted the weather gods the week before by saying it looked like it'd be clear. Key takeaway: don't do that.

## Seeing Folks

I'm fully remote in my current role, so conferences like CodeMash and Stir Trek are an excellent opportunity to catch up with some of my coworkers face to face and this year was no exception. We have a great group of folks and it's always fun hanging out with them. Beyond that, I caught up with friends and acquaintances in the local tech community that I hadn't seen for a while, and that's always fun. I probably should have tried to hit a few of the parties Thursday evening for the hallway track. Unfortunately, I was so wrecked from Wednesday's drive and a very early wake-up call to get checked in to the conf that I was absolutely exhausted Thursday night. Had dinner and just could not keep my eyes open, ended up in bed by 10:30. On the plus side, I was wide awake for checkout, breakfast, and an 8:30 Friday morning session I really wanted to see.

## Attending Sessions, Day One

Like just about everyone else, I'm thinking a lot these days about how AI will potentially impact our field. Typing's never been the bottleneck, but what happens when the typing part is easy? There's going to be a lot more emphasis, I think, on architectural and systems thinking. With that in mind, the majority of sessions I attended related to AI or architecture... including some of the ones that didn't say they were either. Let's recap them quick!

### Create multi-platform apps with .NET MAUI and the MAUI Community Toolkit - Alvin Ashcraft

Good overview session on MAUI, which I've tinkered with a bit but haven't tried to build anything really substantial in. The introduction to the community toolkit and the associated sample app was helpful and I may come back to experiment with this again later on. I was not aware of the [.NET Meteor](https://marketplace.visualstudio.com/items?itemName=nromanov.dotnet-meteor) extension for VS Code, which enables debugging and deployment of MAUI and Avalonia apps to emulators and devices.

### Modularizing a 10-Year Monolith: The Architecture, The People, and the Pain - Victor Lyuboslavsky

This was a fantastic communication and team dynamics talk hidden inside an architecture talk. I appreciated that he was up front about his team's initial failures in modularizing their monolithic codebase - it wasn't all sunshine and puppies. He had great points on how architecture is for people - and when an architecture fails, it's often because you didn't have the team's buy-in. If you don't have that, it won't be maintained. There were also great points about over-use of DRY: within a module, shared code is convenient re-use; outside of it, it's undesirable coupling. Roughly paraphrased, they learned "this shared package solved a lot of problems by creating new ones" and that 100% tracks with my own experiences.

### Agents & Arbiters - An Adventurer's Guide to Multi-Agent Collaboration with LangGraph.js - Guy Royse

This was a good overview of LangGraph with an engaging hook related to the old Zork text-based games. Guy's a good presenter, and the various agent usage patterns he demonstrated were useful since I haven't delved too much into building agents yet. My reservation was unrelated to the presentation, but to LangGraph itself. Specifically: it feels like this is too complicated for something that, at heart, is "send JSON to API, get a response back." However - after Matt Eland's talk on Friday afternoon, I think I need to reconsider that viewpoint.

He discussed some agent patterns which I think will be useful when I start getting into that on future projects.

### The Fewer Environments the Better - Cory House

Cory's one of my favorite speakers and his talks always challenge your preconceptions and make you think. This year, his argument is we usually have too many long-lived environments and we should try to eliminate as many of them that aren't named "production" as we can get away with. Dev? That's what your laptop is for, and you should be able to run your environment entirely locally, including the database. QA? Why not just have ephemeral auto-deployed feature branches so other people can validate the change? Staging? Don't need it if you actually do continuous deployment. Prod? Okay, I guess you need that one. But you _should_ go ahead and decouple your deployment from your releases by using feature flags.

In short, his argument is having a bunch of long-lived environments around encourages bad practices like batching up work before releasing it, which makes releases riskier and harder to validate. Worse, the higher risks make it more likely that you'll start adding in more validation, more approvals, maybe even a change advisory board to approve deployment requests. Essentially, his argument is to shift "who makes the deployment call" as far left toward the team as possible. Though, he also acknowledges that industries like insurance and finance are more heavily regulated, and maybe in those you'll end up needing more environments.

### Prompts to Patterns - Why Architecture Still Matters When AI Writes the Code - Scott Preston

This was a good discussion of the patterns for keeping AI tools on the rails as you build features, and what the risks are of not doing so. He opened with a really interesting discussion of [a study on the effects of goal-setting in sports](https://www.tandfonline.com/doi/pdf/10.1080/1750984X.2022.2116723), which found that process-oriented goals were approximately 14x improved over mean versus outcome-related goals. Essentially, outcomes are a distraction; focus on the process you need to get to that outcome, and trust the process.

This led to an interesting discussion of a client project where they had an explicit goal of using AI. He picked up the first story card, spent about 20 minutes prompting it, and got an awesome outcome to demo in all of 20 minutes. However, it did not survive first contact with the pull request process because the AI went totally off the rails to focus on the outcome, rather than on the process and architecture that the organization standardized on. This ended up taking _five additional days_ to actually get merged in, and he discussed how he worked with the AI to keep it on the rails and not overwhelm it with so many rules that the output degraded.

## Attending Sessions, Day Two

Checked out, car packed and moved to conference center parking, and caffeinated myself - I was back in the sessions at 8:30 sharp, much better rested and more alert than I'd been the day before.

### Beyond Prompts: Unlocking the Transformational Side of AI - Andrew Potozniak

I was looking forward to this one - Andrew and I hang out in the same Discord group and have chatted a bit, but we hadn't met face to face. He's talked (and streamed) quite a bit about vibe coding, so I was curious to hear his take on it... which turned out to be pretty nuanced. A lot of people view "vibe coding" as "just accept everything and don't look at the code" and in his view, that is _chaos_ coding - don't do that.

My biggest takeaways here: he referred to the "3 Vs of AI Coding": validate, validate, and validate. Specifically, validate your inputs (system prompts, prompts), validate context (especially after compression), and validate the outputs. On the latter, the key question: before accepting an answer, ask if you're willing to own it as if it were my own words or work. In his view, vibe coding is not chaos coding; it's a loop of requirements/outcomes/why where you code, test, validate, and iterate as needed.

He also touched on something I've already been doing, for the most part. You have to remember that the AI is not human, but also treat it as a partner. If you just treat it as an "insert tokens, get response" machine and provide only minimal context, you leave a lot of value on the table. Give it context, give it the whys, and remember that it will start to reflect back what you're putting into it.

### Beyond the Basics: Designing Web APIs for Long Term Success - Jeff Valore

This was a _great_ talk - it was in the programming principles track, but I'd say it was 100% an architecture talk. Not only was it not language specific, he pointed out that various frameworks like Rails have unique ways to handle errors. If you can tell which framework someone is using just by how it returns errors, that's... not great (you really want to make it more generic). I enjoyed this talk since I usually come into projects where the APIs already existing and I'm maintaining them - there's a bunch of things I might not have considered because I so rarely build a new API from scratch. If I had to list only two takeaways, they would be "your API should always return an object, not an array" (makes it easier to put new data in the response) and "always version your API, ideally from day one."

### Decision Records: Understanding Why Those Decisions Were Made - Sarah "Sadukie" Dutkiewicz

I was familiar with decision records generally (and ADRs in particular, although my current team doesn't use them); using them to note _significant_ decisions is a good idea. Storage location isn't something I'd given a lot of thought to; as a developer I like Markdown and I'm biased to just throwing them into the git repo. Choosing a storage option based on _who needs access to them_ makes more sense, though.

Key takeaway: "It depends" (the senior developer's/architect's/staff engineer's motto).

### Tuning Azure App Services for Peak Performance - Brian McKeiver

I attended this talk mostly out of curiosity; in my previous job about 5-6 years ago I worked with Azure App Services a lot and we had a number of performance issues with it. I was curious how much of it would be generic advice (a bit) and how much would be really Azure or .NET specific (most of it). Really clear and detailed presentation by someone who really knows his stuff.

My key takeaways: using HTTP 2 over HTTP 1.1 is the easiest performance tweak you can make, costs nothing, and has almost no risk. Make sure you're using `app.MapStaticAssets` and output caching. All of these would probably apply outside of Azure App Services, too.

### Thinking Architecturally - Nathaniel Schutta

This was a great talk with a ton of food for thought. I agreed with a lot of what he said, especially on the value of being T-shaped (deep in a few areas, broad on a bunch more), how full stack is kind of meaningless, and figuring out where the puck is going. I'm really starting to think as we move into this more AI-assisted era of development, architecture and systems thinking are going to be much more important skills in the toolbox.

Key takeaway: "It is amazing how cruel we can be to ourselves. Some of our inner monologues - if our friends talked to us that way, they wouldn't be our friends for very long."

### Dungeons & Debugging: Observability, Evaluation, and Analytics battle AI Complexity - Matt Eland

Matt is one of my favorite speakers both at CodeMash and Stir Trek, and always has fun presentations. This was the AI presentation I'd wanted the whole conference - fun and engaging, but actually getting down into the weeds a bit with advice and takeaways. I also have to admire his commitment to the bit: he spent all afternoon walking around the conference in a wizard costume.

I haven't worked with Aspire very much, so his demonstration of using it to log LLM call timing and token counts (which you could extend to token costs too) was nice to see and has me wanting to explore Aspire more. He had some great examples of working with Microsoft's Agent Framework, which I haven't - I did quite a bit with Semantic Kernel two years ago, which it seems AF has now superceded. There were also some good takeaways around limiting how many tools you give the AI, because it gets confused about which to use when - he called this the Cheesecake Factory Menu Problem. Also, using storage for persistence (LLMs suck at remembering), versioning your agents, and tagging past messages as "ideal test cases" that you can re-run your evaluations against to see how they improve over time.

As I mentioned above, I was skeptical about the value of entire libraries for managing this stuff versus just dealing with the API calls on your own, and seeing all of this put together? Super helpful, and I have some ideas for how I want to play with it later.

## Wrapping Up

CodeMash 2026 was awesome; despite the weather-induced tension in getting there, I had a great time and came away energized, looking forward to exploring some new ideas this year. I'm hoping to make it back next year for the 20th anniversary edition.

[^1]: Our school district, as does many others, _really_ hates that now.
