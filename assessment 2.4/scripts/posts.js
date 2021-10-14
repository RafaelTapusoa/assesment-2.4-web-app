imgInp.onchange = evt => {
  const [file] = imgInp.files
  if (file) {
    post  .src = URL.createObjectURL(file)
  }
}
