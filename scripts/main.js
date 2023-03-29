// Add your javascript here
$(document).ready(function(){
  $("#carouselVideoExample").carousel();
// Enable Carousel Indicators
$(".slide 1").click(function(){
  $("#carouselVideoExample").carousel(0);
});
$(".slide 2").click(function(){
  $("#carouselVideoExample").carousel(1);
});
$(".slide 3").click(function(){
  $("#carouselVideoExample").carousel(2);
});
  
// Enable Carousel Controls
$(".left").click(function(){
  $("#carouselVideoExample").carousel("prev");
});
$(".right").click(function(){
  $("#carouselVideoExample").carousel("next");
});

});
$(document).ready(function(){
  $("#project1").click(function(){
    $('#modalText').replaceWith(
      '<div class="modal-body" id="modalText"><div class="h5">European leader in the manufacture and distributions of licensed linens</div>      <p class="category"NetSuite Implementation and Integration to 6 systems</p>    <ul>    <li>Leading a large portion of system customisation and integration due to the complexity and size of the project since the standard features did not meet requirements.</li>        <li>Major challenge to modernise the financial tool of a company which has been relying on legacy systems and stakeholders resistant to change.</li>        <li>This project involved the use of NetSuite as a financial, inventory, and WMS tool integrated to a PIM (Quable), B2B B2C e-commerce platforms (Shopify, Neteven, Lengow, Generix), ShippyPro for fulfillments and printNode (hub) for printing shipping label/slip over a network. All in a chain to exploit each system’s strength.</li>     </ul></div>'      );
  });
  $("#project2").click(function(){
    $('#modalText').replaceWith('<div class="modal-body" id="modalText"><div class="h5">World leading combat sports Apparel brand</div>      <p class="category"NetSuite Implementation and Integration to 3 systems</p>    <ul>    <li>Architect role of the project to analyse and devise an efficient process map and ensure a high quality delivery of NetSuite and its integration to e-commerce sites (Shopify and Magento2) and PIM (Akeneo). Also Involved in the Sales to Service process is effort estimations, Statement of Work, and collaboration with the Project Manager to oversee the complete lifecycle of the project.</li>        <li>The analysis and Implementation of NetSuite and its integration to the different SaaS was carried out in a record timeframe of 2 months. Overcame the challenge of making a seamless ERP switch considering all other systems were already live and dealing with massive amounts of transactional data</li>          </ul></div>' );
  });
  $("#project3").click(function(){
    $('#modalText').replaceWith('<div class="modal-body" id="modalText"><div class="h5">Top 20 French luxury fragrance and fashion designer brand</div>      <p class="category"NetSuite Implementation and Integration to Shopify & C-LOG Logistics</p>    <ul>    <li>Successful Rescue Mission to replace a previous system architect due to customer dissatisfaction in the previously proposed architecture.</li>        <li>Ensured Project delivery in an unrealistic timeline due to the low availability of all stakeholders and ever changing/increase in customer requirements/processes.</li>    <li>Turning this account from a low profit to high profit customer (>50% increase) and from a mistrustful to a trustful customer (> 90% Approval Rating)</li>      </ul></div>');
  });
  $("#project4").click(function(){
    $('#modalText').replaceWith('<div class="modal-body" id="modalText"><div class="modal-body" id="modalText"><div class="h5">Asset management software provider</div>      <p class="category"NetSuite and Salesforce CPQ Implementation and their Integration to 3 other systems</p>    <ul>    <li>System architect role on project consisting of implementation and deployment of NetSuite focused on project billing and Salesforce CPQ implementation over 14 subsidiaries. Along with the integration of NetSuite (ERP), Salesforce (CRM), Jira Server (PM), Tracker Datahub (BI tool), Cornerstone HR.</li>        <li>Full business system analysis to optimise and automate processes since the client required maximum automation. Achieved about 80% reduction of manual use-cases.</li>    <li>The project objective was to automate the contract management, project management, and service and software billing processes as this company.</li>      </ul></div>' );
  });
});




$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


//window.open('mailto:'+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody, '_self');