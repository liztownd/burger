document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    };

    const changeDevourBtn = document.querySelectorAll('.change-devour');

    if (changeDevourBtn) {
        changeDevourBtn.forEach((button) => {
          button.addEventListener('click', (e) => {
            console.log('test');
            // Grabs the id of the element that goes by the name, "id"
            const id = e.target.getAttribute('data-id');
            const newDevour = e.target.getAttribute('data-devour');
    
            const newDevourObj = {
              devoured: newDevour,
            };
    
            fetch(`/api/burgers/${id}`, {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
    
              // make sure to serialize the JSON body
              body: JSON.stringify(newDevourObj),
            }).then((response) => {
              // Check that the response is all good
              // Reload the page so the user can see the new quote
              if (response.ok) {
                location.reload('/');
              } else {
                alert('something went wrong!');
              }
            });
          });
        });
      }
    

    //   const addBtn = document.getElementById('create-form');

    //   if (addBtn) {
    //     addBtn.addEventListener('submit', (e) => {
    //       e.preventDefault();
    
    //       // Grabs the value of the textarea that goes by the name, "quote"
    //       const newBurger = {
    //         name: document.getElementById('bur').value.trim(),
    //       };
    //       console.log(newBurger);

    //       // Send POST request to create a new quote
    //       fetch('/api/burgers', {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    
    //         // make sure to serialize the JSON body
    //         body: JSON.stringify(newBurger),
    //       }).then(() => {
    //         // Empty the form
    //         document.getElementById(bur).value = '';
    
    //         // Reload the page so the user can see the new quote
    //         console.log('Added a new burger!');
    //         location.reload();
    //       });
    //     });
    //   }
    




});  //content load