function remove(elem) {
  if (!Element.prototype.remove) {
    Element.prototype.remove = () => {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
}

let e = document.body.children[0];
e.remove(); // element is removing

// or use modern method
// e.remove();
