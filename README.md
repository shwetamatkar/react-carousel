# Simple React Carousel

## Overview

This project is a simple React carousel built **without using React hooks**. The carousel dynamically fetches data from an API endpoint and displays a set of blocks containing images and titles.

[Preview Link](https://www.loom.com/share/d0bc537eb8b146b8ba0d3cfcfb70d891)

## Features & Requirements
- Displays **4 elements by default**.
- **Navigation buttons** for moving forward and backward.
- **Next button disabled** at the end of the carousel.
- **Previous button disabled** at the beginning of the carousel.
- Clicking **Next/Previous** buttons loads the next/previous 4 carousel blocks accordingly.

## Data Source
The carousel fetches data from a server endpoint that returns JSON in the following format:

```json
[
  {
    "title": "First Block",
    "images": ["url1", "url2", "url3"]
  },
  {
    "title": "Second Block",
    "images": ["url7", "url8"]
  },
  ...
]
```

## Display Logic
- Each block in the carousel consists of a **title** and **a random image** from its associated set of images.
- The displayed image for each block is selected randomly from the available images in the array.

## Implementation Guidelines
- The carousel must be implemented **without React hooks**.
- Ensure smooth navigation and an intuitive user experience.
- Fetch and display data efficiently while handling potential errors.

---

This project is a great exercise in working with **React class components**, managing state, and implementing efficient data handling techniques. 🚀

