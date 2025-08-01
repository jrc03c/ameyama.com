---
title: GuidedTrack cheat sheet
tags: programming, guidedtrack, javascript, web
---

# Data

## Start and finish times

The columns `"Time Started (UTC)"` and `"Time Finished (UTC)"` capture start and finish times of users completing a GuidedTrack program. However, not all users complete programs, so think carefully about whether to use one column or the other when filtering user data by datetime!

# Events

## Page events

> **NOTE:** The events described below are undocumented and unofficial! They may change or disappear entirely without warning! If you use them for something mission-critical, then make sure you test constantly, even after your program has been published!

These events are emitted when pages start and end:

- `"guidedtrack:pageStart"`
- `"guidedtrack:pageEnd"`

To listen for them, do:

```js
$(window).on("guidedtrack:pageStart", () => {
  // ...
})

$(window).on("guidedtrack:pageEnd", () => {
  // ...
})
```

In most cases, the two events are triggered in almost immediate succession because GuidedTrack pages typically load all at once. However, there are cases in which a page may not load all at once. For example:

```
-- "guidedtrack:pageStart" is triggered here

Here's some text.

*wait: 30.seconds

Here's some more text.

*wait: 30.seconds

*question: Why?

-- "guidedtrack:pageEnd" is triggered here ~60 seconds after
-- "guidedtrack:pageStart" was triggered
```

# HTTP requests

Generally, HTTP requests are fairly straightforward. However, I recently discovered an edge case with an unusual solution.

According to Richard, the `"Content-Type": "application/json"` header is hard-coded into all requests. However, some servers expect requests to include `"multipart/form-data"` data. The solution seems to be that the data to be sent should be encoded as query string parameters, like this:

```
>> foo = "FOO!"
>> bar = "BAR!"

*service: Some Service
  *method: POST
  *path: /some/endpoint?foo={foo}&bar={bar}
  *success
    Success!
  *error
    Error!
```

Although the above worked for my specific use case (which involved calling the Mailgun API), it's not clear if all servers will respond so nicely to requests encoded as `"application/json"` when what they really want is `"multipart/form-data"`. I tried setting a `"Content-Type": "multipart/form-data"` header in the program settings, but it didn't seem to make a difference, presumably because (as Richard said) the content type is already hard-coded into the request. I need to investigate this further.

# Hacks & workarounds

## Too much recursion

When running a `*while` loop for a long time, a "too much recursion" error is occasionally thrown to the console, and the program halts. (This is odd because I'd always assumed `while` loops in any language were iterative. But maybe I'm wrong!) To work around this, insert a meaningless `*trigger`, like this:

```
>> i = 0

*while: i < 999999999
  >> i = i + 1
  *trigger: some-nonexistent-event
```

## Force a page break

```
*html
	<style>
		#countdown { visibility: hidden !important; }
	</style>

*question: {""}
	*countdown: 0.1.seconds
	*classes: hidden
```
