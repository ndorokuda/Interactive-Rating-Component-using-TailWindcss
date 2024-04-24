const App = {
  $: {
    submitBtn: document.querySelector('[data-id="submit-btn"]'),
    ratings: document.querySelectorAll('[data-id="rating"]'),
    reviewComp: document.querySelector('[data-id="review-component"]'),
    thankYouComp: document.querySelector('[data-id="thank-you-component"]'),
    selectedRating: document.querySelector('[data-id="selected-rating"]'),
  },

  init() {
    App.evtHandlers();
  },

  evtHandlers() {
    App.$.selectedRating.textContent = '';
    App.$.ratings.forEach((rating, index) => {
      rating.addEventListener('click', () => {
        App.$.selectedRating.textContent = `You have selected ${
          index + 1
        } out of 5`;
      });
    });

    App.$.submitBtn.addEventListener('click', () => {
      if (App.$.selectedRating.textContent === '') {
        return;
      } else {
        App.$.reviewComp.classList.add('hidden');
        App.$.thankYouComp.classList.remove('hidden');
        console.log(App.$.selectedRating.textContent);
      }
    });
  },
};

window.addEventListener('load', App.init());
