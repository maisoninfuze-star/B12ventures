# B12 Ventures — GoHighLevel Automation Blueprints

Ready-to-build workflows. Each one lists the exact **Trigger**, **Actions**, and the
**copy to paste**. Build order is by payback, not by effort.

**Location:** B12 Ventures INC · Automation → Workflows → *Create workflow* → Start from scratch

**Legend**
- 🟢 = works today (email only)
- 🟡 = needs A2P approval before the SMS steps switch on (brand submitted 2026-07-25)

Merge fields used: `{{contact.first_name}}`, `{{contact.name}}`, `{{contact.email}}`,
`{{contact.phone}}`, `{{location.name}}`

---

## Prep — build these once first

**Tags** (Settings → Tags)
`lead-website` · `lead-chat` · `b2b-prospect` · `send-info` · `quote-sent`
`client-active` · `tour-delivered` · `project-complete` · `review-requested`
`review-left` · `dormant` · `do-not-contact`

**Pipeline** — you already have *Marketing Pipeline* (6 stages). Suggested stages:
`New Lead → Contacted → Quote Sent → Won → Onboarding → Delivered`

**Custom values** (Settings → Custom Values) so copy is edited in one place:
`{{custom_values.booking_link}}` · `{{custom_values.portfolio_link}}` ·
`{{custom_values.google_review_link}}` · `{{custom_values.pricing_link}}`

Set them to:
- booking_link → your calendar URL
- portfolio_link → `https://b12ventures.com/portfolio.html`
- pricing_link → `https://b12ventures.com/#pricing`
- google_review_link → your Google review short link

---

## 1. 🟢 New Lead — Instant Reply + Pipeline + Alert
**Why:** Responding in under 5 minutes is the single biggest lever on close rate.

**Trigger:** Form Submitted (contact form) — *add a second trigger:* Chat Widget opt-in

**Actions**
1. **Add tag** → `lead-website`
2. **Create opportunity** → Marketing Pipeline → stage *New Lead* → name `{{contact.name}} — Website Inquiry`
3. **Send internal notification** (Email + SMS to you) → "🔔 New lead: {{contact.name}} — {{contact.phone}} — {{contact.email}}"
4. **Send email** → to contact:

> **Subject:** {{contact.first_name}}, thanks for reaching out to B12 Ventures
>
> Hi {{contact.first_name}},
>
> Thanks for getting in touch — I've got your message and I'll reply personally within a few hours.
>
> In the meantime, here's our recent work so you can see what we build:
> {{custom_values.portfolio_link}}
>
> A quick note on how we price, since most people ask: websites are a **one-time $1,000** — no monthly fees, and you get full admin access to update anything yourself. 3D virtual tours run $300–500 depending on the space.
>
> Talk soon,
> **Inder — B12 Ventures**
> +1 (778) 802-4486 · b12ventures.com

5. **Create task** → "Call {{contact.name}}" → due in 1 hour → assigned to you

---

## 2. 🟢 B2B Prospect — Info Email + Pipeline
**Why:** You meet businesses while prospecting and need a one-tap follow-up.

**Trigger:** Contact Tag Added → `send-info`

**Actions**
1. **Create opportunity** → Marketing Pipeline → *Contacted* → `{{contact.name}} — Info Sent`
2. **Add tag** → `b2b-prospect`
3. **Send email:**

> **Subject:** {{contact.first_name}}, here's how we help businesses like yours get found
>
> Hi {{contact.first_name}},
>
> Great meeting you. Here's what B12 Ventures does, in short:
>
> **1 · 3D Virtual Tour + Instagram-ready photos — $300–500**
> We scan your space with Matterport so customers can walk through it from Google, Instagram or your website before they visit. Includes professionally edited photos.
>
> **2 · Website — $1,000 one-time**
> Custom design, mobile-ready, bilingual if you need it. **No monthly fees** — and we hand you full admin access so you can change text, photos and menus yourself, anytime.
>
> **3 · Social Media Management — custom**
> Content, posting and ads, tailored to your goals.
>
> See real examples: {{custom_values.portfolio_link}}
>
> Want me to put together a quote? Just reply, or call/text me.
>
> **Inder — B12 Ventures**
> +1 (778) 802-4486 · b12ventures.com

4. **Wait 3 days** → **If/Else:** no reply → send short nudge:
> "Hi {{contact.first_name}} — just making sure this reached you. Happy to answer any questions. Would a quick 10-minute call help?"

---

## 3. 🟢 Quote Sent — Follow-Up Sequence
**Why:** Most deals are lost to silence, not to "no."

**Trigger:** Opportunity Stage Changed → *Quote Sent* (or tag `quote-sent`)

**Actions**
1. **Wait 2 days** → Email: "Any questions on the quote?"
2. **Wait 3 days** → 🟡 SMS: "Hi {{contact.first_name}}, Inder from B12 — any questions on the quote I sent? Happy to adjust it."
3. **Wait 4 days** → Email — the value reminder:
> **Subject:** One thing worth knowing before you decide
>
> Hi {{contact.first_name}},
>
> Most agencies charge $50–200/month forever to host and edit your site. We don't. You pay once, you own it, and you get the admin login so you're never stuck waiting on us for a text change.
>
> If the timing isn't right, tell me and I'll close the file — no hard feelings.
4. **Wait 5 days** → If still no reply → move to *Lost* + add tag `dormant`

---

## 4. 🟢 Google Review Request
**Why:** You sell Google Business optimization — your own review count is the proof.

**Trigger:** Opportunity Stage → *Delivered* (or tag `project-complete`)

**Actions**
1. **Wait 2 days**
2. **Send email:**
> **Subject:** Quick favour, {{contact.first_name}}?
>
> Hi {{contact.first_name}},
>
> Really glad we got to work together. If you're happy with how it turned out, would you mind leaving a short Google review? It's the main way small agencies like ours get found.
>
> It takes about 30 seconds: {{custom_values.google_review_link}}
>
> Thanks so much — and if anything isn't quite right, reply here first and I'll fix it.
3. **Add tag** → `review-requested`
4. **Wait 5 days** → If tag `review-left` NOT present → 🟡 SMS one gentle reminder
5. Manually add `review-left` when it lands (or trigger off a review webhook)

---

## 5. 🟡 Speed-to-Lead SMS
**Trigger:** Form Submitted / Chat Widget opt-in **AND** SMS consent = Yes

**Actions**
1. **Wait 1 minute**
2. **SMS:** "Hi {{contact.first_name}}, it's Inder from B12 Ventures — thanks for reaching out! Are you looking for a website, a 3D virtual tour, or both? Reply STOP to opt out."

> Only enable after the A2P campaign is approved. Consent must come from the chat widget.

---

## 6. 🟡 Missed Call Text-Back
**Why:** A missed call is a lead walking away. This recovers a real share of them.

**Trigger:** Call Status → *No Answer* / *Missed* (inbound)

**Actions**
1. **SMS:** "Sorry we missed your call! This is B12 Ventures. What can we help you with? Reply here and we'll get right back to you. Reply STOP to opt out."
2. **Create task** → "Return call to {{contact.phone}}" → due in 30 min

---

## 7. 🟡 Appointment Confirmation + Reminders
**Trigger:** Appointment Booked

**Actions**
1. Email + SMS confirmation with date, time, address
2. **Wait until 24h before** → reminder
3. **Wait until 1h before** → "See you in an hour"
4. **If No-Show** → email with rebooking link {{custom_values.booking_link}}

*(You already have a draft "Appointment Confirmation + Reminder" workflow — extend that one.)*

---

## 8. 🟢 Won → Client Onboarding
**Trigger:** Opportunity Stage → *Won*

**Actions**
1. **Add tag** → `client-active`, remove `b2b-prospect`
2. **Send welcome email** — what happens next, what you need from them (logo, photos, copy, access)
3. **Send intake form** link
4. **Create tasks:** collect deposit · schedule capture/kickoff · create project folder
5. **Move opportunity** → *Onboarding*

---

## 9. 🟢 Virtual Tour Delivered — Asset Handoff
**Why:** Turns delivery into a marketing moment and a referral opening.

**Trigger:** Tag Added → `tour-delivered`

**Actions**
1. **Send email:**
> **Subject:** Your 3D virtual tour is live 🎉
>
> Hi {{contact.first_name}},
>
> Your Matterport tour is ready — here's your link:
> **[TOUR LINK]**
>
> Three things you can do with it right now:
> 1. **Google** — we'll attach it to your Business Profile so people can walk through before they visit
> 2. **Your website** — embed it (we'll send the snippet)
> 3. **Instagram / Facebook** — post the link; tours get far more engagement than photos
>
> Want us to handle the Google and social side too? Just say the word.
2. **Wait 7 days** → ask for the Google review (or enroll in workflow #4)

---

## 10. 🟢 Dormant Lead Reactivation
**Trigger:** Tag `dormant` **or** no activity in 60 days

**Actions**
1. **Send email:**
> **Subject:** Still thinking about it, {{contact.first_name}}?
>
> We've built a few new sites and tours since we last spoke — including some places you might know: {{custom_values.portfolio_link}}
>
> Pricing hasn't changed: $1,000 one-time for a website, no monthly fees. If you'd like to pick it up again, just reply.
2. **Wait 30 days** → repeat once → then remove from active nurture

---

## 11. 🟢 Referral Ask
**Trigger:** Tag Added → `review-left`

**Actions**
1. **Wait 3 days**
2. **Email:** "Thanks again for the review. Do you know another business owner who'd benefit from a tour or a proper website? Send them my way — I'll take good care of them and there's a thank-you in it for you."

---

## Build order

| # | Workflow | Effort | Impact |
|---|----------|--------|--------|
| 1 | New Lead — Instant Reply | 15 min | ★★★★★ |
| 2 | B2B Prospect — Info Email | 15 min | ★★★★★ |
| 4 | Google Review Request | 10 min | ★★★★★ |
| 3 | Quote Follow-Up | 20 min | ★★★★☆ |
| 8 | Won → Onboarding | 15 min | ★★★★☆ |
| 9 | Tour Delivered | 10 min | ★★★☆☆ |
| 10 | Dormant Reactivation | 10 min | ★★★☆☆ |
| 11 | Referral Ask | 5 min | ★★★☆☆ |
| 5,6,7 | SMS workflows | — | hold for A2P |

Everything stays in **Draft** until you hit Publish, so nothing sends while you review.
