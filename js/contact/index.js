import axios from 'axios';

!(function() {

  const contact = document.getElementById('contact');

  if (contact) {
    document.addEventListener("DOMContentLoaded", function(event) {
      iFrameResize({checkOrigin: false});
    });

    let form = document.getElementById('contact-form');
    let formContainer = document.getElementById('form-container')
    let inputs = document.getElementsByTagName('input');
    let textarea = document.getElementsByTagName('textarea');
    let state = {
      'submitting': false,
      'success': false,
      'error': false,
      'errors': {}
    }

    let setState = function(property, value, callback) {
      state[property] = value;
      if (callback) {
        callback();
      }
    }

    let setErrorField = function(id, error) {
      let element = document.getElementById(id);
      element.classList.add('error');
      element.innerHTML = error;
    }

    let getModel = function() {
      let model = {
        'name': inputs.name.value,
        'email': inputs.email.value,
        'message': textarea.message.value
      }

      return model;
    }

    let errors = function(name) {
      let span = document.getElementById(name);
      span.innerHTML = state.errors[name];
    }

    let validate = function() {
      let errors = state.errors = {};
      let email = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      let valid = true;
      let model = getModel();

      ['name', 'email', 'message'].map((field) => {
        if (!model[field]) {
          errors[field] = 'is required';
          valid = false;
          setErrorField(field, errors[field]);
        } else if (model[field].length > 10000) {
          errors[field] = 'is too long';
          valid = false;
          setErrorField(field, errors[field]);
        } else {
          setErrorField(field, '');
        }
      });

      ['email'].map((field) => {
        if (!email.test(model[field])) {
          errors[field] = 'not a valid email';
          valid = false;
          setErrorField(field, errors[field]);
        } else {
          setErrorField(field, '');
        }
      });

      return valid;
    }

    let send = function() {
      let model = getModel();

      axios.post('/submit', model)
        .then((res) => {
          if (res.data === 'success') {
            setState( 'success', true );
            formContainer.classList.add('success');
          }
        })
        .catch(() => {
          setState( 'error', true );
          formContainer.classList.add('error');
        });
    }

    let onSubmit = function(e) {
      e.preventDefault();
      setState('submitting', true);
      formContainer.classList.add('submitting')
      if (validate()) {
        send();
      } else {
        setState( 'error', true );
      }
      setState('submitting', false);
      formContainer.classList.remove('submitting');
    }


    form.addEventListener('submit', onSubmit, false);
  }
})();
