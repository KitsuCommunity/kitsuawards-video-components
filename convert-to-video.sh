#!/bin/bash

create_video () {
  ffmpeg -i '%06d.png' -r 30 -c:v libvpx-vp9 -pix_fmt yuva420p _$1.webm
}

main () {
  cd ./output/$1
  create_video $1
  cd ../..
}

main $1