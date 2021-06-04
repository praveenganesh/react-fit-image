# react-fit-image

This module fits images of any size into a container so aesthetically. Please refer examples and use cases.

## Avoid

Move away from the tiresome ways of stretching, scaling and resizing of images to fit into a container.

<img src="https://i.ibb.co/7b62V30/Screen-Shot-2021-06-03-at-10-25-51-PM.png" width="auto" height="300px"/>

# Usage

```
<Image
  imgProps={{
    src:"path/img.png",
    alt:"profile",
    title:"profile"
  }}
  width="300px"
  height="200px"
  borderRadius="10%"
/>
```

# Props

| props        | default value / use                                | description                 |
| ------------ | -------------------------------------------------- | --------------------------- |
| imgProps     | {src="path/img.png",alt:"profile",title="profile"} | pass html props for image   |
| width        | "200px" or relative size                           | width of container          |
| height       | "200px" or relative size                           | height of container         |
| blur         | "8px"                                              | background blur value       |
| borderRadius | 0px                                                | border radius for container |

## Examples

<div style="display:flex">
<img src="https://i.ibb.co/YdwjXZM/Screen-Shot-2021-06-03-at-10-10-23-PM.png" width="auto" height="300px"/>
<img src="https://i.ibb.co/NKS5vTm/Screen-Shot-2021-06-03-at-8-31-19-PM.png" width="auto" height="300px"/>
<img src="https://i.ibb.co/qs986Km/Screen-Shot-2021-06-03-at-10-11-17-PM.png" width="auto" height="300px"/>
</div>

## Use Cases

<div style="display:flex">
<img src="https://i.ibb.co/F5Kqcrf/Screen-Shot-2021-06-03-at-10-24-22-PM.png" width="auto" height="300px"/>
<img src="https://i.ibb.co/F74K9f7/Screen-Shot-2021-06-03-at-10-23-59-PM.png" width="auto" height="300px"/>
</div>
