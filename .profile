source $HOME/.config/shell/environment.sh

if ! [ -f $HOME/.config/user-dirs.dirs ];then
    xdg-user-dirs-update
fi
source $HOME/.config/user-dirs.dirs


if [ -n "$DESKTOP_SESSION" ];then
    eval $(gnome-keyring-daemon --start)
    export SSH_AUTH_SOCK
fi
