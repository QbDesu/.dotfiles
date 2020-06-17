export PATH="$HOME/.cargo/bin:$PATH"
export QT_QPA_PLATFORMTHEME="qt5ct"
export TERMINAL=/usr/bin/xfce4-terminal
export EDITOR=/usr/bin/vim

if [ -n "$DESKTOP_SESSION" ];then
    eval $(gnome-keyring-daemon --start)
    export SSH_AUTH_SOCK
fi
