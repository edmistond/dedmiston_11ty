---
title: "Building a new Eleventy footnotes plugin with Claude Code"
subhead: "... and now for something completely different!"
date: 2025-11-03T17:01:29-05:00
tags: [ai, claude-code, eleventy, post]
---

I've actually been writing more often lately, which is both good and bad. Good, since writing is thinking, and doing both more often helps me do them better. Bad, because I get annoyed with little things around my blog and start going on squirrel-brain distracted side quests to fix them instead of actually doing the main thing. The latest iteration of this: the footnotes on my blog.

I've been using [11ty](https://www.11ty.dev/) as my static site generator for a while now, and mostly, I'm happy with it. It's not, perhaps, quite as fast as Hugo was. On the other hand, I know JavaScript/TypeScript well enough to be comfortable with them, whereas I haven't worked with Go in years. I'm also comfortable with the default Liquid templating engine, and Go templates seem... a bit weird.

The specific annoyance: I was using `markdown-it-footnotes` which is the more or less official plugin for the markdown-it engine 11ty uses. It works _fine_, but it creates the footnote reference inline by creating a `<sup>` tag. The result is that you get a line of text that's taller than most of the other lines on the page; it looks really odd when it renders in the page. Kind of like<sup>-99</sup> this nonsense - see how the line is visibly taller?

I wanted something that would let me render them totally inline as a `<span>` instead, then style them as desired with CSS. I thought about just writing it myself, but between work, family, writing, and my ongoing HellDivers 2 addiction... ain't nobody got time for that.

I am not a foaming-at-the-mouth AI hype monster (and I try hard to avoid becoming one!), but I _am_ trying to take the Ted Lasso "curious, not judgmental" approach when it comes to AI, large language models, and AI-enabled coding. I don't want to try to use them for every bit of my coding (I think it's important to keep hands-on-keyboard to keep your skills sharp). I do want to understand what they are and aren't good at, and I'm trying to bring some of [Simon Willison's](https://simonwillison.net/) whole ["you can just ask the AI to build you stuff sometimes"](https://tools.simonwillison.net/colophon) energy to my evaluation of it.

So... LLM experimentation, small library that's annoying me with a tedious problem I don't want to put much time into fixing, in a language I know reasonably well? This seems like a tailor-made case for [Claude Code](https://claude.com/product/claude-code) - I'm using the basic $20/mo plan that mainly uses Sonnet. Let's give it a try and see how it works out.

I started out with an approach I don't typically use: I worked with the regular chatbot version of Claude to work out a spec for what I wanted, which got me this basic spec:

```markdown
I'm modernizing the markdown-it-footnote plugin to TypeScript with custom rendering.

DIRECTORY STRUCTURE:
- ./markdown-it-footnote/ - original cloned repo (source)
- ./edmistond-footnotes/ - new TypeScript project (target, currently just npm init + git)

TASK: Build a modern TypeScript version of markdown-it-footnote with custom rendering.

PHASE 1 - Core modernization and inline circular footnote markers:

1. PROJECT SETUP:
   - Modern TypeScript config (ES2022+, strict mode)
   - Build tooling (tsup recommended for simplicity)
   - ESM-only output with proper package.json exports
   - Dev dependencies: typescript, tsup, @types/markdown-it, vitest (or preferred test framework)
   - Set reasonable package name/version

2. CONVERT TO TYPESCRIPT:
   - Read ./markdown-it-footnote/index.mjs and lib/ files
   - Convert to TypeScript with full type annotations
   - Use markdown-it's type definitions properly
   - Type all renderer functions, tokens, options

3. CUSTOM RENDERING - footnote_ref rule:
   CHANGE FROM: <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>
   CHANGE TO: <a href="#fn1" id="fnref1" class="footnote-ref"><span class="footnote-marker">1</span></a>

   Key: Remove <sup> wrapper entirely, move classes to <a>, wrap number in <span>

4. KEEP ALL OTHER RENDERING UNCHANGED:
   - Footnote section at bottom (<hr> + <section class="footnotes">)
   - Backref arrows (↩)
   - All other renderer rules stay the same

5. CREATE EXAMPLE STYLING:
   - Add example.css showing circular badge design for .footnote-marker
   - Include styles that don't disrupt line-height
   - Document in README

6. TESTING:
   - Set up basic test suite
   - Test the custom footnote_ref rendering specifically
   - Ensure markdown input → expected HTML output

7. DOCUMENTATION:
   - Update README with TypeScript usage examples
   - Document the rendering changes
   - Include migration notes from original plugin

PHASE 2 PREP (foundation only, don't fully implement):
   - Add data-footnote-content attribute to each <a> tag containing the footnote's HTML content (escaped)
   - Document in README how developers can add tooltip/popup functionality later
   - This is prep work for future enhancement

Start by analyzing the original plugin structure, then build the modern version step by step.
```

I fired up [Zed](https://zed.dev) since I like its side panel UI for dealing with coding agents, and threw that entire spec verbatim into the prompt box, though I guess I could've written it as a markdown file. I was wondering if I might get some false starts or other issues, but no - it got right down to things, spent about 10 minutes churning on this, and emerged with a workable solution. It wasn't quite perfect - since I'm not currently publishing it to npm, when I installed it off GitHub, it didn't initialize correctly. A few follow-up questions resolved that and now it works like I wanted it to[^1].

I would eventually like to expand it to have a hover/press pop-up to show the footnote without needing to scroll the page, but that's a later on enhancement. I like this because it's very low risk: after generating the plugin I changed three lines of code on my blog to import and enable it, and everything else just worked. It only executes on site build, and I'm not shipping any JavaScript to my readers.

If you're interested to look at it, you can [see it on GitHub](https://github.com/edmistond/edmistond-footnotes).

[^1]: Like this.
