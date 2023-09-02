
const Form = () => {
    function getFormData(form) {
      var elements = form.elements;
      var honeypot;

      var fields = Object.keys(elements).filter(function(k) {
        if (elements[k].name === "honeypot") {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      }).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

      var formData = {};
      fields.forEach(function(name){
        var element = elements[name];
        
        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSendEmail
        = form.dataset.email || ""; // no email by default

      return {data: formData, honeypot: honeypot};
    }
    function changeFormMessage(msg) {
      var div_msg = document.querySelector('.form_message')
      div_msg.classList.remove("invisible") 
      div_msg.innerHTML = '<h2>' + msg + '</h2>'
    }

    function handleFormSubmit(event) {  // handles form submit without any jquery
      event.preventDefault();           // we are submitting via xhr below
      var form = document.getElementById('contactForm')
      //var form = event.target;
      //console.log(form)
      var formData = getFormData(form);
      var data = formData.data;

      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        return false;
      }
      changeFormMessage('Sending message...')

      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            form.reset();
            var formElements = form.querySelector(".form-elements")
            if (formElements) {
              formElements.style.display = "none"; // hide form
            }
            changeFormMessage('<em>Thanks</em> for contacting me! I will get back to you soon!')
          }
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
    }
    
    function loaded() {
      // bind to the submit event of our form
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
    return (
      <div className="bg-dimWhite rounded-xl shadow-lg p-8">
        <form id="contactForm" action="https://script.google.com/macros/s/AKfycbxvh9KlpjPH8ga5Kbo7ofcOR8s5ORsqfHpIp9TcsEiJTqos-zYyvTi22iGLLVu7Xju_hQ/exec" 
        method="POST" data_email="a20153023@pucp.edu.pe" className="gform flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="text-sm">Your Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" className="ring-1 ring-gray-300 mt-2 w-full rounded-md \
            px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"/>
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" className="ring-1 ring-gray-300 mt-2 w-full rounded-md \
            px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"/>
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea id="message" name="message" placeholder="Message" rows="3" className="ring-1 ring-gray-300 mt-2 w-full rounded-md \
            px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"></textarea>
          </div>
          <button onClick={handleFormSubmit} type="button" className="inline-block self-end bg-cyan-700 active:bg-cyan-900 text-white font-bold rounded-lg px-6 py-2 \
          uppercase text-sm">
            Send Messsage
          </button>

          <div className="form_message invisible">
            <h2></h2>
          </div>
        </form>
      </div>
    )
  }
  
  export default Form