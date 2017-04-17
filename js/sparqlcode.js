$(document).ready(function() {

    
    /* 
     *      INIT
     */

    // create Editor from textarea HTML element with default set of tools
    
    $("#editor").kendoEditor({ 
		tools: [],
        resizable: {
            content: true,
            toolbar: true
        }
    
    });
    $("#editor").numericLineTextarea();

    $("#panelbar").kendoPanelBar({
        expandMode: "single"
    });

    $("#panelbarHistory").kendoPanelBar({
        expandMode: "single"
    });

});