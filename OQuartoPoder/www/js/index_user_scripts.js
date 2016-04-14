/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
    $(document).on("click", "#entrarinicio", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#escolherCidade"); 
    });
     
     $(document).on("click", "#registrarinicio", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#escolherCidade"); 
    });
     
        /* button  Button */
    $(document).on("click", "#escolhercidade", function(evt)
    {
         /*global activate_page */
         activate_page("#menuprincipal"); 
    });
    
        /* button  #btnrepresentantes */
    $(document).on("click", "#btnrepresentantes", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#conhecaseusrepresentantes"); 
    });
    
        /* button  #btnacompanhe */
    $(document).on("click", "#btnacompanhe", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#acompanheosprojetos"); 
    });
    
        /* button  #btndenuncie */
    $(document).on("click", "#btndenuncie", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#denuncieja"); 
    });
    
        /* button  Quem Fiscaliza */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#quemfiscaliza"); 
    });
    
        /* button  #menulateral */
    $(document).on("click", "#menulateral", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_8"));  
    });
    
        /* button  #fecharmenulateral */
    $(document).on("click", "#fecharmenulateral", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_8"));  
    });
    
        /* button  #btnmenulinicio */
    $(document).on("click", "#btnmenulinicio", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_97_9"); 
    });
    
         $(document).on("click", "#btn_menu_voltar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_97_9"); 
    });
     
     
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
