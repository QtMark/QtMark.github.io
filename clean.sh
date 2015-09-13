#!/bin/sh

list="README.md clean.sh"

# This is used to blow away everything before re-exporting it all from RapidWeaver
# git will be fine, and show new files, missing files and modified files as you'd want
for i in $( ls ); do
  ! [[ "$list" =~ (^|[[:space:]])"$i"($|[[:space:]]) ]] && rm -r $i
done

