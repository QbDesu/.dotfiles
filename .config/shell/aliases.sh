#!/bin/sh

alias s='sudo'

if [ `uname` = 'Linux' ]; then
  alias ls='ls --color=auto'
else
  alias ls='ls -G'
fi

alias l='ls -lh'
alias ll='ls -lah'
alias c='clear'
alias less='zless'

alias vipw='sudo vipw'
alias vigr='sudo vigr'
alias visudo='sudo visudo'

alias m='mosh'

alias ..1="cd .."
alias ..2="cd ../../"
alias ..3="cd ../../../"
alias ..4="cd ../../../../"
alias ..5="cd ../../../../../"
alias ..6="cd ../../../../../../"
alias ..7="cd ../../../../../../../"
alias ..8="cd ../../../../../../../../"
alias ..9="cd ../../../../../../../../../"
alias ..10="cd ../../../../../../../../../../"

alias ..="cd .."
alias ...="cd ../../"
alias ....="cd ../../../"
alias .....="cd ../../../../"
alias ......="cd ../../../../../"
alias .......="cd ../../../../../../"
alias ........="cd ../../../../../../../"
alias .........="cd ../../../../../../../../"
alias ..........="cd ../../../../../../../../../"
alias ...........="cd ../../../../../../../../../../"

if [ `command -v vim` ]; then
  alias vi="vim"
fi

alias status="git status"
alias co="git commit -a"
alias commit="co"
alias pull="git pull"
alias push="git push"
alias ssync="rsync -a -e 'ssh' --rsync-path='sudo rsync' "

alias sstart='sudo systemctl start'
alias sstop='sudo systemctl stop'
alias srestart='sudo systemctl restart'
alias sreload='sudo systemctl reload'
alias senable='sudo systemctl enable'

alias edit='i3-sensible-editor'
alias page='i3-sensible-pager'
alias chx='chmod +x'
