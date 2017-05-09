/**
 * LUNA - Responsive Admin Theme
 *
 */



$(document).ready(function () {


    $("#myModal_protected").find("a").on('click', function(event){
        
    });

    $('a[data-protected=true]').on('click', function(event){
        $("#myModal_protected").find("a").attr('href',$(this).attr('href'));
        $("#myModal_protected").modal('show');
        return false;
    });
    
    $('form[data-protected=true]').on('submit', function(event){
        if( $(this).attr( 'data-protected' ) == false ) return true;
    
        var current_uniq_id = "protected" + Math.floor((Math.random() * 99999) + 1);
        $( this ).attr( 'data-uniqid', current_uniq_id );
        $("#myModal_protected").attr( 'data-uniqid', current_uniq_id );
        
        $("#myModal_protected").find("a").on('click',function(){
          $("form[data-uniqid]").removeAttr( 'data-protected', false );
          $("form[data-uniqid]").submit();
          $("form[data-uniqid]").removeAttr( 'data-protected', true );
          $("*[data-uniqid]").removeAttr( 'data-uniqid' );
        });
        
        $('#myModal_protected').on('hidden.bs.modal', function (e) {
          $("*[data-uniqid]").removeAttr( 'data-uniqid' );
        });
        
        $("#myModal_protected").modal('show');
        return false;
    });



    // Handle minimalize left menu
    $('.left-nav-toggle a').on('click', function(event){
        event.preventDefault();
        $("body").toggleClass("nav-toggle");
    });


    // Hide all open sub nav menu list
    $('.nav-second').on('show.bs.collapse', function () {
        $('.nav-second.in').collapse('hide');
    })

    // Handle panel toggle
    $('.panel-toggle').on('click', function(event){
        event.preventDefault();
        var hpanel = $(event.target).closest('div.panel');
        var icon = $(event.target).closest('i');
        var body = hpanel.find('div.panel-body');
        var footer = hpanel.find('div.panel-footer');
        body.slideToggle(300);
        footer.slideToggle(200);

        // Toggle icon from up to down
        icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        hpanel.toggleClass('').toggleClass('panel-collapse');
        setTimeout(function () {
            hpanel.resize();
            hpanel.find('[id^=map-]').resize();
        }, 50);
    });

    // Handle panel close
    $('.panel-close').on('click', function(event){
        event.preventDefault();
        var hpanel = $(event.target).closest('div.panel');
        hpanel.remove();
    });
});