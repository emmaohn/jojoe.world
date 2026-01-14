async function copyText() {
  const p = document.getElementById("text");
  try {
    await navigator.clipboard.writeText(p.textContent);
  } catch (err) {
    alert("failed to copy" + err);
  }
}