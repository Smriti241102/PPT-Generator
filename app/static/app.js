async function downloadBlob(response, filename) {
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}

document.getElementById('go').addEventListener('click', async () => {
  const text = document.getElementById('text').value;
  const guidance = document.getElementById('guidance').value;
  const provider = document.getElementById('provider').value;
  const model = document.getElementById('model').value;
  const api_key = document.getElementById('api_key').value;
  const template = document.getElementById('template').files[0];

  if (!text || !api_key || !template) {
    alert('Please provide text, API key and a template file.');
    return;
  }

  const form = new FormData();
  form.append('text', text);
  form.append('guidance', guidance);
  form.append('provider', provider);
  form.append('model', model);
  form.append('api_key', api_key);
  form.append('template', template);

  document.getElementById('status').innerText = 'Generating... this may take 10-60s depending on your LLM.';

  try {
    const res = await fetch('/generate', { method: 'POST', body: form });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || 'Server returned an error');
    }
    // download
    await downloadBlob(res, 'generated_presentation.pptx');
    document.getElementById('status').innerText = 'Done — downloaded.';
  } catch (err) {
    console.error(err);
    document.getElementById('status').innerText = 'Error: ' + (err.message || err);
  }
});
