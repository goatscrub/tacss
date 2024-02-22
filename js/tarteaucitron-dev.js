if (window.location.hostname.match(/^.+\.test$/)) {
    // function p() { tarteaucitron.userInterface.openPanel() }
    // const a = tarteaucitron.userInterface.openAlert()
    // const p = tarteaucitron.userInterface.openAlert()

    window.addEventListener("tac.root_available", () => {
        tarteaucitron.parameters.EXT_narrow && tarteaucitron.userInterface.addClass("tarteaucitronAlertBig", `${tarteaucitron.parameters.EXT_narrow}`)
        // document.querySelector("#tarteaucitronAlertBig")
        // tarteaucitron.userInterface.css("tarteaucitronAlertBig", "display", "block")
        setTimeout(() => {
            tarteaucitron.userInterface.openAlert()
        }, 0);
    })
}
