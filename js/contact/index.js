import axios from 'axios';

!(function() {
  const contact = document.getElementById('contact');

  if (contact) {

    let form = document.getElementById('contact-form');
    let inputs = document.getElementsByTagName('input');
    let state = {
      'submitting': false,
      'success': false,
      'error': false,
      'errors': {}
    }

    let setState = function(property, value) {
      state[property] = value;
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
        'message': inputs.message.value
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
          console.log(res);
          if (res.data === 'success') {
            setState( 'success', true );
          }
        })
        .catch(() => {
          setState( 'error', true );
        });
    }

    let onSubmit = function(e) {
      e.preventDefault();
      if (validate()) {
        send();
      } else {
        console.log(state.errors);
        setState( 'error', true );
      }
    }


    form.addEventListener('submit', onSubmit, false);
  }
})();
