var SubPageContent = {
    MAIN: "main",
    TETRAGON: "tetragon",
    DOM: "dombosco",
    KEEN: "keen",
    KIKO: "kiko"
  };

var currentSubPage = SubPageContent.MAIN;

$(document).ready(function() {  
    function ConfigureClickEvent()
    {
        jQuery.each( SubPageContent, function( i, val ) {    
            console.log("val: "+val); 
            $( "#" + val ).click(function() {                
                ActivateSubpage(val);
            });

            $( "#" + val  ).mouseover(function() {
                $('html,body').css('cursor','pointer');
            }).mouseout(function() {
                $('html,body').css('cursor','default');
            });

            $( "."+val).css("display","none");    
        });   
        
       
        $( "#back-btn" ).click(function() {                
            ActivateSubpage(SubPageContent.MAIN);
        });

        $( "#back-btn"  ).mouseover(function() {
            $('html,body').css('cursor','pointer');
        }).mouseout(function() {
            $('html,body').css('cursor','default');
        });

    }

    function ActivateSubpage(subPage){
        $( "."+this.currentSubPage ).removeClass( "fadeOut" );
        $( "."+this.currentSubPage).css("display","none");    
        $( "."+this.currentSubPage ).addClass( "fadeOut" );

        console.log("Hide: "+currentSubPage);
        this.currentSubPage = subPage;
        console.log("Show: "+currentSubPage);

        $( "."+this.currentSubPage ).removeClass( "fadeOut" );
        $( "."+this.currentSubPage).css("display","flex");           
        $( "."+this.currentSubPage ).addClass( "fadeIn" );


    }

    ConfigureClickEvent();
    ActivateSubpage(SubPageContent.MAIN);
    
});










