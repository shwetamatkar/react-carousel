# A Simple React Carousel


# Overview

Please build a react carousel, without using existing plugins.


[Preview Link](https://www.loom.com/share/d0bc537eb8b146b8ba0d3cfcfb70d891)

## Requirements:
* by default display 4 elements. 
* navigation is made with next and previous buttons. 
* Next button should be disabled, if user is at the very end of the carousel. 
* Previous button should be disabled, if user is at the very beginning of carousel. 
* Clicking on next/previous buttons shows next/prev 4 carousel blocks accordingly. 

The source of carousel block is endpoint on server that return following JSON:

`
  [{
    title: "First Block",
    images: [url1, url2, url3]
  },
{
    title: “Second Block",
    images: [url7, url8]
  } 
  ,...]
`

> Display a random image for each block from the set of images.
