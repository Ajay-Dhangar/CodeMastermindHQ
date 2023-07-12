---
id: linux-render-video-to-mp4
title: Linux Render Video To mp4
date: 2021-09-16 17:15:34
---

<!-- prettier-ignore -->
At first, I solved problem with starting of Kdenlive (video editor in linux universe) by deleting Kdenlive’s config file ($HOME/.config/kdenliverc) and restart Kdenlive...

source: <a href="https://kdenlive.org/en/troubleshooting/#:~:text=Your%20MLT%20installation%20cannot%20be%20found%20or%20Cannot%20start%20MLT%20backend&text=If%20you%20see%20an%20error,Kdenlive's%20config%20file%20(%24HOME%2F." class='external'>kdenlive.org: Troubleshooting</a>

## Render to mp4?

But then I was unable to render my video to mp4 format. Only in webm and other similar non-proprietary codecs.

## Solved

And I rendered my video manually:

```bash
melt avformat:input.webm -consumer avformat:output.mp4 acodec=aac vcodec=libx264
```

## Inserted youtube video

<iframe width="560" height="315" src="https://www.youtube.com/embed/0NbXnUtlhyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
