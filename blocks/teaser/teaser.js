export default function decorate(block) {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.classList.add('wrapper');

  // setup image teaser
  [...block.children].forEach((row) => {
    const pic = row.querySelector('picture');
    if (pic) {
      const picWrapper = pic.parentElement.parentElement;
      if (picWrapper && picWrapper.children.length === 1) {
        // picture is only content in column
        picWrapper.classList.add('teaser-img-col');
      }
    }
    wrapperDiv.append(row);
  });
  block.append(wrapperDiv);
}
