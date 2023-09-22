+++
title = 'How to decorate a website'
description = "Some resources to help you make your website prettier"
date = 2023-09-22T01:36:54+02:00
draft = false
+++

Making a website is not that hard nowaday depending on the tools you use. Making a pretty website, or at least a readable one is hard, especially when you have no clue about what your doing like me.

This website is not very pretty but it would be even worse without these tools I'm gonna present.

## [Fontawesome](https://fontawesome.com/)

If you visited the home page of this website (Le Salon), you may or may not have clicked on the button at the very beginning that invites you to add some decorations on the first screen so you can make yourself confortable. There is a good variation of icons and they even come with a random small animation.

I absolutely didn't design these pretty icons as I am no designer, but adding them here was ridiculously quick and easy. I only had to add one line to my header to link it to Fontawesome API to have access to their icon library. Placing icons in your website really looks like magic afterward as you only have to add class attributes to your html tags to see an icon appear in it.

To make the icon appear in my homepage, I just used some dirty but very simple javascript. I only had to store a list of string, each corresponding to an icon, and another list where the string correspond to an animation. When clicking on the button, a new node is created and get added as attribute and random string picked in each of these lists. The position is randomized by changing the style of the node.

### Et voilà ! It's just as simple as that !

Even though my usage is a niche one, adding icons can really make a page more appealing which you can have access for free with these API (you can have even more with a pro version).
