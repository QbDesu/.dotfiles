export PATH="$HOME/.cargo/bin:$PATH"
export QT_QPA_PLATFORMTHEME="qt5ct"

if [ -n "$DESKTOP_SESSION" ];then
    eval $(gnome-keyring-daemon --start)
    export SSH_AUTH_SOCK
fi
