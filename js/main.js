var SubPageContent = {
    MAIN: "main",
    LOONEY: "looney",
    TETRAGON: "tetragon",
    NECRO: "necro",
    DOM: "dom",
    KEEN: "keen",
    KIKO: "kiko",
    ALIEN: "alien",
    PONG: "pong",
    BUSTED: "busted",
    ESCAPE: "escape"
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
        
       
        $( ".back-btn" ).click(function() {      
            $('.banner-video').each(function(){                
                var vidsrc = $(this).attr('src');                
                $(this).attr('src',''); 
                $(this).attr('src', vidsrc);
            });          
            ActivateSubpage(SubPageContent.MAIN);
        });

        $( ".back-btn"  ).mouseover(function() {
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










