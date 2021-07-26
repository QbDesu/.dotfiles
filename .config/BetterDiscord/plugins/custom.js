for (const key in ZLibrary) {
    window['Z'+key] = ZLibrary[key];
}

window['findByName'] = function(e) {
    return ZLibrary.WebpackModules.findAll(m => {
        if (!m) return;
        if (typeof e === "string") e = e.toLowerCase();
        return Object.keys(m).some(n => n && n.toLowerCase().search(e) > -1);
    });
};

window['currentUser'] = ZLibrary.DiscordModules.UserStore.getCurrentUser();