// var newsEntities = Array.prototype.slice.call(document.querySelectorAll('.news-entity-container'));
// newsEntities.forEach((entity, i) => {
//   console.log(entity, i);
//   entity.object3D.rotation.x = Math.PI/12 * (1 - i);
// });

AFRAME.registerComponent('toggle-detail', {
  schema: {
    target: { default: null }
  },

  init: function () {
    this.targetElement = document.querySelector(this.data.target);

    var el = this.el;

    el.addEventListener('click', () => {
      console.log(this.targetElement);
      this.targetElement.classList.toggle('detail');
    });
  }
});

// window.addEventListener('load', () => {
//   console.log('load');
//   var rows = document.querySelectorAll('.row');
//   console.log(rows);
//   Array.prototype.forEach.call(rows, (row) => {
//     console.log(row);
//     row.addEventListener('loaded', () => {
//       console.log('row loaded');
//       row.emit('');
//     });
//   });

//   var row = document.querySelector('.row');
//   row.addEventListener('loaded', () => {
//     console.log('row loaded');
//   });
// });
