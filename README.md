Original Blog Post can be found at my website at [christian-rhodes.com/blog/Using_AI_To_Make_a_Mobile_Marketplace]()

-----------

In 2023, AI development and adoption is accelerating at an unprecedented rate. As a junior web developer and someone who loves tech, I keep a close eye on the space. I have already integrated ChatGPT and Github Copilot into my development workflow, but for this project I want to spend some time and effort using AI to make a great design. The primary apps to aid me with this are going to be Midjourney and Figma. 


Here is the workflow I'll be implementing to get this project done in a short time:
- Midjourney will help me come up with some design prototypes; I can find exactly what I'm looking for by authoring an effective prompt. Keywords like “stylize” or “ar” (aspect ratio) will allow me to specify the requirements. I will iterate on them by using the 'variation' or 'upscale' options as needed.
- After exporting the design prototype(s) from Midjourney, I'll bring them into a new Figma project. From here, I can recreate the design with Figma elements, like shapes, icons, colors, gradients, etc. This step is crucial when converting everything to HTML and CSS - it will allow me to copy and paste Figma elements as CSS to save time.
- I'll code the marketplace design in an editor (I'll be using VSCode) to make it interactive. AI can help here for any syntax or CSS layout help, but with a clean design in FIgma, things are pretty straightforward.
- Finally, I'll be using GSAP to add some animations. This will compliment the clean and modern aesthetic, and improve usability and feel.

## Getting the Right Design from Midjourney
Harnessing the power of Midjourney takes a bit of research and experimentation. Based on training data, some ideas and keywords may yield better results than others. This is just something in generative AI to be aware of.[^1] For me, keywords like “UI”, “UX”, “Behance Dribbble”, and “modern” were esepcially effective. After a few prompts, Here is what Midjourney produced. 
![Midjourney Prompt](https://drive.google.com/uc?export=view&id=1HUn5SMJt18m0CSYVHwSuDOz9LLDPMo9m)
![Midjourney Result](https://drive.google.com/uc?export=view&id=1er1qCHNjNi9PJyltKGrmqdWixURhh6CE)

## Bringing the Design into Figma
After pasting the design into a new Figma project, the process includes tracing shapes, using the eyedropper tool to make gradients and background colors, and overlaying text elements. Remember that any iterations or modifications are important and always available. Generating an image design is only a suggestion, or a starting point that can be perfected at various stages of this process. I am choosing to take most pieces from the design 1:1, but again, modifications are valid and welcome. Here is the result of my design in Figma (left) with the Midjourney design (right). 
![Final design](https://drive.google.com/uc?export=view&id=1OjoPfiJD6vyP6_rY5J6rsBY5-seOuum3)

### Note about a useful Figma tool
Using a plug-in called “Dreamer” can help upscale images generated within an image. I could generate a new image with Midjourney, or use a stock image, but this sort of saves a step and keeps the design 'as is'. To do this, I simply make a new shape in Figma, layer it over the image I want to upscale, and use it as a mask. Then, spin up “Dreamer” (which uses StableDiffusion - you'll need a free starter account) and check 'Use Selected Image'. This influences the new image by the existing content. Entering a text prompt can solidify this, and any desired changes can be made at this point as well. 
![Dreamer Plug In](https://drive.google.com/uc?export=view&id=17aeU0besUaUiHytrV4mkB8kP781MWmTm)

## Results
Creating the HTML and CSS was pretty straight forward. When you don't have to worry about the design, it's mostly a science to replicate it as close-as-possible. Practicing this sort of thing is helpful in advancing one's skills, speed, and confidence. I also used some GSAP to create a timeline and animate some elements in after the page loads. 
Thank you for reading! This workflow is a good introduction in how you can leverage AI to quickly prototype and even implement a web design. In the future, I want to check out Adobe's new Firefly design tool. I'd like to give a shout out to CJ Gammon for inspiring me to do this project. His YouTube channel can be found [here](https://www.youtube.com/@CJGammon), where he uses AI to make various stylish web content. 

The live code can be viewed here: 
https://christianrhodes18.github.io/mobile-market-ai/ 

Source Code:
https://github.com/christianrhodes18/mobile-market-ai 

[^1]: Remember when using “trending on Artstation” in different text-to-image apps produced much better results than not including it? Artstation, which is now owned by Epic Games, has been carefully navigating the issue of what art can or cannot be used as training data. See Artstation's FAQ on their AI Art policy [here](https://help.artstation.com/hc/en-us/articles/11451085663501-Use-of-AI-Software-on-ArtStation)
