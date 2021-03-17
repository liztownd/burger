document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  };

  const devourBtn = document.querySelectorAll('.change-devour');

  if (devourBtn) {
    devourBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');        
        
        let devour = e.target.getAttribute('data-devour');

        let newDevour = (devour == 'true' ? true : false);

        const newDevourObj = {
          id: id,
          devoured: !newDevour
        }


        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(newDevourObj),
        }).then((response) => {
          if (response.ok) {
            location.reload();
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }


  const addBtn = document.getElementById('create-form');

  if (addBtn) {
    addBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"

      const newBurger = {
        burger_name: document.getElementById('bur').value.trim(),
      };
      //console.log(newBurger);

      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById('bur').value = '';

        // Reload the page so the user can see the new quote
        console.log('Added a new burger!');
        location.reload();
      });
    });
  };

  const deleteBtn = document.querySelectorAll('.delete');

  if (deleteBtn) {
    deleteBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        // console.log(newDevour);


        fetch(`/api/burgers/${id}`, {
          method: 'DELETE',
          // headers: {
          //   Accept: 'application/json',
          //   'Content-Type': 'application/json',
         // },

        }).then((response) => {
          if (response.ok) {
            location.reload();
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }


});  //content load