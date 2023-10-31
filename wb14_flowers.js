   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var headerMenu_dropdownToggle = document.querySelectorAll('#headerMenu .dropdown-toggle');
      headerMenu_dropdownToggle.forEach(item => 
      {
         var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
      });
      var headerMenu_dropdown = document.querySelectorAll('#headerMenu .dropdown');
      headerMenu_dropdown.forEach(item => 
      {
         item.addEventListener('shown.bs.dropdown', function(e)
         {
            e.currentTarget.classList.add('show');
         });
         item.addEventListener('hidden.bs.dropdown', function(e)
         {
            e.currentTarget.classList.remove('show');
         });
      });
   });
   
   $(document).ready(function()
   {
      $('#wb_service-text').addClass('visibility-hidden');
      $('#contact-text').addClass('visibility-hidden');
      $('#wb_flowerIcon').addClass('visibility-hidden');
      $('#wb_flowerHeading1').addClass('visibility-hidden');
      $('#wb_flowerHeading2').addClass('visibility-hidden');
      $('#wb_portfolio-image1').addClass('visibility-hidden');
      $('#wb_portfolio-image2').addClass('visibility-hidden');
      $('#wb_portfolio-image3').addClass('visibility-hidden');
      $('#wb_portfolio-image4').addClass('visibility-hidden');
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#tips']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_tips').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
      });
      function onScrollservices()
      {
         var $obj = $("#wb_services");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service-text', 'animate-fade-in-up', 0, 1000);
         }
      }
      onScrollservices();
      $(window).scroll(function(event)
      {
         onScrollservices();
      });
      $("a[href*='#gallery']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_gallery').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top }, 600, 'easeOutCirc');
      });
      function onScrollcontact()
      {
         var $obj = $("#wb_contact");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('contact-text', 'animate-fade-in-up', 0, 1000);
         }
      }
      onScrollcontact();
      $(window).scroll(function(event)
      {
         onScrollcontact();
      });
      $("a[href*='#faq']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_faq').offset().top }, 600, 'easeOutCirc');
      });
      function onScrollflowerBookmark()
      {
         var $obj = $("#wb_flowerBookmark");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_flowerIcon', 'puff-in', 0, 500);
            AnimateCss('wb_flowerHeading1', 'animate-fade-in-up', 500, 500);
            AnimateCss('wb_flowerHeading2', 'animate-fade-in-up', 1000, 500);
         }
      }
      onScrollflowerBookmark();
      $(window).scroll(function(event)
      {
         onScrollflowerBookmark();
      });
      $("#faqAccordion").accordion(
      {
         event: 'click',
         animate: 'linear',
         icons: null,
         header: 'h4',
         heightStyle: 'content'
      });
      function onScrollBookmark1()
      {
         var $obj = $("#wb_Bookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_portfolio-image1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_portfolio-image2', 'animate-fade-in-up', 500, 1000);
            AnimateCss('wb_portfolio-image3', 'animate-fade-in-up', 1000, 1000);
            AnimateCss('wb_portfolio-image4', 'animate-fade-in-up', 1500, 1000);
         }
      }
      onScrollBookmark1();
      $(window).scroll(function(event)
      {
         onScrollBookmark1();
      });
      ;
      ;
      ;
      ;
      ;
      ;
      SetClass('#portfolio-image1','initially-hidden');
      SetClass('#portfolio-image2','initially-hidden');
      ;
      ;
      ;
      SetClass('#wb_service-text','initially-hidden');
      ;
      ;
      ;
      ;
      ;
      ;
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_home,#wb_services,#wb_flowerGrid,#wb_contact').css('background-attachment', 'scroll');
      }
   $("a[data-rel^='lightbox-magnificpopup']").magnificPopup({ type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   });
