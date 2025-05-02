$(document).ready(function() {
    // Form validation and submission
    $("#contactForm").on("submit", function(e) {
      e.preventDefault();
      
      // Reset previous errors
      $(".form-control").removeClass("error");
      $(".error-message").removeClass("show");
      
      // Get form values
      const name = $("#name").val().trim();
      const email = $("#email").val().trim();
      const subject = $("#subject").val().trim();
      const message = $("#message").val().trim();
      
      // Validate fields
      let isValid = true;
      
      if (name === "") {
        $("#name").addClass("error");
        $("#nameError").addClass("show");
        isValid = false;
      }
      
      if (email === "") {
        $("#email").addClass("error");
        $("#emailError").addClass("show");
        isValid = false;
      } else if (!isValidEmail(email)) {
        $("#email").addClass("error");
        $("#emailError").text("Please enter a valid email address").addClass("show");
        isValid = false;
      }
      
      if (subject === "") {
        $("#subject").addClass("error");
        $("#subjectError").addClass("show");
        isValid = false;
      }
      
      if (message === "") {
        $("#message").addClass("error");
        $("#messageError").addClass("show");
        isValid = false;
      }
      
      // If form is valid, submit it
      if (isValid) {
        // Show loading state
        $("#submitBtn").addClass("loading");
        
        // Prepare form data for submission
        const formData = {
          name: name,
          email: email,
          subject: subject,
          message: message,
          to_email: "harshgaliyawala63@gmail.com" // Recipient email address
        };
        
        // Send email using EmailJS or similar service
        // In a real implementation, you would use an actual email service API
        // This is a simulation using setTimeout to mimic network request
        
        setTimeout(function() {
          // Email sent successfully
          $("#submitBtn").removeClass("loading");
          $("#successMessage").addClass("show");
          $("#contactForm").trigger("reset");
          
          // Hide success message after 5 seconds
          setTimeout(function() {
            $("#successMessage").removeClass("show");
          }, 5000);
          
          // In a real implementation, you would use code like this:
          /*
          emailjs.send("service_id", "template_id", formData)
            .then(function(response) {
              $("#submitBtn").removeClass("loading");
              $("#successMessage").addClass("show");
              $("#contactForm").trigger("reset");
              
              setTimeout(function() {
                $("#successMessage").removeClass("show");
              }, 5000);
            })
            .catch(function(error) {
              $("#submitBtn").removeClass("loading");
              alert("Error sending email. Please try again later.");
              console.error("Email error:", error);
            });
          */
          
        }, 1500); // Simulating network request time
      }
    });
    
    // Helper function to validate email
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: name,
        email: email,
        subject: subject,
        message: message,
        to_email: "dkjariwala53@gmail.com" // Correct recipient email
      })
      .then(function(response) {
        $("#submitBtn").removeClass("loading");
        $("#successMessage").addClass("show");
        $("#contactForm").trigger("reset");
        
        setTimeout(function() {
          $("#successMessage").removeClass("show");
        }, 5000);
      })
      .catch(function(error) {
        $("#submitBtn").removeClass("loading");
        alert("Error sending email. Please try again later.");
        console.error("Email error:", error);
      });
    
    // Real-time validation as user types
    $(".form-control").on("input", function() {
      if ($(this).val().trim() !== "") {
        $(this).removeClass("error");
        $(this).next().next(".error-message").removeClass("show");
      }
      
      // Special handling for email field
      if ($(this).attr("id") === "email" && $(this).val().trim() !== "") {
        if (!isValidEmail($(this).val().trim())) {
          $(this).addClass("error");
          $("#emailError").text("Please enter a valid email address").addClass("show");
        } else {
          $(this).removeClass("error");
          $("#emailError").removeClass("show");
        }
      }
    });
  });