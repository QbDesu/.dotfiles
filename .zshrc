#######################
# modified voc .zshrc #
#######################

source $HOME/.config/shell/aliases.sh

HOSTNAME=`hostname`
HOSTANDSUBDOMAIN="$(hostname | cut -f 1-2 -d .)"

zstyle ':completion:*' completer _complete
zstyle ':completion:*' insert-unambiguous true
zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Z}'
zstyle ':completion:*' menu select=0
zstyle ':completion:*' original true
zstyle ':completion:*:processes' command 'ps fxo pid,user,cmd'
zstyle ':completion:*' use-compctl true
zstyle ':completion:*' use-cache on
zstyle ':completion:*' cache-path ~/.zsh/cache
# Menu for KILL
zstyle ':completion:*:*:kill:*' menu yes select
zstyle ':completion:*:kill:*' force-list always
# Colors on completion me-ow
zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#)*=0=01;31'

autoload -Uz compinit
compinit

# History configuration
HISTFILE=~/.zsh/zshhist
HISTSIZE=9000
SAVEHIST=900000000

if [ ! -d ~/.zsh ]; then
  mkdir ~/.zsh
fi

# General options
setopt autocd beep nomatch notify extendedglob histignorespace
unsetopt appendhistory

# bash-style comment syntax
setopt interactivecomments

WORDCHARS='*?_-.[]~=&;!#$%^(){}'

# Load color variables
autoload colors zsh/terminfo

if [[ "$terminfo[colors]" -ge 8 ]]; then
 colors
fi

# Register terminal color variables for easy use
for color in RED GREEN YELLOW BLUE MAGENTA CYAN WHITE BLACK; do
  eval FG_$color='%{$terminfo[bold]$fg[${(L)color}]%}'
  eval FG_LIGHT_$color='%{$fg[${(L)color}]%}'
  eval BG_$color='%{$bg[${(L)color}]%}'
done

FG_NO_COLOR="%{$terminfo[sgr0]%}"

# If connected via ssh, display prompt in different color
if test -n "$SSH_CONNECTION"; then
  export PROMPT="$BG_RED${FG_LIGHT_WHITE}%n@${HOSTANDSUBDOMAIN}$BG_BLACK:${FG_LIGHT_MAGENTA}%~${FG_LIGHT_GREEN}\$${FG_NO_COLOR} "
  export RPROMPT="$BG_RED${FG_LIGHT_WHITE}20%D %*${FG_NO_COLOR}"
else
  export PROMPT="${FG_LIGHT_GREEN}%n${FG_LIGHT_MAGENTA}@${FG_LIGHT_GREEN}${HOSTANDSUBDOMAIN}${FG_LIGHT_CYAN}:${FG_LIGHT_MAGENTA}%~${FG_LIGHT_YELLOW}\$${FG_NO_COLOR} "
  export RPROMPT='20%D %*'
fi

# Set colors for coreutils
if [ `uname` = 'Linux' ]; then
  eval "`dircolors -b`"
fi

# Colors in manpages
export LESS_TERMCAP_mb=$'\E[01;31m'
export LESS_TERMCAP_md=$'\E[01;31m'
export LESS_TERMCAP_me=$'\E[0m'
export LESS_TERMCAP_se=$'\E[0m'
export LESS_TERMCAP_so=$'\E[01;44;33m'
export LESS_TERMCAP_ue=$'\E[0m'
export LESS_TERMCAP_us=$'\E[01;32m'

# Key binding scheme
bindkey -e

# Bind special keys for xterm


case $TERM in
  (xterm*)
    bindkey '\eOH' beginning-of-line
    bindkey '\eOF' end-of-line
    bindkey '\e[3~' delete-char
    bindkey '\e[2~' overwrite-mode
    bindkey '\e[3;3~' delete-word
    bindkey "^[[1;5C" forward-word
    bindkey "^[[1;5D" backward-word    
    ;;

  *)
    bindkey "^[[3~" delete-char
    ;;
esac

# Aliases
alias ry='ruby'

alias sv='sudo service'
alias rh='rehash'
alias g='gem'

alias r="rscreen"
alias update="sudo aptitude update && sudo aptitude upgrade"
alias irb="pry"

# Glob aliases
alias -g G='| grep'
alias -g L='| less'
alias -g H='--help'
alias -g V='--version'

# Register special directories
hash -d doc=/usr/share/doc  # Usage: cd ~doc

# go-command to jump to directories via shortcuts
typeset -A shortcut_dirs
shortcut_dirs=(
 doc /usr/share/doc
 loc /usr/local
 init /etc/init.d
)

function go() {
 builtin cd ${shortcut_dirs[$1]}
}

