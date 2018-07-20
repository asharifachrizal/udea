(function(){
		
    // Don't go any further down the script if [data-notification] is not set.
    if (!document.body.dataset.notification)
        return false;
    
    var type = document.body.dataset.notificationType;
    var opts = {
        title: "Over here",
        text: JSON.parse(document.body.dataset.notificationMessage)
    };
    switch (type) {
        case 'error':
        opts.title = "Terjadi Kesalahan!";
        opts.icon = "icofont icofont-close-circled",
        opts.addclass = "stack-bottom-right bg-danger";
        opts.delay = 2000;
        break;

        case 'info':
        opts.title = "Info";
        opts.icon = "icofont icofont-info-circle",
        opts.addclass = "stack-bottom-right bg-info";
        opts.delay = 2000;
        break;

        case 'success':
        opts.title = "Sukses";
        opts.icon = "icofont icofont-check-circled",
        opts.addclass = "stack-bottom-right bg-primary";
        opts.delay = 2000;
        break;
    }
    new PNotify(opts);
})();

$('#pcoded').pcodedmenu({ 
    themelayout: 'vertical', 
    verticalMenuplacement: 'left', 
    verticalMenulayout: 'wide', 
    MenuTrigger: 'click', 
    SubMenuTrigger: 'click', 
    activeMenuClass: 'active', 
    ThemeBackgroundPattern: 'theme1', 
    HeaderBackground: 'theme6', 
    LHeaderBackground: 'theme6', 
    NavbarBackground: 'themelight1', 
    ActiveItemBackground: 'theme6', 
    freamtype: 'theme6', 
    SubItemBorder: false, 
    DropDownIconStyle: 'style1', 
    menutype: 'st2', 
    layouttype: 'light', 
    FixedNavbarPosition: true, 
    FixedHeaderPosition: true, 
    collapseVerticalLeftHeader: true, 
    VerticalSubMenuItemIconStyle: 'style3', 
    VerticalNavigationView: 'view1', 
    verticalMenueffect: { 
    desktop: 'shrink', 
    tablet: 'overlay', 
    phone: 'overlay', 
    }, 
    defaultVerticalMenu: { 
    desktop: 'expanded', 
    tablet: 'offcanvas', 
    phone: 'offcanvas', 
    }, 
    onToggleVerticalMenu: { 
    desktop: 'collapsed', 
    tablet: 'expanded', 
    phone: 'expanded', 
    }, 
});

// $('#calendar').fullCalendar({
//     // aspectRatio: 10
// });