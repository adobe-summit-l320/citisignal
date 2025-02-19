export default function decorate(block) {
  // setup image teaser
  [...block.children].forEach((row) => {
    const pic = row.querySelector('picture');
    if (pic) {
      const picWrapper = pic.parentElement;
      if (picWrapper && picWrapper.children.length === 1) {
        // picture is only content in column
        picWrapper.classList.add('teaser-img-col');
      }
    }
    row.classList.add('wrapper');
  });
}
